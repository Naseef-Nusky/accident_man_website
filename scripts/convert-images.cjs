// Simple PNG/JPG -> WebP converter for assets and public images
// Skips already-optimized images and keeps original names with .webp extension

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = process.cwd();
const targets = [
  path.join(projectRoot, 'src', 'assets'),
  path.join(projectRoot, 'public')
];

const exts = new Set(['.png', '.jpg', '.jpeg']);

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.has(ext)) return;
  const outPath = filePath.replace(ext, '.webp');
  if (fs.existsSync(outPath)) return; // already converted
  try {
    const image = sharp(filePath).rotate();
    const { width } = await image.metadata();
    const targetWidth = Math.min(width || 2000, 1600); // cap to 1600px
    await image
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outPath);
    console.log('Converted ->', path.relative(projectRoot, outPath));
  } catch (e) {
    console.warn('Skip (convert error):', filePath, e.message);
  }
}

async function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else await convertFile(full);
  }
}

(async () => {
  for (const t of targets) {
    await walk(t);
  }
  console.log('Image conversion complete.');
})();


