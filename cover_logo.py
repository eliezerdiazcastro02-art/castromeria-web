import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

find_str = '''    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>'''

replace_str = '''    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
    {/* Franja blanca inferior para tapar el logo del video */}
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"></div>'''

text = text.replace(find_str, replace_str)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added bottom gradient cover")
