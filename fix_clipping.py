import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Change overflow-hidden to overflow-x-hidden to prevent horizontal scroll but allow vertical if needed,
# though we will fix vertical anyway.
text = text.replace('<section className="py-24 bg-white relative overflow-hidden">', '<section className="py-24 bg-white relative overflow-x-hidden">')

# Add padding bottom to the grid so the absolute logos don't get clipped
# The grid is: <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
text = text.replace('<div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">', '<div className="grid lg:grid-cols-2 gap-16 items-start relative z-10 pb-48">')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed clipping")
