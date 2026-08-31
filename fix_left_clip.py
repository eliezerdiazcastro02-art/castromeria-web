import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = 'className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] pointer-events-auto z-20 right-0 overflow-visible"'
good = 'className="absolute top-[160px] pt-[16px] pb-[16px] left-[20px] md:left-[200px] lg:left-[250px] pointer-events-auto z-20 right-0 overflow-hidden"'

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Added overflow-hidden to clip left edge")
