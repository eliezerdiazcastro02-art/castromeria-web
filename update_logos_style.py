import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Update classes for the logos
text = re.sub(r'className="h-6 object-contain"', 'className="h-7 md:h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"', text)
text = re.sub(r'className="h-7 object-contain"', 'className="h-7 md:h-8 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"', text)

# Just to ensure the container spacing is good
text = text.replace('gap-6', 'gap-8 md:gap-12 justify-center lg:justify-start')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated logo styles")
