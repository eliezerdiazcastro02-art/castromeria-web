import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = """<style>{
                  @keyframes marqueeRightMobile {"""
good = """<style>{`
                  @keyframes marqueeRightMobile {"""
text = text.replace(bad, good)

bad2 = """                  }
                }</style>"""
good2 = """                  }
                `}</style>"""
text = text.replace(bad2, good2)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed style tags again")
