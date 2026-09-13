import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producto - Grúas y Plataformas',
  description: 'Alquiler de grúas y plataformas elevadoras para trabajos de elevación y altura con Elevora y Castromeria.',
  openGraph: {
    title: 'Grúas y Plataformas | Castromeria SRL',
    description: 'Alquiler de grúas y plataformas elevadoras para trabajos de elevación y altura con Elevora y Castromeria.',
  }
};

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
