"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, PenTool, Zap } from "lucide-react";

export default function NosotrosPage() {
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
  
  // Apple style spring settings: critically damped, no overshoot
  const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;
  
  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={appleSpring}
          className="text-center max-w-4xl mx-auto z-10"
        >
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
            Ingeniería que trasciende.<br/>
            <span className="text-gray-400">Diseñada para durar.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Somos especialistas en diseño industrial, prototipado 3D y manufactura CNC. Transformamos ideas complejas en piezas de precisión absoluta.
          </p>
        </motion.div>

        {/* Floating Abstract Element to add depth */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...appleSpring, delay: 0.2 }}
          className="mt-20 relative w-full max-w-5xl aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40"
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="CNC Manufacturing" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Philosophy / Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={appleSpring}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nuestra filosofía.</h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Creemos que la perfección no es un accidente. Es el resultado de una obsesión por los detalles, procesos estandarizados y el uso de las mejores tecnologías disponibles en la industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...appleSpring, delay: 0.1 }}
            className="bg-white rounded-[2rem] p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col justify-between aspect-square group overflow-hidden relative"
          >
            <div className="z-10 relative">
              <Factory className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4">Fabricación Local, <br/>Calidad Global.</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Operamos desde nuestras instalaciones con maquinaria de última generación, asegurando que cada pieza cumpla con tolerancias micrométricas.
              </p>
            </div>
            {/* Soft background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...appleSpring, delay: 0.2 }}
            className="bg-black text-white rounded-[2rem] p-10 md:p-14 shadow-xl flex flex-col justify-between aspect-square relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092334397-92634e5db89e?q=80&w=1200&auto=format&fit=crop"
              alt="Precision"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="z-10 relative h-full flex flex-col justify-end">
              <Zap className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Innovación constante.</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                No nos conformamos con lo que funciona. Buscamos constantemente nuevas aleaciones, métodos de fresado y optimizaciones de diseño para superar las expectativas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature List (Apple Style Text Features) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {[
              {
                title: "Diseño sin límites.",
                desc: "Nuestro equipo de ingenieros toma tus bocetos o ideas y los convierte en modelos CAD listos para producción, considerando siempre la viabilidad estructural."
              },
              {
                title: "Materiales premium.",
                desc: "Trabajamos con aluminio aeroespacial, aceros inoxidables, polímeros de alto rendimiento y resinas especializadas para impresión 3D."
              },
              {
                title: "Entrega a tiempo.",
                desc: "Entendemos que el tiempo es crítico. Nuestro flujo de trabajo está optimizado para garantizar entregas en los plazos acordados, sin sacrificar la calidad."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...appleSpring, delay: i * 0.1 }}
                className="flex items-start gap-6 border-b border-gray-100 pb-16 last:border-0 last:pb-0"
              >
                <div className="mt-1 bg-red-50 text-red-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-xl text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <Footer />
    </div>
  );
}
