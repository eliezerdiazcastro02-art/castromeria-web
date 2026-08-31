import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract everything before the Hero section
start_marker = '<section className="pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-transparent">'
if start_marker not in text:
    # maybe it has relative already?
    start_marker_fallback = re.search(r'<section[^>]*pt-28[^>]*>', text)
    if start_marker_fallback:
        start_marker = start_marker_fallback.group(0)

# Extract everything after the Hero section
# The hero section ends right before: <!-- Marcas / Logos --> or <section className="py-12 border-y border-gray-100 bg-white">
end_marker = '<section className="py-12 border-y border-gray-100 bg-white">'
if end_marker not in text:
    end_marker = '<div className="mt-16 sm:mt-24">'

parts = text.split(end_marker)
before_hero_parts = parts[0].split(start_marker)

before_hero = before_hero_parts[0]
after_hero = end_marker + parts[1]

new_hero = '''<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-transparent min-h-[85vh] flex items-center">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video 
      src="/videos/video2.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    {/* Subtle gradient overlay to ensure text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-3xl">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.2 }} className="text-5xl lg:text-[4.5rem] font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
        Diseño y Fabricación <br/> Industrial a Medida
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.3 }} className="text-lg lg:text-xl text-slate-700 mb-10 max-w-xl leading-relaxed font-medium">
        Especialistas en acero inoxidable, CNC, impresión 3D y automatización. <br className="hidden sm:block"/>
        Fabricamos piezas y proyectos a medida con máxima precisión.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all shadow-[0_8px_20px_rgba(220,38,38,0.3)] font-semibold text-lg" href="#">
          Cotizar Proyecto
        </motion.a>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 rounded-full text-slate-900 bg-white hover:bg-gray-50 transition-all shadow-lg font-semibold text-lg border border-gray-100" href="#">
          Nuestros Servicios
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
</section>
'''

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(before_hero + new_hero + after_hero)

print("Done")
