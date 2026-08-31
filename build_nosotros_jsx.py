import re

with open('extracted_nosotros.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix any remaining malformed encodings just in case
html = html.replace('mAs', 'más')
html = html.replace('A-ses', 'íses')
html = html.replace('diseAada', 'diseñada')
html = html.replace('Acs', 'és')
html = html.replace('A3n', 'ón')
html = html.replace('dAccadas', 'décadas')
html = html.replace('ingenierA-a', 'ingeniería')
html = html.replace('rApido', 'rápido')
html = html.replace('quAc', 'qué')
html = html.replace('cA3mo', 'cómo')
html = html.replace('cuAndo', 'cuándo')
html = html.replace('dA3nde', 'dónde')
html = html.replace('fA-sica', 'física')
html = html.replace('analA-ticas', 'analíticas')

# Wrap it in React Component
component = """import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Nosotros() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      
      {/* Spacer to account for fixed navbar */}
      <div className="pt-32"></div>

""" + html + """

      <Footer />
    </div>
  );
}
"""

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(component)

print("nosotros/page.tsx built")
