"use client";

import { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

export default function Home() {

  const darkSectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: darkScrollY } = useScroll({

    target: darkSectionRef,

    offset: ["start 90%", "end 10%"]

  });

  const darkMargin = useTransform(darkScrollY, [0, 0.25, 0.75, 1], ["2rem", "0rem", "0rem", "2rem"]);

  const darkRadius = useTransform(darkScrollY, [0, 0.25, 0.75, 1], ["3rem", "0rem", "0rem", "3rem"]);

  return (

    <div className="bg-gray-50 text-gray-900 font-sans antialiased overflow-x-hidden">

<Navbar />

<section className="relative pt-36 pb-24 lg:pt-40 lg:pb-40 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-start">

  {/* 3-Panel Diagonal Collage Background */}
    <div className="absolute inset-0 z-0 bg-[#FBFBFD]">

      {/* === DESKTOP: Three diagonal parallelogram panels === */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">

        {/* Single Image Split into 3 Diagonal Panels */}
        <div 
          className="absolute inset-y-0 right-0 w-[55%]"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <img src="/laser_cutter.jpg" alt="Laser Cutting" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/5"></div>

          {/* Gap 1 */}
          <div 
            className="absolute -top-10 -bottom-10 w-4 bg-[#FBFBFD]" 
            style={{ left: "33%", transform: "skewX(-10deg)" }}
          ></div>

          {/* Gap 2 */}
          <div 
            className="absolute -top-10 -bottom-10 w-4 bg-[#FBFBFD]" 
            style={{ left: "66%", transform: "skewX(-10deg)" }}
          ></div>
        </div>

        {/* Stronger white fade on left edge to protect text readability from the images moving left */}
        <div className="absolute inset-y-0 left-[35%] w-[25%] bg-gradient-to-r from-[#FBFBFD] via-[#FBFBFD]/90 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* === MOBILE: Single diagonal image below text === */}
      <div className="lg:hidden absolute inset-0">
        <div 
          className="absolute bottom-0 left-0 w-full h-[45%]"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <img src="/laser_cutter.jpg" alt="Laser Cutting" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

    </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-3xl">

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.2 }} className="text-5xl lg:text-[5.5rem] font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">

        Fabricamos{" "}<br className="hidden sm:block"/>lo que imaginas.

      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.3 }} className="text-lg lg:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">

        Diseño industrial, CNC, impresión 3D y acabados especializados. Todo bajo un mismo techo.

      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">

        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all shadow-[0_8px_20px_rgba(220,38,38,0.3)] font-semibold text-lg" href="https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." target="_blank" rel="noopener noreferrer">
          Cotizar Proyecto
        </motion.a>

        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 rounded-full text-slate-900 bg-white/80 backdrop-blur-md hover:bg-white transition-all shadow-lg font-semibold text-lg border border-gray-100" href="/servicios">
          Ver Servicios
        </motion.a>

      </motion.div>

    </motion.div>

  </div>

</section>

  <div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Real Brand Logos - Infinite Marquee */}
    <div className="relative flex overflow-hidden group w-full">
      <style>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          display: flex;
          width: max-content;
          animation: scroll-logos 30s linear infinite;
        }
        .group:hover .animate-scroll-logos {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Gradient masks for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FBFBFD] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FBFBFD] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-scroll-logos opacity-80 mt-4 mb-4 items-center">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="flex flex-shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap">
            <img alt="Salesforce" className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"/>
            <img alt="Amazon" className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
            <img alt="Wayfair" className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Wayfair_logo.svg"/>
            <img alt="Etsy" className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg"/>
            <img alt="eBay" className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"/>
          </div>
        ))}
      </div>
    </div>

  </div>

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

<div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-800 bg-white border border-gray-200 mb-6 shadow-sm">

        ¿Suena familiar?

      </div>

<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 max-w-3xl mx-auto">

        Cuando la manufactura falla, <br/><span className="text-red-600">todo se detiene.</span>

</h2>

<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">

<div className="h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">

<img alt="Falta de Precisión" className="w-full h-full object-cover" src="/falta_precision.jpg"/>

</div>

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">

<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold text-gray-900">Piezas fuera de tolerancia</h3>

</div>

</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">

<div className="h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">

<img alt="Desgaste" className="w-full h-full object-cover" src="/desgaste_piezas.jpg"/>

</div>

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">

<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold text-gray-900">Desgaste prematuro</h3>

</div>

</div>

</div>

<div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Entregas tardías</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Procesos Obsoletos</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Sin automatización</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Materiales incorrectos</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Producción limitada</span>

</div>

</div>

</section>

<motion.section ref={darkSectionRef} style={{ marginLeft: darkMargin, marginRight: darkMargin, borderRadius: darkRadius }} className="py-24 bg-[#0a0a0a] text-white my-12 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] opacity-50"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

<div>

<p className="text-red-500 font-semibold mb-4 text-sm tracking-wider uppercase">NOSOTROS</p>

<h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">

<span className="text-red-600">Manufactura precisa.</span><br/>

            Sin excusas.

          </h2>

<p className="text-gray-400 text-xl max-w-lg mb-8">

            Tecnología avanzada, equipo experto y resultados que hablan solos.

          </p>

</div>

<div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">

<img alt="Castromeria Soluciones" className="w-full h-full object-cover opacity-90" src="/solucion_manufactura.jpg"/>

</div>

</div>

<div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">

<div>

<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-yellow-400 mb-6 border border-white/10 shadow-sm">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold mb-4">Mecanizado CNC</h3>

<p className="text-gray-400 text-base leading-relaxed">

            Piezas, ejes, engranajes y moldes fabricados con precisión micrométrica.

          </p>

</div>

<div>

<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-yellow-400 mb-6 border border-white/10 shadow-sm">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold mb-4">Diseño e Impresión 3D</h3>

<p className="text-gray-400 text-base leading-relaxed">

            De la idea al prototipo funcional en días, no semanas.

          </p>

</div>

<div>

<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-yellow-400 mb-6 border border-white/10 shadow-sm">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold mb-4">Acabados Especializados</h3>

<p className="text-gray-400 text-base leading-relaxed">

            Anodizado y teflonado para piezas que resisten más y lucen mejor.

          </p>

</div>

</div>

<div className="mt-16 text-center">

<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg" href="/servicios">
            Explorar Servicios
          </a>

</div>

</div>

</motion.section>

  {/* New "Proyectos a Medida" Section */}

  <section className="py-24 bg-white relative">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="flex flex-col items-center justify-center relative z-10 pb-56 w-full">

        {/* Center Column */}

        <div className="pt-10 w-full">
          <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-24">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 mb-6 shadow-sm">
              Precisión
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Cada pieza, perfecta.</h2>
            <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
              Procesos modernos, resultados confiables. Así de simple.
            </p>
          </div>

          <div className="flex flex-row justify-start items-center gap-4 mb-8 relative flex-nowrap w-full">

            {/* UNIFIED CONTINUOUS RED LINE */}

            <div className="absolute left-7 top-7 w-[1200px] h-[1500px] pointer-events-none z-0 hidden lg:block">

              <svg width="100%" height="100%" style={{ overflow: 'visible' }}>

                

                {/* Animated red comet */}

                <motion.path

                  d="M 0 0 L 0 180 Q 0 200 20 200 L 1100 200 Q 1120 200 1120 220 L 1120 800 C 1120 1100, 300 1100, 300 1200"

                  fill="none" stroke="#ef4444" strokeWidth={4} strokeLinecap="round"

                  initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}

                  animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}

                  transition={{ duration: 6, repeat: Infinity, ease: "linear", times: [0, 0.05, 0.95, 1] }}

                  style={{ filter: "drop-shadow(0px 0px 8px rgba(239,68,68,0.9))" }}

                />




              </svg>

            </div>

                            {/* Logos positioned exactly on the horizontal line, animated Left to Right */}

              <div className="absolute top-[188px] pt-[16px] pb-[16px] left-[-150px] pointer-events-auto z-20 w-[1500px] overflow-hidden">

                <style>{`

                  @keyframes marqueeRightMobile {

                    from { transform: translateX(calc(-100% - 1.5rem)); } /* gap-6 = 1.5rem */

                    to { transform: translateX(0%); }

                  }

                  @keyframes marqueeRightDesktop {

                    from { transform: translateX(calc(-100% - 2rem)); } /* gap-8 = 2rem */

                    to { transform: translateX(0%); }

                  }

                  .flawless-marquee {

                    animation: marqueeRightMobile 15s linear infinite;

                  }

                  @media (min-width: 768px) {

                    .flawless-marquee {

                      animation: marqueeRightDesktop 15s linear infinite;

                    }

                  }

                `}</style>

                <div className="flex gap-6 md:gap-8 w-max">

                  {[0, 1, 2, 3, 4, 5, 6].map((group) => (

                    <div key={group} className="flex gap-6 md:gap-8 shrink-0 flawless-marquee" aria-hidden={group !== 0 ? "true" : undefined}>

                      {[
                        "/parts/part_1.jpg",
                        "/parts/part_2.jpg",

                        "/parts/part_3.jpg",

                        "/parts/part_4.jpg",

                        "/parts/part_5.jpg",

                        "/parts/part_6.jpg",

                        "/parts/part_7.jpg",

                        "/parts/part_8.jpg",

                        "/parts/part_9.jpg",

                        "/parts/part_10.jpg",

                        "/parts/part_11.jpg",

                        "/parts/part_12.jpg"

                      ].map((imgUrl, n) => (

                        <div key={`${group}-${n}`} className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm relative z-20 overflow-hidden">

                          <img src={imgUrl} alt={`Model ${n}`} className="w-full h-full object-cover" />

                        </div>

                      ))}

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* White Logo Circle (Rendered ON TOP of SVG and Aura) */}

            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-20">

              {/* Static Red Ring around the logo */}

              <div className="absolute inset-[-4px] rounded-full border-[3px] border-red-500 z-0" />

              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain relative z-10" />

            </div>

          </div>

          </div>

        </div>

      {/* Row of 8 Circular Placeholders intersected by the line */}

  </section>

<section className="py-24 bg-white relative overflow-x-hidden">

<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="flex flex-col items-center text-center mb-32 max-w-4xl mx-auto">
  <div>
    <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">
      &quot;Nos fabricaron engranajes a medida con precisión impecable. Las fallas bajaron a cero.&quot;
    </blockquote>
    <div className="flex items-center justify-center gap-4 text-left">
      <img alt="Robert Fox" className="w-14 h-14 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"/>
      <div>
        <div className="font-bold text-gray-900">Robert Fox</div>
        <div className="text-gray-500 text-sm">Gerente de Planta</div>
      </div>
    </div>
  </div>
</div>

<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="relative bg-red-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl mt-16 overflow-hidden">

<div className="absolute inset-0 opacity-10 rounded-[3rem] overflow-hidden" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

<div className="relative z-20">

<h2 className="text-4xl md:text-5xl font-bold mb-6">Tu próximo proyecto empieza aquí.</h2>

<p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">Cuéntanos qué necesitas. Nosotros lo hacemos realidad.</p>

<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20hablar%20con%20un%20ingeniero%20sobre%20un%20proyecto." target="_blank" rel="noopener noreferrer">
            Hablar con un Ingeniero
          </motion.a>

</div>

</motion.div>

</div>

</section>

  {/* </div> End unified line wrapper */}

<Footer />

    </div>

  );

}
