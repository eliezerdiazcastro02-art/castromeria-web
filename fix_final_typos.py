import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix encoding garbage
text = re.sub(r'diseA.*?os', 'diseños', text)
text = re.sub(r'precisiA.*?n', 'precisión', text)
text = re.sub(r'innovaciA.*?n', 'innovación', text)
text = re.sub(r'tecnolA.*?gica', 'tecnológica', text)
text = re.sub(r'tecnologA.*?a', 'tecnología', text)
text = re.sub(r'lA.*?deres', 'líderes', text)
text = re.sub(r'ambiciA.*?n', 'ambición', text)
text = re.sub(r'EVOLUCIA.*?N', 'EVOLUCIÓN', text)
text = re.sub(r'FundaciA.*?n', 'Fundación', text)
text = re.sub(r'visiA.*?n', 'visión', text)
text = re.sub(r'gestiA.*?n', 'gestión', text)
text = re.sub(r'fA.*?sicos', 'físicos', text)
text = re.sub(r'fA.*?sica', 'física', text)
text = re.sub(r'analA.*?ticas', 'analíticas', text)
text = re.sub(r'dA.*?nde', 'dónde', text)
text = re.sub(r'mA.*?s', 'más', text)
text = re.sub(r'paA.*?ses', 'países', text)
text = re.sub(r'dAccadas', 'décadas', text)
text = re.sub(r'ingenierA.*?a', 'ingeniería', text)
text = re.sub(r'quAc', 'qué', text)
text = re.sub(r'cA.*?mo', 'cómo', text)
text = re.sub(r'cuA.*?ndo', 'cuándo', text)
text = re.sub(r'SAc', 'Sé', text)
text = re.sub(r'travAcs', 'través', text)
text = re.sub(r'orquestaciA.*?n', 'orquestación', text)

# Fix remaining logistics copy
text = text.replace('orquestación de la cadena de suministro', 'fabricación y procesos de manufactura industrial')
text = text.replace('digitalizar y automatizar la gestión de almacenes en mercados emergentes', 'modernizar y llevar la máxima precisión a la producción de piezas industriales')

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("All encodings and text fixed")
