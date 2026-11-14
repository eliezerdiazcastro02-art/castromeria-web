"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AdminSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPinChanged?: () => void;
}

export default function AdminSettingsModal({
  isOpen,
  onClose,
  onPinChanged,
}: AdminSettingsModalProps) {
  const [newPin, setNewPin] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPin.trim()) return;

    setIsSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newPin: newPin.trim(),
          directUpdate: true,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: "¡PIN cambiado con éxito!" });
        setNewPin("");
        if (onPinChanged) onPinChanged();
        setTimeout(() => {
          onClose();
          setMessage(null);
        }, 1200);
      } else {
        setMessage({ type: "error", text: data.error || "Error al cambiar PIN" });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSendEmail = async () => {
    setIsSending(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/auth/recover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setMessage({
          type: "success",
          text: `✉️ PIN enviado a ${data.email || "tu correo"}.`,
        });
      } else {
        setMessage({ type: "error", text: "Error al enviar el correo" });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        />

        {/* Ultra-simple Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-[320px] bg-white rounded-3xl p-6 shadow-2xl border border-black/[0.08] text-center"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-neutral-900">
              Cambiar PIN
            </h3>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-3">
            <input
              type="text"
              inputMode="numeric"
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              placeholder="Escribe el nuevo PIN"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-2xl bg-neutral-100 focus:bg-white border border-transparent focus:border-neutral-300 focus:outline-none text-center text-base font-semibold tracking-widest text-neutral-900 placeholder:text-neutral-400 placeholder:tracking-normal transition-all"
            />

            {message && (
              <p
                className={`text-xs py-2 px-3 rounded-xl font-medium ${
                  message.type === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {message.text}
              </p>
            )}

            <button
              type="submit"
              disabled={isSaving || !newPin.trim()}
              className="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-black text-white text-xs font-bold transition-all active:scale-[0.98] cursor-pointer disabled:opacity-40"
            >
              {isSaving ? "Guardando..." : "Guardar PIN"}
            </button>
          </form>

          <div className="mt-4 pt-3 border-t border-neutral-100">
            <button
              type="button"
              onClick={handleSendEmail}
              disabled={isSending}
              className="text-xs text-neutral-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              {isSending ? "Enviando..." : "¿No te acuerdas? Enviar PIN a mi correo"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
