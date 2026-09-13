import re

with open('app/page.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Replace the broken MAquina text and the tailwind arbitrary clip-path with style
old_bg = """      <div className="absolute inset-0 w-full h-full [clip-path:polygon(0_60%,100%_40%,100%_100%,0%_100%)] lg:[clip-path:polygon(45%_0,100%_0,100%_100%,20%_100%)]">
        <img
          src="https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop"
          alt="MAquina CNC Industrial"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay to make the video pop and contrast with the white */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>"""

new_bg = """      {/* Desktop mask */}
      <div className="absolute inset-0 w-full h-full hidden lg:block" style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 20% 100%)" }}>
        <img src="https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop" alt="Máquina CNC" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      {/* Mobile mask */}
      <div className="absolute inset-0 w-full h-full lg:hidden" style={{ clipPath: "polygon(0 60%, 100% 40%, 100% 100%, 0% 100%)" }}>
        <img src="https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop" alt="Máquina CNC" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>"""

# Try a very loose regex since whitespace might differ
text = re.sub(r'<div className="absolute inset-0 w-full h-full \[clip-path:polygon[^>]+>.*?<img[^>]+>.*?<div className="absolute inset-0 bg-black/10"></div>.*?</div>', new_bg, text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed hero image code!")
