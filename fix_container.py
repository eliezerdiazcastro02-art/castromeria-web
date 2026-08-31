import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = 'pointer-events-auto z-20 w-[800px] overflow-visible'
good = 'pointer-events-auto z-20 right-0 overflow-visible'

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed container width")
