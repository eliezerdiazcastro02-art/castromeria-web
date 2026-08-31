import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I need to restore the motion.div at line 102. Let's just find the exact block.
bad = '''        </motion.a>
      </div>
    </div>
  </div>
</section>'''

good = '''        </motion.a>
      </motion.div>
    </div>
  </div>
</section>'''

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Restored hero motion.div")
