import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# The current block we need to replace is the gradient background
pattern = re.compile(r'<div className="absolute inset-0 z-0">.*?<img src="/cnc.jpg".*?<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"></div>\s*</div>', re.DOTALL)

new_bg = """    {/* Arrow Background */}
    <div className="absolute inset-0 z-0 bg-[#FBFBFD] flex justify-end">
      {/* 1. The CNC Image (Shifted to the right so the main action isn't covered by the white arrow) */}
      <div className="w-full lg:w-[60%] h-full relative">
        <img src="/cnc.jpg" alt="CNC Machining" className="absolute inset-0 w-full h-full object-cover object-center lg:object-left" />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
      
      {/* 2. The Solid White Arrow Shape (Desktop) */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#FBFBFD] z-10 hidden lg:block shadow-[30px_0_40px_-20px_rgba(0,0,0,0.3)]"
        style={{ 
          width: "63%", 
          clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" 
        }}
      ></div>

      {/* 3. The Solid White Shape (Tablet/Mobile) */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#FBFBFD] z-10 lg:hidden shadow-[10px_0_20px_-10px_rgba(0,0,0,0.3)]"
        style={{ 
          width: "100%", 
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 85%)" 
        }}
      ></div>
      
      {/* Heavy white gradient overlay on Mobile ONLY so text reads over the image at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFD] via-[#FBFBFD]/90 to-transparent lg:hidden z-10 pointer-events-none mt-[50vh]"></div>
    </div>"""

if pattern.search(text):
    text = pattern.sub(new_bg, text)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully injected the PERFECT Arrow Background!")
else:
    print("Could not find the target block.")

