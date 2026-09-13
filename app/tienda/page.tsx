"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
export default function TiendaPage() {

  const product = {
    id: 1,
    category: "CASTROMERIA INDUSTRIAL",
    name: "Servicio de Grúas",
    slug: "gruas-y-plataformas",
    sku: "PLU: C-9034-GR",
    desc: "Grúas de alta capacidad con operador certificado incluido. Listas para tu obra.",
    image: "/grua_spider_1.png"
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white pb-20">
      <Navbar />

      {/* Main Container */}
      <div className="pt-40 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-24 relative z-10">
        
        {/* Partnership Banner Area */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:sticky lg:top-40">
          <a href="https://www.instagram.com/elevora_er/" target="_blank" rel="noopener noreferrer" className="block w-full max-w-2xl transition-transform duration-500 hover:scale-105">
            <img 
              src="/partnership-transparent.png" 
              alt="Elevora x Castromeria Partnership" 
              className="w-full object-contain drop-shadow-xl"
            />
          </a>
        </div>

        {/* Product Grid Area */}
        <main className="w-full max-w-sm">

          {/* Simple Product Card */}
          <div className="w-full flex flex-col items-center">
            <Link href={`/tienda/${product.slug}`} className="w-full">
              <motion.div 
                layoutId={`card-${product.id}`}
                className="w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group flex flex-col relative cursor-pointer"
              >
                
                {/* Image Area */}
                <motion.div layoutId={`image-container-${product.id}`} className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <motion.img 
                    layoutId={`image-${product.id}`}
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Content Area */}
                <motion.div layoutId={`content-${product.id}`} className="p-6 flex flex-col flex-grow bg-white">
                  <motion.h3 layoutId={`title-${product.id}`} className="font-bold text-gray-900 text-lg mb-2 leading-tight line-clamp-1">{product.name}</motion.h3>
                  
                  <div className="flex items-center justify-center mt-auto pt-4">
                    <motion.button layoutId={`button-${product.id}`} className="w-full py-3 rounded-xl bg-red-600 text-white text-base font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                      Ver detalles
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
