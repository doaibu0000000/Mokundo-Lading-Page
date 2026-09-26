import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

/** Banner pernyataan besar: semua jasa dikerjakan, bukan hanya AC & listrik. */
export function Statement() {
  return (
    <section aria-label="Pesan utama" className="relative overflow-hidden bg-slate-950 py-20 md:py-28 dark:bg-black">
      {/* Dekorasi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(234,88,12,0.28), transparent 42%), radial-gradient(circle at 85% 80%, rgba(59,130,246,0.22), transparent 45%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 md:text-sm">
            Bukan Hanya AC &amp; Listrik
          </p>
          <h2 className="mt-5 text-[clamp(1.4rem,6.2vw,2.25rem)] font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block whitespace-nowrap">Semua Jasa Perbaikan.</span>
            <span className="block whitespace-nowrap bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-[length:200%_100%] bg-clip-text motion-safe:animate-[shimmer-text_5s_ease-in-out_infinite] text-transparent">
              Satu Nomor WhatsApp.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
            Rumah, toko, kantor, gudang, hingga pabrik — kalau butuh diperbaiki
            atau dipasang, tim kami siap datang.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-[56px] rounded-full bg-[#1faa53] px-8 text-base font-bold text-white shadow-[0_20px_40px_-14px_rgba(31,170,83,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-[#189a47]"
            >
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Konsultasi Gratis
              </a>
            </Button>
            <a
              href={`tel:+${site.whatsappNumber}`}
              className="inline-flex h-[56px] items-center gap-2 rounded-full border border-white/20 px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
