"use client";
import Link from "next/link";

export default function Footer() {
  return (
<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<img src="/logo.jpg" alt="Castromeria Logo" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
<span className="font-bold text-xl tracking-tight text-gray-900">Castromeria</span>
</div>
<p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            4517 Washington Ave.<br/>
            Manchester, Kentucky<br/>
            39495
          </p>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Servicios</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Diseño Industrial</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Mecanizado CNC</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Transloading</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Bonded &amp; FTZ</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Industrias</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Comercio Electrónico</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Calzado y Ropa</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Logística de Cadena de Frío</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Materiales Peligrosos</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Nosotros</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Empresa</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Noticias</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Términos de servicio</a></li>
<li><a className="text-gray-500 hover:text-red-600 text-sm transition-colors" href="/">Política de privacidad</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-400 text-sm">&copy; Castromeria 2024</p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-gray-500" href="/">
<span className="sr-only">LinkedIn</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-500" href="/">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
</div>
</div>
</div>
</footer>
  );
}
