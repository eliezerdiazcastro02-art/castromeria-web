const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');

// Hero Fix
let hero_bad = \<main className="pt-28 lg:pt-32 pb-16 lg:pb-24 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-4xl mx-auto text-center">
<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.2 }} className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            DiseAo y FabricaciA3n <br/> Industrial a Medida
          </motion.h1>
<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.3 }} className="text-[1.05rem] text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed font-medium">
            Especialistas en acero inoxidable, CNC, impresiA3n 3D y automatizaciA3n. <br className="hidden sm:block"/>
            Fabricamos piezas y proyectos a medida con mAxima precisiA3n.
          </motion.p>
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4">
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all shadow-[0_8px_20px_rgba(220,38,38,0.25)] font-semibold" href="#">
            Cotizar Proyecto
          </motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-7 py-3 rounded-full text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors font-semibold shadow-sm" href="#">
            Nuestros Servicios
          </motion.a>
</motion.div>
</motion.div>\;

let hero_good = \<section className="pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-transparent">
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
</motion.div>\;

// We also need to change the </main> to </section> for the hero section
content = content.replace(hero_bad, hero_good);
content = content.replace('</main>', '</section>'); // Only the hero section used </main>

fs.writeFileSync('app/page.tsx', content, 'utf-8');
