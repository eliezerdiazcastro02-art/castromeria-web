import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Castromeria SRL',
    default: 'Castromeria SRL - Diseño Industrial, Fabricación y CNC',
  },
  description: 'Somos una empresa especializada en servicios de diseño industrial, fabricación, programación, automatización, asesoría, facilidades e impresión 3D y anodizado en República Dominicana.',
  keywords: ['CNC', 'diseño industrial', 'fabricación', 'impresión 3D', 'anodizado', 'República Dominicana', 'automatización', 'tornería', 'soldadura'],
  openGraph: {
    title: 'Castromeria SRL - Diseño Industrial y Fabricación',
    description: 'Soluciones innovadoras en diseño industrial, fabricación CNC y automatización en la República Dominicana.',
    url: 'https://castromeria.com',
    siteName: 'Castromeria SRL',
    locale: 'es_DO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-DO"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
