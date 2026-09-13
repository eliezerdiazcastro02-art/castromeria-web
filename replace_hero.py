import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the video tag with an img tag
# Original:
#         <video
#           src="/videos/video2.mp4"
#           autoPlay
#           loop
#           muted
#           playsInline
#           className="absolute inset-0 w-full h-full object-cover object-center"
#         />

pattern = re.compile(r'<video[^>]+src="/videos/video2\.mp4"[^>]+/>', re.DOTALL)

img_tag = """<img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2500&auto=format&fit=crop"
          alt="Máquina CNC Industrial"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />"""

if pattern.search(text):
    text = pattern.sub(img_tag, text)
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Replaced video with CNC image!")
else:
    print("Could not find the video tag.")

