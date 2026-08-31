import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the H1 title
text = text.replace('<h1 className="font-sans text-4xl md:text-6xl text-gray-900">', '<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">')

# Replace the messy hero paragraph
messy_p_pattern = r'<p className="font-sans text-lg text-gray-500 max-w-xl">.*?</p>'
clean_p = '<p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-8">En Castromeria, no solo fabricamos piezas. Materializamos diseños complejos y procesos industriales para transformar conceptos en realidades tangibles. La precisión tradicional se encuentra con la innovación tecnológica de vanguardia.</p>'
text = re.sub(messy_p_pattern, clean_p, text, flags=re.DOTALL)

# Fix encoding issues in the rest of the file
replacements = {
    'A-ses': 'íses',
    'diseAos': 'diseños',
    'Acs': 'és',
    'A3n': 'ón',
    'dAccadas': 'décadas',
    'ingenierA-a': 'ingeniería',
    'rApido': 'rápido',
    'quAc': 'qué',
    'cA3mo': 'cómo',
    'cuAndo': 'cuándo',
    'dA3nde': 'dónde',
    'fA-sica': 'física',
    'fA-sicos': 'físicos',
    'analA-ticas': 'analíticas',
    'tecnolA3gica': 'tecnológica',
    'tecnologA-a': 'tecnología',
    'tecnologA-as': 'tecnologías',
    'lA-deres': 'líderes',
    'ambiciA3n': 'ambición',
    'LA EVOLUCIA"N': 'LA EVOLUCIÓN',
    'bg-white-bright': 'bg-white',
    'bg-outline-variant/30': 'bg-gray-200'
}

for old, new in replacements.items():
    text = text.replace(old, new)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Typography and encodings fixed")
