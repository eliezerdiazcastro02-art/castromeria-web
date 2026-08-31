import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make sure we import Navbar
if "import Navbar from '../components/Navbar';" not in text:
    text = text.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport Navbar from '../components/Navbar';")

nav_pattern = r'\{\/\* Navigation \(Floating Glassmorphism\) \*\/\}.*?<\/nav>'

text = re.sub(nav_pattern, '<Navbar />', text, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Replaced nav in page.tsx")
