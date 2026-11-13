"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialGalleryPosts, GalleryPost } from "@/data/galleryPosts";
import Link from "next/link";

const categories = [
  { id: "all", label: "Todas", icon: "▦" },
  { id: "cnc", label: "Mecanizado CNC", icon: "⚙️" },
  { id: "inox", label: "Mobiliario Inox", icon: "✨" },
  { id: "laser", label: "Corte Láser", icon: "⚡" },
  { id: "soldadura", label: "Soldadura", icon: "🔥" },
  { id: "taller", label: "Taller & Planta", icon: "🏭" },
];

const highlights = [
  { id: "cnc", name: "CNC & Ejes", img: "/showcase_card_1_hires.jpg" },
  { id: "inox", name: "Inox Médica", img: "/subservicios/muebles-inox.png" },
  { id: "laser", name: "Corte Láser", img: "/laser_cutting_sparks.png" },
  { id: "soldadura", name: "Soldadura TIG", img: "/real_welding.jpg" },
  { id: "taller", name: "Taller & CNC", img: "/real_workshop.jpg" },
];

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalPost, setActiveModalPost] = useState<GalleryPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return initialGalleryPosts;
    return initialGalleryPosts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* ── PROFILE HEADER (INSTAGRAM STYLE) ── */}
        <section className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm p-6 sm:p-10 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
            {/* Avatar with IG gradient story ring */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-red-600 shadow-md">
                <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo_secundario.png"
                    alt="Castromeria"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] text-white font-bold" title="Taller Operativo">
                ✓
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              {/* Row 1: Username & Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    castromeria.srl
                  </h1>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-[11px] font-bold" title="Verificado">
                    ✓
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <a
                    href="https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20industrial%20que%20vi%20en%20su%20galer%C3%ADa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-red-500/20 active:scale-95 transition-all"
                  >
                    Cotizar Proyecto
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <span>Seguir</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Row 2: Stats */}
              <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 text-sm mb-4">
                <div>
                  <span className="font-bold text-slate-900">{initialGalleryPosts.length}</span>{" "}
                  <span className="text-slate-500">publicaciones</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">+500</span>{" "}
                  <span className="text-slate-500">proyectos</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">±0.01mm</span>{" "}
                  <span className="text-slate-500">precisión</span>
                </div>
              </div>

              {/* Row 3: Bio */}
              <div className="text-sm leading-relaxed space-y-1 text-slate-700">
                <p className="font-bold text-slate-900">Castromeria SRL • Fabricación Avanzada</p>
                <p>⚙️ Mecanizado CNC de alta precisión, Mobiliario Inox 304/316 & Corte Láser.</p>
                <p>📍 República Dominicana • Entregas a nivel nacional para industria médica y manufactura.</p>
                <p className="text-red-600 font-semibold text-xs sm:text-sm">
                  🔗 Catálogo oficial en vivo • Haz clic en cualquier pieza para cotizar
                </p>
              </div>
            </div>
          </div>

          {/* ── STORIES HIGHLIGHTS ── */}
          <div className="border-t border-slate-100 pt-6 mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Categorías Destacadas
            </p>
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
              {highlights.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedCategory(h.id)}
                  className="flex flex-col items-center gap-2 shrink-0 group focus:outline-none"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] transition-transform duration-300 group-hover:scale-105 ${
                    selectedCategory === h.id
                      ? "bg-red-600 ring-2 ring-red-400/40"
                      : "bg-slate-200 group-hover:bg-slate-300"
                  }`}>
                    <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                      <img
                        src={h.img}
                        alt={h.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <span className={`text-[11px] sm:text-xs font-semibold whitespace-nowrap ${
                    selectedCategory === h.id ? "text-red-600 font-bold" : "text-slate-700"
                  }`}>
                    {h.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CATEGORY TABS (POSTS / CATEGORÍAS) ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ── THE INSTAGRAM PHOTO GRID (3x3) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {filteredPosts.map((post) => {
            const isLiked = likedPosts[post.id];
            return (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveModalPost(post)}
                className="group relative aspect-square sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl border border-slate-200/80 cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Top badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium border border-white/10">
                    {post.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay with IG details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 text-white z-10">
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => toggleLike(post.id, e)}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-90 transition-transform"
                    >
                      <span className={isLiked ? "text-red-500" : "text-white"}>
                        {isLiked ? "❤️" : "🤍"}
                      </span>
                    </button>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base line-clamp-2 leading-snug mb-1">
                      {post.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1">
                      {post.material}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/20">
                      <span>Ver detalles & cotizar</span>
                      <span className="font-bold text-white">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* ── MODAL LIGHTBOX ESTILO POST DE INSTAGRAM ── */}
      <AnimatePresence>
        {activeModalPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalPost(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl border border-slate-200"
            >
              {/* Left Side: Photo */}
              <div className="md:w-3/5 bg-slate-950 flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
                <img
                  src={activeModalPost.image}
                  alt={activeModalPost.title}
                  className="w-full h-full object-contain max-h-[85vh]"
                />
              </div>

              {/* Right Side: IG Details & WhatsApp Button */}
              <div className="md:w-2/5 p-6 flex flex-col justify-between bg-white overflow-y-auto">
                <div>
                  {/* Author Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 p-0.5 border border-slate-200">
                        <img
                          src="/logo_secundario.png"
                          alt="Castromeria"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-sm text-slate-900">castromeria.srl</span>
                          <span className="text-blue-500 text-xs">✓</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Taller y Fabricación</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveModalPost(null)}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                    {activeModalPost.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {activeModalPost.description}
                  </p>

                  {/* Technical Specs Pills */}
                  <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 mb-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Categoría:</span>
                      <span className="font-semibold text-slate-800">{activeModalPost.categoryLabel}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Material:</span>
                      <span className="font-semibold text-slate-800">{activeModalPost.material}</span>
                    </div>
                    {activeModalPost.tolerancia && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">Tolerancia:</span>
                        <span className="font-semibold text-red-600">{activeModalPost.tolerancia}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/18099956395?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20la%20pieza%20${encodeURIComponent(activeModalPost.title)}%20(${encodeURIComponent(activeModalPost.material)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#E5252A] hover:bg-red-700 text-white font-bold text-sm text-center shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>💬</span>
                    <span>Cotizar esta pieza en WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Respuesta directa con un ingeniero del taller
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
