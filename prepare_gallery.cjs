const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Palash Images File');
const publicGalleryDir = path.join(__dirname, 'public', 'gallery');
const dataFile = path.join(__dirname, 'src', 'data', 'galleryData.json');

// Ensure target directories exist
if (!fs.existsSync(publicGalleryDir)) {
    fs.mkdirSync(publicGalleryDir, { recursive: true });
}
const dataDir = path.dirname(dataFile);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const galleryData = [];

function copyFiles() {
    const folders = fs.readdirSync(sourceDir).filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());
    
    for (const folder of folders) {
        const folderPath = path.join(sourceDir, folder);
        const files = fs.readdirSync(folderPath).filter(f => {
            const ext = path.extname(f).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        });

        if (files.length === 0) continue;

        // Clean folder name for URL
        const folderSlug = folder.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase();
        const targetFolder = path.join(publicGalleryDir, folderSlug);
        
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder, { recursive: true });
        }

        const images = [];

        for (const file of files) {
            const sourceFile = path.join(folderPath, file);
            // Clean file name
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const fileSlug = baseName.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase() + ext;
            
            const targetFile = path.join(targetFolder, fileSlug);
            
            // Copy file
            fs.copyFileSync(sourceFile, targetFile);
            
            // Add to array
            images.push(`/gallery/${folderSlug}/${fileSlug}`);
        }

        galleryData.push({
            id: folderSlug,
            title: folder,
            description: `Description for ${folder}`,
            images: images
        });
    }

    fs.writeFileSync(dataFile, JSON.stringify(galleryData, null, 2));
    console.log(`Successfully prepared ${galleryData.length} folders and saved data to src/data/galleryData.json`);
}

copyFiles();
