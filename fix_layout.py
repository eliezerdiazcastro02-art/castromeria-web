import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

hero_bad = """<main className="pt-28 lg:pt-32 pb-16 lg:pb-24 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-4xl mx-auto text-center">
<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.2 }} className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Diseño y Fabricación <br/> Industrial a Medida
          </motion.h1>
<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.3 }} className="text-[1.05rem] text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed font-medium">
            Especialistas en acero inoxidable, CNC, impresión 3D y automatización. <br className="hidden sm:block"/>
            Fabricamos piezas y proyectos a medida con máxima precisión.
          </motion.p>
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4">
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all shadow-[0_8px_20px_rgba(220,38,38,0.25)] font-semibold" href="#">
            Cotizar Proyecto
          </motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-7 py-3 rounded-full text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors font-semibold shadow-sm" href="#">
            Nuestros Servicios
          </motion.a>
</motion.div>
</motion.div>"""

hero_good = """<section className="pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-transparent">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex flex-col lg:flex-row items-center">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-4xl">
<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.2 }} className="text-5xl lg:text-[3.75rem] font-bold tracking-tight text-slate-900 mb-5 leading-[1.05]">
            Diseño y Fabricación <br/> Industrial a Medida
          </motion.h1>
<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.3 }} className="text-[1.05rem] text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">
            Especialistas en acero inoxidable, CNC, impresión 3D y automatización. <br className="hidden sm:block"/>
            Fabricamos piezas y proyectos a medida con máxima precisión.
          </motion.p>
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-3">
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all shadow-[0_8px_20px_rgba(220,38,38,0.25)] font-semibold" href="#">
              Cotizar Proyecto
            </motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-7 py-3 rounded-full text-slate-900 bg-white hover:bg-gray-50 transition-all shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] font-semibold" href="#">
              Nuestros Servicios
            </motion.a>
</motion.div>
</motion.div>"""

# Using regex to ignore character encoding issues just in case
content = re.sub(r'<main className="pt-28.*?</motion\.div>', hero_good, content, flags=re.DOTALL)
content = content.replace('</main>', '</section>')


cta_bad = """</svg><motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="py-24 bg-red-600 text-center relative overflow-hidden">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Inicia tu proyecto industrial hoy.</h2>
<p className="text-xl text-red-100 mb-10 font-medium">Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">
          Contactar a un Ingeniero
        </motion.a>
</div>
</motion.section>
</div>
</div>
</div>
</div>
</section>"""

cta_good = """</svg>
</div>

<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="relative bg-red-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl mt-16 overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Inicia tu proyecto industrial hoy.</h2>
<p className="text-xl text-red-100 mb-10 font-medium">Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">
          Contactar a un Ingeniero
        </motion.a>
</div>
</motion.div>
</div>
</div>
</section>"""

content = re.sub(r'</svg><motion\.section.*?</section>', cta_good, content, flags=re.DOTALL)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
