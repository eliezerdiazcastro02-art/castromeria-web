"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { initialGalleryPosts } from "@/data/galleryPosts";

interface FeaturedCard {
  id: string;
  title: string;
  categoryId: string;
  image: string;
  href: string;
}

const defaultProjects: FeaturedCard[] = initialGalleryPosts.map((post) => ({
  id: post.id,
  title: post.title,
  categoryId: post.category,
  image: post.image,
  href: "/galeria",
}));

export default function AppleShowcase() {
  const [projects, setProjects] = useState<FeaturedCard[]>(defaultProjects);
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadLatestPosts = () => {
    fetch("/api/admin/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          const cards: FeaturedCard[] = data.posts.map((p: any) => ({
            id: p.id,
            title: p.title || "Pieza Fabricada",
            categoryId: p.category || "general",
            image: p.image,
            href: "/galeria",
          }));
          setProjects(cards);
        }
      })
      .catch((err) => console.warn("Could not load latest gallery posts for showcase", err));
  };

  useEffect(() => {
    loadLatestPosts();

    // Actualiza automáticamente si se suben fotos en otra pestaña
    const handleFocus = () => loadLatestPosts();
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const handlePrev = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  // Helper to calculate circular distance and visual styles for 3D coverflow
  const getCardProps = (index: number) => {
    const total = projects.length;
    if (total === 0) {
      return { x: "0%", scale: 1, zIndex: 0, opacity: 0, rotateY: 0, isCenter: false, isVisible: false };
    }
    let diff = index - currentIndex;

    // Wrap around to keep cards seamlessly positioned
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;

    const isCenter = diff === 0;

    let x = "0%";
    let scale = 1;
    let zIndex = 30;
    let opacity = 1;
    let rotateY = 0;

    if (diff === 0) {
      x = "0%";
      scale = 1;
      zIndex = 30;
      opacity = 1;
      rotateY = 0;
    } else if (diff === 1) {
      x = "58%";
      scale = 0.86;
      zIndex = 20;
      opacity = 0.9;
      rotateY = -6;
    } else if (diff === -1) {
      x = "-58%";
      scale = 0.86;
      zIndex = 20;
      opacity = 0.9;
      rotateY = 6;
    } else if (diff === 2) {
      x = "108%";
      scale = 0.72;
      zIndex = 10;
      opacity = 0.55;
      rotateY = -12;
    } else if (diff === -2) {
      x = "-108%";
      scale = 0.72;
      zIndex = 10;
      opacity = 0.55;
      rotateY = 12;
    } else {
      x = diff > 0 ? "150%" : "-150%";
      scale = 0.55;
      zIndex = 0;
      opacity = 0;
      rotateY = 0;
    }

    return {
      x,
      scale,
      zIndex,
      opacity,
      rotateY,
      isCenter,
      isVisible: Math.abs(diff) <= 2,
    };
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", bounce: 0, duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
          Nuestros Trabajos
        </h2>
      </motion.div>

      {/* Link to full gallery */}
      <div className="flex items-center justify-center mb-10 sm:mb-14">
        <Link
          href="/galeria"
          className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white inline-flex items-center gap-1.5 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
        >
          <span>Ver más</span>
          <span>→</span>
        </Link>
      </div>

      {/* 3D Coverflow Carousel */}
      <div 
        className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, idx) => {
          const { x, scale, zIndex, opacity, rotateY, isCenter, isVisible } = getCardProps(idx);

          return (
            <motion.div
              key={project.id || idx}
              animate={{
                x,
                scale,
                zIndex,
                opacity,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              onClick={() => {
                if (!isCenter) setCurrentIndex(idx);
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`absolute w-[250px] sm:w-[320px] md:w-[380px] aspect-[3/4] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden select-none transition-shadow duration-300 ${
                isCenter
                  ? "shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5 cursor-pointer"
                  : "shadow-[0_15px_35px_-8px_rgba(0,0,0,0.2)] cursor-pointer hover:opacity-100"
              } ${!isVisible ? "pointer-events-none" : ""}`}
            >
              {isCenter ? (
                <Link href={project.href} className="block w-full h-full relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    draggable={false}
                  />
                  {/* Subtle glass reflection effect on center card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </Link>
              ) : (
                <div className="w-full h-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Slight dark overlay on background cards for depth */}
                  <div className="absolute inset-0 bg-black/15 transition-opacity" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrows: Left and Right Circular Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
          aria-label="Siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
