import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix HTML comments
text = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', text)

# Fix empty tags (img, input, hr, br)
text = re.sub(r'(<(img|input|br|hr)[^>]*?)(?<!/)>', r'\1 />', text)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("JSX syntax fixed")
