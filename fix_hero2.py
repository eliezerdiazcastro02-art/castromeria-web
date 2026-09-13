import os

with open('app/page.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

start_marker = "    {/* Diagonal Video Background */}"
end_marker = "    {/* Left Content (White) */}"

if start_marker in text:
    before = text.split(start_marker)[0]
    # The end_marker might not exist if I used a different structure
    # Let's just find the max-w-7xl mx-auto div that starts the text content
    content_start = text.find('  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">')
    
    if content_start != -1:
        new_bg = """    {/* Diagonal Video Background */}
    <div className="absolute inset-0 z-0 bg-[#FBFBFD]">
      {/* Desktop mask */}
      <div className="absolute inset-0 w-full h-full hidden lg:block" style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 20% 100%)" }}>
        <img src="https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop" alt="Máquina CNC" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      {/* Mobile mask */}
      <div className="absolute inset-0 w-full h-full lg:hidden" style={{ clipPath: "polygon(0 60%, 100% 40%, 100% 100%, 0% 100%)" }}>
        <img src="https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop" alt="Máquina CNC" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
"""
        text = before + new_bg + text[content_start:]
        with open('app/page.tsx', 'w', encoding='utf-8') as f:
            f.write(text)
        print("Replaced background section perfectly!")
    else:
        print("Could not find content_start")
else:
    print("Could not find start_marker")

