"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Factory, PenTool, Zap, Users, Target, Star } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FounderAppleBadge = () => {
  const ref = useRef(null);
  // Reducimos el margen a -20px para asegurar que se dispare en pantallas pequeñas (móviles)
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    // En móvil: sobrepuesto en la esquina inferior derecha para que no se corte.
    // En PC: flotando afuera a la derecha.
    <div ref={ref} className="absolute bottom-6 right-0 translate-x-1/3 md:top-[55%] md:bottom-auto md:-translate-y-1/2 md:-right-20 z-20">
      <motion.a
        href="https://do.linkedin.com/in/eliezer-diaz-castro-b500631aa"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, x: -30 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.5, x: -30 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 1, delay: 0.2 }}
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white transition-all duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#0a66c2"
          className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default function NosotrosPage() {
  
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
            Ingeniería<br/>
            <span className="inline-block bg-[#E5252A] text-white px-4 py-0 mt-2 font-bold">que dura.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Diseño, fabricación, CNC, impresión 3D y acabados industriales. Más de 3 años resolviendo los retos más exigentes de la industria dominicana.
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
            src="/hero_nosotros.jpg" 
            alt="Taller Castromeria" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Quiénes Somos Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={appleSpring}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Quiénes Somos.</h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
            Somos una empresa especializada en servicios de diseño industrial, fabricación, programación, automatización, asesoría, facilidades, impresión 3D y anodizado. Líderes en el campo de CNC (control numérico computarizado), con más de 3 años de experiencia brindando soluciones innovadoras y de alta calidad a nuestros clientes.
          </p>
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Desde 2023.</h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Empezamos con una idea clara: hacer manufactura de primer nivel en República Dominicana. Hoy trabajamos con empresas de todos los tamaños y en múltiples industrias.
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
              <h3 className="text-2xl font-bold tracking-tight mb-4">Misión.</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Entregar calidad excepcional en cada proyecto, con tecnología avanzada y gente que sabe lo que hace.
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
              src="/subservicios/mecanizado.png"
              alt="Precision"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="z-10 relative h-full flex flex-col justify-end">
              <Zap className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Visión.</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ser la referencia en ingeniería y fabricación industrial del Caribe.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature List (Apple Style Text Features) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-20">
            {[
              {
                title: "Equipo.",
                desc: "Ingenieros, técnicos y especialistas que trabajan juntos para resolver cualquier reto de manufactura.",
                Icon: Users
              },
              {
                title: "Objetivos.",
                desc: "Calidad sin compromisos, mejora continua y crecimiento sostenido.",
                Icon: Target
              },
              {
                title: "Valores.",
                desc: "Integridad, honestidad, calidad, trabajo en equipo y respeto hacia nuestros clientes, empleados y proveedores.",
                Icon: Star
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
                  <feature.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundadores Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto bg-[#FBFBFD]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={appleSpring}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E5252A] uppercase mb-4">
            Fundador
          </h2>
        </motion.div>

        <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
          {/* Fundador */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...appleSpring, delay: 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-full max-w-[280px] aspect-[4/5] mb-6 relative flex items-end justify-center group/img">
              {/* Apple-style glassmorphism badge */}
              <FounderAppleBadge />

              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src="/eliezer.png" 
                  alt="Eliezer Diaz Castro" 
                  className="w-full h-full object-cover object-top grayscale mix-blend-multiply group-hover/img:scale-105 transition-transform duration-700 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFD] via-transparent to-transparent h-full w-full z-10 pointer-events-none"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-[#E5252A] mb-1">Eliezer Diaz Castro</h3>
            <p className="text-lg font-medium text-gray-900">Fundador</p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <Footer />
    </div>
  );
}
