import { ArrowRight, ShieldCheck, Snowflake, Sparkles, Zap } from "lucide-react";
import { extraServices, serviceGroups, waLink } from "@/config/site";
import { getIcon } from "./icon-map";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { BorderRunner } from "./border-runner";

const groupIcons = { snowflake: Snowflake, zap: Zap };

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-stone-950 text-white pt-20 lg:pt-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Layanan Kami"
          title="Solusi Lengkap AC & Kelistrikan dalam Satu Tim Profesional"
          description="Melayani rumah, kantor, komersial, hingga industri. Dikerjakan teknisi berpengalaman dengan pengerjaan rapi, cepat, dan bergaransi."
        />

        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-20">
          {serviceGroups.map((group, groupIndex) => {
            const GroupIcon = groupIcons[group.icon];
            return (
              <div key={group.id}>
                <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
                    <GroupIcon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                      {group.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-stone-400">
                      {group.description}
                    </p>
                  </div>
                </Reveal>

                <ul className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                  {group.items.map((item, index) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <Reveal key={item.title} delay={index * 0.06}>
                        <li className="group h-full rounded-2xl border border-white/10 bg-stone-900/80 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10">
                          <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-stone-300 transition-colors group-hover:bg-orange-500/20 group-hover:text-orange-400">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                          </span>
                          <h4 className="mt-3 sm:mt-4 text-[13px] sm:text-base font-bold text-white leading-snug">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-[11px] sm:text-sm leading-relaxed text-stone-400">
                            {item.description}
                          </p>
                        </li>
                      </Reveal>
                    );
                  })}
                </ul>

                {groupIndex === serviceGroups.length - 1 && (
                  <Reveal className="mt-10">
                    <div className="group relative rounded-2xl bg-stone-900/90 transition-all duration-300 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5">
                      {/* Real Running Green Laser Beam along perimeter */}
                      <BorderRunner />

                      {/* Card Content Container */}
                      <div className="relative z-10 flex flex-col gap-5 rounded-2xl bg-gradient-to-br from-stone-900/98 via-stone-900/95 to-stone-950/98 p-5 sm:p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between overflow-hidden">
                        {/* Left Ambient Shield Glow */}
                        <div
                          className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl animate-[shield-glow_4s_ease-in-out_infinite]"
                          aria-hidden="true"
                        />

                        {/* Metallic shimmer sweep */}
                        <div
                          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-[shimmer_6s_ease-in-out_infinite]"
                          aria-hidden="true"
                        />

                        {/* Left Side: Animated Safety Shield Badge + Special Pill + Description */}
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="relative grid h-12 w-12 shrink-0 place-items-center">
                            {/* Ambient radar pulse rings */}
                            <span
                              className="absolute inset-0 rounded-2xl bg-orange-500/30 animate-ping opacity-40"
                              aria-hidden="true"
                            />
                            <span
                              className="absolute -inset-1 rounded-2xl bg-orange-500/20 blur-sm animate-[shield-glow_3s_ease-in-out_infinite]"
                              aria-hidden="true"
                            />

                            {/* Safety Shield Badge with continuous float */}
                            <span className="relative z-10 grid h-full w-full place-items-center rounded-2xl border border-orange-500/40 bg-gradient-to-br from-orange-500/20 via-orange-950/40 to-amber-500/15 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)] animate-badge-float">
                              <ShieldCheck
                                className="h-6 w-6 animate-shield-icon"
                                aria-hidden="true"
                              />
                            </span>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-stone-300">
                                <Sparkles className="h-3 w-3 text-orange-400 animate-pulse" aria-hidden="true" />
                                Layanan Khusus
                              </span>
                            </div>
                            <p className="font-bold text-white text-base sm:text-lg">
                              {extraServices.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-stone-400 max-w-2xl">
                              {extraServices.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Side: Consistent Orange CTA Link */}
                        <div className="relative z-10 shrink-0">
                          <a
                            href={waLink(
                              "Halo, saya ingin konsultasi tentang layanan Restorasi & Keamanan Rumah Mokundo."
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-orange-400 transition-colors hover:text-orange-300"
                          >
                            <span>{extraServices.cta}</span>
                            <ArrowRight
                              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
