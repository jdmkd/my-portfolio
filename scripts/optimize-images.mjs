import sharp from "sharp";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_DIRS = [
  path.resolve(__dirname, "../public"),
  path.resolve(__dirname, "../src/assets")
];
const SOURCE_DIR = path.resolve(__dirname, "../src");

// Files to exclude from optimization (e.g., manifest icons that require specific names/formats)
const EXCLUSIONS = [
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "favicon.ico",
  "site.webmanifest",
];

const optimizedFiles = [];

async function optimizeDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const items = await fs.readdir(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = await fs.stat(itemPath);

    if (stats.isDirectory()) {
      await optimizeDirectory(itemPath);
    } else if (item.match(/\.(png|jpg|jpeg)$/i) && !EXCLUSIONS.includes(item)) {
      const ext = path.extname(item);
      const outputName = item.replace(ext, ".webp");
      const outputPath = path.join(dir, outputName);

      try {
        const originalSize = stats.size;

        await sharp(itemPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);

        const newStats = await fs.stat(outputPath);
        const newSize = newStats.size;
        const saved = ((originalSize - newSize) / 1024 / 1024).toFixed(2);
        const percent = (
          ((originalSize - newSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(
          `✅ Optimized: ${item} -> ${outputName} (${saved} MB saved, -${percent}%)`,
        );

        optimizedFiles.push({ oldName: item, newName: outputName });

        // Optional: Remove original if successful
        if (process.argv.includes("--remove-original")) {
          await fs.remove(itemPath);
        }
      } catch (err) {
        console.error(`❌ Failed to optimize ${item}:`, err.message);
      }
    }
  }
}

async function updateImports(dir) {
  if (optimizedFiles.length === 0 || !fs.existsSync(dir)) return;
  
  const items = await fs.readdir(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = await fs.stat(itemPath);

    if (stats.isDirectory()) {
      await updateImports(itemPath);
    } else if (item.match(/\.(js|jsx|ts|tsx|json|css)$/i)) {
      let content = await fs.readFile(itemPath, 'utf8');
      let originalContent = content;

      for (const opt of optimizedFiles) {
        // Escape string for regex just in case
        const safeOldName = opt.oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(safeOldName, 'g');
        content = content.replace(regex, opt.newName);
      }

      if (content !== originalContent) {
        await fs.writeFile(itemPath, content, 'utf8');
        console.log(`📝 Updated imports in: ${path.relative(path.resolve(__dirname, '..'), itemPath)}`);
      }
    }
  }
}

console.log("🚀 Starting Image Optimization System...");
TARGET_DIRS.forEach(dir => console.log(`📂 Scanning: ${dir}`));

Promise.all(TARGET_DIRS.map(dir => optimizeDirectory(dir)))
  .then(() => {
    console.log("\n🔄 Updating imports in source files...");
    return updateImports(SOURCE_DIR);
  })
  .then(() => console.log("\n✨ Optimization Complete!"))
  .catch((err) => console.error("FATAL ERROR:", err));
