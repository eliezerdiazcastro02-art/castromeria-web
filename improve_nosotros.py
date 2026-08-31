import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Remove the "language Nuestra Misión" pill completely
pill_pattern = r'<div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full w-fit">.*?</div>'
text = re.sub(pill_pattern, '', text, flags=re.DOTALL)

# 2. Move it up a bit more (subelo un poco mas)
text = text.replace('<main className="pt-32 pb-24">', '<main className="pt-20 pb-24">')
text = text.replace('className="relative pt-8 pb-24 lg:pt-16 lg:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"', 'className="relative pt-0 pb-24 lg:pt-4 lg:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"')

# 3. Upgrade UI to Apple-Design / Castromeria Premium (The other sections)
# Change all rounded-xl and rounded-2xl to rounded-3xl for premium feel
text = text.replace('rounded-xl', 'rounded-3xl')
text = text.replace('rounded-2xl', 'rounded-3xl')

# Fix Bento Grid borders and shadows (make them look like glass/premium)
text = text.replace('bg-white border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-lg transition-shadow', 'bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500')
text = text.replace('bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden', 'bg-white border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500')

# Make the title typography more Apple-like (tracking-tight, leading-tight)
text = re.sub(r'className="font-sans text-4xl md:text-5xl text-gray-900"', r'className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"', text)
text = re.sub(r'className="font-sans text-4xl md:text-6xl text-gray-900 mb-4"', r'className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4"', text)
text = re.sub(r'className="font-sans text-4xl md:text-5xl mb-6"', r'className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6"', text)
text = re.sub(r'className="font-sans text-2xl font-bold mb-3"', r'className="text-2xl font-semibold tracking-tight text-gray-900 mb-3"', text)
text = re.sub(r'className="font-sans text-xl font-bold mb-3"', r'className="text-xl font-semibold tracking-tight text-gray-900 mb-3"', text)

# Update section 4 (Leadership) to have better spacing
text = text.replace('className="py-24 bg-gray-900 text-white px-6 md:px-12"', 'className="py-32 bg-gray-900 text-white px-6 md:px-12 rounded-[3rem] mx-4 md:mx-8 mb-24 overflow-hidden"')

# Update Timeline (2018, 2021, 2024) section text and layout
text = text.replace('className="font-sans text-2xl text-red-600 mb-2"', 'className="text-3xl font-bold text-red-500 tracking-tight mb-2"')
text = text.replace('className="font-sans text-lg font-semibold text-gray-900 mb-2"', 'className="text-xl font-medium text-gray-900 mb-2"')

# Update section 5 CTA border
text = text.replace('bg-white border border-gray-200 rounded-3xl p-12 max-w-3xl mx-auto shadow-xl flex flex-col items-center', 'bg-white border border-gray-100 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl flex flex-col items-center')

# Update paragraph typography for Apple-like readability
text = re.sub(r'className="text-gray-500 text-sm leading-relaxed"', r'className="text-gray-500 text-base leading-relaxed"', text)
text = re.sub(r'className="text-gray-500 max-w-3xl"', r'className="text-gray-500 text-lg leading-relaxed max-w-3xl"', text)
text = re.sub(r'className="font-sans text-gray-500 text-gray-400 mb-8 max-w-lg"', r'className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"', text)
text = re.sub(r'className="font-sans text-gray-500 max-w-2xl mx-auto mb-12"', r'className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto mb-12"', text)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("UI improved according to Apple Design principles")
