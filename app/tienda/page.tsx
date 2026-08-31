"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import Lenis from "lenis";

export default function TiendaPage() {
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
    return () => lenis.destroy();
  }, []);

  const products = [
    {
      id: 1,
      badge: "HERRAMIENTAS",
      name: "Taladro Inalámbrico",
      desc: "Taladro de alta potencia con batería recargable.",
      price: "$120.00",
      image: "/drill.png"
    },
    {
      id: 2,
      badge: "ALMACENAMIENTO",
      name: "Caja de Herramientas",
      desc: "Caja resistente para organizar y transportar herramientas.",
      price: "$45.00",
      image: "/toolbox.png"
    },
    {
      id: 3,
      badge: "MEDICIÓN",
      name: "Cinta Métrica",
      desc: "Cinta métrica industrial de 5 metros con bloqueo.",
      price: "$15.00",
      image: "/tape.png"
    },
    {
      id: 4,
      badge: "SEGURIDAD",
      name: "Casco de Seguridad",
      desc: "Casco protector resistente a impactos para obras.",
      price: "$25.00",
      image: "/helmet.png"
    },
    {
      id: 5,
      badge: "SEGURIDAD",
      name: "Guantes de Trabajo",
      desc: "Guantes reforzados para protección mecánica.",
      price: "$18.00",
      image: "/gloves.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white pb-20">
      <Navbar />

      {/* Main Container */}
      <div className="pt-32 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="space-y-8 sticky top-32">
            
            {/* Categories */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Categorías</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center border border-red-600">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">Todos los Productos</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 bg-white group-hover:border-red-500 transition-colors"></div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-black">Piezas CNC</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 bg-white group-hover:border-red-500 transition-colors"></div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-black">Impresión 3D</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 bg-white group-hover:border-red-500 transition-colors"></div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-black">Materiales</span>
                </label>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Disponibilidad</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center border border-red-600">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black">En Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 bg-white group-hover:border-red-500 transition-colors"></div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-black">Bajo Pedido</span>
                </label>
              </div>
            </div>

          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-sm text-gray-500 font-medium">Mostrando 1-5 de 5 productos</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500 font-medium">Ordenar por:</span>
              <select className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-medium text-gray-900 outline-none focus:ring-2 focus:ring-red-500/20 cursor-pointer">
                <option>Destacados</option>
                <option>Menor Precio</option>
                <option>Mayor Precio</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                
                {/* Image Area */}
                <div className="relative aspect-[4/3] bg-[#F4F5F7] p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-600 tracking-wider">
                    {product.badge}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button className="w-10 h-10 rounded-lg bg-[#F0F2F5] text-gray-700 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
