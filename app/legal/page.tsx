import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Castromeria",
  description: "Aviso Legal e información corporativa de Castromeria SRL.",
};

export default function Legal() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans antialiased">
      <Navbar />
      
      <main className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Aviso Legal</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-600 text-lg leading-relaxed">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Última actualización: {new Date().toLocaleDateString('es-DO')}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Información Corporativa</h2>
            <p className="mb-6">
              En cumplimiento con las normativas comerciales vigentes, se exponen los siguientes datos de la empresa administradora de este sitio web:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-900 min-w-[180px]">Razón Social:</span>
                  <span>Castromeria SRL</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-900 min-w-[180px]">RNC:</span>
                  <span>1-33-12942-6</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-900 min-w-[180px]">Domicilio Fiscal:</span>
                  <span>Santo Domingo, República Dominicana</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-900 min-w-[180px]">Correo Electrónico:</span>
                  <a href="mailto:Castromeria@outlook.com" className="text-red-600 hover:text-red-700 transition-colors">Castromeria@outlook.com</a>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-900 min-w-[180px]">Teléfono de Contacto:</span>
                  <a href="tel:8099956395" className="text-red-600 hover:text-red-700 transition-colors">809-995-6395</a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Actividad Comercial</h2>
            <p>
              Castromeria SRL es una empresa constituida legalmente bajo las leyes de la República Dominicana, dedicada a la prestación de servicios de diseño industrial, fabricación, mecanizado CNC, impresión 3D, automatización e ingeniería de precisión para el sector industrial y corporativo.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
