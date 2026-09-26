/**
 * ============================================================
 *  KONFIGURASI DATA BISNIS — Mukundo Teknologi Indonesia
 * ============================================================
 *  Semua data landing page terpusat di file ini.
 *  Foto & video 100% dari folder "reverensi mokundo" (asli, bukan AI).
 */

import imgLogo from "../../public/images/logo.png";
import imgHeroTim from "../../public/images/hero-tim-mukundo.webp";
import imgAcCompressor from "../../public/images/ac-compressor-repair.webp";
import imgAcScaffolding from "../../public/images/ac-service-scaffolding.webp";
import imgPlnBriefing from "../../public/images/pln-team-briefing.webp";
import imgPlnVehicle from "../../public/images/pln-operational-vehicle.webp";
import imgInstalasiListrik from "../../public/images/instalasi-listrik-rapi.webp";
import imgMotorIndustri from "../../public/images/motor-industri.webp";
import imgAcMobil from "../../public/images/ac-mobil.webp";
import imgMeterPrabayar from "../../public/images/meter-prabayar-melcoinda.webp";
import imgVideoAtapPoster from "../../public/images/video-atap-poster.jpg";

/* Foto dokumentasi lapangan — 100% dari folder "reverensi mokundo" (permintaan pemilik). */
import imgCuciAcCassette from "../../public/images/cuci-ac-cassette.webp";
import imgServisAcCassette from "../../public/images/servis-ac-cassette.webp";
import imgServisAcIndoor from "../../public/images/servis-ac-indoor.webp";
import imgPerawatanOutdoor from "../../public/images/perawatan-outdoor.webp";
import imgServisOutdoorMulti from "../../public/images/servis-outdoor-multi.webp";
import imgPerapianPanel from "../../public/images/perapian-panel.webp";
import imgPanelDistribusi from "../../public/images/panel-distribusi.webp";
import imgPemeliharaanTrafo from "../../public/images/pemeliharaan-trafo.webp";
import imgServisMotorGenset from "../../public/images/servis-motor-genset.webp";
import imgPerbaikanMesin from "../../public/images/perbaikan-mesin.webp";
import imgOverhaulMesin from "../../public/images/overhaul-mesin.webp";
import imgServisGensetIndustri from "../../public/images/servis-genset-industri.webp";
import imgPemasanganCctv from "../../public/images/pemasangan-cctv.webp";
import imgCctvKantor from "../../public/images/cctv-kantor.webp";
import imgCctvMonitorDvr from "../../public/images/cctv-monitor-dvr.webp";
import imgCctvDomeIndoor from "../../public/images/cctv-dome-indoor.webp";
import imgInstalasiCctv from "../../public/images/instalasi-cctv.webp";
import imgPengelasanStruktur from "../../public/images/pengelasan-struktur.webp";
import imgLasPipa from "../../public/images/las-pipa.webp";
import imgFabrikasiBaja from "../../public/images/fabrikasi-baja.webp";
import imgServisElektronik from "../../public/images/servis-elektronik.webp";
import imgUjiElektronik from "../../public/images/uji-elektronik.webp";
import imgServisLaptop from "../../public/images/servis-laptop.webp";
import imgBenchServis from "../../public/images/bench-servis.webp";
import imgRenovasiPlafon from "../../public/images/renovasi-plafon-interior.webp";
import imgInstalasiPipaToren from "../../public/images/instalasi-pipa-toren.webp";

/* Foto profil pelanggan untuk testimoni (potret orang Indonesia asli, bukan AI). */
import avatarRina from "../../public/images/avatars/avatar-rina.webp";
import avatarHendra from "../../public/images/avatars/avatar-hendra.webp";
import avatarDewi from "../../public/images/avatars/avatar-dewi.webp";
// Foto avatar testimoni (potret warga asli Indonesia)
import avatarSolihin from "../../public/images/avatars/avatar-solihin.webp";
import avatarSiti from "../../public/images/avatars/avatar-siti.webp";
import avatarRizky from "../../public/images/avatars/avatar-rizky.webp";
import avatarYuyun from "../../public/images/avatars/avatar-yuyun.webp";
import avatarAnisa from "../../public/images/avatars/avatar-anisa.webp";

import type { StaticImageData } from "next/image";

export const images = {
  logo: imgLogo,
  heroMain: imgHeroTim,
  heroSmall: imgAcCompressor,
} as const;

export const site = {
  name: "Mukundo Teknologi Indonesia",
  shortName: "Mukundo Teknologi",
  tagline: "Satu Tim, Semua Solusi",
  /** Domain kanonik — sumber tunggal untuk metadataBase, robots & sitemap. */
  url: "https://mukundoteknologi.com",
  description:
    "Jasa perbaikan & instalasi serba ada: AC, kelistrikan PLN, mesin industri, alat berat, kendaraan, CCTV, hingga perbaikan bangunan. Melayani Kalijati, Subang & sekitarnya — buka 24 jam.",
  whatsappNumber: "6281221944007",
  phoneDisplay: "+62 812-2194-4007",
  email: "mokundo.co@gmail.com",
  address: "Jl. Raya Kalijati Timur No.17, Dawuan, Kec. Kalijati, Kab. Subang, Jawa Barat",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mukundo+Teknologi+Indonesia+Kalijati+Subang",
  /** URL embed peta (tanpa API key) untuk iframe di section Lokasi. */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Mukundo+Teknologi+Indonesia,+Jl.+Raya+Kalijati+Timur+No.17,+Dawuan,+Kalijati,+Kab.+Subang&hl=id&z=15&output=embed",
  hours: "Buka 24 Jam — 7 Hari Seminggu",
} as const;

export const defaultWaMessage =
  "Halo Mukundo Teknologi, saya ingin bertanya tentang jasa perbaikan.";

export function waLink(message: string = defaultWaMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* --------------------------------- NAV ---------------------------------- */

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
] as const;

/* -------------------------------- STATS --------------------------------- */

export const stats = [
  { value: "2.500+", label: "Proyek Terselesaikan" },
  { value: "15+", label: "Teknisi Berpengalaman" },
  { value: "24/7", label: "Siap Melayani" },
  { value: "100%", label: "Bergaransi" },
] as const;

/* ------------------------------- MARQUEE -------------------------------- */

export const marqueeItems = [
  "Servis AC",
  "Instalasi Listrik",
  "Meter Prabayar",
  "Naik Daya PLN",
  "Motor Industri",
  "Alat Berat",
  "Genset",
  "AC Mobil",
  "CCTV",
  "Atap & Baja Ringan",
  "Cat & Renovasi",
  "Pompa Air",
  "Dan Banyak Lagi…",
] as const;

/* ------------------------------- SERVICES ------------------------------- */

export type Service = {
  icon:
    | "snowflake"
    | "zap"
    | "plugzap"
    | "gauge"
    | "cog"
    | "tractor"
    | "car"
    | "cctv"
    | "hammer";
  title: string;
  description: string;
  /** Rincian sub-jasa — tampil di dialog detail layanan. */
  items: string[];
  /** Pesan WhatsApp yang terisi otomatis saat kartu layanan diklik. */
  waMessage: string;
  /** Foto dokumentasi asli untuk dialog rincian (opsional). */
  photo?: StaticImageData;
  photoAlt?: string;
};

export const services: Service[] = [
  {
    icon: "snowflake",
    title: "Servis & Cuci AC",
    description: "Split, cassette, standing hingga cool storage.",
    items: [
      "Cuci & servis rutin AC split, cassette, standing",
      "Isi freon & perbaikan kebocoran",
      "Perbaikan kompresor, modul & PCB",
      "Cooling storage & ruang pendingin",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya ingin servis / cuci AC. Bisa dijadwalkan kapan?",
    photo: imgAcCompressor,
    photoAlt: "Teknisi melakukan brazing kompresor AC",
  },
  {
    icon: "zap",
    title: "Kelistrikan & Instalasi",
    description: "Titik lampu, panel, grounding, perbaikan error.",
    items: [
      "Titik lampu, saklar & stop kontak",
      "Perbaikan listrik drop, kurzus & error",
      "Grounding & panel distribusi",
      "Instalasi rumah, toko, kantor & pabrik",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya butuh bantuan jasa kelistrikan / instalasi.",
    photo: imgInstalasiListrik,
    photoAlt: "Instalasi meter listrik dan perpipaan yang rapi",
  },
  {
    icon: "plugzap",
    title: "Pasang Baru & Naik Daya PLN",
    description: "Urus administrasi sampai meter siap pakai.",
    items: [
      "Pengurusan pasang baru daya PLN",
      "Naik daya 900 VA hingga 35.000 VA+",
      "Balik nama & perubahan daya",
      "Pemasangan meter & penyambungan",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya ingin pasang baru / naik daya listrik PLN.",
    photo: imgPlnBriefing,
    photoAlt: "Briefing keselamatan tim sebelum pengerjaan PLN",
  },
  {
    icon: "gauge",
    title: "Meter Prabayar & Panel",
    description: "Pasang, ganti, dan perbaikan meter & panel.",
    items: [
      "Pemasangan meter prabayar baru",
      "Ganti meter rusak / token error",
      "Perbaikan panel MCB & kotak App",
      "Panel metering industri",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya butuh pasang / ganti meter prabayar atau panel.",
    photo: imgMeterPrabayar,
    photoAlt: "Meter listrik prabayar terpasang",
  },
  {
    icon: "cog",
    title: "Motor & Mesin Industri",
    description: "Rewinding, bearing, pompa, hingga mesin pabrik.",
    items: [
      "Rewinding motor listrik",
      "Ganti bearing & perbaikan poros",
      "Perbaikan pompa air & mesin pabrik",
      "Troubleshooting panel & drive mesin",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya punya motor / mesin industri yang perlu diperbaiki.",
    photo: imgMotorIndustri,
    photoAlt: "Motor listrik industri tiga fasa",
  },
  {
    icon: "tractor",
    title: "Alat Berat & Genset",
    description: "Perawatan & perbaikan mesin berat dan genset.",
    items: [
      "Servis rutin & overhaul genset",
      "Perawatan mesin alat berat",
      "Kelistrikan & sistem kendali alat berat",
      "Pemasangan & pindahan genset",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya butuh servis alat berat / genset.",
    photo: imgPanelDistribusi,
    photoAlt: "Perawatan mesin alat berat dan genset",
  },
  {
    icon: "car",
    title: "AC Mobil & Kendaraan",
    description: "Servis AC, kelistrikan, dan instalasi kendaraan.",
    items: [
      "Cuci & isi freon AC mobil",
      "Perbaikan kompresor & evaporator",
      "Kelistrikan & modul kendaraan",
      "Instalasi aksesori kendaraan",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya ingin servis AC mobil / kelistrikan kendaraan.",
    photo: imgAcMobil,
    photoAlt: "Perbaikan modul AC dan kelistrikan kendaraan",
  },
  {
    icon: "cctv",
    title: "CCTV & Keamanan",
    description: "Pemasangan CCTV, alarm, dan smart home.",
    items: [
      "Pasang CCTV rumah, ruko & gudang",
      "CCTV IP multi kamera & pantau online",
      "Alarm & sensor keamanan",
      "Smart home & otomasi sederhana",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya ingin pasang CCTV / sistem keamanan.",
    photo: imgPemasanganCctv,
    photoAlt: "Teknisi memasang kamera CCTV di titik strategis",
  },
  {
    icon: "hammer",
    title: "Atap, Cat & Renovasi",
    description: "Bocor, cat ulang, perbaikan bangunan & sipil.",
    items: [
      "Perbaikan atap bocor & baja ringan",
      "Inspeksi kondisi atap gudang",
      "Cat ulang & finishing",
      "Renovasi & perbaikan sipil ringan",
    ],
    waMessage:
      "Halo Mukundo Teknologi, saya butuh perbaikan atap / cat / renovasi.",
    photo: imgVideoAtapPoster,
    photoAlt: "Inspeksi kondisi atap gudang dari ketinggian",
  },
];

/* ------------------------------- GALLERY -------------------------------- */

export type GalleryCategory =
  | "ac"
  | "listrik"
  | "mesin"
  | "keamanan"
  | "las"
  | "elektronik"
  | "bangunan";

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: "ac", label: "AC" },
  { id: "listrik", label: "Listrik & PLN" },
  { id: "mesin", label: "Mesin & Genset" },
  { id: "keamanan", label: "CCTV & Keamanan" },
  { id: "las", label: "Las & Metal" },
  { id: "elektronik", label: "Elektronik" },
  { id: "bangunan", label: "Bangunan & Renovasi" },
];

export type GalleryItem =
  | {
      type: "photo";
      src: StaticImageData;
      alt: string;
      caption: string;
      category: GalleryCategory;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt: string;
      caption: string;
      category: GalleryCategory;
    };

export const gallery: GalleryItem[] = [
  // Enam item pertama = sorotan lintas bidang (tampilan awal mobile menampilkan
  // keenamnya agar ragam pekerjaan langsung terlihat tanpa terasa penuh).
  {
    type: "photo",
    src: imgCuciAcCassette,
    alt: "Teknisi membersihkan AC cassette plafon kantor",
    caption: "Cuci & servis AC cassette kantor",
    category: "ac",
  },
  {
    type: "photo",
    src: imgPerapianPanel,
    alt: "Teknisi merapikan jalur kabel pada panel pembagi listrik",
    caption: "Perapian & perbaikan panel listrik",
    category: "listrik",
  },
  {
    type: "photo",
    src: imgPemasanganCctv,
    alt: "Teknisi memasang kamera CCTV di dinding bangunan",
    caption: "Pemasangan kamera CCTV",
    category: "keamanan",
  },
  {
    type: "photo",
    src: imgPengelasanStruktur,
    alt: "Pekerja mengelas struktur baja dengan percikan api",
    caption: "Pengelasan struktur baja",
    category: "las",
  },
  {
    type: "photo",
    src: imgServisGensetIndustri,
    alt: "Teknisi menservis genset dan mesin industri",
    caption: "Servis genset & mesin industri",
    category: "mesin",
  },
  {
    type: "photo",
    src: imgUjiElektronik,
    alt: "Pengujian dan perbaikan board elektronik di meja servis",
    caption: "Perbaikan perangkat elektronik",
    category: "elektronik",
  },
  // ——— Lanjutan koleksi per bidang ———
  {
    type: "photo",
    src: imgAcCompressor,
    alt: "Proses brazing kompresor AC oleh teknisi ahli",
    caption: "Brazing & perbaikan kompresor",
    category: "ac",
  },
  {
    type: "photo",
    src: imgPlnBriefing,
    alt: "Briefing keselamatan kerja tim sebelum pengerjaan kelistrikan",
    caption: "Briefing K3 sebelum pengerjaan",
    category: "listrik",
  },
  {
    type: "video",
    src: "/images/video-ventilator-atap.mp4",
    poster: "/images/video-ventilator-atap-poster.jpg",
    alt: "Video pemasangan ventilator turbin di atap bangunan",
    caption: "Pemasangan ventilator atap",
    category: "bangunan",
  },
  {
    type: "photo",
    src: imgRenovasiPlafon,
    alt: "Renovasi interior ruang tamu dan pemasangan plafon gypsum drop ceiling",
    caption: "Renovasi interior & plafon gypsum",
    category: "bangunan",
  },
  {
    type: "photo",
    src: imgInstalasiPipaToren,
    alt: "Instalasi toren air ganda dan perpipaan distribusi di atap",
    caption: "Instalasi toren & pipa air",
    category: "bangunan",
  },
  {
    type: "video",
    src: "/images/video-renovasi-ruangan.mp4",
    alt: "Video proses renovasi dan perataan dinding ruangan",
    caption: "Renovasi & finishing ruangan",
    category: "bangunan",
  },
  {
    type: "video",
    src: "/images/video-interior-kamar.mp4",
    alt: "Video pengerjaan interior kamar dan pengecatan",
    caption: "Pengerjaan interior kamar",
    category: "bangunan",
  },
  {
    type: "video",
    src: "/images/video-finishing-lantai.mp4",
    alt: "Video pemasangan keramik dan finishing lantai ruangan",
    caption: "Pemasangan keramik & lantai",
    category: "bangunan",
  },
  {
    type: "video",
    src: "/images/video-pengelasan.mp4",
    poster: "/images/video-pengelasan-poster.jpg",
    alt: "Video proses pengelasan logam dengan percikan api",
    caption: "Proses pengelasan",
    category: "las",
  },
  {
    type: "video",
    src: "/images/video-servis-mesin.mp4",
    poster: "/images/video-servis-mesin-poster.jpg",
    alt: "Video proses servis dan pembongkaran mesin",
    caption: "Servis mesin",
    category: "mesin",
  },
  {
    type: "photo",
    src: imgInstalasiListrik,
    alt: "Instalasi meter listrik dan perpipaan yang rapi dan terstandar",
    caption: "Instalasi listrik rapi & terstandar",
    category: "listrik",
  },
  {
    type: "photo",
    src: imgPlnVehicle,
    alt: "Armada operasional tim siap ditugaskan ke lokasi pelanggan",
    caption: "Armada operasional siap pakai",
    category: "listrik",
  },
  {
    type: "photo",
    src: imgMotorIndustri,
    alt: "Perbaikan motor listrik industri tiga fasa",
    caption: "Motor listrik industri",
    category: "mesin",
  },
  {
    type: "photo",
    src: imgAcScaffolding,
    alt: "Teknisi di atas scaffolding menservis unit AC besar",
    caption: "Servis AC besar dengan scaffolding",
    category: "ac",
  },
  {
    type: "photo",
    src: imgPanelDistribusi,
    alt: "Perawatan mesin alat berat dan genset",
    caption: "Mesin alat berat & genset",
    category: "mesin",
  },
  {
    type: "photo",
    src: imgServisAcCassette,
    alt: "Dua teknisi menservis AC cassette kantor di atas tangga",
    caption: "Servis AC kantor bersama tim",
    category: "ac",
  },
  {
    type: "photo",
    src: imgServisAcIndoor,
    alt: "Teknisi membongkar dan membersihkan AC indoor",
    caption: "Bongkar & servis AC indoor",
    category: "ac",
  },
  {
    type: "photo",
    src: imgPerawatanOutdoor,
    alt: "Teknisi merawat outdoor unit AC di atas tangga",
    caption: "Perawatan outdoor unit AC",
    category: "ac",
  },
  {
    type: "photo",
    src: imgServisOutdoorMulti,
    alt: "Teknisi memeriksa deretan outdoor unit AC multi-split",
    caption: "Pengecekan outdoor unit multi-split",
    category: "ac",
  },
  {
    type: "photo",
    src: imgAcMobil,
    alt: "Perbaikan evaporator dan modul AC kendaraan",
    caption: "Perbaikan AC mobil & kendaraan",
    category: "ac",
  },
  {
    type: "photo",
    src: imgPemeliharaanTrafo,
    alt: "Pemeliharaan jaringan listrik dan trafo dengan crane",
    caption: "Pemeliharaan jaringan & trafo PLN",
    category: "listrik",
  },
  {
    type: "photo",
    src: imgServisMotorGenset,
    alt: "Teknisi menservis motor dan generator industri",
    caption: "Servis motor & generator industri",
    category: "mesin",
  },
  // ——— Tambahan dokumentasi dari folder reverensi ———
  {
    type: "photo",
    src: imgPerbaikanMesin,
    alt: "Teknisi mengerjakan perbaikan mesin industri besar",
    caption: "Perbaikan mesin industri",
    category: "mesin",
  },
  {
    type: "photo",
    src: imgOverhaulMesin,
    alt: "Komponen blok mesin hasil pembongkaran untuk overhaul",
    caption: "Overhaul & pembongkaran mesin",
    category: "mesin",
  },
  {
    type: "photo",
    src: imgMeterPrabayar,
    alt: "Meter listrik prabayar terpasang dengan token aktif",
    caption: "Pemasangan meter listrik prabayar",
    category: "listrik",
  },
  {
    type: "photo",
    src: imgCctvKantor,
    alt: "Kamera CCTV terpasang mengawasi area kantor",
    caption: "CCTV area kantor & ruko",
    category: "keamanan",
  },
  {
    type: "photo",
    src: imgCctvMonitorDvr,
    alt: "Monitor dan DVR CCTV untuk rekaman keamanan",
    caption: "Setup monitor & DVR CCTV",
    category: "keamanan",
  },
  {
    type: "photo",
    src: imgCctvDomeIndoor,
    alt: "Kamera CCTV dome indoor terpasang di dinding",
    caption: "Kamera dome indoor",
    category: "keamanan",
  },
  {
    type: "photo",
    src: imgInstalasiCctv,
    alt: "Instalasi kabel dan posisi kamera CCTV berjalan",
    caption: "Instalasi titik kamera CCTV",
    category: "keamanan",
  },
  {
    type: "photo",
    src: imgLasPipa,
    alt: "Pengelasan pipa dan komponen mesin",
    caption: "Las pipa & komponen mesin",
    category: "las",
  },
  {
    type: "photo",
    src: imgFabrikasiBaja,
    alt: "Pengelasan fabrikasi baja di ketinggian",
    caption: "Fabrikasi baja di ketinggian",
    category: "las",
  },
  {
    type: "photo",
    src: imgServisElektronik,
    alt: "Instalasi dan perakitan box panel serta perkabelan listrik",
    caption: "Perakitan box panel & kabel listrik",
    category: "listrik",
  },
  {
    type: "photo",
    src: imgServisLaptop,
    alt: "Perbaikan motherboard laptop di meja servis",
    caption: "Servis laptop & motherboard",
    category: "elektronik",
  },
  {
    type: "photo",
    src: imgBenchServis,
    alt: "Meja servis elektronik dengan suku cadang dan perkakas",
    caption: "Bench servis & suku cadang",
    category: "elektronik",
  },
];

/* -------------------------------- WHY US -------------------------------- */

export const whyUs = [
  {
    icon: "badgecheck",
    title: "Bersertifikat",
    description: "Ahli di bidangnya, bekerja sesuai standar K3.",
  },
  {
    icon: "clock",
    title: "Buka 24 Jam",
    description: "Darurat tengah malam? Tetap kami layani.",
  },
  {
    icon: "shieldcheck",
    title: "Garansi Pengerjaan",
    description: "Ada kendala setelah kerja? Kami kembali gratis.",
  },
  {
    icon: "wallet",
    title: "Harga Transparan",
    description: "Estimasi jelas di awal, tanpa biaya tersembunyi.",
  },
] as const;

/* ------------------------------ TESTIMONIALS ----------------------------- */

export const testimonials = [
  {
    name: "Rina Wulandari",
    role: "Kalijati",
    service: "Servis & Cuci AC",
    quote:
      "AC dingin lagi dalam sehari. Teknisinya tepat waktu, harganya sesuai kesepakatan.",
    photo: avatarRina,
  },
  {
    name: "Hendra Gunawan",
    role: "Cikampek",
    service: "Naik Daya PLN",
    quote:
      "Naik daya listrik toko dibantu sampai beres. Prosesnya jelas, tidak ribet sama sekali.",
    photo: avatarHendra,
  },
  {
    name: "Dewi Anggraini",
    role: "Subang Kota",
    service: "Darurat 24 Jam",
    quote:
      "Malam-malam masih dilayani dan responsnya cepat. Hasil kerja rapi, sangat recommended.",
    photo: avatarDewi,
  },
  {
    name: "Bapak Solihin",
    role: "Pamanukan",
    service: "Perbaikan Pompa Air",
    quote:
      "Pompa air mati total malam itu, sebelum subuh sudah nyala lagi. Teknisinya ramah dan kerjanya bersih.",
    photo: avatarSolihin,
  },
  {
    name: "Siti Rahmawati",
    role: "Tanjungsiang",
    service: "Kelistrikan & Instalasi",
    quote:
      "Instalasi listrik rumah dikerjakan rapi, jalur kabel teratur. Semua dijelaskan detail sampai paham.",
    photo: avatarSiti,
  },
  {
    name: "Rizky Ramadhan",
    role: "Cicadas",
    service: "AC Mobil",
    quote:
      "AC mobil nggak dingin dari dulu, sekali servis langsung dingin lagi. Tidak ada biaya aneh-aneh.",
    photo: avatarRizky,
  },
  {
    name: "Yuyun Hartati",
    role: "Purwakarta",
    service: "Cat & Renovasi",
    quote:
      "Cat rumah dan perbaikan atap dikerjakan rapi, area kerja selalu dibersihkan setelah selesai. Puas banget.",
    photo: avatarYuyun,
  },
  {
    name: "Anisa Putri",
    role: "Dawuan",
    service: "CCTV & Keamanan",
    quote:
      "Pasang CCTV rumah cepat dan rapi, cara pakai aplikasinya diajarkan sampai bisa. Terima kasih, Mukundo!",
    photo: avatarAnisa,
  },
] as const;

/* ---------------------------------- FAQ ---------------------------------- */

export const faqs = [
  {
    question: "Bisa datang di hari yang sama?",
    answer:
      "Ya, untuk area Kalijati dan sekitarnya kami usahakan datang di hari yang sama. Kondisi darurat? Kami buka 24 jam.",
  },
  {
    question: "Apakah pekerjaan bergaransi?",
    answer:
      "Ya. Jika keluhan yang sama muncul kembali dalam masa garansi, kami perbaiki tanpa biaya tambahan.",
  },
  {
    question: "Berapa perkiraan biayanya?",
    answer:
      "Tergantung jenis pekerjaan. Kirim foto ke WhatsApp — estimasi diberikan jelas sebelum pengerjaan, tanpa biaya tersembunyi.",
  },
  {
    question: "Bisa kerja komersial dan industri?",
    answer:
      "Bisa. Rumah, toko, kantor, gudang, hingga fasilitas produksi semuanya tertangani.",
  },
  {
    question: "Area mana saja yang dilayani?",
    answer:
      "Kalijati, Subang, Cikampek, Purwakarta, Karawang, dan sekitarnya. Di luar daftar? Tanya saja via WhatsApp.",
  },
] as const;

/* -------------------------------- COVERAGE ------------------------------- */

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

/* -------------------------------- PROCESS ------------------------------- */

export const steps = [
  { title: "Chat WhatsApp", description: "Ceritakan masalah Anda." },
  { title: "Estimasi", description: "Biaya jelas sebelum kerja." },
  { title: "Pengerjaan", description: "Teknisi datang & bereskan." },
  { title: "Garansi", description: "Diuji & bergaransi." },
] as const;
