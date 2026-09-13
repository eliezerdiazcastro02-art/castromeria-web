const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the import statement
    content = content.replace(/import\s+Lenis\s+from\s+['"]lenis['"];?[\r\n]*/g, '');
    
    // We need to carefully remove the useEffect that initializes Lenis.
    // It usually looks like this:
    // useEffect(() => {
    //   ... lenis stuff ...
    // }, []);
    
    // Let's find "new Lenis" and find the enclosing useEffect.
    
    // A regex to match the useEffect block containing "new Lenis"
    // This is tricky because there might be other useEffects.
    // Let's match from `// Lenis smooth scroll` (if it exists) or `useEffect(() => {` down to `}, []);` where it contains `Lenis`.
    
    const regex1 = /\s*\/\/\s*Lenis smooth scroll\s*useEffect\(\(\)\s*=>\s*\{[\s\S]*?new\s+Lenis[\s\S]*?\},?\s*\[\]\);/g;
    const regex2 = /\s*useEffect\(\(\)\s*=>\s*\{[\s\S]*?new\s+Lenis[\s\S]*?\},?\s*\[\]\);/g;
    
    content = content.replace(regex1, '');
    content = content.replace(regex2, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed: ${filePath}`);
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            if (fs.readFileSync(fullPath, 'utf8').includes('Lenis')) {
                processFile(fullPath);
            }
        }
    }
}

walkDir(path.join(__dirname, 'app'));
