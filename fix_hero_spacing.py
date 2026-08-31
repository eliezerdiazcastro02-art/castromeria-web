import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Current: <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-center">
# Replace with less padding and justify-start so it moves up

old_class = 'relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-center'
new_class = 'relative pt-32 pb-24 lg:pt-40 lg:pb-40 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-start'

text = text.replace(old_class, new_class)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Adjusted hero spacing")
