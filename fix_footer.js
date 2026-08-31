const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');
content = content.replace(/Comercio Electr.nico/g, 'Comercio Electrónico');
content = content.replace(/LogA.stica/g, 'Logística');
content = content.replace(/FrA.o/g, 'Frío');
content = content.replace(/TAcrminos/g, 'Términos');
content = content.replace(/PolA.tica/g, 'Política');
fs.writeFileSync('app/page.tsx', content, 'utf-8');
