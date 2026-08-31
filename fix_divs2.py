import re
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I need to insert </div></div></div> before <div className="mt-28">
text = text.replace('  </div>\n\n  <div className="mt-28">', '    </div>\n  </div>\n</div>\n\n<div className="mt-28">')
# wait, my previous script left no closing tags. I replaced up to <div className="mt-28">.
# Let's just do a blunt replacement of <div className="mt-28">
text = text.replace('<div className="mt-28">', '    </div>\n  </div>\n</div>\n\n<div className="mt-28">')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
