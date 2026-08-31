import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = '''                      ))}
                    </div>
                      ))}
                    </div>
                  ))}'''

good = '''                      ))}
                    </div>
                  ))}'''

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed duplicate tags")
