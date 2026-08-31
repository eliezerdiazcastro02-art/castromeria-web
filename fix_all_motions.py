import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# For line 87 (max-w-3xl)
text = text.replace('''      </motion.div>
    </div>
  </div>
</section>''', '''      </motion.div>
    </motion.div>
  </div>
</section>''') # wait, line 103 is for max-w-3xl, line 102 is for the buttons.
# Let's just restore from backup! I made a backup earlier.
# Or better, just restore page_temp.tsx and re-apply the changes since page_temp.tsx was created!
# That would take a long time.
