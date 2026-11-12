"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FeaturedCard {
  title: string;
  image: string;
  href: string;
}

const featuredProjects: FeaturedCard[] = [
  {
    title: "Mobiliario y Carros en Inox",
    image: "/subservicios/muebles-inox.png",
    href: "/servicios/fabricacion",
  },
  {
    title: "Mecanizado CNC de Alta Precisión",
    image: "/subservicios/mecanizado.png",
    href: "/servicios/fabricacion",
  },
  {
    title: "Corte Láser de Alta Potencia",
    image: "/laser_cutting_sparks.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20corte%20l%C3%A1ser.",
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

      {/* 3 Tall IG-style Portrait Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...appleSpring, delay: idx * 0.1 }}
          >
            <Link
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative block aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-950 shadow-xl border border-black/5 cursor-pointer active:scale-[0.98] transition-transform"
            >
              {/* Background Image with subtle zoom on hover */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Gradient Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
