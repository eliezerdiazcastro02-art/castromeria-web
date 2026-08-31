import os
import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract Navbar
navbar_pattern = r'(<motion\.header[\s\S]*?</motion\.header>)'
navbar_match = re.search(navbar_pattern, content)
navbar_html = navbar_match.group(1) if navbar_match else ""

# Extract Footer
footer_pattern = r'(<footer[\s\S]*?</footer>)'
footer_match = re.search(footer_pattern, content)
footer_html = footer_match.group(1) if footer_match else ""

os.makedirs('components', exist_ok=True)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(""""use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
""" + navbar_html.replace('href="#"', 'href="/"').replace('>Nosotros<', ' href="/nosotros">Nosotros<').replace('href="/" href="/nosotros"', 'href="/nosotros"') + """
  );
}
""")

with open('components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(""""use client";
import Link from "next/link";

export default function Footer() {
  return (
""" + footer_html.replace('href="#"', 'href="/"') + """
  );
}
""")

# Now replace them in page.tsx
if navbar_match and footer_match:
    new_content = content.replace(navbar_html, '<Navbar />')
    new_content = new_content.replace(footer_html, '<Footer />')
    
    # Need to add import statements
    import_statements = """import Navbar from "@/components/Navbar";\nimport Footer from "@/components/Footer";\n"""
    
    new_content = new_content.replace('export default function Home() {', import_statements + '\nexport default function Home() {')
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Extracted and replaced Navbar and Footer in page.tsx")
else:
    print("Could not extract Navbar or Footer")
