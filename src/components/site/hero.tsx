import { ArrowRight, BadgeCheck, Clock, ShieldCheck } from "lucide-react";
import { site, waLink } from "@/config/site";
import { HeroVisual } from "./hero-visual";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";
import { BlinkingDot } from "./blinking-dot";

const trustItems = [
  { icon: BadgeCheck, label: "Teknisi Bersertifikat" },
  { icon: Clock, label: "Respon Cepat 24 Jam" },
  { icon: ShieldCheck, label: "Garansi Pengerjaan" },
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-stone-950 text-white"
    >
      {/* Dekorasi latar */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* Container konten (padding-top mengimbangi header) */}
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-36 lg:pt-40">
        {/* Kolom teks */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-stone-300 backdrop-blur sm:py-1.5">
              <BlinkingDot />
              <span className="leading-snug">
                Jangan Biarkan Masalah AC &amp; Listrik{" "}
                <br className="sm:hidden" />
                Mengganggu Aktivitas Anda
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              AC Kembali{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Dingin
              </span>
              , Listrik{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Aman
              </span>{" "}
              Terkendali.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
              Kami melayani perbaikan, perawatan, dan instalasi AC — dari split,
              standing floor, cool storage, hingga mini chiller — serta
              kebutuhan kelistrikan. Ditangani teknisi bersertifikat dengan
              pengerjaan rapi, profesional, dan bergaransi.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                id="hero-cta-wa"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-[15px] font-bold text-primary-foreground shadow-xl shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
              <a
                href="#layanan"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-[15px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              >
                Lihat Layanan Kami
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm font-medium text-stone-300"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-orange-400">
                    <item.icon className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Kolom visual dengan animasi interaktif */}
        <HeroVisual />
      </div>
    </section>
  );
}
