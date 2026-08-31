with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start and end of the NEW section
new_start = -1
new_end = -1
for i, line in enumerate(lines):
    if '{/* New "Proyectos a Medida" Section */}' in line:
        new_start = i
    if new_start != -1 and '</section>' in line:
        # Check if the next line is the gray-50 section
        if i+2 < len(lines) and '<section className="py-24 bg-gray-50">' in lines[i+2]:
            new_end = i
            break

print(f"New section from {new_start} to {new_end}")

# Find the start and end of the OLD messy section
old_start = -1
old_end = -1
for i, line in enumerate(lines):
    if i > new_end and '<div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' in line:
        # Check if it has "La Precisión" inside
        if any('Castromeria' in lines[j] for j in range(i, min(i+20, len(lines)))):
            old_start = i
            break

if old_start != -1:
    # Find the end of this messy div
    for i in range(old_start, len(lines)):
        if '<section className="py-24 bg-white">' in line or 'Asana Logo' in lines[i]:
            old_end = i - 1
            break

print(f"Old section from {old_start} to {old_end}")

# If we found both, let's swap them
if new_start != -1 and old_start != -1:
    new_section_lines = lines[new_start:new_end+1]
    
    # We want to place new_section_lines where old_section_lines was, and delete old_section_lines, and delete new_section_lines from original pos
    final_lines = lines[:new_start] + lines[new_end+1:old_start] + new_section_lines + lines[old_end:]
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final_lines)
    print("Successfully rearranged!")
else:
    print("Failed to find bounds")

