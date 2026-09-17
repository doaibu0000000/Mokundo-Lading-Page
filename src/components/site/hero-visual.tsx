"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { images, site } from "@/config/site";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Koordinat mouse untuk efek 3D tilt interaktif
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics — halus dan elastis
  const springConfig = { damping: 26, stiffness: 180, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Derajat rotasi 3D (dikurangi agar tidak berlebihan)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  // Posisi glare mengikuti kursor
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    /*
     * Padding ekstra agar elemen absolut (badge atas & kartu bawah)
     * tidak terpotong oleh batas container.
     * pt-8 = ruang untuk badge atas, pb-12 = ruang untuk kartu bawah.
     */
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group/hero-card relative mx-auto w-full max-w-md pt-8 pb-14 sm:pb-16 [perspective:1200px] lg:max-w-none"
    >
      {/* Ambient Breathing Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 -z-10 animate-pulse-glow rounded-[2.5rem] bg-gradient-to-tr from-orange-500/30 via-amber-400/15 to-orange-400/10 blur-3xl"
      />

      {/* Wrapper 3D — SEMUA elemen anak harus di sini agar preserve-3d bekerja */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* ── KARTU FOTO UTAMA ── */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl shadow-black/70 transition-all duration-500 group-hover/hero-card:border-white/30 group-hover/hero-card:shadow-orange-500/15">
          {/* Shimmer otomatis menyilang */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
          >
            <div className="absolute inset-y-0 -left-1/2 w-full animate-shimmer bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            {/* Glare interaktif mengikuti kursor */}
            <motion.div
              style={{ left: glareX, top: glareY }}
              className="absolute -inset-32 rounded-full bg-gradient-to-br from-white/18 to-transparent blur-2xl opacity-0 transition-opacity duration-300 group-hover/hero-card:opacity-100"
            />
          </div>

          {/* Foto */}
          <Image
            src={images.hero}
            alt="Teknisi Mukundo Teknologi Indonesia melakukan servis AC pada unit outdoor di lokasi pelanggan"
            priority
            loading="eager"
            sizes="(min-width: 1024px) 44vw, (min-width: 640px) 60vw, 100vw"
            className="h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover/hero-card:scale-[1.025] sm:h-[460px] lg:h-[540px]"
          />


        </div>

        {/* ── BADGE: BUKA 24 JAM ──
            PENTING: gunakan motion.div langsung (bukan div > motion.div)
            agar translateZ bekerja dalam konteks preserve-3d parent.
        */}
        <motion.div
          style={{ transform: "translateZ(36px)" }}
          className="absolute -top-4 right-3 z-30 sm:-top-5 sm:right-5"
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            // delay kecil agar tidak bersamaan dengan entrance animation
            delay: 0.9,
          }}
          whileHover={{ scale: 1.06 }}
        >
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/50 bg-stone-950/90 px-3.5 py-2 text-xs font-bold text-emerald-300 shadow-lg shadow-black/50 backdrop-blur-xl sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
            <span className="whitespace-nowrap">Siap Melayani 24 Jam</span>
          </div>
        </motion.div>

        {/* ── KARTU: DETAIL PEKERJAAN ──
            translateZ lebih tinggi untuk efek kedalaman.
            Tidak ada rotate di keyframe (konflik dengan rotateX/Y parent).
            Tidak ada whileHover y (konflik dengan animate y keyframe).
        */}
        <motion.div
          style={{ transform: "translateZ(44px)" }}
          className="absolute -bottom-10 left-0 z-30 sm:-bottom-12 sm:-left-2 lg:-left-6"
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="group/mini-card flex items-center gap-3 rounded-2xl border border-white/20 bg-stone-950/90 p-2.5 pr-5 shadow-2xl shadow-black/80 backdrop-blur-xl transition-colors duration-300 hover:border-orange-500/40 sm:p-3 sm:pr-6">
            {/* Thumbnail */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-16 sm:w-16">
              <Image
                src={images.heroSmall}
                alt="Detail pekerjaan brazing kompresor AC"
                sizes="72px"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/mini-card:scale-110"
              />
            </div>
            {/* Teks */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="whitespace-nowrap text-sm font-bold text-white">
                  Perbaikan Kompresor
                </p>
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-orange-400" />
              </div>
              <p className="mt-0.5 whitespace-nowrap text-[11px] font-medium text-stone-300 sm:text-xs">
                Teknisi Ahli • Garansi Pengerjaan
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
