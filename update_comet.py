import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if '{/* Background Track */}' in line:
        start_idx = i
        break

if start_idx != -1:
    for i in range(start_idx, len(lines)):
        if '))} ' in lines[i] or '))}' in lines[i]:
            end_idx = i
            break

if start_idx != -1 and end_idx != -1:
    new_code = '''                    {/* Background Track (Solid Faint Line) */}
                    <path 
                      d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                      fill="none" 
                      stroke="#f87171" 
                      strokeWidth="3" 
                      opacity="0.1" 
                    />
                    
                    {/* Fading Comet Trail with Dynamic Speed & Length */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <motion.path
                        key={i}
                        d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth={i === 0 ? 4 : 3}
                        strokeLinecap="round"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          pathOffset: [-0.05, 0.2, 0.2, 0.7, 0.8, 1.05],
                          pathLength: [0.05, 0.1, 0.01, 0.15, 0.05, 0.05],
                          opacity: [0, 1 - (i * 0.1), 1 - (i * 0.1), 1 - (i * 0.1), 1 - (i * 0.1), 0]
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          times: [0, 0.2, 0.3, 0.6, 0.8, 1],
                          delay: i * 0.05
                        }}
                        style={{ filter: i === 0 ? "drop-shadow(0px 0px 8px rgba(239,68,68,0.9))" : "none" }}
                      />
                    ))}
'''
    final = lines[:start_idx] + [new_code] + lines[end_idx+1:]
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final)
    print("Updated background track and comet dynamics")
else:
    print("Could not find block")
