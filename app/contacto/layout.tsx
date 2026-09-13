import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Comunícate con Castromeria SRL para cotizaciones y consultas. WhatsApp: 809-995-6395.',
  openGraph: {
    title: 'Contacto | Castromeria SRL',
    description: 'Comunícate con Castromeria SRL para cotizaciones y consultas. WhatsApp: 809-995-6395.',
  }
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
