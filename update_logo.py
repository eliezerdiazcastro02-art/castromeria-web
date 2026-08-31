import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Optimove with Castromeria
content = content.replace('Optimove', 'Castromeria')
content = content.replace('OPTIMOVE', 'CASTROMERIA')
content = content.replace('optimove', 'castromeria')

# Replace SVG in Header
# The header SVG looks like: <svg className="w-6 h-6 text-red-600" ... </svg>
header_svg_pattern = r'<svg[^>]*className="w-6 h-6 text-red-600"[^>]*>.*?</svg>'
logo_img = '<img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain rounded-sm" />'
content = re.sub(header_svg_pattern, logo_img, content, count=2, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Logo and name updated.')
