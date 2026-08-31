import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace all logos with the confirmed working ones
logos = {
    'Salesforce': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    'Amazon': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'Wayfair': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Wayfair_logo.svg',
    'Etsy': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg',
    'eBay': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg'
}

for name, url in logos.items():
    pattern = r'(<img alt="' + name + r'"[^>]*src=")[^"]+(")'
    text = re.sub(pattern, r'\g<1>' + url + r'\g<2>', text)

# Make them smaller
text = re.sub(r'className="[^"]*object-contain[^"]*"', 'className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"', text)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed logos and sizes")
