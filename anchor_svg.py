import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# First, remove the old floating SVG and logos row
text = re.sub(r'<svg className="absolute left-\[36px\].*?</svg>', '', text, flags=re.DOTALL)
text = re.sub(r'<div className="mt-32 flex justify-start lg:justify-between items-center gap-4 md:gap-8 overflow-x-auto pb-4 relative z-10 pl-24 lg:pl-32">.*?</div>\n    </div>\n  </section>', '</div>\n  </section>', text, flags=re.DOTALL)

# Now, inject the perfectly anchored one into the icon div
anchored = '''
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
              
              {/* Perfectly Anchored SVG Line and Logos */}
              <div className="absolute left-1/2 top-1/2 w-[1200px] h-[300px] pointer-events-none -z-10 hidden lg:block">
                <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                  <motion.path 
                    d="M 0 0 L 0 140 Q 0 160 20 160 L 1200 160" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    strokeDasharray="8 8" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 2, ease: "easeInOut" }} 
                  />
                </svg>
                {/* Logos positioned exactly on the horizontal line (Y=160px from icon center, radius=24px -> top=160-24=136px) */}
                <div className="absolute top-[136px] left-[100px] flex gap-10 pointer-events-auto">
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
            <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>
          </div>
'''

text = text.replace('''
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>
          </div>''', anchored)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated perfectly anchored SVG layout")
