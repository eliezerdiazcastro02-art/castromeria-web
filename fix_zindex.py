import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('pointer-events-none -z-10', 'pointer-events-none z-0')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed z-index")
