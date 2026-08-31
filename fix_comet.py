import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the Fading Comet Trail map function
old_map_pattern = r'\{\[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\]\.map\(\(i\) => \(.*?\}\)\)\}'

new_map = '''{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <motion.path
                        key={i}
                        d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth={i === 0 ? 4 : 3}
                        strokeLinecap="round"
                        initial={{ pathLength: 0.04, pathOffset: -0.05, opacity: 0 }}
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
                    ))}'''

text = re.sub(old_map_pattern, new_map, text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed comet animation properties")
