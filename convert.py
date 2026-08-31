import re

with open('../code.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
body_content = body_match.group(1) if body_match else html

body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL)
body_content = body_content.replace('class=', 'className=')
body_content = body_content.replace('viewbox=', 'viewBox=')
body_content = body_content.replace('stroke-linecap=', 'strokeLinecap=')
body_content = body_content.replace('stroke-linejoin=', 'strokeLinejoin=')
body_content = body_content.replace('stroke-width=', 'strokeWidth=')
body_content = body_content.replace('fill-rule=', 'fillRule=')
body_content = body_content.replace('clip-rule=', 'clipRule=')
body_content = body_content.replace('stroke-dasharray=', 'strokeDasharray=')
body_content = body_content.replace('preserveAspectRatio=', 'preserveAspectRatio=')

# Simple regex to fix unclosed img tags
body_content = re.sub(r'<(img[^>]*?)(?<!/)>', r'<\1/>', body_content)
body_content = re.sub(r'<(br[^>]*?)(?<!/)>', r'<\1/>', body_content)
body_content = re.sub(r'<!--.*?-->', '', body_content, flags=re.DOTALL)

# Fix style attribute in HTML
body_content = body_content.replace('style=\"background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px;\"', 'style={{ backgroundImage: \"radial-gradient(#fff 1px, transparent 1px)\", backgroundSize: \"20px 20px\" }}')

component = '''\"use client\";
import { useEffect } from \"react\";
import Lenis from \"lenis\";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className=\"bg-gray-50 text-gray-900 font-sans antialiased\">
''' + body_content + '''
    </div>
  );
}
'''

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(component)

print('Conversion done!')
