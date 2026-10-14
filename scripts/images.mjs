// Build-time image pipeline (GitHub Pages has no image optimizer).
//
// For every source in assets/images it writes:
//   public/img/<path>-<width>.avif  for each width in WIDTHS (never upscaled)
//   src/lib/image-manifest.json     intrinsic size + tiny blur placeholder
//
// Variants are skipped when newer than their source, so only the first run is slow.
// Keep WIDTHS in sync with images.deviceSizes in next.config.ts.
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import { availableParallelism } from 'node:os';
import { dirname, join, sep } from 'node:path';
import sharp from 'sharp';

export const WIDTHS = [640, 828, 1080, 1920];

const root = join(import.meta.dirname, '..');
const srcDir = join(root, 'assets', 'images');
const outDir = join(root, 'public', 'img');
const manifestPath = join(root, 'src', 'lib', 'image-manifest.json');

const mtime = (path) =>
  stat(path).then(
    (s) => s.mtimeMs,
    () => 0
  );

async function processImage(file) {
  const input = join(srcDir, file);
  const base = file
    .replace(/\.[^.]+$/, '')
    .split(sep)
    .join('/');
  const { width, height } = await sharp(input).metadata();
  const sourceTime = await mtime(input);

  let generated = 0;
  for (const w of WIDTHS) {
    const output = join(outDir, `${base}-${w}.avif`);
    if ((await mtime(output)) > sourceTime) continue;
    await mkdir(dirname(output), { recursive: true });
    await sharp(input)
      .rotate()
      .resize({ width: Math.min(w, width) })
      .avif({ quality: 55, effort: 4 })
      .toFile(output);
    generated++;
  }

  const blur = await sharp(input)
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

const generated = results.reduce((n, [, , g]) => n + g, 0);
console.log(`images: ${files.length} sources, ${generated} variants generated`);
