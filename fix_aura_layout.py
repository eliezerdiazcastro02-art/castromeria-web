import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_block = '''{/* Pulsing Red Aura around the logo */}
            <motion.div 
              className="absolute inset-[-4px] rounded-full border-[2px] border-red-500 z-10"
              style={{ filter: 'drop-shadow(0px 0px 8px rgba(239,68,68,0.8))' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* White Logo Circle (Rendered ON TOP of SVG and Aura) */}
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-20">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
            </div>'''

good_block = '''{/* White Logo Circle (Rendered ON TOP of SVG and Aura) */}
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-20">
              {/* Pulsing Red Aura around the logo */}
              <motion.div 
                className="absolute inset-[-6px] rounded-full border-[3px] border-red-500 z-0"
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(239,68,68,0.9))' }}
                animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain relative z-10" />
            </div>'''

if bad_block in text:
    text = text.replace(bad_block, good_block)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Fixed layout")
else:
    print("Could not find bad block")
