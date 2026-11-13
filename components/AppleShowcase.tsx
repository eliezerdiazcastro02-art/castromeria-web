"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { StepPlayer } from "./StepPlayer";

interface FeaturedCard {
  title: string;
  image: string;
  href: string;
}

const allProjects: FeaturedCard[] = [
  /* ── Page 1: Exact cards from user reference ── */
  {
    title: "Ejes y Engranajes de Precisión",
    image: "/showcase_card_1_hires.jpg",
    href: "/servicios/fabricacion",
  },
  {
    title: "Mecanizado CNC de Alta Precisión",
    image: "/showcase_card_2_2x.jpg",
    href: "/servicios/fabricacion",
  },
  {
    title: "Fixtures y Tooling Industrial",
    image: "/showcase_card_3_2x.jpg",
    href: "/servicios/fabricacion",
  },
  /* ── Page 2 ── */
  {
    title: "Corte Láser de Alta Potencia",
    image: "/laser_cutting_sparks.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20corte%20l%C3%A1ser.",
  },
  {
    title: "Mobiliario y Carros en Inox",
    image: "/subservicios/muebles-inox.png",
    href: "/servicios/fabricacion",
  },
  {
    title: "Teflonado y Recubrimientos PTFE",
    image: "/subservicios/teflonado-ptfe.png",
    href: "https://wa.me/18099956395?text=Hola,%20me%20interesa%20cotizar%20teflonado%20PTFE.",
  },
  /* ── Page 3 ── */
  {
    title: "Soldadura Certificada TIG/MIG",
    image: "/real_welding.jpg",
    href: "/servicios/fabricacion",
  },
  {
    title: "Anodizado Duro y Acabados",
    image: "/anodizado_parts.png",
    href: "/servicios/anodizado-teflonado",
  },
  {
    title: "Prototipado e Impresión 3D",
    image: "/industrial_3d_print.jpg",
    href: "https://wa.me/18099956395?text=Hola,%20me%20interesa%20cotizar%20prototipado%20industrial.",
  },
];

const PER_PAGE = 3;

export default function AppleShowcase() {
  const totalPages = Math.ceil(allProjects.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > page ? 1 : -1);
    setPage(idx);
  }, [page]);

  const currentCards = allProjects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 600 : -600, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -600 : 600, opacity: 0 }),
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", bounce: 0, duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
          Fabricación sin límites.
        </h2>
      </motion.div>

      {/* 3-at-a-time Carousel */}
      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", bounce: 0, duration: 0.55 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {currentCards.map((project, idx) => (
              <Link
                key={idx}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative block aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl border border-slate-200/80 cursor-pointer active:scale-[0.98] transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  draggable={false}
                />
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation: Step Player dots */}
      <div className="flex flex-col items-center justify-center mt-10">
        <StepPlayer
          steps={totalPages}
          pace={5}
          wake={80}
          currentStep={page}
          onStepChange={goTo}
        />
      </div>
    </section>
  );
}
