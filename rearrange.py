with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Extract the NEW section I built
new_section_start = '  {/* New "Proyectos a Medida" Section */}'
new_section_end = '</section>\n\n<section className="py-24 bg-gray-50">' # wait, let's just find the exact string

import re

new_section_match = re.search(r'  {/\* New "Proyectos a Medida" Section \*/}.*?    </section>\n', text, re.DOTALL)
if new_section_match:
    new_section = new_section_match.group(0)
    # Delete it from its current position
    text = text.replace(new_section, '')
else:
    print("Could not find new section")

# 2. Find the OLD messy section and replace it with the new section
# The old messy section seems to be wrapped in <section className="py-24 bg-gray-50">?
# No, wait. Let's find exactly where "La Precisin de <br/> Castromeria" is.
# Let's just find the text around line 355.
old_messy_pattern = r'<div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">.*?<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>\s*</div>\s*</div>\s*</div>'
# This might be tricky to regex.

# Let's save the text without the new section first to inspect it
with open('app/page_temp.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Saved temp file")
