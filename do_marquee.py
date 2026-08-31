import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_block = '''              {/* Logos positioned exactly on the horizontal line */}
              <div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto z-20">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
              </div>'''

new_block = '''              {/* Logos positioned exactly on the horizontal line, animated Left to Right */}
              <div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] pointer-events-auto z-20 overflow-visible w-[800px]">
                <motion.div 
                  className="flex gap-6 md:gap-8 w-max"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                  <div className="flex gap-6 md:gap-8 shrink-0 px-3 md:px-4">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:gap-8 shrink-0 px-3 md:px-4">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n+8} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                    ))}
                  </div>
                </motion.div>
              </div>'''

if old_block in text:
    text = text.replace(old_block, new_block)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Replaced with marquee")
else:
    print("Could not find block")
