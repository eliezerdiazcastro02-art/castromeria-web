import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Ofrecemos diseño industrial, fabricación, impresión 3D, anodizado y teflonado en República Dominicana.',
  openGraph: {
    title: 'Servicios | Castromeria SRL',
    description: 'Ofrecemos diseño industrial, fabricación, impresión 3D, anodizado y teflonado en República Dominicana.',
  }
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
