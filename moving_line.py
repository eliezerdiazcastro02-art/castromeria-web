import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Revert logos back to simple static HTML, but keeping their new centered layout
old_logos_pattern = r'<motion\.div \n                  initial="hidden".*?Logo\n                    </motion\.div>\n                  \)}\)\}\n                </motion\.div>'

static_logos = '''<div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                </div>'''

text = re.sub(old_logos_pattern, static_logos, text, flags=re.DOTALL)

# 2. Update the path to have the infinite marching ants effect
old_path_pattern = r'<motion\.path \n                    d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200"[^>]*/>'

new_path = '''<motion.path 
                    d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                    fill="none" 
                    stroke="#f87171" 
                    strokeWidth="3" 
                    strokeDasharray="8 6" 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    animate={{ strokeDashoffset: [0, -28] }}
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ 
                      opacity: { duration: 1 },
                      strokeDashoffset: { repeat: Infinity, ease: "linear", duration: 1 }
                    }} 
                    style={{ filter: "drop-shadow(0px 0px 6px rgba(248,113,113,0.5))" }}
                  />'''

text = re.sub(old_path_pattern, new_path, text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated to marching ants animation and static logos")
