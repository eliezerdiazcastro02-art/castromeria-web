import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if '<div className="flex items-center gap-4 mb-8">' in line:
        start_idx = i
        break

if start_idx != -1:
    for i in range(start_idx, len(lines)):
        if '<span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>' in lines[i]:
            end_idx = i
            break

if start_idx != -1 and end_idx != -1:
    new_html = '''          <div className="flex items-center gap-4 mb-8 relative">
            {/* SVG line container moved OUTSIDE and BEHIND the logo */}
            <div className="absolute left-7 top-7 w-[1200px] h-[300px] pointer-events-none z-0">
              <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                {/* Background Track (Solid Faint Line) */}
                <path 
                  d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                  fill="none" 
                  stroke="#f87171" 
                  strokeWidth="3" 
                  opacity="0.1" 
                />
                
                {/* Multiple Comets with Random Speeds & Sizes */}
                {[
                  { duration: 3, repeatDelay: 2, length: 0.08, stagger: 0.04, baseDelay: 0 },
                  { duration: 1.5, repeatDelay: 4, length: 0.15, stagger: 0.02, baseDelay: 2 },
                  { duration: 5, repeatDelay: 1, length: 0.03, stagger: 0.08, baseDelay: 1 }
                ].map((comet, cIdx) => (
                  <g key={cIdx}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <motion.path
                        key={i}
                        d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth={i === 0 ? 4 : 3}
                        strokeLinecap="round"
                        initial={{ pathLength: comet.length, pathOffset: 0, opacity: 0 }}
                        animate={{ 
                          pathOffset: [0, 1],
                          opacity: [
                            0, 
                            1 - (i * 0.12), 
                            1 - (i * 0.12), 
                            0
                          ]
                        }}
                        transition={{ 
                          pathOffset: {
                            duration: comet.duration, 
                            repeat: Infinity, 
                            repeatDelay: comet.repeatDelay,
                            ease: "linear",
                            delay: comet.baseDelay + (i * comet.stagger)
                          },
                          opacity: {
                            duration: comet.duration, 
                            repeat: Infinity, 
                            repeatDelay: comet.repeatDelay,
                            ease: "linear",
                            times: [0, 0.05, 0.95, 1],
                            delay: comet.baseDelay + (i * comet.stagger)
                          }
                        }}
                        style={{ filter: i === 0 ? "drop-shadow(0px 0px 8px rgba(239,68,68,0.9))" : "none" }}
                      />
                    ))}
                  </g>
                ))}
              </svg>
              {/* Logos positioned exactly on the horizontal line */}
              <div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto z-20">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative">Logo</div>
              </div>
            </div>
            
            {/* White Logo Circle (Rendered ON TOP of SVG) */}
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-20">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-gray-900 tracking-wide uppercase text-sm relative z-20">Proyectos a Medida</span>
          </div>
'''
    
    final = lines[:start_idx] + [new_html] + lines[end_idx+1:]
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final)
    print("Fixed z-index!")
else:
    print("Could not find bounds")
