import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-stone-950 py-20 text-white lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu langsung."
          />
        </div>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left text-[15px] font-bold text-stone-200 hover:text-orange-400 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-stone-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
