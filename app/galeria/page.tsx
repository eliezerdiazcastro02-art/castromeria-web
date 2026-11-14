"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialGalleryPosts, GalleryPost } from "@/data/galleryPosts";

export default function GaleriaPage() {
  const [posts, setPosts] = useState<GalleryPost[]>(initialGalleryPosts);
  const [activeModalPost, setActiveModalPost] = useState<GalleryPost | null>(null);
  const [showLightboxDetails, setShowLightboxDetails] = useState(false);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  // Sort state
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Upload modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadMaterial, setUploadMaterial] = useState("Acero Inoxidable 304 / CNC");
  const [uploadTolerancia, setUploadTolerancia] = useState("±0.01 mm");
  const [uploadCategory, setUploadCategory] = useState<GalleryPost["category"]>("cnc");
  const [uploadDescription, setUploadDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load custom posts from API and merge on top of initial posts
  useEffect(() => {
    fetch("/api/admin/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch((err) => console.warn("Could not load admin posts", err));

    fetch("/api/admin/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.categories)) {
          setCategories(data.categories);
        }
      })
      .catch((err) => console.warn("Could not load categories", err));
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      if (!uploadTitle) {
        const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        setUploadTitle(cleanName);
      }
    }
  };

  const categoryLabels: Record<GalleryPost["category"], string> = {
    cnc: "Mecanizado CNC",
    inox: "Mobiliario Inox",
    laser: "Corte Láser",
    soldadura: "Soldadura Certificada",
    taller: "Taller & Planta",
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;

    setIsSubmitting(true);

    try {
      // 1. Try sending to local API route
      const formData = new FormData();
      formData.append("file", uploadFile);
      formData.append("title", uploadTitle || "Pieza Industrial");
      formData.append("category", uploadCategory);
      formData.append("categoryLabel", categoryLabels[uploadCategory]);
      formData.append("material", uploadMaterial || "Metal de Alta Resistencia");
      formData.append("tolerancia", uploadTolerancia || "±0.01 mm");
      formData.append("description", uploadDescription || "Fabricación a medida realizada en nuestro taller.");

      let newPost: GalleryPost;

      const res = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        newPost = data.post;
      } else {
        // Fallback to local DataURL
        newPost = {
          id: `local-${Date.now()}`,
          title: uploadTitle || "Pieza Industrial",
          category: uploadCategory,
          categoryLabel: categoryLabels[uploadCategory],
          image: previewUrl || "",
          material: uploadMaterial || "Metal de Alta Resistencia",
          tolerancia: uploadTolerancia,
          description: uploadDescription || "Fabricación a medida realizada en nuestro taller.",
          likes: 1,
          featured: true,
        };
      }

      // Prepend to posts list
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);

      // Save to localStorage for persistence
      try {
        const stored = localStorage.getItem("castromeria_local_posts");
        const existing = stored ? JSON.parse(stored) : [];
        localStorage.setItem("castromeria_local_posts", JSON.stringify([newPost, ...existing]));
      } catch (err) {
        console.warn("Could not save to localStorage", err);
      }

      // Reset form & close
      setUploadFile(null);
      setPreviewUrl(null);
      setUploadTitle("");
      setUploadDescription("");
      setIsUploadOpen(false);
    } catch (err) {
      console.error("Upload error:", err);
      // Fallback
      if (previewUrl) {
        const fallbackPost: GalleryPost = {
          id: `local-${Date.now()}`,
          title: uploadTitle || "Pieza Industrial",
          category: uploadCategory,
          categoryLabel: categoryLabels[uploadCategory],
          image: previewUrl,
          material: uploadMaterial || "Metal de Alta Resistencia",
          tolerancia: uploadTolerancia,
          description: uploadDescription || "Fabricación a medida.",
          likes: 1,
        };
        setPosts([fallbackPost, ...posts]);
        setIsUploadOpen(false);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Merge categories from API and posts
  const categoryMap = new Map<string, string>();
  categories.forEach((c) => categoryMap.set(c.id, c.name));
  posts.forEach((p) => {
    if (p.category && !categoryMap.has(p.category)) {
      categoryMap.set(p.category, p.categoryLabel || p.category);
    }
  });

  const allCategoriesList = Array.from(categoryMap.entries()).map(([id, name]) => ({ id, name }));

  // Count items per category
  const countsByCategory: Record<string, number> = {};
  posts.forEach((p) => {
    const cat = p.category || "otros";
    countsByCategory[cat] = (countsByCategory[cat] || 0) + 1;
  });

  // Filter posts by selected category
  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  const displayedPosts = sortOrder === "newest" ? filteredPosts : [...filteredPosts].reverse();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-red-500 selection:text-white">
      <Navbar autoHideOnScroll={true} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* ── 1. HEADER TITLE ── */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Galería
          </h1>
        </div>

        {/* ── 2. UNIFIED CONTROLS TOOLBAR (CATEGORÍAS A LA IZQUIERDA, ORDEN A LA DERECHA) ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          {/* Pastillas de Categorías */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* "Todos" Pill */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border active:scale-95 ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200/90 shadow-2xs"
              }`}
            >
              <span>Todos</span>
              <span
                className={`text-[11px] font-medium transition-colors ${
                  selectedCategory === "all" ? "text-white/60" : "text-slate-400"
                }`}
              >
                {posts.length}
              </span>
            </button>

            {/* Categorías dinámicas (solo muestra las que tienen al menos 1 foto) */}
            {allCategoriesList
              .filter((cat) => (countsByCategory[cat.id] || 0) > 0 || selectedCategory === cat.id)
              .map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count = countsByCategory[cat.id] || 0;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border active:scale-95 ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200/90 shadow-2xs"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[11px] font-medium transition-colors ${
                        isSelected ? "text-white/60" : "text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
          </div>

          {/* Selector de Orden (Alineado en la misma barra a la derecha) */}
          <div className="relative shrink-0 self-end sm:self-center" ref={sortRef}>
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-all cursor-pointer select-none active:scale-95"
            >
              <span>{sortOrder === "newest" ? "Recientes" : "Antiguos"}</span>
              <span className={`text-[10px] text-slate-400 transition-transform duration-150 ${isSortOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {/* Dropdown Card */}
            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  className="absolute right-0 mt-1.5 w-36 rounded-2xl bg-white shadow-xl border border-slate-100 p-1 z-40"
                >
                  <button
                    onClick={() => { setSortOrder("newest"); setIsSortOpen(false); }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer"
                  >
                    <span>Recientes</span>
                    {sortOrder === "newest" && <span className="font-bold text-slate-900">✓</span>}
                  </button>

                  <button
                    onClick={() => { setSortOrder("oldest"); setIsSortOpen(false); }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer"
                  >
                    <span>Antiguos</span>
                    {sortOrder === "oldest" && <span className="font-bold text-slate-900">✓</span>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── 4-COLUMN INSTAGRAM-STYLE PORTRAIT GRID O EMPTY STATE ── */}
        {displayedPosts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs">
            <span className="text-3xl block mb-2">📸</span>
            <p className="text-sm font-semibold text-slate-700">No hay fotos en esta categoría todavía</p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-3 text-xs font-semibold text-red-600 hover:text-red-700 underline cursor-pointer"
            >
              Ver todas las fotos
            </button>
          </div>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {displayedPosts.map((post, index) => {
            return (
              <div
                key={post.id}
                onClick={() => setActiveModalPost(post)}
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "0 260px",
                }}
                className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 shadow-xs sm:shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] border border-slate-200/80 cursor-pointer sm:hover:-translate-y-1.5 active:scale-[0.97] transition-all duration-200 ease-out will-change-transform select-none"
              >
                {/* Clean Edge-to-edge Optimized Photo */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading={index < 4 ? "eager" : "lazy"}
                  priority={index < 4}
                  unoptimized={post.image.startsWith("blob:") || post.image.startsWith("data:")}
                />

                {/* Subtle Interactive Expand Cue (Glassmorphism) - Hidden on mobile for peak performance */}
                <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      </main>

      {/* ── MODAL PARA SUBIR FOTO ── */}
      <AnimatePresence>
        {isUploadOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsUploadOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Subir Nueva Foto</h2>
                  <p className="text-xs text-slate-500">Agrega un trabajo o pieza a la galería</p>
                </div>
                <button
                  onClick={() => setIsUploadOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                {/* Photo Dropzone / Picker */}
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {previewUrl ? (
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
                      <img src={previewUrl} alt="Vista previa" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold backdrop-blur-xs cursor-pointer"
                      >
                        Cambiar foto
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full aspect-[16/9] border-2 border-dashed border-slate-300 hover:border-red-500 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-red-500 bg-slate-50 hover:bg-red-50/20 transition-colors cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs font-semibold">Toca aquí para seleccionar una foto</span>
                    </button>
                  )}
                </div>

                {/* Título */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Título de la Pieza / Trabajo</label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="Ej. Eje de Transmisión Rectificado"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                {/* Categoría y Material */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Categoría</label>
                    <select
                      value={uploadCategory}
                      onChange={(e) => setUploadCategory(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    >
                      <option value="cnc">Mecanizado CNC</option>
                      <option value="inox">Mobiliario Inox</option>
                      <option value="laser">Corte Láser</option>
                      <option value="soldadura">Soldadura</option>
                      <option value="taller">Taller & Planta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Material</label>
                    <input
                      type="text"
                      value={uploadMaterial}
                      onChange={(e) => setUploadMaterial(e.target.value)}
                      placeholder="Ej. Inox 304, AISI 4340"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Tolerancia y Descripción */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Tolerancia (opcional)</label>
                    <input
                      type="text"
                      value={uploadTolerancia}
                      onChange={(e) => setUploadTolerancia(e.target.value)}
                      placeholder="Ej. ±0.01 mm"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Descripción corta</label>
                    <input
                      type="text"
                      value={uploadDescription}
                      onChange={(e) => setUploadDescription(e.target.value)}
                      placeholder="Detalle para cotizar"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || !uploadFile}
                    className="w-full py-3 rounded-xl bg-[#E5252A] hover:bg-red-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? "Subiendo..." : "Publicar en Galería"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODAL LIGHTBOX — IMAGEN + DETALLES OPCIONALES ── */}
      <AnimatePresence>
        {activeModalPost && (() => {
          const currentIndex = displayedPosts.findIndex(p => p.id === activeModalPost.id);
          const hasPrev = currentIndex > 0;
          const hasNext = currentIndex < displayedPosts.length - 1;
          const goToPrev = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (hasPrev) {
              setActiveModalPost(displayedPosts[currentIndex - 1]);
              setShowLightboxDetails(false);
            }
          };
          const goToNext = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (hasNext) {
              setActiveModalPost(displayedPosts[currentIndex + 1]);
              setShowLightboxDetails(false);
            }
          };

          const postDescription = (activeModalPost.description && activeModalPost.description.trim() !== "")
            ? activeModalPost.description
            : "Fabricación a medida realizada en taller Castromeria.";

          const hasDetails = true;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setActiveModalPost(null); setShowLightboxDetails(false); }}
              className="fixed inset-0 z-50 bg-black/92 sm:backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center select-none"
            >
              {/* Botón Cerrar (X) arriba a la derecha */}
              <button
                onClick={() => { setActiveModalPost(null); setShowLightboxDetails(false); }}
                className="absolute top-5 right-5 sm:top-7 sm:right-7 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold backdrop-blur-md transition-all cursor-pointer z-50 shadow-xl hover:scale-105 active:scale-95"
                aria-label="Cerrar"
              >
                ✕
              </button>

              {/* Flecha Anterior (Izquierda) */}
              {hasPrev && (
                <button
                  onClick={goToPrev}
                  className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-50 shadow-xl hover:scale-110 active:scale-90"
                  aria-label="Anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Flecha Siguiente (Derecha) */}
              {hasNext && (
                <button
                  onClick={goToNext}
                  className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-50 shadow-xl hover:scale-110 active:scale-90"
                  aria-label="Siguiente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* VERTICAL CARD: IMAGEN PURA ARRIBA + DETALLES ABAJO */}
              <motion.div
                key={activeModalPost.id}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.35 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full flex flex-col items-center"
              >
                {/* IMAGEN PURA */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                  <img
                    src={activeModalPost.image}
                    alt={activeModalPost.title}
                    decoding="async"
                    className={`w-auto h-auto max-w-full object-contain block mx-auto transition-all duration-300 ${
                      showLightboxDetails
                        ? "max-h-[55vh] sm:max-h-[60vh]"
                        : "max-h-[80vh] sm:max-h-[85vh]"
                    }`}
                  />

                  {/* Logo Castromeria abajo a la izquierda */}
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-white/90 flex items-center justify-center pointer-events-none">
                    <img
                      src="/logo_secundario.png"
                      alt="Castromeria Insignia"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* "Ver detalles" Toggle — Below the image, centered */}
                {hasDetails && (
                  <button
                    onClick={() => setShowLightboxDetails(!showLightboxDetails)}
                    className="mt-3 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-xs font-medium border border-white/20 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{showLightboxDetails ? "Ocultar detalles" : "Ver detalles"}</span>
                    <span className="text-[10px] opacity-60">{showLightboxDetails ? "▴" : "▾"}</span>
                  </button>
                )}

                {/* Details Panel — below button, frosted card */}
                <AnimatePresence>
                  {showLightboxDetails && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="w-full max-w-lg overflow-hidden mt-3"
                    >
                      <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/15 px-5 py-4 text-white">
                        {/* Title */}
                        <h3 className="text-sm font-semibold tracking-tight mb-2.5">
                          {activeModalPost.title}
                        </h3>

                        {/* Clean inline pills */}
                        <div className="flex flex-wrap gap-2">
                          {activeModalPost.categoryLabel && (
                            <span className="text-[11px] font-medium text-white/80 bg-white/10 px-2.5 py-1 rounded-full">
                              {activeModalPost.categoryLabel}
                            </span>
                          )}
                          {activeModalPost.material && activeModalPost.material.trim() !== "" && (
                            <span className="text-[11px] font-medium text-white/80 bg-white/10 px-2.5 py-1 rounded-full">
                              {activeModalPost.material}
                            </span>
                          )}
                        </div>

                        {/* Description (Custom or Auto Simple) */}
                        <p className="text-[11px] text-white/55 mt-2.5 leading-relaxed">
                          {postDescription}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
