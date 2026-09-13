import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)"', 'clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)"')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated arrow safety margins!")
