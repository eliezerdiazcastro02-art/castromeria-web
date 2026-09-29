"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useEffect, use, useState } from "react";
import { AnimatePresence } from "framer-motion";
const servicesData = {
  "fabricacion": {
    title: "Fabricación Avanzada",
    heroDesc: "Fabricación precisa, eficiente y a cualquier escala.",
    img: "/real_welding.jpg",
    details: [
      { name: "Mecanizado por arranque de viruta y abrasión", desc: "Procesos de torneado, fresado y rectificado para piezas con tolerancias exigentes en cualquier metal.", img: "/subservicios/mecanizado.png" },
      { name: "Trabajos grandes en tornería", desc: "Capacidad para tornear piezas de gran diámetro y longitud con equipos CNC de alta potencia.", img: "/subservicios/torneria.jpg" },
      { name: "Cortes a láser de precisión", desc: "Corte limpio y rápido en acero, aluminio e inoxidable con acabado listo para ensamblar.", img: "/subservicios/cortes-laser.jpeg" },
      { name: "Soldadura profesional y certificada", desc: "Soldadura MIG, TIG y electrodo con personal certificado para estructuras críticas.", img: "/subservicios/soldadura.jpeg" },
      { name: "Fabricación de piezas en aceros", desc: "Piezas a medida en acero al carbono, inoxidable y aleaciones especiales según plano.", img: "/subservicios/piezas-aceros.png" },
      { name: "Fabricación de muebles en inoxidable", desc: "Mesas, estantes y mobiliario industrial en acero inoxidable 304/316 para uso alimenticio e industrial.", img: "/subservicios/muebles-inox.png" },
      { name: "Estructuras y perfiles metálicos", desc: "Diseño y fabricación de estructuras portantes, marcos y soportes para plantas industriales.", img: "/subservicios/estructuras-metalicas.png" },
      { name: "Estructuras decorativas y arquitectónicas", desc: "Barandas, fachadas, pérgolas y elementos decorativos en metal con acabado premium.", img: "/subservicios/estructuras-decorativas.png" },
      { name: "Reparación y fabricación de moldes", desc: "Moldes de inyección, soplado y compresión — reparamos los existentes o fabricamos nuevos.", img: "/subservicios/reparacion-moldes.png" },
      { name: "Fabricación y reparación de ejes y engranajes", desc: "Ejes, piñones y engranajes rectos o helicoidales mecanizados según especificaciones exactas.", img: "/subservicios/ejes-engranajes.png" },
      { name: "Fabricación de fixtures y dispositivos", desc: "Dispositivos de sujeción y posicionamiento para líneas de producción y ensamble.", img: "/subservicios/fixtures.png" }
    ]
  },
  "diseno-industrial": {
    title: "Diseño Industrial",
    heroDesc: "De la idea al modelo 3D listo para fabricar.",
    img: "/cad_design.jpg",
    details: [
      { name: "Diseño de productos y componentes mecánicos", desc: "Desarrollo completo de productos desde el concepto hasta los planos de manufactura.", img: "/subservicios/diseno-productos.png" },
      { name: "Modelado CAD 3D avanzado", desc: "Modelado paramétrico en SolidWorks y Fusion 360 con ensambles y despieces detallados.", img: "/subservicios/modelado-cad-3d.png" },
      { name: "Análisis de tolerancias y ajustes", desc: "Verificamos que todas las piezas encajen perfectamente antes de fabricar.", img: "/subservicios/tolerancias-ajustes.png" },
      { name: "Simulación de esfuerzos y resistencia", desc: "Análisis FEA para garantizar que tu diseño resiste las cargas reales de operación.", img: "/subservicios/simulacion-esfuerzos.png" },
      { name: "Optimización de diseños para manufactura (DFM)", desc: "Ajustamos tu diseño para que sea más fácil, rápido y económico de fabricar.", img: "/subservicios/optimizacion-dfm.png" },
      { name: "Prototipado rápido virtual", desc: "Renders fotorrealistas y animaciones para validar el diseño antes de invertir en producción.", img: "/subservicios/prototipado-virtual.png" }
    ]
  },
  "impresion-3d": {
    title: "Impresión 3D",
    heroDesc: "Prototipos funcionales y piezas complejas, impresas en días.",
    img: "/laser_cutting_sparks.png",
    details: [
      { name: "Prototipado rápido de alta precisión", desc: "Prototipos funcionales en 24-72 horas para validar forma, ajuste y función.", img: "/subservicios/prototipado-rapido.png" },
      { name: "Impresión de piezas únicas y repuestos descontinuados", desc: "Reproducimos piezas que ya no se fabrican a partir de muestra o plano.", img: "/subservicios/piezas-unicas.png" },
      { name: "Fabricación con polímeros de ingeniería (ABS, PLA, PETG, Nylon)", desc: "Materiales de grado industrial para piezas que necesitan resistencia mecánica y térmica.", img: "/subservicios/polimeros-ingenieria.png" },
      { name: "Validación de ensambles antes de producción en masa", desc: "Imprimimos el ensamble completo para verificar que todo encaje antes de invertir en moldes.", img: "/subservicios/validacion-ensambles.png" },
      { name: "Creación de moldes maestros y modelos de fundición", desc: "Modelos impresos en 3D que sirven como referencia exacta para procesos de fundición.", img: "/subservicios/moldes-maestros.png" }
    ]
  },
  "anodizado-teflonado": {
    title: "Anodizado y Teflonado",
    heroDesc: "Protección y acabado para piezas que deben durar.",
    img: "/anodizado_parts.png",
    details: [
      { name: "Anodizado duro para piezas de aluminio", desc: "Capa protectora de óxido controlado que multiplica la dureza superficial del aluminio.", img: "/subservicios/anodizado-duro.png" },
      { name: "Protección extrema contra la corrosión", desc: "Tus piezas resisten ambientes salinos, húmedos y químicamente agresivos.", img: "/subservicios/proteccion-corrosion.png" },
      { name: "Aumento de resistencia al desgaste mecánico", desc: "Superficie hasta 3 veces más dura que el aluminio sin tratar.", img: "/subservicios/resistencia-desgaste.png" },
      { name: "Teflonado industrial (PTFE) antiadherente", desc: "Recubrimiento antiadherente y de baja fricción para componentes en movimiento.", img: "/subservicios/teflonado-ptfe.png" },
      { name: "Reducción de fricción en componentes dinámicos", desc: "Ideal para guías, pistones y piezas deslizantes que necesitan movimiento suave.", img: "/subservicios/reduccion-friccion.png" },
      { name: "Acabados estéticos y funcionales de larga duración", desc: "Colores y acabados que no se pelan ni se desgastan con el uso.", img: "/subservicios/acabados-esteticos.png" }
    ]
  },
  "asesoria-tecnica": {
    title: "Asesoría Técnica",
    heroDesc: "Te ayudamos a tomar las mejores decisiones técnicas para tu proyecto.",
    img: "/asesoria_tecnica.png",
    details: [
      { name: "Asesoramiento integral de proyectos industriales", desc: "Te acompañamos desde la planificación hasta la puesta en marcha de tu proyecto.", img: "/subservicios/asesoramiento-integral.png" },
      { name: "Diseño e implementación de automatización", desc: "Sistemas PLC, sensores y actuadores para automatizar procesos repetitivos.", img: "/subservicios/automatizacion.png" },
      { name: "Optimización de procesos de manufactura", desc: "Analizamos tu línea de producción y encontramos cuellos de botella para mejorar eficiencia.", img: "/subservicios/optimizacion-procesos.png" },
      { name: "Servicios profesionales de pintura industrial", desc: "Pintura electrostática, epóxica y de alta temperatura con acabado uniforme.", img: "/subservicios/pintura-industrial.png" },
      { name: "Evaluación de viabilidad técnica y económica", desc: "Antes de invertir, te decimos si tu proyecto es factible y cuánto costará.", img: "/subservicios/viabilidad-tecnica.png" }
    ]
  },
  "facilidades": {
    title: "Facilidades y Logística",
    heroDesc: "Tu planta organizada, segura y lista para producir.",
    img: "/grua_spider_1.png",
    details: [
      { name: "Diseño de layouts de planta y flujos de trabajo", desc: "Optimizamos la distribución de tu planta para reducir tiempos y movimientos innecesarios.", img: "/subservicios/layouts-planta.png" },
      { name: "Servicios de movilidad y reubicación de maquinaria", desc: "Movemos equipos pesados de forma segura con grúas y plataformas especializadas.", img: "/subservicios/reubicacion-maquinaria.png" },
      { name: "Implementación de metodologías 5S y mejora continua", desc: "Organizamos tu taller para que cada herramienta tenga su lugar y todo fluya mejor.", img: "/subservicios/metodologias-5s.png" },
      { name: "Diseño de sistemas de almacenamiento industrial seguro", desc: "Racks, estanterías y sistemas de almacenaje diseñados para tu inventario específico.", img: "/subservicios/almacenamiento-seguro.png" },
      { name: "Adaptación de espacios para nuevas líneas de producción", desc: "Preparamos tu planta con las instalaciones eléctricas, neumáticas y estructurales que necesitas.", img: "/subservicios/adaptacion-espacios.png" }
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

  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* Hero with Parallax Image */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[70vh]">

        
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

      {/* Showcase Panels - Mattered Style */}
      <section className="py-20 px-0 md:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={appleSpring}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center px-6"
        >
          Lo que podemos hacer
        </motion.h2>
        
        <motion.div layout className="space-y-2">
          {service.details.map((detail, idx) => {
            // Alternate gradient directions for visual variety
            const overlays = [
              "bg-gradient-to-r from-black/70 via-black/40 to-transparent",
              "bg-gradient-to-l from-black/70 via-black/40 to-transparent",
              "bg-gradient-to-t from-black/60 via-black/30 to-black/10",
              "bg-gradient-to-r from-black/75 via-black/50 to-transparent",
              "bg-gradient-to-l from-black/60 via-black/30 to-transparent",
              "bg-gradient-to-t from-black/70 via-black/40 to-transparent",
            ];
            const overlay = overlays[idx % overlays.length];
            
            // Varying heights: first panel is tallest, then alternate between medium and compact
            const heights = idx === 0 
              ? "h-[260px] md:h-[380px]" 
              : idx % 3 === 0 
                ? "h-[180px] md:h-[280px]" 
                : "h-[140px] md:h-[220px]";
            
            // Varying text sizes to match panel heights
            const textSize = idx === 0 
              ? "text-4xl md:text-6xl lg:text-7xl" 
              : idx % 3 === 0 
                ? "text-3xl md:text-5xl lg:text-6xl" 
                : "text-2xl md:text-4xl lg:text-5xl";
            
            const isExpanded = expandedIdx === idx;
            
            return (
              <motion.article
                layout
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  layout: { type: "spring", bounce: 0, duration: 0.6 },
                  opacity: { duration: 0.5, delay: idx * 0.05 }
                }}
                className={`relative w-full overflow-hidden group cursor-pointer ${isExpanded ? 'min-h-[420px] md:h-[500px] h-auto' : heights}`}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                {/* Background Image with hover zoom */}
                <img 
                  src={"img" in detail ? (detail as any).img : service.img} 
                  alt={detail.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isExpanded ? 'scale-105' : 'group-hover:scale-105'}`}
                  style={{ objectPosition: `center ${20 + (idx * 12) % 80}%` }}
                />
                
                {/* Gradient overlay - darkens significantly when expanded for readability */}
                <div className={`absolute inset-0 transition-all duration-500 ${isExpanded ? 'bg-black/80 md:bg-black/70 backdrop-blur-[2px]' : overlay}`}></div>
                
                {/* Content Container */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-14 ${isExpanded ? 'pb-10' : ''}`}>
                  <motion.div layout className="relative z-10 w-full max-w-5xl pr-10 md:pr-16">
                    <motion.h3 layout className={`${textSize} font-black tracking-tight md:tracking-[-0.04em] uppercase text-white drop-shadow-lg leading-[1.05] md:leading-[0.95] break-words`}
                      style={{ fontStretch: "condensed" }}
                    >
                      {detail.name}
                    </motion.h3>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 10 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden mt-3 md:mt-6"
                        >
                          <p className="text-gray-200 text-base md:text-2xl font-medium leading-relaxed max-w-3xl">
                            {detail.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Subtle arrow on hover (Always visible on mobile to indicate tap) */}
                <div className={`absolute top-1/2 -translate-y-1/2 right-4 md:right-14 transition-all duration-500 z-10 ${isExpanded ? 'rotate-90 opacity-100' : 'opacity-100 md:opacity-0 translate-x-0 md:translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                  <span className={`w-8 h-8 md:w-12 md:h-12 rounded-full backdrop-blur-sm border flex items-center justify-center text-white shadow-lg transition-colors duration-300 ${isExpanded ? 'bg-white text-black border-white' : 'bg-white/20 border-white/30'}`}>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </motion.article>
            );
          })}
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
