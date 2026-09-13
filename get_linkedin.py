import urllib.request
import re

url = "https://do.linkedin.com/in/eliezer-diaz-castro-b500631aa"
req = urllib.request.Request(
    url, 
    data=None, 
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        if match:
            image_url = match.group(1)
            print("Found image URL:", image_url)
            # Download the image
            urllib.request.urlretrieve(image_url, "public/eliezer.jpg")
            print("Image downloaded to public/eliezer.jpg")
        else:
            print("No og:image found.")
except Exception as e:
    print("Error:", e)
