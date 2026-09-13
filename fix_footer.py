import re

with open('components/Footer.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Fix encoding issues if they exist
text = text.replace('diseo', 'diseño').replace('fabricacin', 'fabricación').replace('precisin', 'precisión').replace('Repblica', 'República').replace('Ingeniera', 'Ingeniería').replace('Robtica', 'Robótica').replace('Mdico', 'Médico').replace('Trminos', 'Términos').replace('Poltica', 'Política').replace('Impresin', 'Impresión')

# Make sure there is no weird characters
with open('components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Footer encoding fixed")
