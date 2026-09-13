import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the video tag with an img tag
# Original:
#     <div className="absolute inset-0 z-0">
#       <video
#         src="/videos/video2.mp4"
#         autoPlay
#         loop
#         muted
#         playsInline
#         className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
#       />

video_pattern = r'<video[^>]+src="/videos/video2\.mp4"[^>]+/>'
img_tag = '<img src="/cnc.jpg" alt="CNC Machining" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />'

text = re.sub(video_pattern, img_tag, text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Swapped video to image!")
