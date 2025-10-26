import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projects = [
  'circa-waste',
  'tree-brothers',
  'orna-group',
  'scandic-go',
  'grosso-napoletano',
  'donde-alex',
  'general',
];
const imagesDir = join(__dirname, '../public/images');

async function convertToWebP(inputPath, outputPath) {
  try {
    const stats = statSync(inputPath);
    const sizeMB = stats.size / 1024 / 1024;

    console.log(
      `🔄 Convirtiendo: ${inputPath.split('/').pop()} (${sizeMB.toFixed(2)}MB)`
    );

    await sharp(inputPath)
      .resize(1200, 800, {
        fit: 'inside',
        withoutEnlargement: true,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({
        quality: 80,
        effort: 6,
      })
      .toFile(outputPath);

    const newStats = statSync(outputPath);
    const newSizeMB = newStats.size / 1024 / 1024;
    const saved = (((stats.size - newStats.size) / stats.size) * 100).toFixed(
      1
    );

    console.log(
      `✅ ${inputPath.split('/').pop()}: ${sizeMB.toFixed(2)}MB → ${newSizeMB.toFixed(2)}MB (${saved}% reducido)`
    );

    return { success: true, saved };
  } catch (error) {
    console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function convertAll() {
  console.log('🚀 Iniciando conversión masiva a WebP...\n');
  console.log('📐 Resolución: 1200x800px');
  console.log('🎨 Formato: WebP 80% calidad\n');

  let totalConverted = 0;
  let totalSaved = 0;
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const project of projects) {
    console.log(`📁 Procesando proyecto: ${project}`);
    const projectDir = join(imagesDir, project);

    try {
      const files = readdirSync(projectDir);
      const imageFiles = files.filter(
        (file) => file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('.webp')
      );

      if (imageFiles.length === 0) {
        console.log(`   ⏭️  No hay imágenes para convertir en ${project}\n`);
        continue;
      }

      console.log(`   📸 Encontradas ${imageFiles.length} imágenes`);

      for (const file of imageFiles) {
        const inputPath = join(projectDir, file);
        const outputPath = join(
          projectDir,
          file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
        );

        const result = await convertToWebP(inputPath, outputPath);

        if (result.success) {
          totalConverted++;
          totalSaved += parseFloat(result.saved);

          const originalSize = statSync(inputPath).size;
          const newSize = statSync(outputPath).size;
          totalOriginalSize += originalSize;
          totalNewSize += newSize;
        }
      }

      console.log(`✅ ${project} completado\n`);
    } catch (error) {
      console.error(`❌ Error procesando ${project}:`, error.message);
    }
  }

  // Resumen final
  const totalSavedMB = (totalOriginalSize - totalNewSize) / 1024 / 1024;
  const averageSaved =
    totalConverted > 0 ? (totalSaved / totalConverted).toFixed(1) : 0;

  console.log('🎉 Conversión masiva completada!');
  console.log('📊 Resumen:');
  console.log(`   📸 Imágenes convertidas: ${totalConverted}`);
  console.log(`   💾 Espacio ahorrado: ${totalSavedMB.toFixed(2)}MB`);
  console.log(`   📉 Reducción promedio: ${averageSaved}%`);
  console.log(`   📁 Proyectos procesados: ${projects.length}`);
  console.log('\n✨ Todas las imágenes están listas para usar!');
}

convertAll().catch(console.error);
