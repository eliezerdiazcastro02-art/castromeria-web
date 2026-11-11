"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function ServiciosPage() {

  const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;

  const services = [
    {
      slug: "fabricacion",
      title: "Fabricación.",
      desc: "Mecanizado CNC, tornería, corte láser, soldadura certificada, acero inoxidable y estructuras metálicas. Si se puede fabricar, lo hacemos.",
      img: "/real_welding.jpg"
    },
    {
      slug: "diseno-industrial",
      title: "Diseño Industrial.",
      desc: "Modelado 3D, simulación y diseño optimizado para manufactura. Tu idea, lista para producción.",
      img: "/cad_design.jpg"
    },
    {
      slug: "impresion-3d",
      title: "Impresión 3D.",
      desc: "Prototipos funcionales y piezas únicas con precisión milimétrica. Rápido y sin moldes.",
      img: "/laser_cutting_sparks.png"
    },
    {
      slug: "anodizado-teflonado",
      title: "Anodizado y Teflonado.",
      desc: "Acabados que protegen contra el desgaste, la corrosión y las altas temperaturas.",
      img: "/anodizado_parts.png"
    },
    {
      slug: "asesoria-tecnica",
      title: "Asesoría Técnica.",
      desc: "Te acompañamos en cada etapa del proyecto. Desde la viabilidad hasta la producción.",
      img: "/asesoria_tecnica.png"
    },
    {
      slug: "facilidades",
      title: "Facilidades.",
      desc: "Logística, reubicación de maquinaria y organización de planta para operar mejor.",
      img: "/logistica.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={appleSpring}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
            Todo lo que hacemos.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Del boceto a la pieza terminada. Fabricación avanzada bajo un mismo techo.
          </p>
        </motion.div>
      </section>

      {/* Services List - Staggered layout with parallax feeling */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-32 md:space-y-48">
        {services.map((service, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...appleSpring, delay: 0.1 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border border-black/5">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                {/* Subtle inner shadow / glass border effect */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...appleSpring, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col items-start"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{service.title}</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link href={`/servicios/${service.slug}`} className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[#E5252A] bg-red-50 hover:bg-red-100 transition-colors font-semibold text-base">
                Ver detalles
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>

          </div>
        ))}
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
          {/* Subtle gradient glow in background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-red-600/20 to-transparent opacity-50 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Listo para empezar?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Cuéntanos qué necesitas. Te asesoramos sin compromiso.
            </p>
            <a href="https://wa.me/18099956395" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-300">
              Iniciar Proyecto
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
