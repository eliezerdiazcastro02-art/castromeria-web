const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');
content = content.replace(/DiseA.o y FabricaciA3n/g, 'Diseño y Fabricación');
content = content.replace(/impresiA3n/g, 'impresión');
content = content.replace(/mAxima/g, 'máxima');
content = content.replace(/precisiA3n/g, 'precisión');
fs.writeFileSync('app/page.tsx', content, 'utf-8');
console.log('Fixed chars');
