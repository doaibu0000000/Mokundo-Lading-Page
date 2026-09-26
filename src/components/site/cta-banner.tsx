import { Button } from "@/components/ui/button";
import { defaultWaMessage, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

/** Banner CTA akhir sebelum footer. */
export function CtaBanner() {
  return (
    <section aria-label="Ajakan menghubungi" className="bg-white pb-16 md:pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-orange-600 to-[#c2410c] px-6 py-14 text-center shadow-[0_35px_70px_-25px_rgba(234,88,12,0.55)] sm:px-12 md:py-16">
            {/* Tekstur titik halus */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">
                Masih ragu? Tanya dulu, gratis.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-base font-medium leading-relaxed text-white/90 md:text-lg">
                Kirim foto kerusakan Anda — tim kami balas dengan estimasi yang jelas.
              </p>
              <Button
                asChild
                size="lg"
                className="btn-shine btn-shine-warm mt-8 h-[56px] rounded-full bg-white px-8 text-base font-black text-orange-700 shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-white dark:bg-slate-950 dark:text-orange-400 dark:hover:bg-slate-900"
              >
                <a href={waLink(defaultWaMessage)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5 text-[#1faa53]" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
