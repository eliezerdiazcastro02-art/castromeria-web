import requests
import json
import urllib.parse
import time

def search_unsplash(query):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=1&page=1"
    try:
        r = requests.get(url, headers=headers)
        data = r.json()
        if data.get('results'):
            return data['results'][0]['urls']['regular']
    except Exception as e:
        pass
    return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop" # fallback industrial

queries = [
    # Fabricación
    "machining cnc", "lathe machine", "laser cutting metal", "welding", "steel parts", "stainless steel table", 
    "metal structure", "metal architecture", "injection molding", "gears", "jigs fixtures",
    # Diseño Industrial
    "mechanical design", "cad 3d", "engineering tolerances", "stress simulation", "dfm manufacturing", "3d render product",
    # Impresión 3D
    "3d printing prototyping", "3d printing unique", "3d printing plastic", "3d printing assembly", "sand casting mold",
    # Anodizado
    "anodized aluminum", "corrosion protection metal", "metal wear resistance", "teflon coating", "sliding friction metal", "durable metal finish",
    # Asesoría
    "industrial consulting", "industrial automation plc", "manufacturing optimization", "industrial painting", "economic feasibility",
    # Facilidades
    "factory layout", "heavy machinery moving", "5s methodology", "industrial warehouse rack", "production line setup"
]

results = []
for q in queries:
    img = search_unsplash(q)
    results.append(img)
    time.sleep(0.5)

print(json.dumps(results, indent=2))
