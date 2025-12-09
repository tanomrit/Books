const fs = require('fs');
const path = require('path');

const booksDir = path.join(__dirname, 'books');
const coversDir = path.join(__dirname, 'covers');
const outputFile = path.join(__dirname, 'catalog.js');

// Function to find a matching cover for a book
function findCover(bookNameNoExt) {
    if (!fs.existsSync(coversDir)) return null;
    
    const coverFiles = fs.readdirSync(coversDir);
    // Try to find a file that starts with the book name (case insensitive)
    // and has an image extension
    const match = coverFiles.find(file => {
        const fileNoExt = path.parse(file).name;
        const validExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
        const ext = path.extname(file).toLowerCase();
        
        return validExts.includes(ext) && 
               fileNoExt.toLowerCase() === bookNameNoExt.toLowerCase();
    });
    
    return match ? match : null;
}

try {
    if (!fs.existsSync(booksDir)) {
        console.error("Books directory not found!");
        process.exit(1);
    }

    const files = fs.readdirSync(booksDir);
    const books = [];

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.pdf') {
            const nameNoExt = path.parse(file).name;
            const coverFile = findCover(nameNoExt);
            
            books.push({
                id: Buffer.from(nameNoExt).toString('base64'), // Simple ID
                title: nameNoExt,
                filename: file,
                cover: coverFile ? `covers/${coverFile}` : null, // Path relative to root
                category: "عام", // Default category
                addedDate: fs.statSync(path.join(booksDir, file)).mtime // For sorting
            });
        }
    });

    // Sort by Date (newest first) by default
    books.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));

    const fileContent = `const catalog = ${JSON.stringify(books, null, 2)};`;

    fs.writeFileSync(outputFile, fileContent);
    console.log(`Successfully generated catalog.js with ${books.length} books.`);

} catch (err) {
    console.error("Error generating catalog:", err);
}
