import { MapPin } from "lucide-react";
import { coverageAreas, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Coverage() {
  return (
    <section className="bg-stone-950 pb-20 text-white lg:pb-28" aria-label="Area layanan">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-stone-900/80 px-6 py-12 text-center sm:px-10 lg:py-16">
            <SectionHeading
              tone="dark"
              eyebrow="Area Layanan"
              title="Berbasis Kalijati, Melayani Subang & Sekitarnya"
              description="Workshop dan kantor kami berada di Kalijati — posisi strategis untuk menjangkau wilayah Subang, Purwakarta, hingga Karawang dengan cepat."
            />

            <ul className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-2.5">
              {coverageAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-stone-200 shadow-sm transition-colors hover:border-orange-500/40 hover:bg-orange-500/10"
                >
                  <MapPin className="h-3.5 w-3.5 text-orange-400" aria-hidden />
                  {area}
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-stone-400">
              Lokasi Anda tidak ada di daftar?{" "}
              <a
                href={waLink(
                  "Halo, apakah layanan Mukundo Teknologi Indonesia menjangkau lokasi saya?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
              >
                Hubungi kami
              </a>{" "}
              — untuk proyek komersial dan industri, tim kami siap menjangkau
              area yang lebih luas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
