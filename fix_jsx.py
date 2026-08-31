import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

find_str = '''      </motion.div>

    </div>
  </div>
    </div>
  </div>
</div>

<div className="mt-28">'''

replace_str = '''      </motion.div>

    </div>
  </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-20">
  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90 transition-all duration-300">'''

# wait, if I put the logos inside max-w-7xl they will align perfectly with the text. Let me just replace the tags.
find_str2 = '''      </motion.div>

    </div>
  </div>
    </div>
  </div>
</div>

<div className="mt-28">
<div className="flex flex-wrap items-center gap-6 opacity-90 transition-all duration-300">'''

replace_str2 = '''      </motion.div>

    </div>
  </div>

  <div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-center gap-6 opacity-90 transition-all duration-300">'''

text = text.replace(find_str2, replace_str2)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed")
