import os

footer_content = """import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.jpg" alt="Castromeria Logo" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <span className="font-bold text-xl tracking-tight text-gray-900">Castromeria</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-4">
              Soluciones de diseño y fabricación industrial de alta precisión para llevar tus proyectos del concepto a la realidad.
            </p>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed font-medium">
              Santo Domingo, República Dominicana<br/>
              info@castromeria.com<br/>
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios">Diseño Industrial</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios">Mecanizado CNC</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios">Impresión 3D</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/servicios">Fabricación a Medida</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Industrias</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Ingeniería y Robótica</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Sector Aeroespacial</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Sector Médico</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Sector Automotriz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Nosotros</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/nosotros">Nuestra Empresa</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/contacto">Contacto</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Términos de servicio</a></li>
              <li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Política de privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2026 Castromeria</p>
        </div>
      </div>
    </footer>
  );
}
"""

with open('components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(footer_content)
print("Footer rewritten with pure UTF-8 via Python")
