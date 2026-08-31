import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

replacements = {
    r'A\\-ticas': 'íticas',
    r'diseAadas': 'diseñadas',
    r'transformA3r': 'transformar',
    r'TAccnicas': 'Técnicas',
    r'LA SOLUCIA"N': 'LA SOLUCIÓN',
    r'mAxima': 'máxima',
    r'APor quAc': '¿Por qué',
    r'producciA3n': 'producción',
    r'diseAo': 'diseño',
    r'fabricaciA3n': 'fabricación'
}

for k, v in replacements.items():
    text = re.sub(k, v, text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
