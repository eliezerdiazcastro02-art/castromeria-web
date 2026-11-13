"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialGalleryPosts, GalleryPost } from "@/data/galleryPosts";

export default function GaleriaPage() {
  const [activeModalPost, setActiveModalPost] = useState<GalleryPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* ── CLEAN TITLE ── */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Galería
          </h1>
        </div>

        {/* ── THE PHOTO GRID (3x3) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
          {initialGalleryPosts.map((post) => {
            const isLiked = likedPosts[post.id];
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
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

              {/* Right Side: Details & WhatsApp Button */}
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
                          <span className="font-bold text-sm text-slate-900">Castromeria SRL</span>
                          <span className="text-blue-500 text-xs">✓</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Taller Industrial</span>
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
