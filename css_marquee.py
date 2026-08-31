import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_block = '''<motion.div 
                  className="flex w-max"
                  animate={{ x: ["-33.33333%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >'''

good_block = '''<style>{
                  @keyframes marqueeRight {
                    from { transform: translateX(-33.33333%); }
                    to { transform: translateX(0%); }
                  }
                  .animate-marquee-right {
                    animation: marqueeRight 15s linear infinite;
                  }
                }</style>
                <div className="flex w-max animate-marquee-right">'''

text = text.replace(bad_block, good_block).replace('</motion.div>', '</div>')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Replaced with pure CSS marquee")
