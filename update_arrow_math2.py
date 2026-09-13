import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('width: "60%", \n          clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)"', 'width: "62%", \n          clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)"')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated to 62%!")
