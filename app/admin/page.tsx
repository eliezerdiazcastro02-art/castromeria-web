"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryPost } from "@/data/galleryPosts";
import AdminMeshBackground from "@/components/AdminMeshBackground";
import AdminSettingsModal from "@/components/AdminSettingsModal";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  // Settings & Recovery state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRecovering, setIsRecovering] = useState(false);
  const [recoveryNotice, setRecoveryNotice] = useState<string | null>(null);

  // Gallery items state
  const [customPosts, setCustomPosts] = useState<GalleryPost[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  // Categories dynamic state
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isSavingCategory, setIsSavingCategory] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<{ id: string; name: string } | null>(null);
  const [isDeletingCategory, setIsDeletingCategory] = useState(false);

  // Upload form state
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string>("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Inspection & Delete modal states
  const [inspectingPost, setInspectingPost] = useState<GalleryPost | null>(null);
  const [postToDelete, setPostToDelete] = useState<GalleryPost | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Check login on mount
  useEffect(() => {
    const auth = sessionStorage.getItem("castromeria_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch custom posts
  const fetchPosts = async () => {
    try {
      setIsLoadingPosts(true);
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      if (data.success && Array.isArray(data.posts)) {
        setCustomPosts(data.posts);
      }
    } catch (e) {
      console.error("Error loading posts:", e);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      if (data.success && Array.isArray(data.categories)) {
        setCategories(data.categories);
        if (data.categories.length > 0) {
          setCategory((prev) => prev || data.categories[0].id);
        }
      }
    } catch (e) {
      console.error("Error loading categories:", e);
    }
  };

  const handleCreateCategory = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newCategoryName.trim()) return;

    setIsSavingCategory(true);
    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName.trim() }),
      });
      const data = await res.json();
      if (data.success && data.category) {
        setCategories(data.categories);
        setCategory(data.category.id);
        setNewCategoryName("");
        setIsCreatingCategory(false);
      }
    } catch (err) {
      console.error("Error creating category:", err);
    } finally {
      setIsSavingCategory(false);
    }
  };

  const requestDeleteCategory = (catId: string, catName: string) => {
    setCategoryToDelete({ id: catId, name: catName });
  };

  const confirmDeleteCategory = async () => {
    if (!categoryToDelete) return;
    setIsDeletingCategory(true);
    try {
      const res = await fetch("/api/admin/categories", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: categoryToDelete.id }),
      });
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories);
        if (category === categoryToDelete.id && data.categories.length > 0) {
          setCategory(data.categories[0].id);
        }
        setCategoryToDelete(null);
      }
    } catch (err) {
      console.error("Error deleting category:", err);
    } finally {
      setIsDeletingCategory(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
      fetchCategories();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: passwordInput.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("castromeria_admin_auth", "true");
        setAuthError(false);
      } else {
        setAuthError(true);
        setTimeout(() => setAuthError(false), 2000);
      }
    } catch (err) {
      if (passwordInput.trim() === "2026" || passwordInput.trim() === "admin") {
        setIsAuthenticated(true);
        sessionStorage.setItem("castromeria_admin_auth", "true");
        setAuthError(false);
      } else {
        setAuthError(true);
        setTimeout(() => setAuthError(false), 2000);
      }
    }
  };

  const handleRecoverPin = async () => {
    setIsRecovering(true);
    setRecoveryNotice(null);
    try {
      const res = await fetch("/api/admin/auth/recover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setRecoveryNotice(`✉️ ${data.message || `Hemos enviado el PIN a tu correo`}`);
        if (data.previewPin) {
          // Autocompletar suavemente
          setTimeout(() => {
            setPasswordInput(data.previewPin);
          }, 800);
        }
      } else {
        setRecoveryNotice(data.error || "Error al solicitar recuperación");
      }
    } catch (err) {
      setRecoveryNotice("Error de conexión al solicitar el PIN");
    } finally {
      setIsRecovering(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("castromeria_admin_auth");
    setPasswordInput("");
  };

  const applyFile = (selected: File) => {
    setFile(selected);
    const objectUrl = URL.createObjectURL(selected);
    setPreview(objectUrl);
    if (!title) {
      const clean = selected.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .trim();
      setTitle(clean.charAt(0).toUpperCase() + clean.slice(1));
    }
    setStatusMessage(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      applyFile(selected);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type.startsWith("image/")) {
      applyFile(dropped);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setStatusMessage({ type: "error", text: "Elige una foto primero." });
      return;
    }

    if (!category || category.trim() === "" || category === "all" || category === "general") {
      setStatusMessage({
        type: "error",
        text: "La categoría es obligatoria. Por favor selecciona o crea una categoría.",
      });
      return;
    }

    setIsUploading(true);
    setStatusMessage(null);

    const activeCat = categories.find((c) => c.id === category);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title || "Pieza Fabricada");
      formData.append("category", category);
      formData.append("categoryLabel", activeCat?.name || category);
      formData.append("material", material.trim());
      formData.append("description", description.trim() || "Fabricación a medida realizada en taller Castromeria.");

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: "¡Foto publicada! Ya está visible en la galería.",
        });
        setFile(null);
        setPreview(null);
        setTitle("");
        setMaterial("");
        setDescription("");
        setShowAdvanced(false);
        fetchPosts();
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Ocurrió un error al subir la foto.",
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: "Error de red al conectar con el servidor.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    setIsDeleting(true);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: postToDelete.id }),
      });

      if (res.ok) {
        setCustomPosts((prev) => prev.filter((p) => p.id !== postToDelete.id));
        setPostToDelete(null);
      } else {
        alert("No se pudo eliminar la foto.");
      }
    } catch (e) {
      console.error("Error al eliminar post:", e);
    } finally {
      setIsDeleting(false);
    }
  };

  // ════════════════════════════════════════════════════════════════════════
  // 1. APPLE PASSCODE LOGIN SCREEN
  // ════════════════════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 selection:bg-red-600 selection:text-white">
        {/* Animated Mesh Gradient Background (Castromeria Brand Colors) */}
        <AdminMeshBackground />

        {/* Apple VisionOS Frosted Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: authError ? [-8, 8, -6, 6, 0] : 0,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative z-10 bg-white/80 backdrop-blur-3xl rounded-[32px] p-8 max-w-[370px] w-full shadow-[0_25px_70px_-15px_rgba(220,38,38,0.18),0_12px_32px_-10px_rgba(0,0,0,0.08)] border border-white/70 text-center"
        >
          {/* Insignia Squircle */}
          <div className="w-16 h-16 rounded-2xl bg-white/95 p-3 mx-auto mb-4 flex items-center justify-center shadow-[0_4px_16px_rgba(220,38,38,0.12)] border border-white/80 ring-1 ring-black/[0.04]">
            <img src="/logo_secundario.png" alt="Castromeria" className="w-full h-full object-contain" />
          </div>

          <h1 className="text-xl font-bold text-neutral-900 tracking-tight">
            Castromeria Studio
          </h1>
          <p className="text-xs text-neutral-500 mt-1 mb-6 font-medium">
            Ingresa tu PIN de administrador
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                inputMode="numeric"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="PIN (ej. 2026)"
                className="w-full px-4 py-3.5 rounded-2xl bg-white/80 hover:bg-white text-center text-base sm:text-sm font-semibold tracking-widest text-neutral-900 placeholder:text-neutral-400 placeholder:tracking-normal border border-neutral-200/80 focus:border-red-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-500/[0.12] shadow-xs transition-all"
                autoFocus
              />
            </div>

            {authError && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-medium text-red-600 bg-red-50/90 py-1.5 rounded-xl border border-red-200/80 shadow-xs"
              >
                PIN incorrecto. (Usa: 2026)
              </motion.p>
            )}

            {recoveryNotice && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-medium text-emerald-800 bg-emerald-50/95 py-2 px-3 rounded-xl border border-emerald-200/80 shadow-xs text-center"
              >
                {recoveryNotice}
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-black text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer border border-white/10"
            >
              Entrar
            </button>

            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={handleRecoverPin}
                disabled={isRecovering}
                className="text-xs text-neutral-500 hover:text-red-600 transition-colors cursor-pointer font-medium"
              >
                {isRecovering ? "Enviando correo..." : "¿Olvidaste tu PIN? Enviar a mi correo"}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-black/[0.06]">
            <Link
              href="/"
              className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>←</span>
              <span>Ir a la web principal</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // 2. APPLE ADMIN INTERFACE (CLEAN, MINIMAL, ZERO JARGON)
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-neutral-900 selection:bg-slate-900 selection:text-white pb-32">
      {/* ── Apple-style Translucent Navbar ── */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] transition-all">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-center">
          {/* Center: Botón "Ver Galería" centrado estilo search pill */}
          <Link
            href="/galeria"
            target="_blank"
            className="px-4 py-1.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold border border-black/[0.08] shadow-2xs hover:shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ver Galería</span>
            <span className="text-neutral-400">↗</span>
          </Link>
        </div>
      </header>

      {/* ── Main Canvas ── */}
      <main className="max-w-3xl mx-auto px-3.5 sm:px-6 pt-5 sm:pt-8 space-y-6 sm:space-y-8">
        {/* Header Title */}
        <div className="text-left px-1">
          <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Subir foto a la Galería
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Toma o selecciona una foto. Se publicará al instante en el catálogo público.
          </p>
        </div>

        {/* ── 1. APPLE UPLOAD CARD ── */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.06]">
          <form onSubmit={handleUploadSubmit} className="space-y-5 sm:space-y-6">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Drop & Select Hero Zone */}
            {!preview ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 active:scale-[0.99] ${
                  isDragging
                    ? "border-neutral-900 bg-neutral-100"
                    : "border-neutral-300/80 hover:border-neutral-400 bg-neutral-50/60 hover:bg-neutral-50"
                }`}
              >
                {/* Clean Camera Icon Badge */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xs border border-black/[0.06] flex items-center justify-center mb-2.5 sm:mb-3 text-neutral-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900">
                  Toca aquí para seleccionar una foto
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 max-w-xs">
                  Foto de la cámara o de tu galería (JPG, PNG o WEBP)
                </p>
              </div>
            ) : (
              /* Selected Image Preview with quick replace action */
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-black/[0.08] aspect-[4/3] sm:aspect-[16/10] max-h-[300px] sm:max-h-[340px] flex items-center justify-center">
                  <img src={preview} alt="Vista previa" className="w-full h-full object-contain" />

                  {/* Top-Right Floating Controls */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all active:scale-95 cursor-pointer shadow-sm"
                    >
                      Cambiar foto
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setPreview(null);
                      }}
                      className="w-8 h-8 rounded-full bg-black/70 hover:bg-red-600 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-sm"
                      title="Quitar foto"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* 1. Main Piece Title */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    ¿Qué pieza o trabajo es?
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Engranaje Helicoidal Rectificado"
                    className="w-full px-4 py-3 sm:py-3 rounded-2xl bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white text-base sm:text-sm font-medium text-neutral-900 border border-black/[0.08] focus:border-neutral-900 focus:outline-none transition-all"
                  />
                </div>

                {/* 2. Apple Segmented Dynamic Category Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-neutral-800">
                      Categoría <span className="text-red-500 font-bold">*</span> <span className="text-[11px] font-normal text-neutral-400">(Obligatoria)</span>
                    </label>
                    {!isCreatingCategory && (
                      <button
                        type="button"
                        onClick={() => setIsCreatingCategory(true)}
                        className="text-xs font-semibold text-neutral-800 hover:text-black inline-flex items-center gap-1 cursor-pointer transition-colors py-1 px-2 -mr-2 rounded-lg active:bg-neutral-100"
                      >
                        <span className="text-sm font-bold">+</span>
                        <span>Nueva categoría</span>
                      </button>
                    )}
                  </div>

                  {/* Inline Category Creator */}
                  {isCreatingCategory && (
                    <div className="mb-3 p-2 rounded-2xl bg-neutral-100 border border-black/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleCreateCategory();
                          }
                        }}
                        placeholder="Nombre de la categoría..."
                        className="flex-1 px-3.5 py-2.5 bg-white rounded-xl text-base sm:text-xs font-medium text-neutral-900 border border-black/[0.08] focus:outline-none focus:border-neutral-900"
                        autoFocus
                      />
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          disabled={isSavingCategory || !newCategoryName.trim()}
                          onClick={() => handleCreateCategory()}
                          className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-black disabled:opacity-40 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer text-center"
                        >
                          {isSavingCategory ? "Guardando..." : "Guardar"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsCreatingCategory(false);
                            setNewCategoryName("");
                          }}
                          className="w-9 h-9 rounded-xl bg-white hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 text-xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                          title="Cancelar"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Category Pills */}
                  {categories.length === 0 ? (
                    <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-center">
                      <p className="text-xs font-medium text-amber-800 mb-2">Debes crear al menos una categoría para poder publicar.</p>
                      <button
                        type="button"
                        onClick={() => setIsCreatingCategory(true)}
                        className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold shadow-xs cursor-pointer active:scale-95"
                      >
                        + Crear primera categoría
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      {categories.map((cat) => {
                        const isSelected = category === cat.id;
                        return (
                          <div
                            key={cat.id}
                            className={`group inline-flex items-center rounded-xl transition-all ${
                              isSelected
                                ? "bg-neutral-900 text-white shadow-sm"
                                : "bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700"
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => setCategory(cat.id)}
                              className="px-3.5 py-2 sm:py-2 text-xs font-medium cursor-pointer"
                            >
                              {cat.name}
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                requestDeleteCategory(cat.id, cat.name);
                              }}
                              className={`w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center mr-1 text-[11px] opacity-60 sm:opacity-30 hover:opacity-100 hover:text-red-500 transition-opacity cursor-pointer rounded-lg active:bg-black/10 ${
                                isSelected ? "text-white" : "text-neutral-500"
                              }`}
                              title={`Eliminar categoría "${cat.name}"`}
                            >
                              ✕
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Progressive Disclosure: Optional Details */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-1 cursor-pointer py-1.5 active:bg-neutral-100 rounded-lg px-1.5 -ml-1.5"
                  >
                    <span>{showAdvanced ? "Ocultar detalles opcionales" : "Agregar más detalles (Material, Notas)"}</span>
                    <span className="text-[10px]">{showAdvanced ? "▴" : "▾"}</span>
                  </button>

                  <AnimatePresence>
                    {showAdvanced && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-3 space-y-3"
                      >
                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                            Material (Opcional)
                          </label>
                          <input
                            type="text"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                            placeholder="Ej. Inox 304, Aluminio, Acero 4140"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 text-base sm:text-xs border border-black/[0.06] focus:outline-none focus:border-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                            Notas o breve descripción (Opcional)
                          </label>
                          <textarea
                            rows={2}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Ej. Fabricado para cliente del sector alimentario con acabado pulido."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 text-base sm:text-xs border border-black/[0.06] focus:outline-none focus:border-neutral-900 resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Status alerts */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-2xl text-xs font-medium flex items-center justify-between ${
                  statusMessage.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                    : "bg-red-50 text-red-700 border border-red-200/60"
                }`}
              >
                <span>{statusMessage.text}</span>
                {statusMessage.type === "success" && (
                  <Link
                    href="/galeria"
                    target="_blank"
                    className="underline font-semibold ml-2 text-emerald-900"
                  >
                    Ver en Galería ↗
                  </Link>
                )}
              </motion.div>
            )}

            {/* Apple Primary Action Button */}
            {preview && (
              <button
                type="submit"
                disabled={isUploading || !file || !category || categories.length === 0}
                className="w-full py-3.5 sm:py-3.5 rounded-2xl bg-neutral-900 hover:bg-black disabled:opacity-40 text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Publicando foto...</span>
                  </>
                ) : !category || categories.length === 0 ? (
                  <span>Selecciona una categoría arriba</span>
                ) : (
                  <span>Publicar en Galería</span>
                )}
              </button>
            )}
          </form>
        </div>

        {/* ── 2. APPLE PHOTOS GALLERY MANAGER ── */}
        <div className="space-y-3.5 sm:space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm sm:text-base font-semibold text-neutral-900">
              Fotos en la Galería
            </h2>
            <span className="text-xs font-semibold text-neutral-600 bg-neutral-200/70 px-2.5 py-0.5 rounded-full">
              {customPosts.length} {customPosts.length === 1 ? "foto" : "fotos"}
            </span>
          </div>

          {isLoadingPosts ? (
            <div className="py-12 text-center text-xs text-neutral-400">
              Cargando fotos...
            </div>
          ) : customPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center border border-black/[0.06]">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 mx-auto flex items-center justify-center text-xl mb-3">
                📷
              </div>
              <p className="text-xs font-medium text-neutral-700">
                No hay fotos en la galería actualmente
              </p>
              <p className="text-[11px] text-neutral-400 mt-1">
                Sube una foto arriba para publicarla en el catálogo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
              {customPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 border border-black/[0.08] shadow-2xs cursor-pointer active:scale-[0.98] transition-transform"
                  onClick={() => setInspectingPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 pointer-events-none">
                    <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white mb-1 inline-block">
                      {post.categoryLabel}
                    </span>
                    <p className="text-xs font-semibold text-white truncate drop-shadow-xs">
                      {post.title}
                    </p>
                  </div>

                  {/* Top-Right Quick Delete Pill (visible on touch and hover) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPostToDelete(post);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 sm:w-7 sm:h-7 rounded-full bg-black/60 hover:bg-red-600 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center justify-center transition-all opacity-95 sm:opacity-0 group-hover:opacity-100 active:scale-90 cursor-pointer shadow-sm"
                    title="Eliminar foto"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── 3. APPLE LIGHTBOX / INSPECT MODAL (OPTIMIZADO MÓVIL) ── */}
      <AnimatePresence>
        {inspectingPost && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setInspectingPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] max-h-[45vh] bg-neutral-950 flex items-center justify-center shrink-0">
                <img
                  src={inspectingPost.image}
                  alt={inspectingPost.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setInspectingPost(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-3 overflow-y-auto flex-1">
                {/* Título claro arriba */}
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 tracking-tight">
                  {inspectingPost.title}
                </h3>

                {/* Etiquetas limpias agrupadas juntas */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {inspectingPost.categoryLabel && (
                    <span className="text-[11px] font-medium text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full">
                      {inspectingPost.categoryLabel}
                    </span>
                  )}
                  {inspectingPost.material && inspectingPost.material.trim() !== "" && (
                    <span className="text-[11px] font-medium text-neutral-600 bg-neutral-100/70 px-3 py-1 rounded-full">
                      {inspectingPost.material}
                    </span>
                  )}
                </div>

                {/* Descripción breve (personalizada o automática simple) */}
                <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                  {inspectingPost.description && inspectingPost.description.trim() !== ""
                    ? inspectingPost.description
                    : "Fabricación a medida realizada en taller Castromeria."}
                </p>

                {/* Botones de acción equilibrados y cómodos en móvil */}
                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between gap-2.5">
                  <button
                    onClick={() => {
                      const target = inspectingPost;
                      setInspectingPost(null);
                      setPostToDelete(target);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>🗑</span>
                    <span>Eliminar foto</span>
                  </button>

                  <button
                    onClick={() => setInspectingPost(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-all active:scale-95 cursor-pointer text-center"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 4. APPLE CONFIRMATION DIALOG (DELETE) ── */}
      <AnimatePresence>
        {postToDelete && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => !isDeleting && setPostToDelete(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 max-w-xs w-full shadow-2xl border border-black/[0.08] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 mx-auto flex items-center justify-center text-lg mb-3">
                🗑
              </div>
              <h3 className="text-sm font-semibold text-neutral-900">
                ¿Eliminar esta foto?
              </h3>
              <p className="text-xs text-neutral-500 mt-1 mb-5">
                Se borrará de la galería pública inmediatamente.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setPostToDelete(null)}
                  className="py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={confirmDelete}
                  className="py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  {isDeleting ? "Borrando..." : "Eliminar"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 5. APPLE CONFIRMATION DIALOG (DELETE CATEGORY) ── */}
      <AnimatePresence>
        {categoryToDelete && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => !isDeletingCategory && setCategoryToDelete(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 max-w-xs w-full shadow-2xl border border-black/[0.08] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 mx-auto flex items-center justify-center text-lg mb-3">
                🏷️
              </div>
              <h3 className="text-sm font-semibold text-neutral-900">
                ¿Eliminar categoría?
              </h3>
              <p className="text-xs text-neutral-500 mt-1 mb-5">
                Se eliminará &ldquo;<span className="font-semibold text-neutral-800">{categoryToDelete.name}</span>&rdquo; de la lista de categorías.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={isDeletingCategory}
                  onClick={() => setCategoryToDelete(null)}
                  className="py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  disabled={isDeletingCategory}
                  onClick={confirmDeleteCategory}
                  className="py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  {isDeletingCategory ? "Borrando..." : "Eliminar"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 6. ADMIN SETTINGS & PIN MODAL ── */}
      <AdminSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
