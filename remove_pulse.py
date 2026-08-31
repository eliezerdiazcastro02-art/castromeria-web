import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_block = '''{/* Pulsing Red Aura around the logo */}
              <motion.div 
                className="absolute inset-[-6px] rounded-full border-[3px] border-red-500 z-0"
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(239,68,68,0.9))' }}
                animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />'''

good_block = '''{/* Static Red Ring around the logo */}
              <div className="absolute inset-[-4px] rounded-full border-[3px] border-red-300 opacity-80 z-0" />'''

if bad_block in text:
    text = text.replace(bad_block, good_block)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Made it static")
else:
    print("Could not find block")
