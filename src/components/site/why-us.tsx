import { BadgeCheck, Clock3, ShieldCheck, Wallet, type LucideIcon } from "lucide-react";
import { whyUs } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  badgecheck: BadgeCheck,
  clock: Clock3,
  shieldcheck: ShieldCheck,
  wallet: Wallet,
};

export function WhyUs() {
  return (
    <section id="keunggulan" className="scroll-mt-24 bg-[#f6f8fb] py-16 md:py-24 dark:bg-slate-900" aria-label="Keunggulan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Kenapa Kami"
          title="Alasan Pelanggan"
          titleAccent="Balik Lagi"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-900/8 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(2,20,40,0.3)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                  <span className="absolute right-5 top-5 text-4xl font-black text-slate-950/5 dark:text-white/10" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
