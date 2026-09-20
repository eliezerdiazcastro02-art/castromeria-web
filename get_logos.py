import urllib.request
import re
try:
    req = urllib.request.Request('https://www.intec.edu.do', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'src=["\']([^"\']*logo[^"\']*\.(?:png|svg))["\']', html, re.IGNORECASE)
    print("Found logos:", matches)
except Exception as e:
    print('Failed:', e)
