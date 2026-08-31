import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Upgrade the path animation
old_path = '''<motion.path 
                    d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                    fill="none" 
                    stroke="#f87171" 
                    strokeWidth="3" 
                    strokeDasharray="8 6" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 2, ease: "easeInOut" }} 
                  />'''

new_path = '''<motion.path 
                    d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                    fill="none" 
                    stroke="#f87171" 
                    strokeWidth="3" 
                    strokeDasharray="8 6" 
                    initial={{ pathLength: 0, opacity: 0 }} 
                    whileInView={{ pathLength: 1, opacity: 1 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ 
                      pathLength: { duration: 2.5, ease: [0.25, 1, 0.5, 1] },
                      opacity: { duration: 0.2 }
                    }} 
                    style={{ filter: "drop-shadow(0px 0px 6px rgba(248,113,113,0.5))" }}
                  />'''

text = text.replace(old_path, new_path)

# 2. Upgrade the logos container and logos to animate in sync with the line
old_logos_start = '<div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto">'
old_logos_content = '''                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  </div>'''

# Create the staggered animation version
new_logos = '''<motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.18,
                        delayChildren: 0.5
                      }
                    }
                  }}
                  className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto"
                >
                  {[1,2,3,4,5,6,7,8].map((i) => (
                    <motion.div 
                      key={i}
                      variants={{
                        hidden: { scale: 0, opacity: 0, y: 10 },
                        visible: { 
                          scale: 1, 
                          opacity: 1,
                          y: 0,
                          transition: { type: "spring", stiffness: 300, damping: 15 } 
                        }
                      }}
                      className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-md relative z-20"
                    >
                      Logo
                    </motion.div>
                  ))}
                </motion.div>'''

text = text.replace(old_logos_start + '\n' + old_logos_content, new_logos)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Upgraded to 10/10 animation")
