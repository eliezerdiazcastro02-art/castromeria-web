import re

with open('app/nosotros/page.tsx', 'rb') as f:
    text = f.read().decode('utf-8', errors='replace')

text = re.sub(r'Ingenier[^\s]*a que', 'Ingeniería que', text)
text = re.sub(r'Dise[^\s]*ada para durar', 'Diseñada para durar', text)
text = re.sub(r'dise[^\s]*o industrial', 'diseño industrial', text)
text = re.sub(r'precisi[^\s]*n absoluta', 'precisión absoluta', text)
text = re.sub(r'visi[^\s]*n', 'visión', text)
text = re.sub(r'misi[^\s]*n', 'misión', text)
text = re.sub(r'tecnolog[^\s]*a', 'tecnología', text)

with open('app/nosotros/page.tsx', 'wb') as f:
    f.write(text.encode('utf-8'))
