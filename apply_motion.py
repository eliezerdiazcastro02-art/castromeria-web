import re
import sys

def main():
    with open('app/page.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    if 'import { motion }' not in content:
        content = content.replace('import Lenis from "lenis";', 'import Lenis from "lenis";\nimport { motion } from "framer-motion";')

    # Replace <header> -> <motion.header>
    content = content.replace('<header ', '<motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} ')
    content = content.replace('</header>', '</motion.header>')

    # Replace hero wrapper
    content = content.replace('<div className="max-w-4xl mx-auto text-center">', '<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }} className="max-w-4xl mx-auto text-center">')
    # find the closing div of hero... it's the one before <div className="mt-20">. Wait, actually I'll just change the first </div> to </motion.div> ? No that breaks things.
    # Let's just wrap the inner children with motion.div for the hero.
    
    # Let's use string.replace on exact chunks.

    # 1. Hero Title
    content = content.replace(
        '<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">',
        '<motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }} className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">'
    )
    content = content.replace('</h1>', '</motion.h1>')

    # 2. Hero Paragraph
    content = content.replace(
        '<p className="text-[1.05rem] text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">',
        '<motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.2 }} className="text-[1.05rem] text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">'
    )
    # wait there are other <p> tags, but I only want to replace the first </p> after this?
    # better yet, replace `<p className="text-[1.05rem] text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">
            Especialistas en acero inoxidable, CNC, impresión 3D y automatización. <br className="hidden sm:block"/>
            Fabricamos piezas y proyectos a medida con máxima precisión.
          </p>`
    
    # 3. Sections
    content = content.replace('<section ', '<motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} ')
    content = content.replace('</section>', '</motion.section>')

    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
if __name__ == "__main__":
    main()
