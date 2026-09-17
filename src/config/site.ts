/**
 * ============================================================
 *  KONFIGURASI DATA BISNIS — Mukundo Teknologi Indonesia
 * ============================================================
 *  Semua data bisnis landing page terpusat di file ini.
 *  Pemilik bisnis cukup mengedit file ini tanpa menyentuh kode lain.
 *
 *  PENTING (WAJIB DIBACA SEBELUM GO-LIVE):
 *  1. `whatsappNumber` di bawah adalah nomor resmi bisnis: 6281221944007.
 *  2. Angka pada `stats` merupakan angka demo/placeholder —
 *     sesuaikan dengan data riil bisnis Anda.
 * ============================================================
 */

import type { StaticImageData } from "next/image";

import imgAcScaffolding from "../../public/images/ac-service-scaffolding.jpg";
import imgAcCompressor from "../../public/images/ac-compressor-repair.jpg";
// Foto briefing tim teknisi (sudah dibersihkan dari watermark & GPS overlay)
import imgPlnBriefing from "../../public/images/pln-team-briefing.jpg";
import imgPlnVehicle from "../../public/images/pln-operational-vehicle.jpg";
import imgMeterMelcoinda from "../../public/images/meter-prabayar-melcoinda.jpg";
// Foto instalasi listrik rapi & meter prabayar (HD jernih & terfokus)
import imgMeterInstall from "../../public/images/instalasi-listrik-rapi.jpg";
import imgMeterSanking from "../../public/images/meter-prabayar-sanking.jpg";

export const images = {
  hero: imgAcScaffolding,
  heroSmall: imgAcCompressor,
  whyUs: imgPlnBriefing,
  gallery: [
    { src: imgAcScaffolding, alt: "Teknisi Mukundo Teknologi melakukan servis unit outdoor AC di lokasi pelanggan", caption: "Servis unit outdoor AC" },
    { src: imgPlnBriefing, alt: "Briefing keselamatan kerja tim sebelum pengerjaan proyek kelistrikan", caption: "Briefing K3 sebelum pengerjaan" },
    { src: imgAcCompressor, alt: "Proses brazing kompresor AC oleh teknisi ahli", caption: "Brazing & perbaikan kompresor" },
    { src: imgMeterInstall, alt: "Instalasi meter listrik dan perpipaan yang rapi dan terstandar", caption: "Instalasi rapi & terstandar" },
    { src: imgMeterMelcoinda, alt: "Pemasangan meter listrik prabayar", caption: "Instalasi meter prabayar" },
    { src: imgPlnVehicle, alt: "Armada operasional tim siap ditugaskan ke lokasi pelanggan", caption: "Armada operasional siap pakai" },
  ],
  galleryExtra: [
    { src: imgMeterSanking, alt: "Meter listrik prabayar tipe SANKING CSI-11P siap dipasang", caption: "Meter prabayar siap pasang" },
  ],
};

export const site = {
  name: "Mukundo Teknologi Indonesia",
  shortName: "Mukundo Teknologi",
  owner: "Mas Dadan",
  tagline: "Servis AC & Jasa Kelistrikan PLN",
  description:
    "Layanan profesional perawatan, perbaikan, dan instalasi AC — split, standing floor, cool storage, hingga mini chiller — serta jasa kelistrikan PLN lengkap. Melayani Kalijati, Subang, dan sekitarnya, 24 jam.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  whatsappNumber: "6281221944007",
  phoneDisplay: "+62 812-2194-4007",
  email: "mokundo.co@gmail.com",

  address: {
    street: "Jl. Marjan, Kalijati Tim.",
    district: "Kec. Kalijati",
    city: "Kabupaten Subang",
    province: "Jawa Barat",
    country: "Indonesia",
    full: "Jl. Marjan, Kalijati Tim., Kec. Kalijati, Kabupaten Subang, Jawa Barat, Indonesia",
  },
  geo: { lat: -6.563045, lng: 107.768198 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mukundo+Teknologi+Indonesia+Kalijati+Subang",
  hours: "Buka 24 Jam — 7 Hari Seminggu",
};

export const defaultWaMessage =
  "Halo Mukundo Teknologi Indonesia, saya ingin bertanya tentang layanan AC / kelistrikan.";

export function waLink(message: string = defaultWaMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------- NAV ---------------------------------- */

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
] as const;

/* --------------------------------- STATS --------------------------------- */
/** ⚠️ Angka demo — sesuaikan dengan data riil bisnis. */

export const stats = [
  { value: "2.500+", label: "Proyek Terselesaikan" },
  { value: "15+", label: "Teknisi Berpengalaman" },
  { value: "24/7", label: "Siap Melayani" },
  { value: "100%", label: "Pengerjaan Bergaransi" },
] as const;

/* -------------------------------- SERVICES ------------------------------- */

export type ServiceGroup = {
  id: string;
  icon: "snowflake" | "zap";
  title: string;
  description: string;
  items: { icon: string; title: string; description: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ac",
    icon: "snowflake",
    title: "Servis AC & Tata Udara",
    description:
      "Perawatan, perbaikan, dan instalasi berbagai jenis AC untuk rumah tangga, komersial, hingga industri.",
    items: [
      {
        icon: "wind",
        title: "Cuci & Perawatan AC",
        description:
          "Menjaga AC tetap dingin maksimal, hemat listrik, dan memperpanjang usia pakai.",
      },
      {
        icon: "wrench",
        title: "Perbaikan & Servis AC",
        description:
          "Menangani berbagai kerusakan AC dengan diagnosa akurat dan pengerjaan bergaransi.",
      },
      {
        icon: "airvent",
        title: "Instalasi AC Baru",
        description:
          "Pemasangan rapi dengan titik dudukan, perpipaan, dan kelistrikan sesuai standar.",
      },
      {
        icon: "gauge",
        title: "Isi Freon & Cek Kebocoran",
        description:
          "Isi freon sesuai standar disertai pengecekan kebocoran agar performa AC tetap optimal.",
      },
      {
        icon: "thermometer-snowflake",
        title: "Cool Storage & Mini Chiller",
        description:
          "Instalasi, perawatan, dan perbaikan sistem pendingin komersial maupun industri.",
      },
      {
        icon: "truck",
        title: "Bongkar, Pindah & Reinstalasi",
        description:
          "Bongkar pasang AC saat pindah rumah, kantor, atau renovasi — aman dan rapi.",
      },
    ],
  },
  {
    id: "listrik",
    icon: "zap",
    title: "Jasa Kelistrikan PLN",
    description:
      "Pengurusan sampai pemasangan — semua kebutuhan kelistrikan rumah dan bangunan ditangani satu tim.",
    items: [
      {
        icon: "plugzap",
        title: "Pasang Baru Daya PLN",
        description:
          "Dibantu dari pengurusan administrasi hingga meter terpasang dan siap pakai.",
      },
      {
        icon: "trendingup",
        title: "Naik Daya",
        description:
          "Tambah daya listrik sesuai kebutuhan peralatan rumah atau usaha Anda.",
      },
      {
        icon: "receipttext",
        title: "Rubah Tarif",
        description:
          "Penyesuaian golongan tarif dan daya meter listrik sesuai kebutuhan.",
      },
      {
        icon: "cable",
        title: "Instalasi Kelistrikan",
        description:
          "Instalasi titik lampu, stop kontak, panel distribusi, hingga grounding.",
      },
      {
        icon: "network",
        title: "Penyambungan Jaringan",
        description:
          "Penyambungan, perbaikan, dan pemeliharaan jaringan kabel listrik.",
      },
      {
        icon: "package",
        title: "Pengadaan & Sparepart",
        description:
          "Meter prabayar, MCB, kabel, dan material listrik — tersedia di toko sparepart kami.",
      },
    ],
  },
];

export const extraServices = {
  title: "Restorasi Kerusakan & Keamanan Rumah",
  description:
    "Di luar AC dan listrik, kami juga menangani damage restoration serta pemasangan CCTV dan sistem keamanan rumah (home security).",
  cta: "Konsultasi Gratis",
};

/* -------------------------------- WHY US --------------------------------- */

export const whyUs = [
  {
    icon: "badgecheck",
    title: "Teknisi Bersertifikat",
    description:
      "Pengetahuan mendalam tentang sistem pendingin & tata udara, didukung keahlian teknis dan sertifikasi yang sesuai.",
  },
  {
    icon: "clock",
    title: "Buka 24 Jam",
    description:
      "AC bocor tengah malam atau listrik bermasalah? Tim kami tetap siap datang, kapan pun.",
  },
  {
    icon: "store",
    title: "Workshop & Toko Sparepart Sendiri",
    description:
      "Terdapat workshop, toko sparepart, kantor, dan marketing — komponen tersedia, perbaikan lebih cepat.",
  },
  {
    icon: "shieldcheck",
    title: "Garansi Pengerjaan",
    description:
      "Tenang setelah servis. Setiap pekerjaan disertai garansi dari tim kami.",
  },
  {
    icon: "receipttext",
    title: "Harga Transparan",
    description:
      "Estimasi biaya disampaikan jelas di awal — tanpa biaya tersembunyi di akhir.",
  },
  {
    icon: "building",
    title: "Residensial hingga Industri",
    description:
      "Rumah, toko, kantor, gudang, hingga fasilitas produksi — semua tertangani.",
  },
] as const;

/* -------------------------------- PROCESS -------------------------------- */

export const steps = [
  {
    title: "Hubungi Kami",
    description:
      "Kirim pesan via WhatsApp atau telepon — ceritakan keluhan AC atau listrik Anda.",
  },
  {
    title: "Konsultasi & Estimasi",
    description:
      "Kami bantu diagnosis masalah dan berikan estimasi biaya yang jelas sebelum pengerjaan.",
  },
  {
    title: "Pengerjaan Rapi",
    description:
      "Teknisi datang sesuai jadwal, bekerja rapi, aman, dan sesuai standar K3.",
  },
  {
    title: "Testing & Garansi",
    description:
      "Hasil kerja diuji sebelum kami pergi, disertai garansi dan tips perawatan.",
  },
] as const;

/* ------------------------------- COVERAGE -------------------------------- */

export const coverageAreas = [
  "Kalijati",
  "Subang Kota",
  "Cikampek",
  "Purwakarta",
  "Karawang",
  "Pamanukan",
  "Tanjungsiang",
  "Sagalaherang",
] as const;

/* ----------------------------- TESTIMONIALS ------------------------------ */
/** Testimoni demo untuk keperluan presentasi — ganti dengan testimoni riil. */

export const testimonials = [
  {
    initials: "RW",
    name: "Rina Wulandari",
    role: "Pemilik Rumah — Kalijati",
    quote:
      "AC kamar cepat dingin lagi setelah dicuci dan diisi freon. Teknisinya datang tepat waktu, penjelasannya jelas, dan harganya sesuai kesepakatan.",
  },
  {
    initials: "HG",
    name: "Hendra Gunawan",
    role: "Pemilik Toko Bangunan — Cikampek",
    quote:
      "Naik daya listrik toko kami dibantu dari pengurusan sampai terpasang. Prosesnya dijelaskan step by step, jadi tidak ribet. Sangat membantu usaha.",
  },
  {
    initials: "DA",
    name: "Dewi Anggraini",
    role: "Manajer Gudang — Subang",
    quote:
      "Cool storage kami dirawat rutin oleh tim Mukundo. Yang paling dihargai: saat ada kendala malam hari pun masih dilayani. Responsnya cepat.",
  },
] as const;

/* ---------------------------------- FAQ ---------------------------------- */

export const faqs = [
  {
    question: "Apakah bisa datang di hari yang sama?",
    answer:
      "Ya. Untuk area Kalijati dan sekitarnya, kami berusaha datang di hari yang sama. Untuk kondisi darurat, layanan kami buka 24 jam — hubungi kami kapan saja.",
  },
  {
    question: "Apakah pekerjaan bergaransi?",
    answer:
      "Setiap pekerjaan disertai garansi. Jika keluhan yang sama muncul kembali dalam masa garansi, kami perbaiki tanpa biaya tambahan.",
  },
  {
    question: "Berapa perkiraan biaya servis AC?",
    answer:
      "Biaya tergantung jenis layanan dan kapasitas unit (½ PK hingga 5 PK ke atas). Tim kami memberikan estimasi transparan sebelum pengerjaan — tanpa biaya tersembunyi.",
  },
  {
    question: "Apakah melayani AC komersial dan industri?",
    answer:
      "Ya. Selain AC rumahan (split, window, cassette), kami menangani standing floor, cool storage, hingga mini chiller untuk gudang, kantor, dan fasilitas produksi.",
  },
  {
    question: "Bagaimana proses pasang baru / naik daya listrik PLN?",
    answer:
      "Kami membantu dari pengurusan administrasi ke PLN, pemasangan material, hingga unit meter terpasang dan siap digunakan. Anda cukup menyiapkan e-KTP dan bukti kepemilikan tempat.",
  },
  {
    question: "Area mana saja yang dicakup?",
    answer:
      "Kami berbasis di Kalijati, Kabupaten Subang, dan melayani Subang kota, Cikampek, Purwakarta, Karawang, serta sekitarnya. Lokasi Anda di luar daftar? Hubungi kami untuk cek ketersediaan.",
  },
] as const;
