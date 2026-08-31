import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('pointer-events-none -z-10 hidden lg:block', 'pointer-events-none -z-10')
text = text.replace('{/* Fallback dashed line for mobile where SVG isn\'t used */}\n          <div className="lg:hidden absolute left-[44px] top-[260px] w-px h-32 border-l-2 border-dashed border-red-500 z-0"></div>', '')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Removed hidden lg:block")
