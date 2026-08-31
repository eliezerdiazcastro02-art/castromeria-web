import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

if '"use client";' not in text:
    text = '"use client";\n' + text
    
    with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added use client")
else:
    print("Already has use client")
