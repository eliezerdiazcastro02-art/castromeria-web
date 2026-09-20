const https = require('https');

const queries = ['welding', 'cnc machining', 'factory', 'lathe', 'laser cutting', 'metalwork', 'industrial', 'engineering'];
const validIds = [];

function search(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5&page=1`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results) {
            json.results.forEach(r => validIds.push(r.id));
          }
        } catch(e) {}
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  for (const q of queries) {
    await search(q);
  }
  console.log(JSON.stringify([...new Set(validIds)]));
}
run();
