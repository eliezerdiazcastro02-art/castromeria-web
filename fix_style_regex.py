import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'<style>\{\s*@keyframes', '<style>{`\n                  @keyframes', text)
text = re.sub(r'\}\s*\}</style>', '}\n                `}</style>', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Regex fixed style tags")
