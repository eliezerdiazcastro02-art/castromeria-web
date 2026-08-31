import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# First, extract what the user currently has inside the motion.div. It looks like they might have edited it to 4 logos.
# Let's just grab the whole absolute container.
old_block_pattern = r'\{/\* Logos positioned exactly on the horizontal line.*?</style>\s*<div className="flex w-max animate-marquee-right">.*?</div>\s*</div>\s*</div>'

new_block = '''              {/* Logos positioned exactly on the horizontal line, animated Left to Right */}
              <div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] pointer-events-auto z-20 w-[800px] overflow-visible">
                <style>{
                  @keyframes marqueeRightMobile {
                    from { transform: translateX(calc(-100% - 1.5rem)); } /* gap-6 = 1.5rem */
                    to { transform: translateX(0%); }
                  }
                  @keyframes marqueeRightDesktop {
                    from { transform: translateX(calc(-100% - 2rem)); } /* gap-8 = 2rem */
                    to { transform: translateX(0%); }
                  }
                  .flawless-marquee {
                    animation: marqueeRightMobile 15s linear infinite;
                  }
                  @media (min-width: 768px) {
                    .flawless-marquee {
                      animation: marqueeRightDesktop 15s linear infinite;
                    }
                  }
                }</style>
                <div className="flex gap-6 md:gap-8 w-max">
                  <div className="flex gap-6 md:gap-8 shrink-0 flawless-marquee">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:gap-8 shrink-0 flawless-marquee" aria-hidden="true">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n+8} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:gap-8 shrink-0 flawless-marquee" aria-hidden="true">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n+16} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                    ))}
                  </div>
                </div>
              </div>'''

# wait, I need to use regex properly.
text = re.sub(old_block_pattern, new_block, text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Replaced with flawless marquee")
