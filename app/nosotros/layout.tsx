import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, misión, visión y valores de Castromeria SRL, líderes en CNC y fabricación.',
  openGraph: {
    title: 'Nosotros | Castromeria SRL',
    description: 'Conoce la historia, misión, visión y valores de Castromeria SRL, líderes en CNC y fabricación.',
  }
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
