// Build-time image pipeline (GitHub Pages has no image optimizer).
//
// For every source in assets/images it writes:
//   public/img/<path>-<width>.avif  for each width in WIDTHS (never upscaled)
//   src/lib/image-manifest.json     intrinsic size + tiny blur placeholder
//
// Variants are keyed by a hash of the source + encoder settings (stored in
// public/img/.index.json), so they survive CI cache restores where mtimes reset.
// Keep WIDTHS in sync with images.deviceSizes in next.config.ts.
import { createHash } from 'node:crypto';
import { access, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { availableParallelism } from 'node:os';
import { dirname, join, sep } from 'node:path';
import sharp from 'sharp';

export const WIDTHS = [640, 828, 1080, 1920];
const AVIF = { quality: 55, effort: 4 };

const root = join(import.meta.dirname, '..');
const srcDir = join(root, 'assets', 'images');
const outDir = join(root, 'public', 'img');
const manifestPath = join(root, 'src', 'lib', 'image-manifest.json');
const indexPath = join(outDir, '.index.json');

const exists = (path) =>
  access(path).then(
    () => true,
    () => false
  );
const index = JSON.parse(await readFile(indexPath, 'utf8').catch(() => '{}'));

async function processImage(file) {
  const input = join(srcDir, file);
  const base = file
    .replace(/\.[^.]+$/, '')
    .split(sep)
    .join('/');
  const meta = await sharp(input).metadata();
  // Dimensions as displayed, i.e. after applying EXIF orientation
  const { width, height } = meta.autoOrient ?? meta;

  const hash = createHash('sha1')
    .update(await readFile(input))
    .update(JSON.stringify({ WIDTHS, AVIF }))
    .digest('hex');
  const outputs = WIDTHS.map((w) => [w, join(outDir, `${base}-${w}.avif`)]);
  const upToDate =
    index[file] === hash &&
    (await Promise.all(outputs.map(([, o]) => exists(o)))).every(Boolean);

  let generated = 0;
  if (!upToDate) {
    for (const [w, output] of outputs) {
      await mkdir(dirname(output), { recursive: true });
      await sharp(input)
        .rotate()
        .resize({ width: Math.min(w, width) })
        .avif(AVIF)
        .toFile(output);
      generated++;
    }
    index[file] = hash;
  }

  const blur = await sharp(input)
    .rotate()
    .resize(16)
    .webp({ quality: 40 })
    .toBuffer()
    .then((b) => `data:image/webp;base64,${b.toString('base64')}`);

  return [
    `/images/${base}${file.slice(file.lastIndexOf('.'))}`,
    { width, height, blur },
    generated,
  ];
}

const files = (await readdir(srcDir, { recursive: true }))
  .filter((f) => /\.(webp|png|jpe?g|avif)$/i.test(f))
  .sort();

// Small worker pool: sharp is CPU bound, one image per core.
const results = [];
let next = 0;
await Promise.all(
  Array.from({ length: availableParallelism() }, async () => {
    while (next < files.length) results.push(await processImage(files[next++]));
  })
);

results.sort(([a], [b]) => a.localeCompare(b));
const manifest = Object.fromEntries(results.map(([src, data]) => [src, data]));
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
await mkdir(outDir, { recursive: true });
await writeFile(indexPath, JSON.stringify(index, null, 2) + '\n');

const generated = results.reduce((n, [, , g]) => n + g, 0);
console.log(`images: ${files.length} sources, ${generated} variants generated`);
