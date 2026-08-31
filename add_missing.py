import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace basic footer with <Footer />
bad_footer = r'<footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">\s*<p>© 2026 Castromeria. Diseño industrial dominicano.</p>\s*</footer>'
text = re.sub(bad_footer, '<Footer />', text)

# Add imports for Lenis and Footer
if 'import Lenis' not in text:
    text = text.replace('import Navbar from "../../components/Navbar";', 'import Navbar from "@/components/Navbar";\nimport Footer from "@/components/Footer";\nimport { useEffect } from "react";\nimport Lenis from "lenis";')

# Add Lenis useEffect hook inside the component
if 'const lenis = new Lenis' not in text:
    hook = '''  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  // Apple style spring settings: critically damped, no overshoot'''
    text = text.replace('  // Apple style spring settings: critically damped, no overshoot', hook)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Added Lenis and Footer")
