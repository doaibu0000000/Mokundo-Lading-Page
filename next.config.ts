import type { NextConfig } from "next";

/** Saat deploy ke GitHub Pages, aset perlu prefix /Mokundo-Lading-Page.
 *  Di lokal & custom domain tidak perlu prefix, jadi cukup pakai env CI. */
const isGithubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/Mokundo-Lading-Page" : "",
  assetPrefix: isGithubPages ? "/Mokundo-Lading-Page/" : "",
  /* Kualitas & format gambar teroptimasi: AVIF lebih kecil dari WebP */
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  /* Badge dev "N / 1 Issue" disembunyikan (permintaan pemilik — tidak tampil lagi di preview). */
  devIndicators: false,
};

export default nextConfig;
