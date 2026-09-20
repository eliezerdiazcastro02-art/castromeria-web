import urllib.request
import re

try:
    req = urllib.request.Request('https://www.edwards.com/', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'src=["\']([^"\']*\.(?:png|svg|jpg|webp))["\']', html, re.IGNORECASE)
    # filter matches for "edwards"
    logos = [m for m in matches if 'logo' in m.lower()]
    print(logos)
except Exception as e:
    print('Failed:', e)
