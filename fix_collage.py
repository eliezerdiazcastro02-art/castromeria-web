import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the Arrow Background block
pattern = re.compile(r'\{\/\* Arrow Background \*\/\}.*?<div className="absolute inset-0 bg-gradient-to-t from-\[#FBFBFD\] via-\[#FBFBFD\]/90 to-transparent lg:hidden z-10 pointer-events-none mt-\[50vh\]"><\/div>\s*<\/div>', re.DOTALL)

new_bg = """    {/* Arrow & Collage Background */}
    <div className="absolute inset-0 z-0 bg-[#FBFBFD] flex justify-end">
      {/* 1. The Right-Side Image Container */}
      <div className="w-full lg:w-[50%] h-full relative">
        {/* Main CNC Image */}
        <img src="/cnc.jpg" alt="CNC Machining" className="absolute inset-0 w-full h-full object-cover object-center" />
        
        {/* White Diagonal Separator Line */}
        <div 
          className="absolute bottom-0 right-0 w-[85%] h-[80%] bg-[#FBFBFD] z-10 hidden lg:block"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
        
        {/* Secondary Robot Arm Image (Collage Effect) */}
        <div 
          className="absolute bottom-0 right-0 w-[83.5%] h-[78%] z-20 hidden lg:block"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1537553556942-e19a4e402b85?q=80&w=1500&auto=format&fit=crop" 
            alt="Robotic Assembly" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Subtle Dark Overlay to tie it together */}
        <div className="absolute inset-0 bg-black/5 z-30 pointer-events-none"></div>
      </div>
      
      {/* 2. The Solid White Arrow Shape (Desktop) */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#FBFBFD] z-40 hidden lg:block shadow-[30px_0_40px_-20px_rgba(0,0,0,0.3)]"
        style={{ 
          width: "62%", 
          clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" 
        }}
      ></div>

      {/* 3. The Solid White Shape (Tablet/Mobile) */}
      <div 
        className="absolute inset-y-0 left-0 bg-[#FBFBFD] z-40 lg:hidden shadow-[10px_0_20px_-10px_rgba(0,0,0,0.3)]"
        style={{ 
          width: "100%", 
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 85%)" 
        }}
      ></div>
      
      {/* Heavy white gradient overlay on Mobile ONLY so text reads over the image at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFD] via-[#FBFBFD]/90 to-transparent lg:hidden z-40 pointer-events-none mt-[50vh]"></div>
    </div>"""

if pattern.search(text):
    text = pattern.sub(new_bg, text)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Collage layout applied!")
else:
    print("Could not find the target block.")

