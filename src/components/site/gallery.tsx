import Image from "next/image";
import { Camera } from "lucide-react";
import { images } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-20 bg-stone-950 py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Galeri Kerja"
          title="Bukti Nyata, Bukan Sekadar Janji"
          description="Dokumentasi asli pengerjaan tim kami di lokasi pelanggan — dari servis AC gedung hingga instalasi meter prabayar PLN."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.gallery.map((item, index) => (
            <Reveal key={item.caption} delay={index * 0.05}>
              <li className="group relative overflow-hidden rounded-2xl border border-white/10 bg-stone-900">
                <Image
                  src={item.src}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-3 text-xs font-bold text-white sm:p-4 sm:text-[13px]">
                  <Camera
                    className="h-3.5 w-3.5 shrink-0 text-orange-400"
                    aria-hidden
                  />
                  {item.caption}
                </figcaption>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-stone-400">
            Dokumentasi lengkap pekerjaan lainnya tersedia di katalog kami —
            tanyakan melalui WhatsApp jika ingin melihat portofolio untuk
            kebutuhan spesifik Anda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
