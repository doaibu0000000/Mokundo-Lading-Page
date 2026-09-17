"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { images, waLink, whyUs } from "@/config/site";
import { getIcon } from "./icon-map";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhyUs() {
  return (
    <section
      id="keunggulan"
      className="scroll-mt-20 overflow-hidden bg-stone-950 py-20 text-white lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Keunggulan Kami"
            title="Kenapa Pelanggan Memilih Mukundo Teknologi?"
            description="Kami bukan sekadar tukang servis — kami tim profesional yang berdiri di balik workshop dan toko sparepart sendiri, sehingga pekerjaan Anda bisa lebih cepat selesai."
          />

          <ul className="mt-10 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {whyUs.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <li className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-orange-400">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-[15px] font-bold text-primary-foreground shadow-xl shadow-orange-500/25 transition-colors hover:bg-orange-600"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Konsultasi Sekarang
              </a>
              <a
                href="#galeri"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Lihat Galeri Kerja
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div
            aria-hidden
            className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-bl from-orange-500/20 via-transparent to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
            <Image
              src={images.whyUs}
              alt="Briefing keselamatan kerja tim Mukundo Teknologi Indonesia sebelum pengerjaan proyek kelistrikan"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-[360px] w-full object-cover lg:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/70 to-transparent" />
          </div>

          {/* Floating Badge Statistik — Dark Theme Glassmorphism + Murni Animasi Melayang (Tanpa Membesar/Mengecil) */}
          <motion.div
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group/stat-card absolute -bottom-6 left-4 z-20 sm:-bottom-7 sm:left-6 select-none transform-gpu"
          >
            {/* Ambient Aura Glow — Statis ringan tanpa zoom */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 rounded-2xl bg-orange-500/20 blur-lg opacity-70"
            />

            <div className="relative flex items-center gap-3.5 rounded-2xl border border-white/20 bg-stone-950/95 p-3 pr-5 shadow-2xl shadow-black/80 backdrop-blur-md sm:p-3.5 sm:pr-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-orange-500/30 bg-orange-500/15 text-orange-400 shadow-inner sm:h-12 sm:w-12">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-2xl font-black tracking-tight text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text sm:text-3xl">
                    15+
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Standar K3
                  </span>
                </div>
                <p className="mt-0.5 max-w-[12rem] text-[11px] font-medium leading-snug text-stone-300 sm:text-xs">
                  Teknisi &amp; staf berpengalaman siap bertugas
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
