import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

fixes = {
    'm??xima precisi??n': 'máxima precisión',
    'tecnolog??a CNC de ??ltima generaci??n': 'tecnología CNC de última generación',
    'fabricaci??n': 'fabricación',
    'dise??o': 'diseño',
    'Dise??o': 'Diseño',
    'transform??': 'transformó',
    'ahorr??ndonos': 'ahorrándonos',
    'anal??ticas': 'analíticas',
    'dise??adas': 'diseñadas',
    'gesti??n': 'gestión',
    'T??rminos': 'Términos',
    'Pol??tica': 'Política',
    'Log??stica': 'Logística',
    'Caracter??sticas': 'Características',
    'Comercio Electr??nico': 'Comercio Electrónico',
    'Fr??o': 'Frío',
    'Sesi??n': 'Sesión',
    'M??s': 'Más',
    '?? ': '© '
}

for bad, good in fixes.items():
    content = content.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
