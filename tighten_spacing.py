import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Update SVG path
text = text.replace('d="M 0 0 L 0 140 Q 0 160 20 160 L 1200 160"', 'd="M 0 0 L 0 60 Q 0 80 20 80 L 1200 80"')

# Update logos position
# Old: absolute top-[136px] left-[100px] flex gap-10
# New Y: 80px - 24px (radius) = 56px
text = text.replace('className="absolute top-[136px] left-[100px] flex gap-10 pointer-events-auto"', 'className="absolute top-[56px] left-[60px] md:left-[100px] flex gap-8 md:gap-10 pointer-events-auto"')

# Adjust padding bottom of the grid, 48 is huge, pb-32 is enough
text = text.replace('pb-48', 'pb-32')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Tightened spacing")
