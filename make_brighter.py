import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_block = '''{/* Static Red Ring around the logo */}
              <div className="absolute inset-[-4px] rounded-full border-[3px] border-red-300 opacity-80 z-0" />'''

good_block = '''{/* Static Red Ring around the logo */}
              <div className="absolute inset-[-4px] rounded-full border-[3px] border-red-500 z-0" />'''

if bad_block in text:
    text = text.replace(bad_block, good_block)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Made it brighter")
else:
    print("Could not find block")
