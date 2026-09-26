import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/** Data terstruktur FAQPage — kandidat hasil kaya (rich results) di Google. */
const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 md:py-24 dark:bg-slate-950" aria-label="Pertanyaan umum">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="FAQ"
          title="Pertanyaan yang"
          titleAccent="Sering Ditanya"
        />

        <Reveal className="mt-10 md:mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="border-slate-900/10 dark:border-white/10"
              >
                <AccordionTrigger className="rounded-xl px-4 py-4 text-left text-base font-bold text-slate-900 hover:bg-orange-50/60 hover:no-underline md:text-lg dark:text-slate-100 dark:hover:bg-orange-500/10 [&[data-state=open]]:text-orange-700 dark:[&[data-state=open]]:text-orange-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Kotak CTA "Chat WhatsApp Sekarang" dihapus (permintaan pemilik, Task 17):
              jalur WhatsApp sudah cukup dijangkau lewat tombol melayang,
              bagian FAQ jadi lebih fokus & profesional. */}
        </Reveal>
      </div>
    </section>
  );
}
