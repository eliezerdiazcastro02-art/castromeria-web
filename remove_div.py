with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '{/* Row of 8 Circular Placeholders intersected by the line */}' in line:
        if '</div>' in lines[i+1]:
            lines[i+1] = '\n'
            break

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
    
print("Removed extra div")
