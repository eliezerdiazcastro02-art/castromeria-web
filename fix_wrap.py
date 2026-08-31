import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_block_pattern = r'\{/\* Multiple Comets with Random Speeds & Sizes \*/\}.*?</g>\s*}\)\)}'

new_block = '''{/* Multiple Comets with Random Speeds & Sizes */}
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
                    ))}'''

text = re.sub(old_block_pattern, new_block, text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed wrap bug")
