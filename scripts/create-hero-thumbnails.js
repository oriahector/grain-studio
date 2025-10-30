import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Imágenes del grid del Hero según Hero.tsx
const heroImages = [
  { source: 'circa-waste/circa5.webp', output: 'circa5.webp' },
  { source: 'general/disney2.webp', output: 'disney2.webp' },
  { source: 'tree-brothers/tree.webp', output: 'tree.webp' },
  { source: 'scandic-go/scandic1.webp', output: 'scandic1.webp' },
  { source: 'scandic-go/scandic2.webp', output: 'scandic2.webp' },
  { source: 'orna-group/orna_phone.webp', output: 'orna_phone.webp' },
];

const imagesDir = join(__dirname, '../public/images');
const heroGridDir = join(imagesDir, 'hero-grid');

async function createThumbnail(sourceFile, outputFile) {
  try {
    const inputPath = join(imagesDir, sourceFile);
    const outputPath = join(heroGridDir, outputFile);

    // Leer el archivo
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(
      `🔄 Procesando: ${sourceFile.split('/').pop()} (${metadata.width}x${metadata.height})`
    );

    // Redimensionar a máximo 800px de ancho manteniendo aspect ratio
    // El grid usa w-[180px] en mobile y w-[400px] en desktop
    // 800px es suficiente para pantallas con alta densidad de píxeles
    await image
      .resize(800, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({
        quality: 75, // Calidad más baja para thumbnails
        effort: 6,
      })
      .toFile(outputPath);

    const originalSize = readFileSync(inputPath).length;
    const newSize = readFileSync(outputPath).length;
    const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(
      `✅ ${outputFile}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${saved}% reducido)`
    );

    return { success: true, saved };
  } catch (error) {
    console.error(`❌ Error procesando ${sourceFile}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function createAllThumbnails() {
  console.log('🚀 Creando thumbnails para el Hero Grid...\n');
  console.log('📐 Resolución máxima: 800px ancho');
  console.log('🎨 Formato: WebP 75% calidad\n');

  let totalConverted = 0;
  let totalSaved = 0;

  for (const img of heroImages) {
    const result = await createThumbnail(img.source, img.output);
    if (result.success) {
      totalConverted++;
      totalSaved += parseFloat(result.saved);
    }
  }

  console.log('\n🎉 Thumbnails del Hero Grid creados!');
  console.log('📊 Resumen:');
  console.log(`   📸 Imágenes procesadas: ${totalConverted}`);
  console.log(
    `   📉 Reducción promedio: ${(totalSaved / totalConverted).toFixed(1)}%`
  );
  console.log('\n✨ Las imágenes están listas para usar!');
}

createAllThumbnails().catch(console.error);
