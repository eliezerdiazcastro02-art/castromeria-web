import sys
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()
# The </section> is on line 94, so the extra </div> is on line 93.
# Let's find it.
for i in range(70, 100):
    if '</section>' in lines[i]:
        print(f"Found </section> at {i}")
        if '</div>' in lines[i-1]:
            del lines[i-1]
            break

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
