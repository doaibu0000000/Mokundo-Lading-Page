import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { StatsBar } from "@/components/site/stats-bar";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Gallery } from "@/components/site/gallery";
import { Coverage } from "@/components/site/coverage";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { CtaBanner } from "@/components/site/cta-banner";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

import { coverageAreas, images, serviceGroups, site } from "@/config/site";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "Electrician"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+${site.whatsappNumber}`,
    email: site.email,
    image: images.whyUs.src,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: coverageAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    makesOffer: serviceGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title },
      }))
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <Coverage />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <JsonLd />
    </div>
  );
}
