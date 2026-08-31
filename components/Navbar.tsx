import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
      <Link href="/" className="flex items-center gap-2 group">
        <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 rounded-full border border-gray-200 transition-transform duration-300 group-hover:scale-105" />
        <span className="font-bold text-gray-900 tracking-tight text-lg">Castromeria</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-red-500 transition-colors">Inicio</Link>
        <Link href="/nosotros" className="hover:text-red-500 transition-colors">Nosotros</Link>
        <Link href="/servicios" className="hover:text-red-500 transition-colors">Servicios</Link>
        <Link href="/tienda" className="hover:text-red-500 transition-colors">Tienda</Link>
        <Link href="/contacto" className="hover:text-red-500 transition-colors">Contáctanos</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-red-500 transition-colors relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
