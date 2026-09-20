import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Castromeria",
  description: "Política de privacidad y manejo de datos de Castromeria SRL.",
};

export default function Privacidad() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans antialiased">
      <Navbar />
      
      <main className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Política de Privacidad</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-600 text-lg leading-relaxed">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Última actualización: {new Date().toLocaleDateString('es-DO')}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que recopilamos</h2>
            <p>
              En Castromeria SRL, recopilamos información personal que usted nos proporciona voluntariamente al contactarnos a través de nuestros formularios, correos electrónicos o llamadas telefónicas. Esto puede incluir su nombre, nombre de la empresa, número de teléfono y correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para fines comerciales legítimos: procesar cotizaciones, brindar asesoría técnica, coordinar proyectos de fabricación, enviar actualizaciones sobre su orden y mejorar nuestro servicio al cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección de datos y confidencialidad</h2>
            <p>
              Entendemos la naturaleza crítica y confidencial de la industria de manufactura. Implementamos medidas de seguridad corporativas estrictas para proteger no solo su información personal, sino también los detalles de propiedad intelectual, planos y modelos 3D de sus proyectos industriales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Retención de datos</h2>
            <p>
              Conservaremos su información personal y los archivos de sus proyectos únicamente durante el tiempo que sea necesario para cumplir con los propósitos para los cuales fueron recopilados, incluyendo el cumplimiento de requisitos legales, contables o de informes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con nuestra política de privacidad o el manejo de sus datos, no dude en contactarnos a través del correo electrónico: <strong>Castromeria@outlook.com</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
