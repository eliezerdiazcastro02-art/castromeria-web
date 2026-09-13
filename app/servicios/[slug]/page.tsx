"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useEffect, use } from "react";
const servicesData = {
  "fabricacion": {
    title: "Fabricación Avanzada",
    heroDesc: "Fabricación precisa, eficiente y a cualquier escala.",
    img: "/real_welding.jpg",
    details: [
      "Mecanizado por arranque de viruta y abrasión",
      "Trabajos grandes en tornería",
      "Cortes a láser de precisión",
      "Soldadura profesional y certificada",
      "Fabricación de piezas en aceros",
      "Fabricación de muebles en inoxidable",
      "Estructuras y perfiles metálicos",
      "Estructuras decorativas y arquitectónicas",
      "Reparación y fabricación de moldes",
      "Fabricación y reparación de ejes y engranajes",
      "Fabricación de fixtures y dispositivos"
    ]
  },
  "diseno-industrial": {
    title: "Diseño Industrial",
    heroDesc: "De la idea al modelo 3D listo para fabricar.",
    img: "/cad_design.jpg",
    details: [
      "Diseño de productos y componentes mecánicos",
      "Modelado CAD 3D avanzado",
      "Análisis de tolerancias y ajustes",
      "Simulación de esfuerzos y resistencia",
      "Optimización de diseños para manufactura (DFM)",
      "Prototipado rápido virtual"
    ]
  },
  "impresion-3d": {
    title: "Impresión 3D",
    heroDesc: "Prototipos funcionales y piezas complejas, impresas en días.",
    img: "/laser_cutting_sparks.png",
    details: [
      "Prototipado rápido de alta precisión",
      "Impresión de piezas únicas y repuestos descontinuados",
      "Fabricación con polímeros de ingeniería (ABS, PLA, PETG, Nylon)",
      "Validación de ensambles antes de producción en masa",
      "Creación de moldes maestros y modelos de fundición"
    ]
  },
  "anodizado-teflonado": {
    title: "Anodizado y Teflonado",
    heroDesc: "Protección y acabado para piezas que deben durar.",
    img: "/anodizado_parts.png",
    details: [
      "Anodizado duro para piezas de aluminio",
      "Protección extrema contra la corrosión",
      "Aumento de resistencia al desgaste mecánico",
      "Teflonado industrial (PTFE) antiadherente",
      "Reducción de fricción en componentes dinámicos",
      "Acabados estéticos y funcionales de larga duración"
    ]
  },
  "asesoria-tecnica": {
    title: "Asesoría Técnica",
    heroDesc: "Te ayudamos a tomar las mejores decisiones técnicas para tu proyecto.",
    img: "/asesoria_tecnica.png",
    details: [
      "Asesoramiento integral de proyectos industriales",
      "Diseño e implementación de automatización",
      "Optimización de procesos de manufactura",
      "Servicios profesionales de pintura industrial",
      "Evaluación de viabilidad técnica y económica"
    ]
  },
  "facilidades": {
    title: "Facilidades y Logística",
    heroDesc: "Tu planta organizada, segura y lista para producir.",
    img: "/grua_spider_1.png",
    details: [
      "Diseño de layouts de planta y flujos de trabajo",
      "Servicios de movilidad y reubicación de maquinaria",
      "Implementación de metodologías 5S y mejora continua",
      "Diseño de sistemas de almacenamiento industrial seguro",
      "Adaptación de espacios para nuevas líneas de producción"
    ]
  }
};

export default function ServiceSubpage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);

  // Use optional chaining or check params to ensure it's loaded properly
  if (!resolvedParams || !resolvedParams.slug) return null;

  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* Hero with Parallax Image */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFD] via-transparent to-[#FBFBFD]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={appleSpring}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {service.heroDesc}
          </p>
        </motion.div>
      </section>

      {/* Details Grid Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={appleSpring}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Lo que podemos hacer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.details.map((detail, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...appleSpring, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#E5252A]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{detail}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={appleSpring}
          className="max-w-4xl mx-auto bg-black text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-red-600/20 to-transparent opacity-50 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Necesitas {service.title.toLowerCase()}?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Cuéntanos tu proyecto. Te damos la mejor solución.
            </p>
            <a href="https://wa.me/18099956395" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-300">
              Cotizar Ahora
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
