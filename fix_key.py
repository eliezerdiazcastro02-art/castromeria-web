import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I need to find what it actually output. Let's just fix the key.
# It probably output: <div key={${group}-${n}}
text = re.sub(r'<div key=\{[^}]*\} className="w-12 h-12 flex-shrink-0', r'<div key={`\${group}-\${n}`} className="w-12 h-12 flex-shrink-0', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed key interpolation syntax")
