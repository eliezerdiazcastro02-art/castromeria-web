import urllib.request

url = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1500&auto=format&fit=crop"
out_path = "public/shavings.jpg"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
        out_file.write(response.read())
    print(f"Downloaded! Size: {__import__('os').path.getsize(out_path)} bytes")
except Exception as e:
    print("Failed:", e)
    # Try alternate image
    url2 = "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1500&auto=format&fit=crop"
    try:
        req = urllib.request.Request(url2, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(out_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Alternate downloaded! Size: {__import__('os').path.getsize(out_path)} bytes")
    except Exception as e2:
        print("Both failed:", e2)
