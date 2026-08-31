import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

bad = '''                      {[1,2,3,4,5,6,7,8].map(n => (
                        <div key={${group}-} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                      ))}'''

good = '''                      {[
                        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1537553556942-e19a4e402b85?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=100&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=100&auto=format&fit=crop"
                      ].map((imgUrl, n) => (
                        <div key={\-\} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm relative z-20 overflow-hidden">
                          <img src={imgUrl} alt={Model \} className="w-full h-full object-cover" />
                        </div>
                      ))}'''

text = text.replace(bad, good)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Replaced logos with images")
