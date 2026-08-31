import re

with open('app/page.tsx', 'rb') as f:
    text = f.read().decode('utf-8')

# The exact block to remove:
target = """                {/* Background faint dashed line */}

                <path

                  d="M 0 0 L 0 180 Q 0 200 20 200 L 1100 200 Q 1120 200 1120 220 L 1120 800 C 1120 1100, 300 1100, 300 1200"

                  stroke="#fee2e2" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 6"

                />"""

if target in text:
    text = text.replace(target, '')
    with open('app/page.tsx', 'wb') as f:
        f.write(text.encode('utf-8'))
    print("Replaced exact string.")
else:
    # Use regex
    pattern = r'\{\/\* Background faint dashed line \*\/}[^<]*<path[^>]*strokeDasharray="6 6"[^>]*/>'
    text, n = re.subn(pattern, '', text, flags=re.DOTALL)
    with open('app/page.tsx', 'wb') as f:
        f.write(text.encode('utf-8'))
    print(f"Replaced regex, count: {n}")
