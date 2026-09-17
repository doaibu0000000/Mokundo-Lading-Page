import type { NextConfig } from "next";

/**
 * Dual-deployment configuration:
 *
 * 1. DEFAULT (Vercel / Node hosting):
 *    - output: "standalone"  → production server build.
 *
 * 2. GITHUB PAGES (static export):
 *    - Set NEXT_PUBLIC_BASE_PATH=<repo-name> (mis. "/mukundo-landing") saat build.
 *    - Otomatis beralih ke output: "export", menambahkan basePath,
 *      dan menonaktifkan optimasi gambar (wajib untuk static export).
 *    - Setelah build, jangan lupa: touch out/.nojekyll
 *      agar folder _next/ ikut tersaji oleh GitHub Pages.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

/**
 * Izinkan origin preview (space-z.ai) mengambil resource /_next/* saat mode dev.
 * Tanpa ini, Next.js 16 menampilkan warning cross-origin dan pada versi
 * mayor berikutnya request akan diblokir (preview jadi rusak tanpa CSS/JS).
 */
const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.space-z.ai"],
  devIndicators: false,
  ...(basePath
    ? {
        output: "export",
        basePath,
        images: { unoptimized: true },
      }
    : {
        output: "standalone",
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
