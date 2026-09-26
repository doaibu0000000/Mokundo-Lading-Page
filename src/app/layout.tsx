import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";
import { services, site } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Mukundo Teknologi Indonesia — Satu Tim, Semua Solusi",
  description:
    "Jasa perbaikan & instalasi serba ada: AC, kelistrikan PLN, mesin industri, alat berat, kendaraan, CCTV, hingga perbaikan bangunan. Kalijati, Subang — buka 24 jam.",
  keywords: [
    "servis AC Subang",
    "jasa listrik Kalijati",
    "pasang meter prabayar",
    "naik daya PLN",
    "jasa perbaikan Subang",
    "Mukundo Teknologi",
    "teknisi Kalijati",
    "servis AC Kalijati",
    "perbaikan mesin industri",
    "pasang CCTV Subang",
  ],
  authors: [{ name: "Mukundo Teknologi Indonesia" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: site.shortName,
  },
  openGraph: {
    title: "Mukundo Teknologi Indonesia — Satu Tim, Semua Solusi",
    description:
      "AC, listrik, mesin, kendaraan, sampai perbaikan bangunan — ceritakan masalahnya, kami bantu carikan solusinya. Buka 24 jam di Kalijati, Subang.",
    siteName: "Mukundo Teknologi Indonesia",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hasil instalasi listrik rapi oleh teknisi Mukundo Teknologi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukundo Teknologi Indonesia — Satu Tim, Semua Solusi",
    description:
      "Jasa perbaikan serba ada di Kalijati, Subang. Buka 24 jam, bergaransi.",
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

/** Data terstruktur untuk SEO lokal (Google Rich Results). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: "/images/og-image.jpg",
  telephone: `+${site.whatsappNumber}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Kalijati Timur No.17, Dawuan",
    addressLocality: "Kalijati, Subang",
    addressRegion: "Jawa Barat",
    postalCode: "41271",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -6.532601, longitude: 107.691843 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  /** Katalog layanan — membantu Google memahami cakupan jasa. */
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jasa Perbaikan & Instalasi",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@type": "LocalBusiness", name: site.name },
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
