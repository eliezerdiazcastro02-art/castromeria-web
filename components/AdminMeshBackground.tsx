"use client";

import { motion } from "framer-motion";

export default function AdminMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#FAF9F6]">
      {/* ── Soft Ambient Undercoat ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-rose-50/40 to-neutral-100/80" />

      {/* ── Animated Living Color Orbs (Mesh Gradient) ── */}
      <div className="absolute inset-0 filter blur-[90px] sm:blur-[120px] md:blur-[140px] opacity-85 transform-gpu overflow-hidden">
        {/* 1. Castromeria Carmine Red - Top Left */}
        <motion.div
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.18, 0.92, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[12%] -left-[10%] w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.7) 0%, rgba(220,38,38,0.38) 45%, transparent 72%)",
          }}
        />

        {/* 2. Castromeria Industrial Gold / Amber - Top Right */}
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 90, -70, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-[10%] -right-[12%] w-[460px] h-[460px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.75) 0%, rgba(251,191,36,0.4) 48%, transparent 70%)",
          }}
        />

        {/* 3. Flame Orange / Sunset Core - Bottom Left / Center */}
        <motion.div
          animate={{
            x: [0, 80, -90, 0],
            y: [0, -70, 80, 0],
            scale: [1, 1.14, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[15%] left-[10%] w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.65) 0%, rgba(234,88,12,0.3) 50%, transparent 72%)",
          }}
        />

        {/* 4. Deep Ruby / Crimson Accent - Bottom Right */}
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 70, -60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-[12%] -right-[10%] w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(185,28,28,0.6) 0%, rgba(220,38,38,0.28) 45%, transparent 70%)",
          }}
        />

        {/* 5. Center Warm Champagne Glow - Enhances depth behind the central card */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-[22%] left-[22%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(254,240,138,0.7) 0%, rgba(253,230,138,0.3) 45%, transparent 70%)",
          }}
        />

        {/* 6. Subtle Carbon / Slate Contrast Orb - Gives structural contrast like Cultt */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 40, 0],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-[40%] right-[30%] w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(30,41,59,0.18) 0%, rgba(15,23,42,0.06) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Micro-Texture Noise Overlay (Prevents banding, gives boutique texture) ── */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}
