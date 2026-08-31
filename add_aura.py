import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_logo_block = '''{/* White Logo Circle (Rendered ON TOP of SVG) */}
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-20">'''

new_logo_block = '''{/* Pulsing Red Aura around the logo */}
            <motion.div 
              className="absolute inset-[-4px] rounded-full border-[2px] border-red-500 z-10"
              style={{ filter: 'drop-shadow(0px 0px 8px rgba(239,68,68,0.8))' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* White Logo Circle (Rendered ON TOP of SVG and Aura) */}
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-20">'''

if old_logo_block in text:
    text = text.replace(old_logo_block, new_logo_block)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Aura added")
else:
    print("Could not find logo block")
