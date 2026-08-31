"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function ServiciosPage() {
  // Lenis smooth scroll
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

  const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;

  const services = [
    {
      title: "Diseño CAD y Modelado 3D.",
      desc: "Transformamos conceptos abstractos en modelos digitales de precisión. Nuestro equipo de ingeniería evalúa tolerancias, resistencia de materiales y viabilidad de manufactura antes de cortar el primer milímetro de material.",
      img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Manufactura CNC Avanzada.",
      desc: "Mecanizado de precisión para componentes complejos. Trabajamos con aluminio, acero inoxidable y polímeros técnicos, garantizando tolerancias estrictas y acabados superficiales impecables para la industria.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Prototipado Rápido.",
      desc: "Acelera tu ciclo de desarrollo. Utilizamos tecnologías de impresión 3D de resina y filamento industrial para crear prototipos funcionales que te permiten iterar y validar diseños en días, no en semanas.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Ingeniería a Medida.",
      desc: "Soluciones de automatización, ensamblajes mecánicos y herramentales personalizados. No solo fabricamos piezas; desarrollamos sistemas completos adaptados a los cuellos de botella operativos de tu empresa.",
      img: "https://images.unsplash.com/photo-1537553556942-e19a4e402b85?q=80&w=1200&auto=format&fit=crop"
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
            Nuestras capacidades.<br/>
            <span className="text-gray-400">Tu ventaja competitiva.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Desde el boceto inicial hasta la producción en serie. Dominamos todo el espectro de la fabricación avanzada para materializar tus proyectos más exigentes.
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
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{service.title}</h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                {service.desc}
              </p>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Listo para construir?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Cuéntanos sobre tu proyecto. Nuestros ingenieros están listos para asesorarte sobre materiales, tolerancias y viabilidad.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-300">
              Iniciar Proyecto
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
