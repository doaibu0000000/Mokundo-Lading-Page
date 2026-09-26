"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Snowflake,
  Zap,
  PlugZap,
  Gauge,
  Cog,
  Tractor,
  Car,
  Cctv,
  Hammer,
  MessagesSquare,
  Info,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { services, waLink, type Service } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppIcon } from "./whatsapp-icon";

const iconMap: Record<Service["icon"], LucideIcon> = {
  snowflake: Snowflake,
  zap: Zap,
  plugzap: PlugZap,
  gauge: Gauge,
  cog: Cog,
  tractor: Tractor,
  car: Car,
  cctv: Cctv,
  hammer: Hammer,
};

/** Grid layanan — kartu utuh menuju WhatsApp, tombol (i) membuka rincian jasa. */
export function Services() {
  const [detail, setDetail] = useState<Service | null>(null);
  const idx = detail ? services.findIndex((s) => s.title === detail.title) : -1;

  // Navigasi antar-layanan dengan keyboard saat dialog terbuka
  useEffect(() => {
    if (!detail) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setDetail(services[(services.findIndex((s) => s.title === detail.title) + 1) % services.length]);
      } else if (e.key === "ArrowLeft") {
        setDetail(services[(services.findIndex((s) => s.title === detail.title) - 1 + services.length) % services.length]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detail]);

  return (
    <section id="layanan" className="scroll-mt-24 bg-[#f6f8fb] py-16 md:py-24 dark:bg-slate-900" aria-label="Layanan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Layanan Kami"
          title="Apapun Masalahnya,"
          titleAccent="Kami Bereskan"
          subtitle="Satu nomor untuk semua kebutuhan perbaikan rumah, toko, kantor, hingga pabrik."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-900/8 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_20px_40px_-18px_rgba(234,88,12,0.25)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:border-orange-500/50 dark:hover:shadow-[0_20px_40px_-18px_rgba(234,88,12,0.2)]">
                  {/* Tautan melebar — seluruh kartu menuju WhatsApp dengan pesan otomatis */}
                  <a
                    href={waLink(service.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pesan jasa ${service.title} via WhatsApp`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  />

                  {/* Efek shine saat hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange-100/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full dark:via-orange-500/10"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-950 to-slate-800 text-white shadow-sm transition-all duration-300 group-hover:from-orange-500 group-hover:to-orange-700 group-hover:shadow-[0_10px_20px_-8px_rgba(234,88,12,0.6)] dark:from-slate-800 dark:to-slate-700 dark:ring-1 dark:ring-white/10">
                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      {/* Ikon WA di pojok kanan atas dihapus (Task 19): posisinya tertimpa tombol (i) —
                          di mode terang tak terlihat (tertutup bg solid), di mode gelap tembus di balik
                          tombol (i) semi-transparan sehingga tampak seperti "tombol WA di belakangnya".
                          Seluruh kartu sudah menuju WhatsApp + label hover "Pesan via WhatsApp". */}
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Pesan via WhatsApp
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  {/* Tombol detail — di atas tautan melebar (z-20) */}
                  <button
                    type="button"
                    onClick={() => setDetail(service)}
                    aria-label={`Lihat rincian jasa ${service.title}`}
                    className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 shadow-sm transition-all duration-200 hover:border-orange-500/60 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-orange-500/60 dark:hover:bg-orange-500/10 dark:hover:text-orange-300"
                  >
                    <Info className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </Reveal>
            );
          })}

          {/* Kartu khusus "tanya saja" — inti pesan bisnis */}
          <Reveal delay={0.16}>
            <a
              href={waLink("Halo Mukundo Teknologi, saya butuh jasa di luar daftar. Apakah bisa dibantu?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-6 shadow-[0_20px_45px_-18px_rgba(234,88,12,0.55)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-2xl transition-transform duration-500 group-hover:scale-150"
              />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur">
                  <MessagesSquare className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-white">
                  Butuh yang lain?
                </h3>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/90">
                  Tanya saja — hampir semua pekerjaan bisa kami kerjakan.
                </p>
              </div>
              <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                <WhatsAppIcon className="h-4 w-4" />
                Tanya Sekarang
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Dialog rincian layanan */}
      <Dialog open={Boolean(detail)} onOpenChange={(o) => { if (!o) setDetail(null); }}>
        <DialogContent
          aria-describedby={undefined}
          className="max-w-md overflow-hidden rounded-2xl border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:bg-slate-950/40 [&_[data-slot=dialog-close]]:p-1.5 [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:opacity-100 [&_[data-slot=dialog-close]]:backdrop-blur-sm hover:[&_[data-slot=dialog-close]]:bg-slate-950/60"
        >
          {detail && (
            <>
              {/* Foto dokumentasi asli (bila layanan punya) */}
              {detail.photo && (
                <div className="group/photo relative -mx-6 -mt-6 overflow-hidden rounded-t-2xl">
                  <Image
                    src={detail.photo}
                    alt={detail.photoAlt ?? detail.title}
                    sizes="(max-width: 448px) 100vw, 448px"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover/photo:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"
                  />
                  <span className="absolute bottom-2.5 left-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" aria-hidden="true" />
                    Dokumentasi lapangan kami
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-[0_10px_20px_-8px_rgba(234,88,12,0.6)]">
                  <IconRenderer icon={detail.icon} />
                </div>
                <DialogHeader className="space-y-1 text-left">
                  <DialogTitle className="text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
                    {detail.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {detail.description}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <ul className="mt-5 space-y-2.5">
                {detail.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20" aria-hidden="true">
                      <Check className="h-3 w-3 text-orange-700 dark:text-orange-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-orange-500/20 bg-orange-50 p-3.5 text-xs font-semibold leading-relaxed text-orange-800 dark:bg-orange-500/10 dark:text-orange-200">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Estimasi gratis & jelas sebelum pengerjaan — kirim foto
                kerusakan agar lebih cepat.
              </div>

              {/* Navigasi antar-layanan */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDetail(services[(idx - 1 + services.length) % services.length])}
                  aria-label={`Layanan sebelumnya: ${services[(idx - 1 + services.length) % services.length].title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-orange-500/60 hover:bg-orange-50 hover:text-orange-700 dark:border-white/10 dark:text-slate-400 dark:hover:border-orange-500/60 dark:hover:bg-orange-500/10 dark:hover:text-orange-300"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="text-xs font-bold tabular-nums tracking-wide text-slate-400 dark:text-slate-500">
                  {idx + 1} / {services.length}
                </span>
                <button
                  type="button"
                  onClick={() => setDetail(services[(idx + 1) % services.length])}
                  aria-label={`Layanan berikutnya: ${services[(idx + 1) % services.length].title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-orange-500/60 hover:bg-orange-50 hover:text-orange-700 dark:border-white/10 dark:text-slate-400 dark:hover:border-orange-500/60 dark:hover:bg-orange-500/10 dark:hover:text-orange-300"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <Button
                asChild
                className="btn-shine mt-5 h-12 w-full rounded-full bg-[#1faa53] text-sm font-bold text-white shadow-[0_12px_25px_-10px_rgba(31,170,83,0.8)] hover:bg-[#189a47]"
              >
                <a
                  href={waLink(detail.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDetail(null)}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Pesan {detail.title}
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function IconRenderer({ icon }: { icon: Service["icon"] }) {
  const Icon = iconMap[icon];
  return <Icon className="h-6 w-6" aria-hidden="true" />;
}
