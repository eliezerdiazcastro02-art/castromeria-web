import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I need to match whatever garbage it wrote and replace it cleanly.
# Since it wrote something mangled, I will just regex the whole map block.
pattern = r'\{\[\s*"https://images.*?\]\.map\(\(imgUrl, n\) => \([\s\S]*?</div>\s*\)\)}'
# Wait, it might have replaced it. Let's just restore the entire line containing the map.
# Or better yet, let's just use regex to replace everything inside the flawless-marquee divs!
pattern2 = r'(<div key=\{group\} className="flex gap-6 md:gap-8 shrink-0 flawless-marquee".*?>)[\s\S]*?(</div>\s*\)\)})'

good_content = '''
                      {[
                        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1537553556942-e19a4e402b85?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=100&auto=format&fit=crop"
                      ].map((imgUrl, n) => (
                        <div key={`${group}-${n}`} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm relative z-20 overflow-hidden">
                          <img src={imgUrl} alt={`Model ${n}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    '''

text = re.sub(pattern2, r'\1' + good_content + r'\2', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed logos with literal string")
