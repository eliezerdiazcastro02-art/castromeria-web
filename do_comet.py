import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Replace the Path with the Comet Trail
old_path_pattern = r'<div className="absolute left-1/2 top-1/2 w-\[1200px\] h-\[300px\] pointer-events-none z-0">.*?<svg className="w-full h-full" style={{ overflow: \'visible\' }}>.*?</svg>'

new_path_html = '''<div className="absolute left-1/2 top-1/2 w-[1200px] h-[300px] pointer-events-none z-0">
                  <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                    {/* Background Track */}
                    <path 
                      d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                      fill="none" 
                      stroke="#f87171" 
                      strokeWidth="3" 
                      strokeDasharray="8 6" 
                      opacity="0.2" 
                    />
                    
                    {/* Fading Comet Trail */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <motion.path
                        key={i}
                        d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth={i === 0 ? 4 : 3}
                        strokeLinecap="round"
                        initial={{ pathOffset: -0.1 }}
                        animate={{ pathOffset: [-0.1, 1] }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: i * 0.04
                        }}
                        style={{ 
                          pathLength: 0.04,
                          opacity: 1 - (i * 0.1),
                          filter: i === 0 ? "drop-shadow(0px 0px 8px rgba(239,68,68,0.9))" : "none"
                        }}
                      />
                    ))}
                  </svg>'''

text = re.sub(old_path_pattern, new_path_html, text, flags=re.DOTALL)

# 2. Replace the Logos with Static Logos
old_logos_pattern = r'\{/\* Logos positioned exactly.*?top=160-24=136px\) \*/\}.*?</div>\s*</div>\s*<span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>'

new_logos_html = '''{/* Logos positioned exactly on the horizontal line */}
                  <div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto">
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  </div>
                </div>
              </div>
              <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>'''

text = re.sub(old_logos_pattern, new_logos_html, text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Applied Comet and Static Logos")
