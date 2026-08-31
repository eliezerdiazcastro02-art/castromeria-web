import re
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('    </motion.div>\n    \n<div className="mt-28">', '    </motion.div>\n  </div>\n\n  <div className="mt-28">')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
