import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the path animation
old_path_pattern = r'<motion\.path[^>]*d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200"[^>]*/>'

new_path = '''<motion.path 
                    d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                    fill="none" 
                    stroke="#f87171" 
                    strokeWidth="3" 
                    strokeDasharray="8 6" 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    animate={{ 
                      strokeDashoffset: [0, -28, -28, -84, -98, -98, -168],
                      opacity: [1, 1, 0.2, 1, 0, 1, 1, 0.4, 1]
                    }}
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ 
                      strokeDashoffset: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.3, 0.6, 0.75, 0.85, 1]
                      },
                      opacity: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.1, 0.12, 0.4, 0.42, 0.5, 0.8, 0.85, 1]
                      }
                    }} 
                    style={{ filter: "drop-shadow(0px 0px 6px rgba(248,113,113,0.5))" }}
                  />'''

text = re.sub(old_path_pattern, new_path, text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added glitch flow animation")
