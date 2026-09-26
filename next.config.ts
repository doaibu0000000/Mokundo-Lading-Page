import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* Kualitas & format gambar teroptimasi: AVIF lebih kecil dari WebP */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  /* Badge dev "N / 1 Issue" disembunyikan (permintaan pemilik — tidak tampil lagi di preview). */
  devIndicators: false,
};

export default nextConfig;
