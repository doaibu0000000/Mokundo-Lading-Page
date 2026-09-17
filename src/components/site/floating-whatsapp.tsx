"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * Tombol WhatsApp mengambang dengan animasi interaktif profesional:
 * - Muncul otomatis saat hero CTA di-scroll lewat (IntersectionObserver)
 * - Efek radar ping & ambient glow bernapas lembut
 * - Micro-interaction floating buoyant + periodic nudge ramah
 * - Status indikator "Online 24 Jam"
 * - Tooltip premium glassmorphism dengan arrow
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroBtn = document.getElementById("hero-cta-wa");

    // Jika elemen tidak ditemukan, tampilkan floating button secara aman
    if (!heroBtn) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(heroBtn);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 24 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 z-40 sm:right-6"
        >
          {/* Wrapper Buoyant Float + Periodic Nudge */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 0, 0, -4, 4, -3, 2, 0, 0],
            }}
            transition={{
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.7, 0.74, 0.78, 0.82, 0.86, 0.9, 0.94, 1],
              },
            }}
            className="relative flex items-center"
          >
            {/* Ambient Breathing Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[#25D366]/40 blur-xl animate-pulse"
            />

            {/* Radar Wave Ping */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-35"
              style={{ animationDuration: "2.5s" }}
            />

            {/* Tooltip Premium Glassmorphism */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-full top-1/2 mr-3.5 -translate-y-1/2 hidden whitespace-nowrap rounded-2xl border border-white/15 bg-stone-950/90 px-4 py-2.5 shadow-2xl shadow-black/80 backdrop-blur-xl opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 sm:block"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white leading-tight">
                    Chat WhatsApp Sekarang
                  </span>
                  <span className="text-[10px] font-medium text-emerald-300 leading-tight">
                    Online 24 Jam · Balas Cepat
                  </span>
                </div>
              </div>

              {/* Caret / Panah segitiga ke arah tombol */}
              <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-white/15 bg-stone-950/90" />
            </div>

            {/* Tombol Utama WhatsApp */}
            <motion.a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Chat WhatsApp dengan Mukundo Teknologi Indonesia"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-gradient-to-tr from-[#1ebd5b] via-[#25D366] to-[#4ae884] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5),0_8px_10px_-6px_rgba(37,211,102,0.3)] ring-4 ring-white/20 transition-all duration-300 hover:ring-white/40 hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
            >
              {/* Kilauan Glass Refleksi di atas tombol */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent"
              />

              {/* Icon dengan subtle tilt saat hover */}
              <motion.div
                whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                transition={{ duration: 0.4 }}
              >
                <WhatsAppIcon className="h-7 w-7 drop-shadow" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
