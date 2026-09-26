import { Sparkles } from "lucide-react";
import { marqueeItems, stats } from "@/config/site";
import { CountUp } from "./count-up";

/** Strip marquee berjalan berisi semua jenis jasa — memperkuat pesan "semua bisa". */
export function Marquee() {
  return (
    <section aria-label="Daftar jasa" className="relative z-10 bg-slate-950 py-4 md:py-5">
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        {[0, 1].map((strip) => (
          <div
            key={strip}
            aria-hidden={strip === 1}
            className="animate-marquee flex shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused] md:gap-10 md:pr-10"
          >
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.14em] text-slate-300 md:gap-10 md:text-base"
              >
                {item}
                <Sparkles className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/** Bar statistik singkat di bawah hero. */
export function StatsBar() {
  return (
    <section aria-label="Statistik singkat" className="border-b border-slate-900/5 bg-white dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-900/5 px-4 sm:px-6 lg:grid-cols-4 lg:px-8 dark:divide-white/5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-0.5 px-3 py-6 text-center transition-colors duration-300 hover:bg-orange-50/50 md:py-8 dark:hover:bg-orange-500/5">
            <span className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl dark:text-white">
              <CountUp value={stat.value} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-sm dark:text-slate-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
