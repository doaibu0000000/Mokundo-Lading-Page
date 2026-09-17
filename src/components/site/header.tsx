"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Clock } from "lucide-react";
import { navLinks, site, waLink } from "@/config/site";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll halaman saat menu mobile terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }, 250);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background glassmorphism header */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 border-b border-white/10 bg-stone-950/85 shadow-[0_4px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        style={{ opacity: solid ? 1 : 0, transition: "opacity 250ms ease" }}
      />

      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a
          href="#beranda"
          className="inline-flex items-center rounded-lg text-white outline-none focus:outline-none focus-visible:outline-none focus:ring-0 select-none"
          aria-label={`${site.name} — kembali ke beranda`}
        >
          <Logo idPrefix="hdr" className="text-white" />
        </a>

        {/* Navigasi Desktop */}
        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.slice(1, 6).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-stone-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol Hamburger dengan Animasi Morphing 3 Garis Cepat & Responsif */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all duration-150 active:scale-90 hover:bg-white/10 hover:border-white/25 lg:hidden"
          >
            <div className="relative flex h-4 w-5 flex-col justify-between">
              {/* Garis Atas */}
              <motion.span
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 7 : 0,
                  backgroundColor: open ? "#f97316" : "#ffffff",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="h-0.5 w-full rounded-full"
              />
              {/* Garis Tengah */}
              <motion.span
                animate={{
                  opacity: open ? 0 : 1,
                  scaleX: open ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
                className="h-0.5 w-full rounded-full bg-white origin-center"
              />
              {/* Garis Bawah */}
              <motion.span
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -7 : 0,
                  backgroundColor: open ? "#f97316" : "#ffffff",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="h-0.5 w-full rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Backdrop Gelap Tanpa Blur */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-40 bg-black/60 lg:hidden"
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Panel Menu Mobile: Efek unroll (clip-path) dengan spring physics yang sangat organik */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            id="mobile-menu"
            aria-label="Navigasi mobile"
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.8,
            }}
            className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-white/10 bg-stone-950/98 shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:hidden will-change-transform"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              }}
              className="mx-auto max-w-md px-4 py-4 space-y-3.5"
            >
              {/* Daftar Link Menu - Muncul serentak langsung utuh */}
              <ul className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-stone-900/70 p-1.5 backdrop-blur-md">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleMobileNav(e, link.href)}
                      className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-colors duration-150 active:scale-[0.98] hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono font-semibold text-orange-500/90">
                          0{i + 1}
                        </span>
                        <span className="text-[15px] font-semibold text-stone-200 group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-stone-500 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-orange-400" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Status Badge Ringkas */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-stone-900/50 px-3.5 py-2.5 text-xs text-stone-400">
                <span className="inline-flex items-center gap-1.5 font-medium text-stone-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Siaga 24 Jam Non-Stop
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-stone-400">
                  <Clock className="h-3 w-3 text-orange-400" />
                  Respon Cepat
                </span>
              </div>

              {/* Tombol CTA WhatsApp */}
              <div>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] transition-all duration-150 active:scale-[0.98] hover:shadow-[0_6px_25px_rgba(249,115,22,0.5)]"
                >
                  <WhatsAppIcon className="h-5 w-5 transition-transform duration-150 group-hover:scale-110" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
