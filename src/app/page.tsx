import { ScrollProgress } from "@/components/site/scroll-progress";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee, StatsBar } from "@/components/site/marquee";
import { Services } from "@/components/site/services";
import { Statement } from "@/components/site/statement";
import { Gallery } from "@/components/site/gallery";
import { WhyUs } from "@/components/site/why-us";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Process } from "@/components/site/process";
import { Coverage } from "@/components/site/coverage";
import { QuoteForm } from "@/components/site/quote-form";
import { Location } from "@/components/site/location";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* Skip link a11y — muncul saat difokuskan keyboard */}
      <a
        href="#beranda"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-orange-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
      >
        Langsung ke konten utama
      </a>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Marquee />
        <Services />
        <Statement />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Process />
        <Coverage />
        <QuoteForm />
        <Location />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
