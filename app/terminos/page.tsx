import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | Castromeria",
  description: "Términos y condiciones de uso de Castromeria SRL.",
};

export default function Terminos() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans antialiased">
      <Navbar />
      
      <main className="pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Términos de Uso</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-600 text-lg leading-relaxed">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Última actualización: {new Date().toLocaleDateString('es-DO')}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Castromeria SRL, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios Industriales y Cotizaciones</h2>
            <p>
              Toda cotización, diseño, prototipado o servicio de fabricación (incluyendo mecanizado CNC, impresión 3D y anodizado) está sujeto a la revisión técnica, la disponibilidad de materiales y la firma de acuerdos específicos o aprobación de cotizaciones formales. La información presentada en esta web es de carácter orientativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido visual, textos, logotipos, imágenes de piezas mecanizadas y material de marca en este sitio es propiedad exclusiva de Castromeria SRL o se utiliza con el permiso expreso de nuestros clientes. Queda estrictamente prohibida su reproducción, distribución o uso comercial sin autorización previa por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acuerdos de Confidencialidad (NDA)</h2>
            <p>
              Reconocemos la naturaleza sensible del diseño industrial y la manufactura avanzada. Castromeria mantiene acuerdos de estricta confidencialidad (NDA) sobre los planos, modelos CAD y diseños enviados por nuestros clientes, garantizando que su propiedad intelectual nunca será compartida ni replicada para terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              Castromeria SRL no se hace responsable por retrasos en los tiempos de entrega causados por factores externos, escasez global de materias primas o situaciones de fuerza mayor. Los tiempos de entrega estimados se proporcionan de buena fe.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
