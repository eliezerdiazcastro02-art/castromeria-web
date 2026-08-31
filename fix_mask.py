import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = 'className="absolute top-[160px] pt-[16px] pb-[16px] left-0 pointer-events-auto z-20 right-0 overflow-hidden"'
good = 'className="absolute top-[160px] pt-[16px] pb-[16px] left-0 pointer-events-auto z-20 right-0 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 150px)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 150px)" }}'

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Added gradient mask to marquee")
