"use client";

import { useEffect, useState } from "react";
import { MapPin, Clock3, Copy, Check, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SaveContactButton } from "./save-contact";

/** Badge status buka + jam WIB berjalan (pelanggan tahu kami benar-benar siap 24 jam). */
function LiveOpenBadge() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const timer = setInterval(tick, 30_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#1faa53]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#157a3a] dark:bg-[#1faa53]/15 dark:text-[#4ade80]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1faa53] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1faa53]" />
        </span>
        Buka Sekarang
      </span>
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
        Pukul {time ?? "--.--"} WIB
      </span>
    </div>
  );
}

/** Section Lokasi: peta Google Maps, alamat, jam operasional, dan kontak cepat. */
export function Location() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    // Fallback untuk browser lama / clipboard API yang ditolak izinnya
    const legacyCopy = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = site.address;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch {
        return false;
      }
    };

    let ok = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(site.address);
        ok = true;
      } catch {
        ok = false;
      }
    }
    if (!ok) ok = legacyCopy();

    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section
      id="lokasi"
      className="scroll-mt-24 bg-[#f6f8fb] py-16 md:py-24 dark:bg-slate-900"
      aria-label="Lokasi workshop dan kontak"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Lokasi & Kontak"
          title="Workshop Kami di"
          titleAccent="Kalijati, Subang"
          subtitle="Datang langsung ke workshop, atau ketuk arah — kami buka setiap hari."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Kolom info */}
          <div className="flex flex-col gap-4">
            {/* Alamat */}
            <Reveal delay={0}>
              <div className="h-full rounded-2xl border border-slate-900/8 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_36px_-18px_rgba(2,20,40,0.3)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.6)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold tracking-tight text-slate-950 dark:text-white">
                      Alamat Workshop
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {site.address}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyAddress}
                        className="h-9 rounded-full border-slate-900/15 px-4 text-xs font-bold text-slate-700 hover:border-orange-500/50 hover:text-orange-700 dark:border-white/15 dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-300"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#1faa53]" aria-hidden="true" />
                            Tersalin!
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            Salin Alamat
                          </>
                        )}
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="h-9 rounded-full bg-slate-950 px-4 text-xs font-bold text-white hover:bg-slate-800 dark:bg-orange-500 dark:text-slate-950 dark:hover:bg-orange-400"
                      >
                        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                          Petunjuk Arah
                        </a>
                      </Button>
                      <SaveContactButton className="border-slate-900/15 text-slate-700 hover:border-orange-500/50 hover:text-orange-700 dark:border-white/15 dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Jam operasional */}
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-slate-900/8 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_36px_-18px_rgba(2,20,40,0.3)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.6)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-extrabold tracking-tight text-slate-950 dark:text-white">
                      Jam Operasional
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {site.hours}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      Darurat listrik padam tengah malam? Tetap kami datangi.
                    </p>
                    <div className="mt-4">
                      <LiveOpenBadge />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Kolom peta */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/8 bg-white shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_36px_-18px_rgba(2,20,40,0.3)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.6)]">
              <iframe
                title={`Peta lokasi ${site.name}`}
                src={site.mapsEmbedUrl}
                className="h-full min-h-[340px] w-full flex-1 border-0 lg:min-h-[380px] dark:invert-[0.92] dark:hue-rotate-180 dark:saturate-[0.65] dark:brightness-[0.92] dark:contrast-[0.92]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center gap-3 border-t border-slate-900/8 px-5 py-4 dark:border-white/10">
                <MapPin className="h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                <p className="text-xs font-semibold leading-relaxed text-slate-600 md:text-sm dark:text-slate-400">
                  {site.name} — pintu workshop biru, sisi timur Jl. Raya
                  Kalijati Timur.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
