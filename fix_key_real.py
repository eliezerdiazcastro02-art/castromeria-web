import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = '<div key={${group}-} className="w-12 h-12 flex-shrink-0'
good = '<div key={`${group}-${n}`} className="w-12 h-12 flex-shrink-0'

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed key for real")
