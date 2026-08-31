import re
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()
# Find anything that is a non-ascii character inside className="..."
matches = re.findall(r'className="[^"]*[\x80-\uffff][^"]*"', text)
for m in matches:
    print(m)
