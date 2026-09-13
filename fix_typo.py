import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('requestínimationFrame', 'requestAnimationFrame')
content = content.replace('ípexCharts', 'ApexCharts')
content = content.replace('írrowRight', 'ArrowRight')
content = content.replace('ípp', 'App')
content = content.replace('íction', 'Action')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed A to í typos")
