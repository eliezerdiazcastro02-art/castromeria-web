import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = '''          </motion.a>
</div>
</div>

</div>
</section>'''

good = '''          </motion.a>
</div>
</motion.div>

</div>
</section>'''

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Restored CTA")
