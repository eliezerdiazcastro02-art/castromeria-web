import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('Nuestra MisiA3n', 'Nuestra Misión')
text = text.replace('logA-stica', 'Manufactura')
text = text.replace('logA-sticas', 'industriales')
text = text.replace('logA-stico', 'industrial')
text = text.replace('logística', 'manufactura')
text = text.replace('<span className="text-gradient">', '<span className="text-red-600 font-extrabold">')

text = re.sub(r'En Castromeria, no solo movemos cajas.*?\.', 'En Castromeria, no solo fabricamos piezas. Materializamos diseños complejos y procesos industriales para transformar conceptos en realidades tangibles. La precisión industrial se encuentra con la innovación tecnológica.', text, flags=re.DOTALL)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Text translated reliably")
