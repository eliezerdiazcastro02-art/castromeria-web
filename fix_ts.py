import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('const appleSpring = { type: "spring", bounce: 0, duration: 0.8 };', 'const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;')

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed TS error")
