import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find exactly what's there now.
print(text[text.find('alt="Castromeria Logo" className="w-8 h-8 object-contain" />'):text.find('alt="Castromeria Logo" className="w-8 h-8 object-contain" />')+500])

