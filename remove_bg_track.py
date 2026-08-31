import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_block = '''{/* Background Track (Solid Faint Line) */}
                <path 
                  d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                  fill="none" 
                  stroke="#f87171" 
                  strokeWidth="3" 
                  opacity="0.1" 
                />'''

if bad_block in text:
    text = text.replace(bad_block, '')
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Removed background track")
else:
    print("Could not find background track block")
