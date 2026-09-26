"use client";

import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const serviciosLinks = [
  { label: "Fabricación", desc: "Mecanizado, tornería y soldadura.", href: "/servicios/fabricacion" },
  { label: "Diseño Industrial", desc: "Modelado 3D y simulación.", href: "/servicios/diseno-industrial" },
  { label: "Impresión 3D", desc: "Prototipos y piezas únicas.", href: "/servicios/impresion-3d" },
  { label: "Anodizado y Teflonado", desc: "Acabados de alto rendimiento.", href: "/servicios/anodizado-teflonado" },
  { label: "Asesoría Técnica", desc: "Consultoría y automatización.", href: "/servicios/asesoria-tecnica" },
  { label: "Facilidades", desc: "Logística y metodologías.", href: "/servicios/facilidades" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios', hasDropdown: true },
    { name: 'Alquileres', href: '/tienda' },
    { name: 'Contáctanos', href: '/contacto' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500">
        <Link href="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 md:gap-3 group relative z-10">
          <div className="w-9 h-9 md:w-11 md:h-11 shrink-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center p-1 transition-transform duration-500 group-hover:scale-105">
            <img src="/logo_secundario.png" alt="Castromeria Insignia" className="w-full h-full object-contain" />
          </div>
          <img src="/castromeria_logo.png" alt="Castromeria" className="h-6 md:h-8 shrink-0 object-contain transition-transform duration-500 group-hover:opacity-80" />
        </Link>

        {/* Desktop Navigation */}
        <div 
          className="hidden md:flex items-center gap-2 text-sm font-medium"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            const isHovered = hoveredPath === item.href;
            const showDropdown = item.hasDropdown && dropdownOpen;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  setHoveredPath(item.href);
                  if (item.hasDropdown) handleDropdownEnter();
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) handleDropdownLeave();
                }}
              >
                <Link 
                  href={item.href} 
                  onClick={() => window.scrollTo(0,0)} 
                  className={`relative px-5 py-2.5 rounded-full transition-colors duration-300 inline-flex flex-col items-center justify-center gap-1.5 z-10 ${
                    active ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-1.5 relative z-20">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${showDropdown ? 'rotate-180 text-red-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Red dot below text */}
                  {active && (
                    <motion.div
                      layoutId="navActiveDot"
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E5252A] rounded-full z-20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>

                {/* Hover Background - Subtle highlight */}
                {isHovered && !active && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-black/5 rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}

                {/* Active Bubble (Light Crystal Glass Effect) */}
                {active && (
                  <motion.div
                    layoutId="navActiveBubble"
                    className="absolute -inset-y-2.5 -inset-x-1 z-0 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-[24px] rounded-3xl border-[0.5px] border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-black/5" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-500 relative z-10">
          <a href="https://www.instagram.com/castromeria_srl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@castromeriasrl" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/taller-industrial-castromeria-srl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* ===== DESKTOP MEGA DROPDOWN ===== */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-3xl hidden md:block"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="bg-white/95 backdrop-blur-3xl border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Nuestros Servicios</h3>
                <Link href="/servicios" onClick={() => { window.scrollTo(0,0); setDropdownOpen(false); }} className="text-xs font-semibold text-red-600 hover:text-red-700 transition-colors">
                  Ver todos →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {serviciosLinks.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => { window.scrollTo(0,0); setDropdownOpen(false); }}
                    className="group flex flex-col gap-1 p-4 rounded-2xl bg-gray-50/50 hover:bg-red-50/80 border border-transparent hover:border-red-100 transition-all duration-300"
                  >
                    <span className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 md:hidden flex flex-col pt-28 px-8 overflow-y-auto pb-10"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold text-gray-900">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <Link 
                    href={item.href} 
                    onClick={() => { window.scrollTo(0,0); setMenuOpen(false); }} 
                    className={`relative inline-flex flex-col transition-colors duration-300 w-fit ${isActive(item.href) ? 'text-red-600' : 'text-gray-800 hover:text-red-500'}`}
                  >
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
                    )}
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="pl-4 flex flex-col gap-4 mt-4 border-l border-gray-200">
                      {serviciosLinks.map((sub) => (
                        <Link 
                          key={sub.href} 
                          href={sub.href} 
                          onClick={() => { window.scrollTo(0,0); setMenuOpen(false); }}
                          className="text-base font-medium text-gray-500 hover:text-red-500 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-100 text-gray-500">
              <a href="https://www.instagram.com/castromeria_srl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@castromeriasrl" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="currentColor">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/taller-industrial-castromeria-srl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
