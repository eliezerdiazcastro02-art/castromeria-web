import glob
import os

files = glob.glob('app/**/*.tsx', recursive=True)

for file in files:
    with open(file, 'rb') as f:
        content = f.read().decode('utf-8', errors='replace')
    
    if 'const lenis = new Lenis' in content and 'window.scrollTo(0, 0);' not in content:
        # Insert window.scrollTo(0, 0); right before const lenis = new Lenis
        content = content.replace('const lenis = new Lenis', 'window.scrollTo(0, 0);\n    const lenis = new Lenis')
        with open(file, 'wb') as f:
            f.write(content.encode('utf-8'))
        print(f"Fixed {file}")
