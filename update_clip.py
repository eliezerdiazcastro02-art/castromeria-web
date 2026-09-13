import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"', 'clipPath: "polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0% 50%)"')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated clip path")
