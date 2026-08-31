import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = '<h2 className="text-red-500 font-semibold tracking-widest uppercase text-xs mb-4">Castromeria</h2>'

text = text.replace(bad, '')

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Removed Castromeria text")
