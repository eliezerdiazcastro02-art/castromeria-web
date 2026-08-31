"use client";

import { useEffect, useRef } from "react";

import Lenis from "lenis";

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

  useEffect(() => {

    window.scrollTo(0, 0);
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

  return (

    <div className="bg-gray-50 text-gray-900 font-sans antialiased overflow-x-hidden">

<Navbar />

<section className="relative pt-36 pb-24 lg:pt-40 lg:pb-40 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-start">

  {/* Video Background */}

  <div className="absolute inset-0 z-0">

    <video

      src="/videos/video2.mp4"

      autoPlay

      loop

      muted

      playsInline

      className="absolute inset-0 w-full h-full object-cover object-center opacity-80"

    />

    {/* Subtle gradient overlay to ensure text readability */}

    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>

    {/* Franja blanca inferior para tapar el logo del video */}

    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white to-transparent"></div>

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

        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 rounded-full text-slate-900 bg-white/80 backdrop-blur-md hover:bg-white transition-all shadow-lg font-semibold text-lg border border-gray-100" href="#">

          Nuestros Servicios

        </motion.a>

      </motion.div>

    </motion.div>

  </div>

</section>

  <div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Real Brand Logos */}

    <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center lg:justify-start opacity-90 transition-all duration-300">

      <img alt="Salesforce" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"/>

      <img alt="Amazon" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>

      <img alt="Wayfair" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Wayfair_logo.svg"/>

      <img alt="Etsy" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg"/>

      <img alt="eBay" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"/>

    </div>

  </div>

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

<div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-800 bg-white border border-gray-200 mb-6 shadow-sm">

        ¿Por qué optimizar tu producción?

      </div>

<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 max-w-3xl mx-auto">

        La manufactura ineficiente genera <br/><span className="text-red-600">sobrecostos y fallas</span>

</h2>

<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">

<div className="h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">

<img alt="Inaccurate Order Graphic" className="w-full h-full object-cover" src="/taller.png"/>

</div>

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">

<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold text-gray-900">Falta de Precisión</h3>

</div>

</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">

<div className="h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">

<img alt="Visibility Graphic" className="w-full h-full object-cover" src="/taller.png"/>

</div>

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">

<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold text-gray-900">Desgaste de Piezas Clave</h3>

</div>

</div>

</div>

<div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Tiempos de Entrega Largos</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Procesos Obsoletos</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Falta de Automatización</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Materiales Inadecuados</span>

<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-xs font-bold">X</span> Límites en la Producción</span>

</div>

</div>

</section>

<motion.section ref={darkSectionRef} style={{ marginLeft: darkMargin, marginRight: darkMargin, borderRadius: darkRadius }} className="py-24 bg-gray-900 text-white my-12 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

<div>

<p className="text-red-400 font-semibold mb-4 text-sm tracking-wider uppercase">LA SOLUCIÓN</p>

<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">

<span className="text-red-500">Castromeria</span><br/>

            ofrece soluciones de manufactura de la más alta calidad.

          </h2>

<p className="text-gray-400 text-lg max-w-lg mb-8">

            Nuestra misión es ofrecer soluciones técnicas de alto nivel mediante procesos modernos y eficientes, garantizando resultados confiables.

          </p>

</div>

<div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">

<img alt="Solution Isometric Graphic" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6-ZdteQnkr0JbU3wechtd3Lgb-NZNFBRL1X48IFF2-bNHaq-X-yw8QtgJF8hYLZGKV7_uZldeEWE9W5VpsuYTpMHtEA2EcwP4I62lrpoo_AJ9otV5tgmAI2mer_cWBZFJSWWyX0IAzMjYpRDlSkTa62Orv1wdpLsx6TswTN-VnmPiUS7MbG1GPnGGgriM1dqhYYyrcHQMJTAxzywHRqNthNr3TsX51P9kOBAvQorbDAoNVXhaGWe6"/>

</div>

</div>

<div className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-16">

<div>

<div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-yellow-400 mb-6 border border-gray-700">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold mb-4">Mecanizado CNC</h3>

<p className="text-gray-400 text-sm leading-relaxed">

            Fabricamos piezas, estructuras, moldes, ejes y engranajes con tolerancias exactas usando tecnología CNC de última generación.

          </p>

</div>

<div>

<div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-yellow-400 mb-6 border border-gray-700">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold mb-4">Diseño e Impresión 3D</h3>

<p className="text-gray-400 text-sm leading-relaxed">

            Desarrollamos prototipos rápidos y precisos para llevar tus ideas desde el concepto hasta la validación industrial.

          </p>

</div>

<div>

<div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-yellow-400 mb-6 border border-gray-700">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>

</div>

<h3 className="text-xl font-bold mb-4">Acabados Especializados</h3>

<p className="text-gray-400 text-sm leading-relaxed">

            Toma decisiones informadas con las analíticas de Castromeria, diseñadas para transformar el caos en claridad y aumentar tu productividad hasta un 30%.

          </p>

</div>

</div>

<div className="mt-16 text-center">

<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg" href="#">

            Explora Nuestras Soluciones

          </a>

</div>

</div>

</motion.section>

  {/* New "Proyectos a Medida" Section */}

  <section className="py-24 bg-white relative">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10 pb-56">

        {/* Left Column */}

        <div className="pt-10">

          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 mb-6 shadow-sm">

            Plataforma

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">La Precisión de <br/>Castromeria</h2>

          <p className="text-gray-600 text-lg mb-16 max-w-lg leading-relaxed">

            Nuestra misión es ofrecer soluciones técnicas de alto nivel mediante procesos modernos y eficientes, garantizando resultados confiables.

          </p>

          <div className="flex flex-row items-center gap-4 mb-8 relative flex-nowrap">

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

                {/* Arrow at end */}

                <polygon points="-8,1185 8,1185 0,1200" fill="#dc2626" transform="translate(300, 0)" />

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

                        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1537553556942-e19a4e402b85?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=100&auto=format&fit=crop",

                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=100&auto=format&fit=crop"

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

<div className="flex flex-col md:flex-row gap-12 items-center mb-32">

<div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">

<img alt="Company Factory" className="w-full h-full object-cover" src="/taller.png"/>

</div>

<div>

<blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">

            &quot;Castromeria fabricó nuestros engranajes a medida con una precisión impecable, lo que mejoró nuestro rendimiento y redujo las fallas a cero.&quot;

          </blockquote>

<div className="flex items-center gap-4">

<img alt="Robert Fox" className="w-14 h-14 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"/>

<div>

<div className="font-bold text-gray-900">Robert Fox</div>

<div className="text-gray-500 text-sm">Gerente de Planta, Industria XYZ</div>

</div>

</div>

</div>

</div>

<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="relative bg-red-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl mt-16 overflow-hidden">

<div className="absolute inset-0 opacity-10 rounded-[3rem] overflow-hidden" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

<div className="relative z-20">

<h2 className="text-4xl md:text-5xl font-bold mb-6">Inicia tu proyecto industrial hoy.</h2>

<p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.</p>

<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">

            Contactar a un Ingeniero

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
