"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Award, BadgeCheck, Clock3, ShieldCheck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, site, waLink } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";

const trustPoints = [
  { icon: BadgeCheck, label: "Teknisi Ahli" },
  { icon: Award, label: "Bersertifikat" },
  { icon: ShieldCheck, label: "Bergaransi" },
  { icon: Wallet, label: "Harga Transparan" },
  { icon: Clock3, label: "Buka 24 Jam" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[#f6f8fb] pt-28 md:pt-36 dark:bg-slate-950"
      aria-label="Perkenalan"
    >
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-100 dark:opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,42,72,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(13,42,72,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-orange-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Kolom teks — minimal & padat */}
        <motion.div
          className="max-w-xl"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1faa53]/25 bg-white px-4 py-1.5 shadow-sm dark:border-[#1faa53]/40 dark:bg-slate-900">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1faa53] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1faa53]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Siap Melayani 24 Jam
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem] dark:text-white"
          >
            Satu Tim.
            <br />
            <span className="relative inline-block text-orange-600">
              Semua Solusi.
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                className="absolute -bottom-2 left-0 w-full text-orange-500/70"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 160 3 218 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300"
          >
            AC, listrik, mesin, kendaraan, sampai perbaikan bangunan —{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              ceritakan masalahnya, kami bantu carikan solusinya.
            </strong>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="btn-shine h-[52px] rounded-full bg-[#1faa53] px-7 text-base font-bold text-white shadow-[0_18px_35px_-12px_rgba(31,170,83,0.65)] transition-transform hover:-translate-y-0.5 hover:bg-[#189a47]"
            >
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Chat WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-[52px] rounded-full border-slate-900/15 bg-white/70 px-7 text-base font-bold text-slate-800 backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20"
            >
              <a href="#galeri">
                Lihat Galeri Kerja
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Kepercayaan */}
          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2.5"
            aria-label="Keunggulan singkat"
          >
            {trustPoints.map((point) => (
              <li
                key={point.label}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                <point.icon className="h-4 w-4 text-orange-600" aria-hidden="true" />
                {point.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Kolom visual — foto asli lapangan */}
        <motion.div
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Lingkaran dekoratif putus-putus di belakang foto */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-dashed border-orange-500/30 motion-safe:animate-[spin_40s_linear_infinite]"
          />
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] rounded-tr-[6rem] shadow-[0_40px_80px_-30px_rgba(2,20,40,0.45)] ring-1 ring-slate-900/10 dark:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] dark:ring-white/10">
              <Image
                src={images.heroMain}
                alt="Tim teknisi Mukundo Teknologi berbaris saat briefing pagi sebelum berangkat mengerjakan proyek"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>


            {/* Kartu status 1: Respon Cepat */}
            <div className="animate-hero-float-1 pointer-events-auto absolute -right-2 top-6 md:-right-5">
              <div className="rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Respon Cepat
                </p>
                <p className="text-lg font-black text-slate-900 dark:text-white">
                  ± 30 Menit
                </p>
              </div>
            </div>

            {/* Kartu status 2: Mukundo Teknologi 2.500+ Proyek */}
            <div className="animate-hero-float-2 pointer-events-auto absolute -right-2 bottom-28 md:-right-6">
              <div className="rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {site.shortName}
                </p>
                <p className="text-lg font-black text-orange-600">2.500+ Proyek</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
