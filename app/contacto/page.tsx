"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";
import { Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";

export default function ContactoPage() {
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

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* Hero & Bento Grid Section */}
      <section className="pt-32 md:pt-40 pb-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto">
        
        {/* Left-aligned Hero (Different from the centered ones before) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={appleSpring}
          className="mb-16 md:mb-24 pl-4"
        >
          <h1 className="text-6xl md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter mb-6 leading-[1.05]">
            Hablemos.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-2xl font-medium tracking-tight">
            Estamos listos para materializar tu próximo proyecto de ingeniería.
          </p>
        </motion.div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Contact Form (Takes up 7 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...appleSpring, delay: 0.1 }}
            className="md:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Envíanos un mensaje</h2>
              <p className="text-gray-500 mb-10">Responderemos en menos de 24 horas laborables.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 ml-1">Nombre completo</label>
                    <input type="text" className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300" placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 ml-1">Empresa</label>
                    <input type="text" className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300" placeholder="Industrias S.A." />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 ml-1">Correo electrónico</label>
                  <input type="email" className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300" placeholder="juan@empresa.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 ml-1">Cuéntanos de tu proyecto</label>
                  <textarea rows={4} className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300 resize-none" placeholder="Necesito fabricar..."></textarea>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <button className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-3 group">
                Enviar mensaje
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Smaller Bento Cards (5 columns) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
            
            {/* Direct Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...appleSpring, delay: 0.2 }}
              className="bg-black text-white rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/30 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Email Directo</h3>
                  <a href="mailto:proyectos@castromeria.com" className="text-2xl font-bold hover:text-red-400 transition-colors">proyectos@castromeria.com</a>
                </div>

                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Llámanos</h3>
                  <a href="tel:+18095551234" className="text-2xl font-bold hover:text-red-400 transition-colors">+1 (809) 555-1234</a>
                </div>
              </div>
            </motion.div>

            {/* Location Card with Image Background */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...appleSpring, delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col justify-end min-h-[300px] relative overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                alt="Location" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Santo Domingo, RD.</h3>
                <p className="text-gray-600 mb-4 font-medium">Parque Industrial, Nave 4.<br/>República Dominicana.</p>
                <div className="flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                  Ver en Google Maps <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
