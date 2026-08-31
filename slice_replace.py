import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if '{/* Fading Comet Trail */}' in line:
        start_idx = i + 1
        break

if start_idx != -1:
    for i in range(start_idx, len(lines)):
        if '))} ' in lines[i] or '))}' in lines[i]:
            end_idx = i
            break

print(start_idx, end_idx)

if start_idx != -1 and end_idx != -1:
    new_code = '''                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <motion.path
                      key={i}
                      d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                      fill="none" 
                      stroke="#ef4444" 
                      strokeWidth={i === 0 ? 4 : 3}
                      strokeLinecap="round"
                      initial={{ pathLength: 0.05, pathOffset: -0.05, opacity: 0 }}
                      animate={{ 
                        pathOffset: [0, 1.05],
                        opacity: [0, 1 - (i * 0.1), 0]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: i * 0.04
                      }}
                      style={{ filter: i === 0 ? "drop-shadow(0px 0px 8px rgba(239,68,68,0.9))" : "none" }}
                    />
                  ))}
'''
    final = lines[:start_idx] + [new_code] + lines[end_idx+1:]
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final)
    print("Replaced!")
