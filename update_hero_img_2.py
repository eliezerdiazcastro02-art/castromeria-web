import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the local cropped image with a high-quality real Unsplash image of a CNC machine
old_src = "/hero-cnc.jpg"
new_src = "https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop"

if old_src in text:
    text = text.replace(old_src, new_src)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated image source to real high-res CNC image")
else:
    print("Could not find the local URL in app/page.tsx")

