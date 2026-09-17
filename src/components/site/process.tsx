import { steps } from "@/config/site";
import { getIcon } from "./icon-map";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const stepIcons = ["phone", "clipboardcheck", "hardhat", "badgecheck"];

export function Process() {
  return (
    <section className="bg-stone-950 py-20 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Alur Kerja"
          title="Semudah Ini Prosesnya"
          description="Tanpa ribet — dari pesan pertama sampai pekerjaan bergaransi, tim kami memandu Anda di setiap langkah."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = getIcon(stepIcons[index]);
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <li className="group relative h-full rounded-2xl border border-white/10 bg-stone-900/90 p-6 pt-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10">
                  {/* Nomor Alur Langkah */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-5 select-none font-mono text-3xl font-black tracking-tight text-white/20 transition-all duration-300 group-hover:scale-105 group-hover:text-orange-500/60 sm:text-4xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>

                  <h3 className="relative mt-5 font-extrabold text-white">
                    {step.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-relaxed text-stone-400">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
