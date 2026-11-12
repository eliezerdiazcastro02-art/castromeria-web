"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FeaturedCard {
  title: string;
  category: string;
  image: string;
  buttonText: string;
  href: string;
}

interface MiniCard {
  title: string;
  image: string;
  href: string;
}

const featuredProjects: FeaturedCard[] = [
  {
    title: "Mobiliario y Carros en Inox",
    category: "Acero Inox 304/316",
    image: "/subservicios/muebles-inox.png",
    buttonText: "Ver detalles",
    href: "/servicios/fabricacion",
  },
  {
    title: "Mecanizado CNC de Alta Precisión",
    category: "Tolerancia ±0.01mm",
    image: "/subservicios/mecanizado.png",
    buttonText: "Ver planos",
    href: "/servicios/fabricacion",
  },
  {
    title: "Corte Láser de Alta Potencia",
    category: "Corte & Soldadura",
    image: "/laser_cutting_sparks.png",
    buttonText: "Cotizar proyecto",
    href: "https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20corte%20l%C3%A1ser.",
  },
];

const miniCatalog: MiniCard[] = [
  {
    title: "Precision brass gears",
    image: "/subservicios/ejes-engranajes.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20interesa%20cotizar%20engranajes%20de%20precisi%C3%B3n%20(brass%20gears).",
  },
  {
    title: "Teflon bushings",
    image: "/subservicios/teflonado-ptfe.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20interesa%20cotizar%20bujes%20de%20tefl%C3%B3n%20(teflon%20bushings).",
  },
  {
    title: "Tooling fixtures",
    image: "/subservicios/fixtures.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20interesa%20cotizar%20dispositivos%20y%20tooling%20fixtures.",
  },
  {
    title: "Industrial tables",
    image: "/subservicios/piezas-aceros.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20interesa%20cotizar%20mesas%20industriales%20en%20acero%20inoxidable.",
  },
];

export default function AppleShowcase() {
  const appleSpring = { type: "spring", bounce: 0, duration: 0.8 } as const;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Header (Apple Style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={appleSpring}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
          Fabricación sin límites.
        </h2>
      </motion.div>

      {/* Top Row: 3 Large Featured Cards (Apple TV Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...appleSpring, delay: idx * 0.1 }}
            className="group relative h-[360px] sm:h-[400px] lg:h-[420px] rounded-[2rem] overflow-hidden bg-slate-950 shadow-xl border border-black/5"
          >
            {/* Background Image with subtle zoom on hover */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Centered Frosted Glass Button at the bottom (Exact Apple design) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4 z-10">
              <Link
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-white/25 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg active:scale-95"
              >
                {project.buttonText}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row: Ribbon of Smaller Horizontal Cards (Exact Apple Entertainment Dock) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {miniCatalog.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...appleSpring, delay: 0.2 + idx * 0.08 }}
          >
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative h-36 sm:h-40 md:h-44 rounded-2xl sm:rounded-[1.25rem] overflow-hidden bg-slate-100/80 hover:bg-slate-100 border border-slate-200/70 p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 block active:scale-98"
            >
              {/* Image centered */}
              <div className="w-full h-full relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Pill Label at bottom (Exact Apple design) */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center px-2 z-10">
                <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-white group-hover:bg-slate-900 text-slate-800 group-hover:text-white text-[11px] sm:text-xs font-semibold shadow-sm border border-slate-200/90 group-hover:border-slate-900 whitespace-nowrap transition-colors duration-300">
                  {item.title}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
