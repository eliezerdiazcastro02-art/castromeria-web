import urllib.request

url = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2500&auto=format&fit=crop"
out_path = "public/cnc.jpg"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
        out_file.write(response.read())
    print("Downloaded successfully!")
except Exception as e:
    print("Download failed:", e)
