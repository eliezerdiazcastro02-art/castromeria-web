import urllib.request
import re

try:
    req = urllib.request.Request('https://en.wikipedia.org/wiki/Poma', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
    matches = re.findall(r'src="(//upload\.wikimedia\.org/wikipedia/commons/[^"]*logo[^"]*)"', html, re.IGNORECASE)
    print(matches)
except Exception as e:
    print(f'Failed: {e}')
