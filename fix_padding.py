import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_1 = 'className="flex gap-6 md:gap-8 shrink-0 px-3 md:px-4"'
good_1 = 'className="flex gap-6 md:gap-8 shrink-0"'

text = text.replace(bad_1, good_1)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed padding")
