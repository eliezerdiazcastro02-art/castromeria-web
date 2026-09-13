import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_bg = """    <div className="absolute inset-0 z-0">
      <img src="/cnc.jpg" alt="CNC Machining" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-[70%]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"></div>
    </div>"""

# Ensure we catch it even if whitespace is different
pattern = re.compile(r'<div className="absolute inset-0 z-0">.*?<img src="/cnc.jpg".*?<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"></div>\s*</div>', re.DOTALL)

new_bg = """    {/* Arrow Background */}
    <div className="absolute inset-0 z-0 bg-[#FBFBFD]">
      {/* 1. The Full-Screen CNC Image */}
      <img src="/cnc.jpg" alt="CNC Machining" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* 2. The Solid White Arrow Shape (Desktop) */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#FBFBFD] z-10 hidden lg:block shadow-[20px_0_30px_-15px_rgba(0,0,0,0.3)]"
        style={{ 
          width: "75%", 
          clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)" 
        }}
      ></div>

      {/* 3. The Solid White Shape (Tablet/Mobile) - A slanted cut instead of an arrow to save space */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#FBFBFD] z-10 lg:hidden shadow-[10px_0_20px_-10px_rgba(0,0,0,0.3)]"
        style={{ 
          width: "100%", 
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 90%)" 
        }}
      ></div>
      
      {/* Heavy white gradient overlay on Mobile ONLY so text reads over the image at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent lg:hidden z-10 pointer-events-none mt-[60vh]"></div>
    </div>"""

if pattern.search(text):
    text = pattern.sub(new_bg, text)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully injected the Arrow Background!")
else:
    print("Could not find the target block.")

