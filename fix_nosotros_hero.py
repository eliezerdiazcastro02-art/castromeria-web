import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Fix Layout spacing (Remove the huge triple padding)
# Remove the spacer completely
text = text.replace('{/* Spacer to account for fixed navbar */}\n      <div className="pt-32"></div>', '')

# Change main padding to just pt-32
text = text.replace('<main className="pt-24 pb-24">', '<main className="pt-32 pb-24">')
# Adjust section padding to be normal
text = text.replace('className="relative pt-16 pb-24 lg:pt-32 lg:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"', 'className="relative pt-8 pb-24 lg:pt-16 lg:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"')

# 2. Fix Text Translations & Encodings
replacements = {
    'Nuestra MisiA3n': 'Nuestra Misión',
    'Reinventando el futuro de la <span className="text-gradient">logA-stica</span>': 'Reinventando el futuro de la <span className="text-red-600 font-extrabold">Manufactura</span>',
    'En Castromeria, no solo movemos cajas. Orquestamos flujos de datos complejos y bienes fA-sicos para transformar cadenas de suministro en ventajas competitivas. La precisiA3n industrial se encuentra con la innovaciA3n digital.': 'En Castromeria, no solo fabricamos piezas. Materializamos diseños complejos y procesos industriales para transformar conceptos en realidades tangibles. La precisión industrial se encuentra con la innovación tecnológica.',
    'shadow-primary/20': 'shadow-red-600/20',
    'logA-stico': 'tecnológico',
    'logA-stica': 'fabricación',
    'precisiA3n': 'precisión',
    'innovaciA3n': 'innovación',
    'fA-sicos': 'físicos',
    'mAs': 'más',
    'paA-ses': 'países',
    'diseAada': 'diseñada',
    'travAcs': 'través',
    'dAccadas': 'décadas',
    'ingenierA-a': 'ingeniería',
    'rApido': 'rápido',
    'quAc': 'qué',
    'cA3mo': 'cómo',
    'cuAndo': 'cuándo',
    'dA3nde': 'dónde',
    'fA-sica': 'física',
    'analA-ticas': 'analíticas'
}

for old, new in replacements.items():
    text = text.replace(old, new)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Hero text, encodings and layout padding fixed")
