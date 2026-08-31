import re
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'item[^\s]*start', 'items-start', text)
text = re.sub(r'item[^\s]*center', 'items-center', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
