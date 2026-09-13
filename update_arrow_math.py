import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'width:\s*"60%",\s*clipPath:\s*"polygon\(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%\)"', 'width: "63%", \n          clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)"', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated arrow safety margins!")
