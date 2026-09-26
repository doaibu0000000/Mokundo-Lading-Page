import type { Metadata } from "next";
import Image from "next/image";
import { Home, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, site, waLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan — Mukundo Teknologi Indonesia",
  description:
    "Halaman yang Anda cari tidak tersedia. Kembali ke beranda atau chat WhatsApp kami — buka 24 jam.",
};

/**
 * Halaman 404 bermerek — pengunjung yang tersesat tetap mendapat
 * jalur konversi (kembali ke beranda / chat WhatsApp).
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f6f8fb] px-4 py-16 text-center dark:bg-slate-950">
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(rgba(2,20,40,0.06)_1px,transparent_1px)] [background-size:22px_22px] dark:opacity-[0.15] dark:[background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]"
      />

      <div className="relative w-full max-w-md">
        <span className="mx-auto block h-16 w-16 overflow-hidden rounded-2xl bg-white shadow-[0_16px_35px_-15px_rgba(2,20,40,0.4)] ring-1 ring-slate-900/10 dark:ring-white/15">
          <Image
            src={images.logo}
            alt={`Logo ${site.name}`}
            width={64}
            height={64}
            className="h-full w-full object-contain p-1.5"
            priority
          />
        </span>

        <p
          aria-hidden="true"
          className="mt-8 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-7xl font-black tracking-tight text-transparent md:text-8xl"
        >
          404
        </p>
        <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl dark:text-white">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-400">
          Alamat yang Anda buka tidak tersedia atau sudah dipindah. Tenang —
          semua jasa kami tetap bisa dijangkau dari sini.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="btn-shine h-12 rounded-full bg-orange-600 px-6 text-sm font-black text-white shadow-[0_16px_30px_-12px_rgba(234,88,12,0.6)] hover:bg-orange-700"
          >
            <a href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Kembali ke Beranda
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="btn-shine h-12 rounded-full bg-[#1faa53] px-6 text-sm font-bold text-white shadow-[0_16px_30px_-12px_rgba(31,170,83,0.7)] hover:bg-[#189a47]"
          >
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
          <PhoneCall className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" aria-hidden="true" />
          {site.phoneDisplay} — {site.hours}
        </p>
      </div>
    </div>
  );
}
