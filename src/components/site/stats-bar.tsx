import { stats } from "@/config/site";
import { Reveal } from "./reveal";

export function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-12 w-full max-w-7xl px-4 sm:px-6 lg:-mt-14 lg:px-8">
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-stone-900/95 px-5 py-6 text-center transition-colors duration-300 hover:bg-stone-850 lg:px-6 lg:py-7"
            >
              <dd className="text-3xl font-extrabold tracking-tight text-white lg:text-[2rem]">
                {stat.value}
              </dd>
              <span
                aria-hidden
                className="mx-auto mt-2.5 block h-0.5 w-8 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50"
              />
              <dt className="mt-2.5 text-[13px] font-medium leading-snug text-stone-400">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
