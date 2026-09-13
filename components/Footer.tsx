"use client";

import React, { useState } from 'react';
import { MapPin, Mail, Phone, FileText, Check, ExternalLink, Copy } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyRNC = () => {
    navigator.clipboard.writeText("1-33-12942-6");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo_badge.png" alt="Castromeria Icon" className="w-8 h-8 rounded-full shadow-sm border border-gray-200/60 opacity-90 hover:opacity-100 transition-opacity duration-300" />
              <img src="/Castromeria_logo.png" alt="Castromeria Logo" className="h-5 md:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-4">
              Diseño, fabricación e ingeniería industrial en República Dominicana.
            </p>
            <ul className="space-y-4 mt-6">
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
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios/fabricacion">Fabricación</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios/diseno-industrial">Diseño Industrial</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios/impresion-3d">Impresión 3D</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios/asesoria-tecnica">Asesoría Técnica</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Navegación</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Inicio</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/nosotros">Nosotros</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios">Servicios</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Redes Sociales</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="https://www.instagram.com/castromeria_srl/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="https://www.tiktok.com/@castromeriasrl" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="https://www.linkedin.com/company/taller-industrial-castromeria-srl/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="https://wa.me/18099956395" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2026 Castromeria. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="https://www.instagram.com/castromeria_srl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@castromeriasrl?_r=1&_t=ZS-97q0PrLz9rI" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/taller-industrial-castromeria-srl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="LinkedIn">
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
