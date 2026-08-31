import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Update stroke properties to make the dashed line thicker and more like the user's screenshot
old_svg = 'strokeWidth="2" \n                    strokeDasharray="8 8"'
new_svg = 'strokeWidth="3" \n                    strokeDasharray="8 6"'

# The file might have them on one line or multiple lines. Let's use regex.
text = re.sub(r'strokeWidth="2"', 'strokeWidth="3"', text)
text = re.sub(r'strokeDasharray="8 8"', 'strokeDasharray="8 6"', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated line thickness")
