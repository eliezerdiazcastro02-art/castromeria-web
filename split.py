from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

img = Image.open('public/tools_sprite.png').convert('RGB')

boxes = [
    ('drill', (0, 0, 330, 350)),
    ('toolbox', (330, 0, 680, 350)),
    ('tape', (680, 0, 1024, 350)),
    ('helmet', (0, 350, 512, 682)),
    ('gloves', (512, 350, 1024, 682))
]

for name, box in boxes:
    cropped = img.crop(box)
    trimmed = trim(cropped)
    # Save trimmed image
    trimmed.save(f'public/{name}.png')
    print(f'Saved {name}.png')

