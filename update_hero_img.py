import re

with open('app/page.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Replace the Unsplash URL with the new local cropped image
old_src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2500&auto=format&fit=crop"
new_src = "/hero-cnc.jpg"

if old_src in text:
    text = text.replace(old_src, new_src)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated image source to /hero-cnc.jpg")
else:
    print("Could not find the Unsplash URL in app/page.tsx")

