import Image from "next/image";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="testimoni" className="relative scroll-mt-24 overflow-hidden bg-[#f6f8fb] py-16 md:py-24 dark:bg-slate-900" aria-label="Testimoni pelanggan">
      {/* Dekorasi latar lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-orange-300/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-sky-300/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Testimoni"
          title="Kata Mereka yang"
          titleAccent="Sudah Dilayani"
        />

        {/* Mobile: carousel scroll-snap; Desktop: grid 3 kolom */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.1}
              className="w-full shrink-0 snap-center md:w-auto md:shrink"
            >
              <figure
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/8 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(2,20,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/25 hover:shadow-[0_20px_40px_-20px_rgba(2,20,40,0.3)] dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:border-orange-500/30 dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]",
                  // Kartu tengah tampil sedikit diangkat sebagai "featured" di layar besar
                  i === 1 && "lg:-translate-y-3 lg:border-orange-500/30 lg:shadow-[0_24px_45px_-22px_rgba(234,88,12,0.35)] lg:hover:-translate-y-4 dark:lg:border-orange-500/40"
                )}
              >
                {/* Aksen garis oranye saat kartu di-hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-orange-600/15 transition-colors duration-300 group-hover:text-orange-600/30"
                  aria-hidden="true"
                />
                <div
                  className="flex justify-center gap-0.5 md:justify-start"
                  aria-label="Rating 5 dari 5"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                {/* Di mobile isi kartu dibuat rata tengah (permintaan pemilik, Task 17);
                    desktop tetap rata kiri seperti grid 3 kolom. */}
                <blockquote className="mt-4 flex-1 text-center text-sm leading-relaxed text-slate-700 md:text-left md:text-base dark:text-slate-300">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 flex flex-col items-center gap-2.5 border-t border-slate-900/5 pt-4 text-center md:flex-row md:items-center md:gap-3 md:text-left dark:border-white/5">
                  {/* Foto profil pelanggan (potret asli, bukan inisial) */}
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-500/0 transition-all duration-300 group-hover:ring-orange-500/40">
                    <Image
                      src={item.photo}
                      alt={`Foto ${item.name}, pelanggan dari ${item.role}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center justify-center gap-1 md:justify-start">
                      <span className="truncate text-sm font-extrabold text-slate-950 dark:text-white">
                        {item.name}
                      </span>
                      <BadgeCheck
                        className="h-4 w-4 shrink-0 fill-orange-500 text-white"
                        aria-label="Pelanggan terverifikasi"
                      />
                    </span>
                    <span className="mt-0.5 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 md:justify-start">
                      <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                        {item.service}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {item.role}
                      </span>
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p
          aria-hidden="true"
          className="mt-1 text-center text-xs font-bold uppercase tracking-wider text-slate-400 md:hidden"
        >
          Geser untuk melihat lainnya →
        </p>
      </div>
    </section>
  );
}
