import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if '{/* Fading Comet Trail' in line:
        start_idx = i
        break

if start_idx != -1:
    for i in range(start_idx, len(lines)):
        if '))} ' in lines[i] or '))}' in lines[i] or '</svg>' in lines[i]:
            if '</svg>' in lines[i]:
                end_idx = i - 1
                break

if start_idx != -1 and end_idx != -1:
    new_code = '''                    {/* Multiple Comets with Random Speeds & Sizes */}
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
                            initial={{ pathLength: comet.length, pathOffset: -0.2, opacity: 1 - (i * 0.12) }}
                            animate={{ pathOffset: [-0.2, 1.2] }}
                            transition={{ 
                              duration: comet.duration, 
                              repeat: Infinity, 
                              repeatDelay: comet.repeatDelay,
                              ease: "linear",
                              delay: comet.baseDelay + (i * comet.stagger)
                            }}
                            style={{ filter: i === 0 ? "drop-shadow(0px 0px 8px rgba(239,68,68,0.9))" : "none" }}
                          />
                        ))}
                      </g>
                    ))}
'''
    final = lines[:start_idx] + [new_code] + lines[end_idx+1:]
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final)
    print("Replaced with multiple random comets")
else:
    print("Could not find block")
