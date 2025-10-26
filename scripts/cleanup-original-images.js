import { readdirSync, unlinkSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

async function cleanupOriginalImages() {
  console.log('🧹 Limpiando imágenes originales (JPG, PNG, GIF)...\n');

  let totalDeleted = 0;
  let totalSizeSaved = 0;

  for (const project of projects) {
    console.log(`📁 Procesando proyecto: ${project}`);
    const projectDir = join(imagesDir, project);

    try {
      const files = readdirSync(projectDir);
      const originalFiles = files.filter(
        (file) =>
          file.match(/\.(jpg|jpeg|png|gif)$/i) && !file.includes('.webp')
      );

      if (originalFiles.length === 0) {
        console.log(
          `   ⏭️  No hay imágenes originales para eliminar en ${project}\n`
        );
        continue;
      }

      console.log(
        `   🗑️  Eliminando ${originalFiles.length} imágenes originales`
      );

      for (const file of originalFiles) {
        const filePath = join(projectDir, file);
        const stats = statSync(filePath);
        const sizeMB = stats.size / 1024 / 1024;

        try {
          unlinkSync(filePath);
          totalDeleted++;
          totalSizeSaved += stats.size;
          console.log(`   ✅ ${file} (${sizeMB.toFixed(2)}MB)`);
        } catch (error) {
          console.error(`   ❌ Error eliminando ${file}:`, error.message);
        }
      }

      console.log(`✅ ${project} limpiado\n`);
    } catch (error) {
      console.error(`❌ Error procesando ${project}:`, error.message);
    }
  }

  // Resumen final
  const totalSizeSavedMB = totalSizeSaved / 1024 / 1024;

  console.log('🎉 Limpieza completada!');
  console.log('📊 Resumen:');
  console.log(`   🗑️  Archivos eliminados: ${totalDeleted}`);
  console.log(`   💾 Espacio liberado: ${totalSizeSavedMB.toFixed(2)}MB`);
  console.log(`   📁 Proyectos procesados: ${projects.length}`);
  console.log('\n✨ Solo quedan las imágenes WebP optimizadas!');
}

cleanupOriginalImages().catch(console.error);
