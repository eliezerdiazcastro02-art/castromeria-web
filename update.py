import re

with open('app/servicios/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_span = '<span className="inline-block bg-[#202C33] text-white px-6 py-2 md:px-8 md:py-3 rounded-[2rem] mt-4 shadow-lg text-4xl md:text-6xl font-medium tracking-tight">'
new_span = '<span className="inline-block bg-[#E5252A] text-white px-4 py-0 mt-2 font-bold">'

text = text.replace(old_span, new_span)

with open('app/servicios/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
