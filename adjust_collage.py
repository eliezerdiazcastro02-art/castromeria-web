import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace White Triangle
text = text.replace('w-[85%] h-[80%]', 'w-[75%] h-[50%]')
# Replace Robot Triangle
text = text.replace('w-[83.5%] h-[78%]', 'w-[73.5%] h-[48%]')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Adjusted collage proportions to match mockup!")
