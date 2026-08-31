import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update the title and add the badge
old_title_section = '''<div className="pt-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Castromeria</h2>'''

new_title_section = '''<div className="pt-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 mb-6 shadow-sm">
            Plataforma
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">La Precisión de <br/>Castromeria</h2>'''

text = text.replace(old_title_section, new_title_section)

# 2. Update the absolute logos to be centered visually. 
# In a 2-col grid, the icon is on the left. The container is ~1200px wide max.
# To center the logos, they should be pushed right by about 250px on desktop.
old_logos = 'className="absolute top-[56px] left-[60px] md:left-[100px] flex gap-8 md:gap-10 pointer-events-auto"'
new_logos = 'className="absolute top-[76px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto"'

text = text.replace(old_logos, new_logos)

# 3. Update the SVG path to drop down 80px instead of 60px to give it a bit more breathing room (76 + 24 = 100px total drop)
old_path = 'd="M 0 0 L 0 60 Q 0 80 20 80 L 1200 80"'
new_path = 'd="M 0 0 L 0 80 Q 0 100 20 100 L 1200 100"'
text = text.replace(old_path, new_path)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated section based on new screenshots")
