import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { site, images } from "@/config/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Servis AC & Jasa Kelistrikan PLN Kalijati, Subang`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "servis AC Subang",
    "service AC Kalijati",
    "cuci AC Subang",
    "isi freon AC Subang",
    "instalasi AC Subang",
    "jasa listrik PLN Subang",
    "pasang baru listrik PLN",
    "naik daya listrik",
    "teknisi AC Subang",
    "Mukundo Teknologi Indonesia",
    "cool storage Subang",
    "mini chiller service",
    "servis AC 24 jam",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Servis AC & Jasa Kelistrikan PLN Kalijati, Subang`,
    description: site.description,
    images: [
      {
        url: images.whyUs.src,
        width: 1600,
        height: 1067,
        alt: `Tim teknisi ${site.name} sebelum pengerjaan proyek kelistrikan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Servis AC & Jasa Kelistrikan PLN`,
    description: site.description,
    images: [images.whyUs.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: `${base}/images/favicon-64.png`, sizes: "64x64", type: "image/png" },
      { url: `${base}/icon.svg`, type: "image/svg+xml" },
    ],
    apple: [
      { url: `${base}/images/icon-192.png`, sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased bg-stone-950 text-stone-100 selection:bg-orange-500/30`}>
        {children}
      </body>
    </html>
  );
}
