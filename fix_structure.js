const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');

// 1. Restore the two </div>s I deleted before </main>
content = content.replace('</div>\n</div>\n</div>\n</main>', '</div>\n</div>\n</div>\n</div>\n</div>\n</main>');

// 2. Fix the CTA section mess
let cta_mess = \</svg><motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="py-24 bg-red-600 text-center relative overflow-hidden">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Inicia tu proyecto industrial hoy.</h2>
<p className="text-xl text-red-100 mb-10 font-medium">Soluciones tAccnicas de alto nivel, desde el diseAo 3D hasta la fabricaciA3n final.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">
          Contactar a un Ingeniero
        </motion.a>
</div>
</motion.section>
</div>
</div>
</div>
</section>\;

let cta_fixed = \</svg>
</div>

<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="py-24 bg-red-600 text-center relative overflow-hidden rounded-[2rem] shadow-2xl">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Inicia tu proyecto industrial hoy.</h2>
<p className="text-xl text-red-100 mb-10 font-medium">Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">
          Contactar a un Ingeniero
        </motion.a>
</div>
</motion.div>
</div>
</div>
</section>\;

content = content.replace(cta_mess, cta_fixed);

fs.writeFileSync('app/page.tsx', content, 'utf-8');
console.log('Structure fixed');
