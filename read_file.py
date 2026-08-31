import re
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I will write the file content to a log so I can see it exactly
with open('full_page_log.txt', 'w', encoding='utf-8') as f:
    f.write(text)
print("Done")
