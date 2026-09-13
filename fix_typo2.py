import os

with open('app/page.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

text = text.replace('MA\ufffdquina', 'Máquina').replace('MAquina', 'Máquina')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Typo fixed!")
