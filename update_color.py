import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Update stroke color to red-400 to match their original CSS line
text = re.sub(r'stroke="#ef4444"', 'stroke="#f87171"', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated line color")
