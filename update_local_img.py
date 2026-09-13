import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the broken link with the local image
text = text.replace('https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop', '/cnc.jpg')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated to use local image!")
