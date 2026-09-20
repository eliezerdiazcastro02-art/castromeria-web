import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFD] text-[#1D1D1F] font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
              <FileQuestion className="w-10 h-10 text-red-500" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Error 404.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed">
            La página que buscas no existe o fue movida.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="bg-[#E5252A] text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-colors w-full sm:w-auto"
            >
              Volver al inicio
            </Link>
            <Link 
              href="/servicios"
              className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
