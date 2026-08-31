import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make the drop much deeper so it goes BELOW the right-side isometric image!
text = text.replace('d="M 0 0 L 0 80 Q 0 100 20 100 L 1200 100"', 'd="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200"')

# Shift the logos down to match the new line height (200px down from icon center)
# Logo radius is 24px (h-12 / 2). 200 - 24 = 176px.
text = text.replace('top-[76px]', 'top-[176px]')

# Add enough padding so it doesn't get clipped
text = text.replace('pb-32', 'pb-56')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Moved animation down to clear the image")
