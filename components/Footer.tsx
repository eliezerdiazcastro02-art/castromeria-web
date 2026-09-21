"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, FileText, Check, ExternalLink, Copy, ChevronDown } from 'lucide-react';

function FooterAccordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 md:border-none">
      {/* Botón para Móvil (Solo visible < 768px) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-4 md:hidden focus:outline-none"
      >
        <span className="font-medium text-gray-900 text-sm">{title}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Título para PC y Tablet */}
      <h4 className="hidden md:block font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">{title}</h4>

      {/* Contenido Expandible en Móvil, Siempre visible en Tablet/PC */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out md:!max-h-none md:!opacity-100 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyRNC = () => {
    navigator.clipboard.writeText("1-33-12942-6");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#FBFBFD] pt-20 pb-10 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 lg:gap-12 mb-12">
          
          {/* Info Principal - Logo y Contacto Directo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-10 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex w-fit">
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105">
                <img src="/logo_secundario.png" alt="Castromeria Insignia" className="w-full h-full object-contain" />
              </div>
              <img src="/castromeria_logo.png" alt="Castromeria" className="h-7 md:h-9 shrink-0 object-contain transition-transform duration-500 group-hover:opacity-80" />
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              Diseño, fabricación e ingeniería industrial en República Dominicana.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <a 
                  href="https://www.google.com/maps/place/Castromeria+srl/@18.4860575,-69.9312117,11z" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 text-gray-500 text-sm font-medium hover:text-red-600 transition-all group"
                  title="Ver en Google Maps"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="flex items-center gap-1.5 border-b border-transparent group-hover:border-red-200 pb-0.5">
                    Santo Domingo, Rep. Dom.
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <a 
                  href="mailto:Castromeria@outlook.com" 
                  className="flex items-center gap-3 text-gray-500 text-sm font-medium hover:text-red-600 transition-all group"
                >
                  <Mail className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="border-b border-transparent group-hover:border-red-200 pb-0.5">Castromeria@outlook.com</span>
                </a>
              </li>
              <li className="flex items-center">
                <a 
                  href="https://wa.me/18099956395" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-500 text-sm font-medium hover:text-red-600 transition-all group"
                >
                  <Phone className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="border-b border-transparent group-hover:border-red-200 pb-0.5">809-995-6395</span>
                </a>
              </li>
              <li className="flex items-center">
                <button 
                  onClick={handleCopyRNC}
                  className="flex items-center gap-3 text-gray-500 text-sm font-medium hover:text-red-600 transition-all group focus:outline-none"
                  title="Copiar RNC"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <FileText className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                  )}
                  <span className="flex items-center gap-1.5 border-b border-transparent group-hover:border-red-200 pb-0.5">
                    RNC: 1-33-12942-6
                    {copied ? (
                      <span className="text-xs text-green-500 font-bold ml-1">¡Copiado!</span>
                    ) : (
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </span>
                </button>
              </li>
            </ul>
          </div>

        {/* Accordions (Móvil) / Grid (Tablet/PC) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 lg:gap-8 border-t border-gray-200 md:border-none">
          
          <FooterAccordion title="Servicios">
            <ul className="space-y-3 md:space-y-4">
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios/fabricacion">Fabricación</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios/diseno-industrial">Diseño Industrial</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios/impresion-3d">Impresión 3D</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios/anodizado-teflonado">Anodizado y Teflonado</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios/asesoria-tecnica">Asesoría Técnica</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios/facilidades">Facilidades</a></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title="Navegación">
            <ul className="space-y-3 md:space-y-4">
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/">Inicio</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/nosotros">Nosotros</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/servicios">Servicios</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="/contacto">Contacto</a></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title="Horario">
            <ul className="space-y-3 md:space-y-4">
              <li className="flex justify-between md:flex-col text-sm text-gray-500 py-1 md:py-0 border-b border-gray-100 md:border-none">
                <span className="font-semibold text-gray-900 md:mb-1">Lun - Vie</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between md:flex-col text-sm text-gray-500 py-1 md:py-0 border-b border-gray-100 md:border-none">
                <span className="font-semibold text-gray-900 md:mb-1">Sábado</span>
                <span>9:00 - 12:00</span>
              </li>
              <li className="flex justify-between md:flex-col text-sm text-gray-500 py-1 md:py-0">
                <span className="font-semibold text-gray-900 md:mb-1">Domingo</span>
                <span className="text-red-500 font-medium">Cerrado</span>
              </li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title="Redes Sociales">
            <ul className="space-y-3 md:space-y-4">
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="https://www.instagram.com/castromeria_srl/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="https://www.tiktok.com/@castromeriasrl" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="https://www.linkedin.com/company/taller-industrial-castromeria-srl/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="text-gray-500 hover:text-gray-900 text-sm transition-colors block" href="https://wa.me/18099956395" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </FooterAccordion>

        </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center xl:items-start gap-4">
            <div className="flex flex-wrap justify-center xl:justify-start items-center gap-x-4 gap-y-2 text-sm text-gray-500">
              <Link href="/privacidad" className="hover:text-gray-900 transition-colors">Política de Privacidad</Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/terminos" className="hover:text-gray-900 transition-colors">Términos de Uso</Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/legal" className="hover:text-gray-900 transition-colors">Aviso Legal</Link>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm text-center xl:text-left">&copy; {new Date().getFullYear()} Castromeria SRL. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6 text-gray-400 shrink-0">
            <a href="https://www.instagram.com/castromeria_srl/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@castromeriasrl" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/taller-industrial-castromeria-srl/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
