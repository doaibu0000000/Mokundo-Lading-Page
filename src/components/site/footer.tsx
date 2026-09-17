import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/config/site";
import { Logo } from "./logo";

const serviceLinks = [
  "Cuci & Perawatan AC",
  "Perbaikan & Instalasi AC",
  "Cool Storage & Mini Chiller",
  "Pasang Baru & Naik Daya PLN",
  "Instalasi Kelistrikan",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-stone-950 text-stone-400">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-8">
        <div>
          <a
            href="#beranda"
            className="inline-block outline-none focus:outline-none focus-visible:outline-none focus:ring-0 select-none"
            aria-label={`${site.name} — kembali ke beranda`}
          >
            <Logo idPrefix="ftr" className="text-white" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.description}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {site.hours}
          </p>
        </div>

        <nav aria-label="Layanan footer">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Layanan
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a
                  href="#layanan"
                  className="transition-colors hover:text-orange-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navigasi footer" className="hidden sm:block">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-orange-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Kontak
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
              <span className="leading-relaxed">{site.address.full}</span>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-orange-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${site.whatsappNumber}`}
                className="flex items-center gap-3 transition-colors hover:text-orange-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>{site.tagline} — Kalijati, Kabupaten Subang</p>
        </div>
      </div>
    </footer>
  );
}
