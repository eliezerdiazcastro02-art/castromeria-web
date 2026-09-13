from PIL import Image
import os

mockup_path = r"C:\Users\Marcos\.gemini\antigravity\brain\ed93fc05-003b-4fb6-9390-bd511604db3b\industrial_light_ui_1_1788901679001.jpg"
output_path = r"c:\Users\Marcos\Documents\Castromeria_Web\next-app\public\hero-cnc.jpg"

img = Image.open(mockup_path)
width, height = img.size

# Crop the right half of the image (where the CNC machine is)
# The image is 1024x1024 (standard generate_image size usually)
# Let's crop from 40% of the width to the end
left = int(width * 0.4)
top = 0
right = width
bottom = height

cropped_img = img.crop((left, top, right, bottom))
cropped_img.save(output_path, quality=95)

print("Image cropped and saved to public/hero-cnc.jpg!")
