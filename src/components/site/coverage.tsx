import { MapPin, Navigation } from "lucide-react";
import { coverageAreas, waLink } from "@/config/site";
import { Reveal } from "./reveal";

/**
 * Strip ringkas area layanan — menegaskan cakupan wilayah.
 * Setiap chip adalah deep link WhatsApp: pesan otomatis terisi
 * sesuai area asal pengunjung.
 */
export function Coverage() {
  return (
    <section aria-label="Area layanan" className="hidden md:block bg-white pb-16 md:pb-20 dark:bg-slate-950" aria-hidden="false">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-slate-900/8 bg-[#f6f8fb] px-6 py-8 text-center md:py-10 dark:border-white/10 dark:bg-slate-900">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-orange-600">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Area Layanan Kami
            </p>
            <p className="mt-2.5 text-xs font-medium text-slate-500 md:text-sm dark:text-slate-400">
              Ketuk area Anda — langsung tersambung ke WhatsApp kami.
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
              {coverageAreas.map((area) => (
                <li key={area}>
                  <a
                    href={waLink(
                      `Halo Mukundo Teknologi, saya dari ${area}. Saya butuh bantuan jasa — bisa dibantu?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat WhatsApp untuk area ${area}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-600/40 hover:text-orange-700 hover:shadow-[0_8px_18px_-8px_rgba(234,88,12,0.4)] active:scale-95 md:text-sm dark:border-white/10 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-300"
                  >
                    <MapPin className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                    {area}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={waLink(
                    "Halo Mukundo Teknologi, wilayah saya di luar daftar area layanan. Apakah masih bisa ditangani?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat WhatsApp — tanya area di luar daftar"
                  className="inline-flex items-center rounded-full bg-slate-950 px-3.5 py-1.5 text-xs font-bold text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_8px_18px_-8px_rgba(234,88,12,0.5)] active:scale-95 md:text-sm dark:bg-white dark:text-slate-950 dark:ring-0 dark:hover:bg-orange-500 dark:hover:text-white"
                >
                  + Sekitarnya
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
