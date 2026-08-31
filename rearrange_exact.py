with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Extract the new section
new_section_match = re.search(r'  {/\* New "Proyectos a Medida" Section \*/}.*?    </section>', text, re.DOTALL)
if new_section_match:
    new_section = new_section_match.group(0)
    print("Found new section")
else:
    print("Could not find new section")

# Extract the old section
old_section_match = re.search(r'<section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">.*?</section>', text, re.DOTALL)
if old_section_match:
    old_section = old_section_match.group(0)
    print("Found old section")
else:
    print("Could not find old section")

if new_section_match and old_section_match:
    # First, replace the old section with the new section
    text = text.replace(old_section, new_section)
    
    # Then, delete the original new section from the top
    # We use a string replace but only the first occurrence!
    text = text.replace(new_section, '', 1)
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Swapped!")
