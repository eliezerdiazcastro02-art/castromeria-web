import re

with open('components/Navbar.tsx', 'rb') as f:
    text = f.read().decode('utf-8', errors='replace')

# Add onClick to all Links that don't have it
text = re.sub(r'<Link href="([^"]+)"', r'<Link href="\1" onClick={() => window.scrollTo(0,0)}', text)

# Fix the mojibake in "Contctanos" -> "Contáctanos"
text = text.replace('Cont\ufffdctanos', 'Contáctanos')

with open('components/Navbar.tsx', 'wb') as f:
    f.write(text.encode('utf-8'))
