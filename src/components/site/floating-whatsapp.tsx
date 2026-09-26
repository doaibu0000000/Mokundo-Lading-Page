"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site, waLink } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * Tombol WhatsApp bulat mengambang — SATU-satunya tombol WA melayang.
 * Muncul setelah halaman digulir ke bawah (sesuai permintaan pemilik),
 * dengan cincin glow hijau khas. Bukan asisten AI — langsung wa.me.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat ${site.name} via WhatsApp`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
          className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25d366] to-[#1faa53] text-white shadow-[0_12px_32px_-6px_rgba(31,170,83,0.7)] transition-transform duration-150 hover:scale-105 active:scale-95 md:bottom-7 md:right-7 md:h-16 md:w-16"
        >
          {/* Glow luar lembut */}
          <span
            aria-hidden="true"
            className="absolute -inset-1.5 rounded-full bg-[#25d366]/45 blur-md"
          />
          {/* Denyut cincin halus */}
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-25 [animation-duration:2.4s]"
          />
          <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
