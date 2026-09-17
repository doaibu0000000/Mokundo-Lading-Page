import { MapPin } from "lucide-react";
import { site, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";
import { BlinkingDot } from "./blinking-dot";

export function CtaBanner() {
  return (
    <section className="bg-stone-950 pb-20 lg:pb-28" aria-label="Ajakan menghubungi kami">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Ambient Glow di belakang kartu */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-orange-500/20 blur-2xl opacity-75"
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-stone-900/90 via-stone-950/95 to-stone-950 px-6 py-14 text-center shadow-2xl shadow-black/90 backdrop-blur-xl sm:px-12 lg:py-20">
              {/* Dekorasi Grid & Ambient Radial Light */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
                <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl animate-pulse" />
                <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
              </div>

              <div className="relative">
                {/* Badge Status Siaga 24 Jam */}
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300 shadow-sm">
                  <BlinkingDot />
                  Layanan Darurat &amp; Konsultasi 24 Jam
                </span>

                <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  AC Bermasalah? Listrik Perlu Ditangani Hari Ini?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-300">
                  Ceritakan kebutuhan Anda sekarang — tim kami merespons cepat
                  dan siap datang langsung ke lokasi Anda, 24 jam sehari.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-[15px] font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat WhatsApp Sekarang
                  </a>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-[15px] font-bold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MapPin className="h-4.5 w-4.5 text-orange-400" aria-hidden />
                    Lihat Lokasi Workshop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
