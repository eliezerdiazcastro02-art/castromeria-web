import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the orphan section
text = text.replace('</div>\n</div>\n</section>\n\n\n<section className="py-24 bg-gray-50">', '</div>\n</div>\n\n\n<section className="py-24 bg-gray-50">')

# Fix chars
reps = {
    r'DiseAo': 'Diseño',
    r'FabricaciA3n': 'Fabricación',
    r'impresiA3n': 'impresión',
    r'automatizaciA3n': 'automatización',
    r'mAxima': 'máxima',
    r'precisiA3n': 'precisión',
    r'APor quAc': '¿Por qué',
    r'producciA3n': 'producción',
    r'tAccnicas': 'técnicas',
    r'diseAo': 'diseño',
    r'transformA3r': 'transformar',
    r'analA-ticas': 'analíticas',
    r'diseA.adas': 'diseñadas'
}

for k, v in reps.items():
    text = re.sub(k, v, text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done")
