import QRCode from "react-qr-code";
import { Smartphone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * QR WhatsApp — jembatan desktop → HP.
 * Pengunjung yang sedang membuka situs di komputer dapat memindai QR ini
 * sehingga chat WhatsApp langsung terbuka di ponsel mereka (tempat WA hidup).
 * Nilai QR = waLink() — satu sumber data yang sama dengan seluruh CTA situs.
 */
export function WaQrCard() {
  const waUrl = waLink();

  return (
    <Reveal delay={0.24}>
      <div className="h-full rounded-2xl border border-slate-900/8 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_36px_-18px_rgba(2,20,40,0.3)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-5">
          {/* Tile QR — selalu putih agar kontras scan maksimal di light & dark */}
          <div className="shrink-0 rounded-xl bg-white p-3 ring-1 ring-slate-900/10 shadow-[0_8px_20px_-10px_rgba(2,20,40,0.35)] transition-transform duration-300 hover:scale-[1.04] dark:ring-white/20">
            <div
              role="img"
              aria-label={`Kode QR: buka WhatsApp ${site.name} di ponsel Anda`}
            >
              <QRCode
                value={waUrl}
                size={96}
                bgColor="#ffffff"
                fgColor="#0f172a"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="flex items-center gap-2 text-base font-extrabold tracking-tight text-slate-950 dark:text-white">
              <Smartphone className="h-4 w-4 text-orange-600 dark:text-orange-400" aria-hidden="true" />
              Sedang di komputer?
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Scan QR ini dengan kamera HP — chat WhatsApp langsung lanjut di
              ponsel Anda.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-[#157a3a] underline-offset-4 transition-colors hover:text-[#1faa53] hover:underline dark:text-[#4ade80] dark:hover:text-[#86efac]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" aria-hidden="true" />
              atau buka di tab ini
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
