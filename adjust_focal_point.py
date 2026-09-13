import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('lg:object-left', 'lg:object-right')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Shifted focal point to the right!")
