"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Send, Clock } from "lucide-react";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [proyecto, setProyecto] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Nueva Solicitud de Contacto*\n\n*Nombre:* ${nombre}\n*Empresa:* ${empresa || "No especificada"}\n*Correo:* ${correo}\n\n*Proyecto:*\n${proyecto}`;
    const whatsappUrl = `https://wa.me/18099956395?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
            Tu próximo proyecto empieza con una conversación.
          </p>
        </motion.div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Contact Form (Takes up 7 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...appleSpring, delay: 0.1 }}
            className="md:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 h-fit"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Escríbenos</h2>
              <p className="text-gray-500 mb-10">Te respondemos en menos de 24 horas.</p>
              
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 ml-1">Nombre completo</label>
                    <input 
                      type="text" 
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300" 
                      placeholder="Juan Pérez" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 ml-1">Empresa</label>
                    <input 
                      type="text" 
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300" 
                      placeholder="Industrias S.A." 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 ml-1">Correo electrónico</label>
                  <input 
                    type="email" 
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300" 
                    placeholder="juan@empresa.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 ml-1">Cuéntanos de tu proyecto</label>
                  <textarea 
                    rows={4} 
                    value={proyecto}
                    onChange={(e) => setProyecto(e.target.value)}
                    required
                    className="w-full bg-[#F5F5F7] border-transparent focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-2xl px-5 py-4 outline-none transition-all duration-300 resize-none" 
                    placeholder="Necesito fabricar..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-3 group">
                    Enviar
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Smaller Bento Cards (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 h-fit">
            
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
                  <a href="mailto:Castromeria@outlook.com" className="text-2xl font-bold hover:text-red-400 transition-colors">Castromeria@outlook.com</a>
                </div>

                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Escríbenos o Llámanos</h3>
                  <a href="https://wa.me/18099956395" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-red-400 transition-colors block">+1 (809) 995-6395</a>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...appleSpring, delay: 0.25 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-6">Horario de Operaciones</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Lunes a Viernes</span>
                  <span className="text-gray-900 font-bold bg-gray-50 px-3 py-1 rounded-full text-sm">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Sábado</span>
                  <span className="text-gray-900 font-bold bg-gray-50 px-3 py-1 rounded-full text-sm">9:00 - 12:00</span>
                </li>
                <li className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Domingo</span>
                  <span className="text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">Cerrado</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Full Width Location Card at the Bottom */}
          <motion.a 
            href="https://www.google.com/maps/place/Castromeria+srl/@18.4860575,-69.9312117,11z"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...appleSpring, delay: 0.3 }}
            className="md:col-span-12 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col justify-end min-h-[350px] relative overflow-hidden group cursor-pointer block mt-4"
          >
            <img 
              src="/subservicios/estructuras-metalicas.png" 
              alt="Location" 
              className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/50 md:to-transparent"></div>
            
            <div className="relative z-10 md:max-w-md">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-2">Santo Domingo, RD.</h3>
              <p className="text-gray-600 mb-6 font-medium text-lg leading-relaxed">Parque Industrial, Nave 4.<br/>República Dominicana.</p>
              <div className="flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                Ver en Google Maps <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

        </div>
      </section>

      <Footer />
    </div>
  );
}
