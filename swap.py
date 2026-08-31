with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_start = -1
new_end = -1
old_start = -1
old_end = -1

for i, line in enumerate(lines):
    if '{/* New "Proyectos a Medida" Section */}' in line:
        new_start = i
    elif new_start != -1 and new_end == -1 and '</section>' in line:
        # verify it's the end of the new section
        if i+2 < len(lines) and '<section className="py-24 bg-gray-50">' in lines[i+2]:
            new_end = i
    
    if '<section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">' in line:
        old_start = i
    elif old_start != -1 and old_end == -1 and '</section>' in line:
        old_end = i

print(new_start, new_end, old_start, old_end)

if -1 not in (new_start, new_end, old_start, old_end):
    new_section = lines[new_start:new_end+1]
    
    # We remove new section, which shifts old_start and old_end
    # final = lines[:new_start] + lines[new_end+1:old_start] + new_section + lines[old_end+1:]
    # Wait, old_start is > new_end
    
    final = lines[:new_start] + lines[new_end+1:old_start] + new_section + lines[old_end+1:]
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final)
    print("Success")
