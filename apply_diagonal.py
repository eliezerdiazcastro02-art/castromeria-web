import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_bg = """    {/* Video Background */}

    <div className="absolute inset-0 z-0">

      <video

        src="/videos/video2.mp4"

        autoPlay

        loop

        muted

        playsInline

        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"

      />

      {/* Heavy white gradient overlay to ensure text is perfectly readable */}

      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-[70%]"></div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"></div>

    </div>"""

# Sometimes whitespace differs slightly, let's use regex to find and replace the whole block
pattern = re.compile(r'\{\/\* Video Background \*\/\}.*?<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"><\/div>\s*<\/div>', re.DOTALL)

new_bg = """    {/* Diagonal Video Background */}
    <div className="absolute inset-0 z-0 bg-[#FBFBFD]">
      <div className="absolute inset-0 w-full h-full [clip-path:polygon(0_60%,100%_40%,100%_100%,0%_100%)] lg:[clip-path:polygon(45%_0,100%_0,100%_100%,20%_100%)]">
        <video
          src="/videos/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay to make the video pop and contrast with the white */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>"""

if pattern.search(text):
    text = pattern.sub(new_bg, text)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully applied diagonal background!")
else:
    print("Could not find the target block.")

