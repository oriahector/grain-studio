// Reads every image under public/images and writes their intrinsic sizes,
// so next/image can reserve space (no layout shift) without a runtime optimizer.
import { readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import sharp from 'sharp';

const root = join(import.meta.dirname, '..', 'public');
const out = join(
  import.meta.dirname,
  '..',
  'src',
  'lib',
  'image-manifest.json'
);

const files = (await readdir(join(root, 'images'), { recursive: true }))
  .filter((f) => /\.(webp|png|jpe?g|avif)$/i.test(f))
  .sort();

const manifest = {};
for (const file of files) {
  const { width, height } = await sharp(join(root, 'images', file)).metadata();
  const src =
    '/' +
    relative(root, join(root, 'images', file))
      .split(sep)
      .join('/');
  manifest[src] = { width, height };
}

await writeFile(out, JSON.stringify(manifest, null, 2) + '\n');
console.log(`image-manifest: ${files.length} images`);
