import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppIcon } from "./whatsapp-icon";

const contactCards = [
  {
    icon: MapPin,
    title: "Alamat Workshop & Kantor",
    lines: [site.address.full],
    action: { label: "Petunjuk Arah", href: site.mapsUrl, external: true },
  },
  {
    icon: Phone,
    title: "Telepon & WhatsApp",
    lines: [site.phoneDisplay],
    action: {
      label: "Chat via WhatsApp",
      href: waLink(),
      external: true,
      isWa: true,
    },
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
    action: { label: "Kirim Email", href: `mailto:${site.email}`, external: false },
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    lines: [site.hours],
    badge: "Buka Sekarang",
  },
];

export function Contact() {
  return (
    <section
      id="kontak"
      className="scroll-mt-20 bg-stone-950 py-20 text-white lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Kontak"
          title="Hubungi Kami Kapan Saja"
          description="Datang langsung ke workshop, kirim email, atau chat WhatsApp — pilih cara yang paling nyaman untuk Anda."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <li className="flex h-full flex-col rounded-2xl border border-white/10 bg-stone-900/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/5">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-orange-500/30 bg-orange-500/15 text-orange-400">
                  <card.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-extrabold text-white">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="mt-2 text-sm leading-relaxed text-stone-400">
                    {line}
                  </p>
                ))}
                {"badge" in card && card.badge && (
                  <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {card.badge}
                  </p>
                )}
                {"action" in card && card.action && (
                  <a
                    href={card.action.href}
                    {...(card.action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-bold text-orange-400 transition-colors hover:text-orange-300"
                  >
                    {"isWa" in card.action && card.action.isWa && (
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    )}
                    {card.action.label}
                    {"isWa" in card.action && card.action.isWa ? null : (
                      <span aria-hidden>→</span>
                    )}
                  </a>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
