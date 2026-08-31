import sys
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

lines[203] = '</motion.section>\n'

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
