import urllib.request

# Try downloading the second panel image
url = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1500&auto=format&fit=crop"
out_path = "public/gears.jpg"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
        out_file.write(response.read())
    print(f"Downloaded successfully! Size: {__import__('os').path.getsize(out_path)} bytes")
except Exception as e:
    print("Download failed:", e)
