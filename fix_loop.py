import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad_block = '''<motion.div 
                  className="flex gap-6 md:gap-8 w-max"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                  <div className="flex gap-6 md:gap-8 shrink-0">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:gap-8 shrink-0">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n+8} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                    ))}
                  </div>
                </motion.div>'''

good_block = '''<motion.div 
                  className="flex w-max"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                  <div className="flex gap-6 md:gap-8 shrink-0 pr-6 md:pr-8">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:gap-8 shrink-0 pr-6 md:pr-8">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n+8} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                    ))}
                  </div>
                </motion.div>'''

if bad_block in text:
    text = text.replace(bad_block, good_block)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Fixed marquee loop gap math")
else:
    print("Could not find block")
