"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {

  const darkSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: darkScrollY } = useScroll({
    target: darkSectionRef,
    offset: ["start 90%", "end 10%"]
  });
  const darkMargin = useTransform(darkScrollY, [0, 0.25, 0.75, 1], ["2rem", "0rem", "0rem", "2rem"]);
  const darkRadius = useTransform(darkScrollY, [0, 0.25, 0.75, 1], ["3rem", "0rem", "0rem", "3rem"]);

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

  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">


<motion.header 
  initial={{ y: -30, opacity: 0 }} 
  animate={{ y: 0, opacity: 1 }} 
  transition={{ type: "spring", bounce: 0, duration: 0.8 }} 
  className="fixed top-6 left-0 right-0 z-50 px-6"
>
<div className="max-w-5xl mx-auto">
<div className="bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-full px-8 py-3 flex items-center justify-between transition-all duration-300">
<div className="flex items-center gap-2">

<img src="/logo.jpg" alt="Castromeria Logo" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
<span className="font-bold text-lg tracking-tight text-gray-900">Castromeria</span>
</div>
<nav className="hidden md:flex space-x-8">
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors" href="#">Nosotros</motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors" href="#">Servicios</motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors" href="#">Catálogo de Productos</motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors" href="#">Tienda</motion.a>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors" href="#">Contáctanos</motion.a>
</nav>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900 p-1">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>
</motion.header>


<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-center">
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

  {/* New "Proyectos a Medida" Section */}
  <section className="py-24 bg-white relative overflow-x-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* SVG Animated Line */}
      {/* It needs to start from the icon (left ~32px, top ~250px depending on layout), go down, and turn right across the screen */}
      

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
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
              
              {/* Perfectly Anchored SVG Line and Logos */}
              <div className="absolute left-1/2 top-1/2 w-[1200px] h-[300px] pointer-events-none z-0">
                <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                  <motion.path 
                    d="M 0 0 L 0 180 Q 0 200 20 200 L 1200 200" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    strokeDasharray="8 8" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 2, ease: "easeInOut" }} 
                  />
                </svg>
                {/* Logos positioned exactly on the horizontal line (Y=160px from icon center, radius=24px -> top=160-24=136px) */}
                <div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
                </div>
              </div>
            </div>
            <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>
          </div>


          
        </div>

        {/* Right Column (Isometric Image) */}
        <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
          <img alt="Platform Isometric Graphic" className="w-full rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZeQJYODD5T2UV02uUMdPaJVrTts4Z3JDYndbnnJacoG1mPlkCxvy_KyO-8z9so9gUGB4YwmSY50OP8hcV6gbk5R_9Z741n-8CedxwgY5GeSSIFciX-1Fl3t_0ktHR6BcPb6OeMSG70aYVb_58sFyK1v-920HaxezirZ8R8NK9AL_oWrtYA-nqh40M0Qg0fhPirJd_F8GleqnNB2kV-JwJ4_WkqX8pKINwyIqOze9d57UuOeaILcG"/>
        </div>

      </div>

      {/* Row of 8 Circular Placeholders intersected by the line */}
      </div>
  </section>

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
<img alt="Inaccurate Order Graphic" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD30MhymovXNUPob8wNhFK6JcRR0d3ie25bVpQ-QY2ZXo36CSOwZuE5l4A8s9X7CSVIM4V-guUgjJblvoo9UcHsJCU4Yl4eiXfhKulOmIhZyfELdaDktWVZIBXfO0kaIJNJhJHgryOAVjWentFB9Uc9l5Vk8LtrB0Oj8bzSjTHChAz4fa-rsdzfgzXc9DxtKU20vlhn9-pPWMtD0jCy_0ylFUSoGhdzzxUErkbPWyH3YdoXdcAeA4K"/>
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
<img alt="Visibility Graphic" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz4X_-NmADKZtO6U3J-jiSFzs40Nurwxh5wkQTr_OUEa6GJj_R4fBJ3eCX35iA4eg5BKc7wgB6hRmz7lcWXRpjYesGFNbz1z7B5MCYTCaLo7mHaIRX6LMs0cirmCmJ3fGwvdoG25WMDQLHexU6AB1m1yIHJ0F2ippUbXeiDnEZe2cckzTNEUtFNonI-vBqqobtR3vZY5-5zJEYurOuTRT13mxc7eNF74KnzflOYvFxBITvX_3jERAd"/>
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
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-[10px]">●</span> Tiempos de Entrega Largos</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-[10px]">●</span> Procesos Obsoletos</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-[10px]">●</span> Falta de Automatización</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-[10px]">●</span> Materiales Inadecuados</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm"><span className="text-red-500 mr-1.5 text-[10px]">●</span> Límites en la Producción</span>
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
            Toma decisiones informadas con las analíticas de Castromeria, diseñadas para transformór el caos en claridad y aumentar tu productividad hasta un 30%.
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


<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-sm font-semibold text-gray-800 mb-4">Soluciones</span>
<h2 className="text-4xl font-bold text-gray-900 mb-6">Soluciones Técnicas<br/>de Alto Nivel</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales para cada etapa del proceso de desarrollo de productos y fabricación industrial.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all group">
<h3 className="text-xl font-bold text-gray-900 mb-3">Diseño Industrial</h3>
<p className="text-gray-600 text-sm mb-6 h-16">Prototipado rápido y diseño asistido (CAD/CAM) para crear soluciones funcionales y optimizadas a la medida.</p>
<div className="h-48 rounded-xl bg-white overflow-hidden border border-gray-100 group-hover:border-red-200 transition-colors relative">
<img alt="Warehousing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChk0n0WMsjHf49TSsuO6UB_UWfK4oN2hk0KEvmpneT0ORmZs7huVMC47jFo7icOgL3bzskvsnD7V4SEXXgu8rDzEaBoAtXrCdgLL0YqJZJroj-xtekwOZEUGEd8IplktAX1rrQPjpFmynEAGZgC5c_HB0lPUjDGhZyx8OUyTlplU9Lfe1OVhDM6kS2SstaRLJKCIgzK7vYu0ALTkhfKHWfhNuqoRrtzDtC2eMiNj2yUdngemdikhyX"/>
</div>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all group">
<h3 className="text-xl font-bold text-gray-900 mb-3">Mecanizado CNC</h3>
<p className="text-gray-600 text-sm mb-6 h-16">Torno y fresado CNC para la fabricación de ejes, engranajes y piezas complejas en todo tipo de materiales.</p>
<div className="h-48 rounded-xl bg-white overflow-hidden border border-gray-100 group-hover:border-red-200 transition-colors relative">
<img alt="Fulfillment" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaG6Xfp4cEAl6vjhFEEMpETb1g0UvVrY8H8dvcN0DeM3rqkmwREi8hpIDBjAF6frtMásoZ60uGAWchBAEcT-PbDBhZem-vFOs7rVn-L3F9PxDSW3SDTj2C1EQvpjCXmY2BIUjYTWLZkmMnFaE_IyUuEZx2OnC9RY2hKlHsakHjI6x1D6-kFzSAn9LwLHBrRFklVydmlZI8s86rTE9ACKyejSeO5OtjO1BbW-4J64ilivPZ_RHOKIMh"/>
</div>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all group">
<h3 className="text-xl font-bold text-gray-900 mb-3">Acero Inoxidable</h3>
<p className="text-gray-600 text-sm mb-6 h-16">Diseño y fabricación de inmuebles, mobiliario y estructuras altamente resistentes en acero inoxidable.</p>
<div className="h-48 rounded-xl bg-white overflow-hidden border border-gray-100 group-hover:border-red-200 transition-colors relative">
<img alt="Transloading" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDElvQxtkNOIxnDMEt6ia6Fx-oWlSf-AM-olJGXi5McGzyqWjoNzxDUyPp-bxtAns1pd3laLH3awjTV00GDLMeVVe6MdtzR0qkiOv4wVPWn3vsc-JpwUOtec6pG8GN1QbdPuHy_QExjBwo6wxXLo8K2MtTwWapxzYawa9Eu3nFPbNxk0Ld_FgdM45OmS8W-IIjzdeUjX7vUcM_r1ASh6tWwKmVf3fE-vLf3BL05j4CAIqlzWA-Vz4xK"/>
</div>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all group lg:col-span-2 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-xl font-bold text-gray-900 mb-3">Anodizado y Teflonado</h3>
<p className="text-gray-600 text-sm">Tratamientos superficiales especializados que mejoran el rendimiento, evitan la corrosión y alargan la vida útil.</p>
</div>
<div className="w-full md:w-1/2 h-48 rounded-xl bg-white overflow-hidden border border-gray-100 group-hover:border-red-200 transition-colors relative">
<img alt="Bonded Warehouses" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsCdidGuBzxnNM6gOj3i6yzvT44jM_FdzaP2fLEh9F5axHE5R975lj3inJMZ11Yd0nyAFd8eeM425dZfu5AfRT3bjp8hC2hRxcNBj9hmhd9YNEPqEiDywfIL-_elpVEGgGBJbdwYzZRhUxNXBKoom_FnogGxX_GJ2KFshCVaKUMO7kvyY_6Pu3KAujAyImvPTsIB8xJz80T_WY7VS5ERBCsANOAwarC6OQfkmYMczUCTj_lczfdv2h"/>
</div>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all group">
<h3 className="text-xl font-bold text-gray-900 mb-3">Automatización</h3>
<p className="text-gray-600 text-sm mb-6 h-16">Desarrollo de sistemas mecánicos y automatizados para optimizar el rendimiento de las líneas de producción industrial.</p>
<div className="h-48 rounded-xl bg-white overflow-hidden border border-gray-100 group-hover:border-red-200 transition-colors relative">
<img alt="Transportation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_txDEyWpeBpHzL0s0NqidI8YJNdp_1qga6Bv2MaVjrB81yxSyPI9FAs-OqJtBp30uxuwh-91dyYcxOZ0ZAFBEL26VcsR4gP92Xd11kmS--iyJSKDmQx9EiP4eO0NDJXrbnb_0wXH6Apeo4jdxXc8YbEdP5xGtI7ky_pAt4Puhs7hDDyOkDhzPU0Lwc7sqLX0ZsdDxuv_3oVbQEblYNndaeTxxdU30yKaeRqyEa_AlQZB6dikJDWB6"/>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600 mb-6 shadow-sm">Plataforma</span>
<h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            La Precisión de <br/> Castromeria
          </h2>
<p className="text-gray-600 text-lg mb-12">
            Nuestra misión es ofrecer soluciones técnicas de alto nivel mediante procesos modernos y eficientes, garantizando resultados confiables.
          </p>
<div className="relative">

<div className="absolute left-6 top-8 w-px h-32 bg-red-200 border-l-2 border-dashed border-red-400"></div>
<div className="flex items-center gap-4 mb-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 z-10">
<img src="/logo.jpg" alt="Castromeria Logo" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
</div>
<span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>
</div>
</div>
</div>
<div className="relative">
<div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
<img alt="Platform Isometric Graphic" className="w-full rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZeQJYODD5T2UV02uUMdPaJVrTts4Z3JDYndbnnJacoG1mPlkCxvy_KyO-8z9so9gUGB4YwmSY50OP8hcV6gbk5R_9Z741n-8CedxwgY5GeSSIFciX-1Fl3t_0ktHR6BcPb6OeMSG70aYVb_58sFyK1v-920HaxezirZ8R8NK9AL_oWrtYA-nqh40M0Qg0fhPirJd_F8GleqnNB2kV-JwJ4_WkqX8pKINwyIqOze9d57UuOeaILcG"/>
</div>
</div>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">

<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
</div>
</div>
</section>


<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row gap-12 items-center mb-32">
<div className="w-48 flex-shrink-0">
<img alt="Asana Logo" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsyCkvXrFNRmcYg-dGCCiG9076sF1keNCcmQHM-rfvApfvoK__HkWt5mzdfa3yoHsRPAOvIeW0godNA3ep2xpsw7YWDO-iC9wzGF2RAKDdPV32lZ97kcp4lAHeY4scwW3WNmTGDlGh0tt_rGdXzaO4Mu_j42_undhl_SYBcVqTq7lN_0Us7pl2R7LUsmu6zxzTYnw9xfXzZAf0FVUt-yzht9LrfX2SgfffvDCAV4T1MI5tbHigW87V"/>
</div>
<div>
<blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">
            "Castromeria fabricó nuestros engranajes a medida con una precisión impecable, lo que mejoró nuestro rendimiento y redujo las fallas a cero."
          </blockquote>
<div className="flex items-center gap-4">
<img alt="Robert Fox" className="w-14 h-14 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJNzJ-KHel5CpQ9QhbKllUMtpkysQUN7y-9NYJx524jZO-UHuXCJya9Yp6a0f20E3K86VAsQgkSv8SfTAfxPMcha45vBvyV0itO78hHPpJZynmLL8porePDgu6pNBS4tpNJyUDiyVHPxvYViB6DK1iIwENJHk0l1AGmOG1ABh8fGtbnRr5k6b4mGgSPcdUAhDUNdQfzzn3jXzPR2aqrmb_V1uOLjMX3VPyM2ZWzSXEOux_S_jNiS0b"/>
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
<div className="w-32 h-32 mx-auto -mt-28 mb-8 bg-white rounded-2xl p-2 shadow-xl border border-gray-100 relative">
<img alt="CTA Graphic" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyI7cfPWcKeDU3hEYUTdP-8O3NKgQfSPVgoxzQFMWRl-u-qsyET6dhDG79bI_kHhq9wZvwEwVMX_zd-X7-Bis7S2V2TS4vxB44oDFMU3wWGx6aKfnxB43M7NHE2Y_uBHgQrcDJms4aUTN-_imJsrmTrRG15ksEeV-kYdyEHwrXS1ZHg9xPvAdySoB3BvrPWyZdtlAiknpGzpvF-Fv58AwU_DqxIUKsdC5iUCTbXo6S0fRJR16xkkxW"/>
<svg className="absolute -top-16 -right-16 w-32 h-32 text-red-300 opacity-50 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
<path d="M100,0 C50,0 50,100 0,100" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
</svg>
</div>
<h2 className="text-4xl md:text-5xl font-bold mb-6">Inicia tu proyecto industrial hoy.</h2>
<p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">
            Contactar a un Ingeniero
          </motion.a>
</div>
</motion.div>

</div>
</section>


<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<img src="/logo.jpg" alt="Castromeria Logo" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
<span className="font-bold text-xl tracking-tight text-gray-900">Castromeria</span>
</div>
<p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            4517 Washington Ave.<br/>
            Manchester, Kentucky<br/>
            39495
          </p>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Servicios</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Diseño Industrial</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Mecanizado CNC</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Transloading</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Bonded &amp; FTZ</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Industrias</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Comercio Electrónico</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Calzado y Ropa</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Logística de Cadena de Frío</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Materiales Peligrosos</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Nosotros</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Empresa</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Noticias</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Términos de servicio</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="#">Política de privacidad</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-400 text-sm">&copy; Castromeria 2024</p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">LinkedIn</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
</div>
</div>
</div>
</footer>




    </div>
  );
}
