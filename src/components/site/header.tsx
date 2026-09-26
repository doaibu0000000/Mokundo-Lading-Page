"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, site, waLink, images } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

/** Menu mobile: Beranda + nav utama — penomoran seperti referensi (01, 02, …). */
const menuItems = [{ label: "Beranda", href: "#beranda" } as const, ...navLinks];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  // Efek glass saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sorot nav sesuai section yang sedang terlihat
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Tutup menu dengan Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Kunci scroll halaman saat menu terbuka (dengan kompensasi lebar scrollbar
  // di desktop) — mencegah scrollbar halaman muncul/berkedip di belakang menu.
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-900/10 bg-white/85 shadow-[0_8px_30px_-12px_rgba(2,20,40,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 md:h-20 lg:px-8",
          scrolled && "md:h-16"
        )}
      >
        {/* Logo — langsung di atas latar, tanpa kotak putih */}
        <Link href="#beranda" className="flex items-center gap-2.5" aria-label={site.name}>
          <span
            className={cn(
              "relative block h-10 w-10 shrink-0 transition-all duration-300",
              scrolled && "md:h-9 md:w-9"
            )}
          >
            <Image
              src={images.logo}
              alt={`Logo ${site.name}`}
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-slate-900 md:text-base dark:text-white">
              MUKUNDO
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-500">
              Teknologi Indonesia
            </span>
          </span>
        </Link>

        {/* Nav desktop — tampil mulai lg agar 7 link tidak sempit di tablet */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:px-4",
                active === link.href
                  ? "text-orange-700 dark:text-orange-400"
                  : "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              )}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange-600 transition-all duration-300 xl:inset-x-4",
                  active === link.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Telepon langsung (desktop besar) — jalur konversi telepon */}
          <a
            href={`tel:+${site.whatsappNumber}`}
            aria-label={`Telepon ${site.name} di ${site.phoneDisplay}`}
            className="hidden h-10 items-center gap-2 whitespace-nowrap rounded-full border border-slate-900/15 bg-white/70 px-3.5 text-xs font-bold text-slate-700 backdrop-blur transition-colors hover:border-orange-500/50 hover:text-orange-700 xl:flex dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:border-orange-500/50 dark:hover:text-orange-300"
          >
            <Phone className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" aria-hidden="true" />
            {site.phoneDisplay}
          </a>

          {/* Toggle tema */}
          <ThemeToggle className="h-10 w-10 rounded-full border-slate-900/15 bg-white/70 backdrop-blur hover:bg-white dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20" />

          {/* Hamburger mobile — 3 garis ber-morph jadi X oranye (seperti referensi) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-900/15 bg-slate-900/5 backdrop-blur-md transition-all duration-150 active:scale-90 hover:bg-slate-900/10 lg:hidden dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/25"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <motion.span
                aria-hidden="true"
                animate={{ y: open ? 7 : 0, rotate: open ? 45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
                className={cn(
                  "h-0.5 w-full rounded-full transition-colors duration-200",
                  open ? "bg-orange-500" : "bg-slate-800 dark:bg-white"
                )}
              />
              <motion.span
                aria-hidden="true"
                animate={{ scaleX: open ? 0 : 1, opacity: open ? 0 : 1 }}
                transition={{ duration: reduce ? 0 : 0.15, ease: "easeOut" }}
                className="h-0.5 w-full origin-center rounded-full bg-slate-800 dark:bg-white"
              />
              <motion.span
                aria-hidden="true"
                animate={{ y: open ? -7 : 0, rotate: open ? -45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
                className={cn(
                  "h-0.5 w-full rounded-full transition-colors duration-200",
                  open ? "bg-orange-500" : "bg-slate-800 dark:bg-white"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Panel menu mobile — dropdown di bawah header, reveal clip-path + stagger */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navigasi mobile"
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain border-b border-slate-900/10 bg-white/[0.98] shadow-[0_20px_50px_rgba(2,20,40,0.25)] backdrop-blur-xl will-change-transform [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:top-20 lg:hidden dark:border-white/10 dark:bg-slate-950/[0.98] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.3, delay: reduce ? 0 : 0.08, ease: "easeOut" }}
              className="mx-auto max-w-md space-y-3.5 px-4 py-4"
            >
              <ul className="divide-y divide-slate-900/5 rounded-2xl border border-slate-900/10 bg-slate-900/[0.03] p-1.5 backdrop-blur-md dark:divide-white/5 dark:border-white/10 dark:bg-white/[0.04]">
                {menuItems.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === link.href ? "true" : undefined}
                      className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-colors duration-150 hover:bg-slate-900/5 active:scale-[0.98] dark:hover:bg-white/10"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[11px] font-semibold text-orange-500/90">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "text-[15px] font-semibold text-slate-700 transition-colors group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-white",
                            active === link.href && "text-orange-700 dark:text-orange-400"
                          )}
                        >
                          {link.label}
                        </span>
                      </span>
                      <ChevronRight
                        className="h-4 w-4 text-slate-400 transition-all duration-150 group-hover:translate-x-1 group-hover:text-orange-500 dark:text-slate-500 dark:group-hover:text-orange-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Baris status: siaga 24 jam + respon cepat */}
              <div className="flex items-center justify-between rounded-xl border border-slate-900/10 bg-slate-900/[0.03] px-3.5 py-2.5 text-xs dark:border-white/10 dark:bg-white/[0.03]">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Siaga 24 Jam Non-Stop
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <Clock3 className="h-3 w-3 text-orange-500 dark:text-orange-400" aria-hidden="true" />
                  Respon Cepat
                </span>
              </div>

              {/* CTA utama menu — gradien oranye seperti referensi */}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] transition-all duration-150 active:scale-[0.98] hover:shadow-[0_6px_25px_rgba(249,115,22,0.5)]"
              >
                <WhatsAppIcon className="h-5 w-5 transition-transform duration-150 group-hover:scale-110" />
                Chat WhatsApp Sekarang
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
