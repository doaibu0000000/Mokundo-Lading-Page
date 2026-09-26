import Image from "next/image";
import { Clock3, MapPin, Phone } from "lucide-react";
import { images, navLinks, site } from "@/config/site";
import { CopyPhoneButton } from "./copy-phone";
import { SaveContactButton } from "./save-contact";
import { ShareButton } from "./share-button";

export function Footer() {
  return (
    <footer id="kontak" className="scroll-mt-24 bg-slate-950 text-slate-300" aria-label="Kontak dan footer">
      {/* Garis gradien aksen di paling atas footer */}
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-11 w-11">
                <Image
                  src={images.logo}
                  alt={`Logo ${site.name}`}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="text-base font-extrabold tracking-tight text-white">MUKUNDO</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
                  Teknologi Indonesia
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Jasa perbaikan &amp; instalasi serba ada — dari AC dan kelistrikan
              hingga mesin, kendaraan, dan bangunan. Melayani Kalijati, Subang &amp; sekitarnya.
            </p>
            {/* Tombol "Chat WhatsApp" dihapus (permintaan pemilik, Task 17):
                nomor WA sudah dijangkau lewat tombol melayang + CTA lain,
                footer dibuat bersih & profesional. */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <SaveContactButton className="h-11 border-white/20 px-4 text-slate-200 hover:border-orange-400/60 hover:text-orange-300" />
              <ShareButton className="h-11 border-white/20 px-4 text-slate-200 hover:border-orange-400/60 hover:text-orange-300" />
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Kontak</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors hover:text-white"
                >
                  {site.address}
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <a href={`tel:+${site.whatsappNumber}`} className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
                <CopyPhoneButton className="h-7 border-white/20 px-3 text-[11px] text-slate-300 hover:border-orange-400/60 hover:text-orange-300" />
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          {/* Navigasi — disembunyikan di tampilan mobile (permintaan pemilik):
              di HP footer jadi pendek & fokus kontak; navigasi tersedia via menu hamburger header. */}
          <nav aria-label="Navigasi footer" className="hidden md:block">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Navigasi</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#pesan" className="font-bold text-orange-400 transition-colors hover:text-orange-300">
                  Pesan Cepat — Isi Form 30 Detik
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.</p>
          <p className="font-semibold text-slate-400">{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
