import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Remove the aura I mistakenly added
old_logo_pattern = r'\{/\* Glitching Red Aura \*/\}.*?</motion\.div>'
text = re.sub(old_logo_pattern, '', text, flags=re.DOTALL)
text = text.replace('className="w-8 h-8 object-contain relative z-20"', 'className="w-8 h-8 object-contain"')

# 2. Replace the old glitch path with the Comet Trail path!
old_path_pattern = r'<motion\.path[^>]*d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200"[^>]*/>'

new_path = '''{/* Background Track */}
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
                  ))}'''

text = re.sub(old_path_pattern, new_path, text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added comet trail animation")
