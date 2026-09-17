import { Quote, Star } from "lucide-react";
import { testimonials } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="scroll-mt-20 bg-stone-950 py-20 text-white lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Testimoni"
          title="Kata Mereka yang Sudah Dilayani"
          description="Kepercayaan pelanggan adalah aset terbesar kami — dari rumah tangga hingga pemilik usaha."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index * 0.08}>
              <li className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-stone-900/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/5">
                <Quote
                  aria-hidden
                  className="absolute right-6 top-6 h-8 w-8 text-orange-500/15"
                />
                <div
                  className="flex items-center gap-0.5 text-amber-400"
                  aria-label="Rating 5 dari 5 bintang"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-full border border-orange-500/30 bg-orange-500/15 text-sm font-extrabold text-orange-400"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-stone-400">{t.role}</p>
                  </div>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
