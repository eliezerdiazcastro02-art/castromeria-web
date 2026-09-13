import urllib.request
import re

url = "https://unsplash.com/s/photos/cnc"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Find all photo IDs
    matches = re.findall(r'images\.unsplash\.com/photo-([a-zA-Z0-9\-]+)\?', html)
    # Get unique ones
    unique_ids = list(dict.fromkeys(matches))
    print("Found IDs:")
    for id in unique_ids[:10]:
        print(f"https://images.unsplash.com/photo-{id}?q=80&w=2500&auto=format&fit=crop")
except Exception as e:
    print("Error:", e)
