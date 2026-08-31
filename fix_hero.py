import re

with open('app/page.tsx', 'rb') as f:
    text = f.read().decode('utf-8', errors='replace')

replacements = {
    'DiseAo': 'Diseño',
    'FabricaciA3n': 'Fabricación',
    'impresiA3n': 'impresión',
    'automatizaciA3n': 'automatización',
    'Diseo': 'Diseño',
    'Impresin': 'Impresión',
    'analticas': 'analíticas',
    'transformr': 'transformar',
    'tcnicas': 'técnicas',
    'fabricacin': 'fabricación',
    'LA SOLUCIN': 'LA SOLUCIÓN',
    'misin': 'misión',
    'ms': 'más',
    'tecnologa': 'tecnología',
    'ltima': 'última',
    'generacin': 'generación',
    'rpidos': 'rápidos',
    'validacin': 'validación',
    '<div className=\"bg-gray-50 text-gray-900 font-sans antialiased\">': '<div className=\"bg-gray-50 text-gray-900 font-sans antialiased overflow-x-hidden\">',
    'DiseA±o': 'Diseño',
    'FabricaciA³n': 'Fabricación',
    'impresiA³n': 'impresión',
    'automatizaciA³n': 'automatización',
    'DiseAo': 'Diseño',
    'FabricaciAn': 'Fabricación',
    'impresiAn': 'impresión',
    'automatizaciAn': 'automatización'
}

for k, v in replacements.items():
    text = text.replace(k, v)

# Let's also use regex for any remaining replacement characters in the known words
text = re.sub(r'Dise.o', 'Diseño', text)
text = re.sub(r'Fabricaci.n', 'Fabricación', text)
text = re.sub(r'impresi.n', 'impresión', text)
text = re.sub(r'automatizaci.n', 'automatización', text)
text = re.sub(r'Impresi.n', 'Impresión', text)
text = re.sub(r'anal.ticas', 'analíticas', text)
text = re.sub(r'transform.r', 'transformar', text)
text = re.sub(r't.cnicas', 'técnicas', text)
text = re.sub(r'fabricaci.n', 'fabricación', text)
text = re.sub(r'LA SOLUCI.N', 'LA SOLUCIÓN', text)
text = re.sub(r'misi.n', 'misión', text)
text = re.sub(r'tecnolog.a', 'tecnología', text)
text = re.sub(r'.ltima', 'última', text)
text = re.sub(r'generaci.n', 'generación', text)
text = re.sub(r'r.pidos', 'rápidos', text)
text = re.sub(r'validaci.n', 'validación', text)
text = re.sub(r'la m.s alta', 'la más alta', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
