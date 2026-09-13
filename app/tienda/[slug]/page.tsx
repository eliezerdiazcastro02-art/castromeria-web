"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, use } from "react";
import { notFound } from "next/navigation";

// Hardcoded single product for the demo. In a real app this would be a database fetch.
const productData = {
  "gruas-y-plataformas": {
    id: 1,
    category: "CASTROMERIA ALQUILERES",
    name: "Servicio de Grúas",
    sku: "PLU: C-9034-GR",
    desc: "Grúas de alta capacidad con operador certificado. Para obras civiles, montajes industriales y mantenimiento.",
    images: ["/grua_spider_1.png"],
    features: [
      "Operadores certificados incluidos",
      "Mantenimiento preventivo al día",
      "Seguro de responsabilidad civil",
      "Disponibilidad 24/7 para emergencias"
    ]
  }
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    notFound();
  }

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  let whatsappMessage = `Hola, me gustaría agendar/cotizar el servicio: ${product.name} (${product.sku}).`;
  
  if (fromDate && toDate) {
    const fromFormatted = fromDate.replace(/-/g, '');
    const toDateObj = new Date(toDate);
    toDateObj.setDate(toDateObj.getDate() + 1);
    const toFormatted = toDateObj.toISOString().split('T')[0].replace(/-/g, '');
    
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Reserva: ${product.name}`)}&dates=${fromFormatted}/${toFormatted}&details=${encodeURIComponent("Solicitud de reserva desde la web.")}`;
    
    whatsappMessage = `Hola, me gustaría agendar el servicio: ${product.name} (${product.sku})
Desde: ${fromDate}
Hasta: ${toDate}

📅 *Para Castromeria:* Guarda esta solicitud en tu calendario haciendo clic aquí:
${calUrl}`;
  }

  const whatsappUrl = `https://wa.me/18099956395?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1D1D1F] font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8 font-medium">
          <a href="/" className="hover:text-red-600">Inicio</a>
          <span className="mx-2">/</span>
          <a href="/tienda" className="hover:text-red-600">Alquileres</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 bg-[#f4f4f4] p-8 lg:p-16 flex flex-col items-center justify-center relative">
            <span className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-xs font-bold tracking-widest shadow-sm z-10">
              ALQUILER
            </span>
            <div className="flex-grow flex items-center justify-center w-full">
              <img 
                src={product.images[activeImgIndex]} 
                alt={product.name} 
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl mix-blend-multiply transition-all duration-300"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-4 mt-8 z-10">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-20 h-20 bg-white rounded-xl overflow-hidden border-2 transition-all ${activeImgIndex === idx ? 'border-red-600 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover mix-blend-multiply p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Booking */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
            <h1 className="font-extrabold text-gray-900 text-3xl md:text-5xl mb-3 leading-tight">{product.name}</h1>
            <p className="text-sm text-gray-400 mb-6 font-mono">{product.sku}</p>
            
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              {product.desc}
            </p>

            <ul className="mb-10 space-y-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feat}
                </li>
              ))}
            </ul>

            {/* Booking Widget */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Fechas de alquiler</h3>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full relative">
                  <span className="absolute -top-2.5 left-3 bg-gray-50 px-1 text-[10px] font-bold text-gray-500">FECHA INICIO</span>
                  <input 
                    type="date" 
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full text-sm font-medium border border-gray-200 rounded-xl px-4 py-3.5 bg-white text-gray-700 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all cursor-pointer shadow-sm" 
                  />
                </div>
                <div className="w-full relative">
                  <span className="absolute -top-2.5 left-3 bg-gray-50 px-1 text-[10px] font-bold text-gray-500">FECHA FIN</span>
                  <input 
                    type="date" 
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full text-sm font-medium border border-gray-200 rounded-xl px-4 py-3.5 bg-white text-gray-700 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all cursor-pointer shadow-sm" 
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M16 11h-4V7"/><path d="M8 15h8"/></svg>
                Agendar por WhatsApp
              </a>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Coordinación directa por WhatsApp
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
