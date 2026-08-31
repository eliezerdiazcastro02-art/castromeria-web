import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I will replace the 3 groups with 6 groups.
bad = '''                <div className="flex gap-6 md:gap-8 w-max">
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
                </div>'''

good = '''                <div className="flex gap-6 md:gap-8 w-max">
                  {[0, 1, 2, 3, 4, 5, 6].map((group) => (
                    <div key={group} className="flex gap-6 md:gap-8 shrink-0 flawless-marquee" aria-hidden={group !== 0 ? "true" : undefined}>
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <div key={${group}-} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                      ))}
                    </div>
                  ))}
                </div>'''

if bad in text:
    text = text.replace(bad, good)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added 7 groups using a map")
else:
    print("Could not find block")
