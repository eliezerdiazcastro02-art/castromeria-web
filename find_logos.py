import urllib.request
import re

urls_to_check = [
    'https://www.santodomingomotors.com.do/',
    'https://www.acromax.com.do/',
    'https://plasticosduralon.com/'
]

for url in urls_to_check:
    print(f"Checking {url}")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        matches = re.findall(r'src=["\']([^"\']*\.(?:png|svg|jpg|webp))["\']', html, re.IGNORECASE)
        # filter for 'logo'
        logos = [m for m in matches if 'logo' in m.lower()]
        print(logos)
    except Exception as e:
        print(f'Failed {url}: {e}')
