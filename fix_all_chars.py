import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

replacements = {
    r'A': '¿',
    r'quAc': 'qué',
    r'producciA3n': 'producción',
    r'mAxima': 'máxima',
    r'precisiA3n': 'precisión',
    r'DiseA.o': 'Diseño',
    r'FabricaciA3n': 'Fabricación',
    r'impresiA3n': 'impresión',
    r'automatizaciA3n': 'automatización',
    r'tAccnicas': 'técnicas',
    r'diseAo': 'diseño',
    r'fabricA3': 'fabricó',
    r'mejorA3': 'mejoró',
    r'LogA-stica': 'Logística',
    r'FrA-o': 'Frío',
    r'TAcrminos': 'Términos',
    r'PolA-tica': 'Política',
    r'ElectrA3nico': 'Electrónico',
    r'MAs': 'Más',
    r'M.s': 'Más'
}

for k, v in replacements.items():
    text = re.sub(k, v, text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Text fixed")
