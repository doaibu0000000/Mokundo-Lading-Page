# Landing Page — Mukundo Teknologi Indonesia

Landing page satu halaman (one-page company profile) untuk **Mukundo Teknologi Indonesia** — bisnis servis AC & jasa kelistrikan PLN yang berlokasi di Kalijati, Subang, Jawa Barat. Website ini dirancang sebagai halaman statis yang cepat, responsif, dan siap dipublikasikan, dengan seluruh konten bisnis (layanan, testimoni, FAQ, kontak) dikelola secara terpusat agar mudah dikustomisasi tanpa menyentuh kode komponen.

## ✨ Section yang Tersedia

| # | Section | Keterangan |
|---|---------|------------|
| 1 | **Hero** | Penjelasan singkat bisnis + CTA langsung ke WhatsApp |
| 2 | **Layanan AC & Listrik** | Daftar layanan utama (servis AC, instalasi listrik, dll.) |
| 3 | **Keunggulan** | Alasan memilih Mukundo Teknologi Indonesia |
| 4 | **Alur Kerja** | Langkah pemesanan dari kontak hingga pengerjaan selesai |
| 5 | **Galeri** | Foto hasil pekerjaan (dari `public/images`) |
| 6 | **Area Layanan** | Cakupan wilayah layanan (Kalijati, Subang, dan sekitarnya) |
| 7 | **Testimoni** | Ulasan pelanggan |
| 8 | **FAQ** | Pertanyaan yang sering diajukan |
| 9 | **Kontak** | WhatsApp, alamat, jam operasional, dan peta |

## 🛠 Teknologi

- [Next.js 16](https://nextjs.org/) — App Router, React Server Components
- [TypeScript 5](https://www.typescriptlang.org/) — type safety end-to-end
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) (New York) — komponen UI berbasis Radix UI
- [framer-motion](https://www.framer.com/motion/) — animasi halus & subtile
- [lucide-react](https://lucide.dev/) — ikon SVG

> Proyek ini adalah **statis satu halaman**: tanpa database, tanpa API routes, tanpa autentikasi.

## 📁 Struktur Folder Penting

```
├── src/
│   ├── app/                  # App Router (layout.tsx, page.tsx, globals.css)
│   ├── components/
│   │   ├── site/             # Komponen section landing page (Hero, FAQ, dst.)
│   │   └── ui/               # Komponen shadcn/ui
│   └── config/
│       └── site.ts           # ⭐ SEMUA data bisnis ada di sini
├── public/
│   └── images/               # Foto bisnis yang sudah dioptimasi (.jpg)
├── next.config.ts            # output: "standalone" default; export via NEXT_PUBLIC_BASE_PATH
└── package.json
```

## 🚀 Memulai

### 1. Install dependensi

```bash
bun install
# atau
npm install
```

### 2. Jalankan development server

```bash
bun run dev
# atau: npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build produksi

```bash
bun run build
bun run start
```

Build default menggunakan `output: "standalone"` sehingga hasil build dapat dijalankan mandiri lewat `bun run start` di port 3000.

### 4. Lint

```bash
bun run lint
```

## 🔧 Kustomisasi Data Bisnis

> **Semua data bisnis terpusat di satu file: `src/config/site.ts`.**

Edit file tersebut untuk mengubah:

- **Nama bisnis, tagline, dan deskripsi**
- **Nomor WhatsApp** (dipakai di semua tombol CTA `wa.me`)
- **Alamat, area layanan, dan jam operasional**
- **Daftar layanan** AC & kelistrikan (judul, ikon, deskripsi)
- **Testimoni** pelanggan
- **FAQ** (pertanyaan & jawaban)

### ⚠️ PENTING — Data Placeholder

| Data | Status | Wajib dilakukan |
|------|--------|-----------------|
| Nomor WhatsApp | `+62 812-2194-4007` (Aktif) | Nomor resmi WhatsApp & telepon Mukundo Teknologi. |
| Angka statistik (jumlah pekerjaan, jumlah teknisi) | Angka **demo** | Harus **dikonfirmasi & dikoreksi** oleh pemilik bisnis agar tidak menyesatkan pelanggan. |

Foto di `public/images` dapat diganti dengan foto pekerjaan asli (pertahankan nama file, atau perbarui path di `src/config/site.ts`).

## 🔐 Environment Variable

Salin `.env.example` menjadi `.env.local` lalu sesuaikan nilainya:

| Variable | Wajib? | Fungsi |
|----------|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | Opsional | URL publik produksi (mis. `https://mukundo-teknologi.vercel.app`). Dipakai untuk metadata OpenGraph & canonical/JSON-LD. |
| `NEXT_PUBLIC_BASE_PATH` | Opsional | **Khusus GitHub Pages**, mis. `/mukundo-landing`. Mengaktifkan mode `output: "export"`, menyetel `basePath`, dan membuat gambar `unoptimized`. Jangan diisi untuk Vercel. |

## ☁️ Deployment ke Vercel

1. Push repositori ini ke GitHub/GitLab.
2. Buka [vercel.com](https://vercel.com) → **Add New → Project** → import repositori.
3. Vercel akan **otomatis mendeteksi framework Next.js** — tidak perlu konfigurasi build tambahan.
4. (Opsional) Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` dengan URL produksi.
5. Klik **Deploy**. Selesai.

Tidak ada database, API routes, maupun service eksternal yang perlu disiapkan.

## 🧪 Testing via GitHub Pages

Mode export statis cocok untuk preview/demo tanpa server. Langkahnya:

1. Buat repositori GitHub (mis. `mukundo-landing`).
2. Set environment variable `NEXT_PUBLIC_BASE_PATH=/<nama-repo>` (contoh: `/mukundo-landing`) saat build — ini mengaktifkan `output: "export"` + `basePath`.
3. Jalankan build:

   ```bash
   bun run build
   ```

   Hasil export statis akan berada di folder `out/`.
4. Tambahkan file kosong `.nojekyll` agar GitHub Pages tidak memproses folder berprefix underscore:

   ```bash
   touch out/.nojekyll
   ```

5. Deploy folder `out/` ke branch `gh-pages` (mis. dengan `npx gh-pages -d out` atau GitHub Actions).

> **Catatan:** mode ini adalah export statis murni dan **semua navigasi adalah anchor satu halaman** (`#hero`, `#layanan`, dst.), sehingga aman di-hosting di GitHub Pages tanpa routing server.

## ✅ Checklist Go-Live

- [x] **Nomor WhatsApp**: `+62 812-2194-4007` (sudah diperbarui di `src/config/site.ts`).
- [ ] **Ganti angka statistik** (jumlah pekerjaan, jumlah teknisi) dengan angka yang dikonfirmasi pemilik bisnis.
- [ ] Set `NEXT_PUBLIC_SITE_URL` ke URL produksi (metadata/OG canonical).
- [ ] Verifikasi semua **foto** di `public/images` relevan, tajam, dan bebas hak cipta pihak ketiga.
- [ ] Periksa nama bisnis, alamat, area layanan, dan jam operasional sudah benar.
- [ ] Uji semua tombol CTA WhatsApp di perangkat mobile.
- [ ] Uji responsivitas (mobile, tablet, desktop) dan animasi.
- [ ] Jalankan `bun run lint` dan `bun run build` tanpa error.
- [ ] (Opsional) Ganti judul & deskripsi metadata di `src/app/layout.tsx` bila masih default.
- [ ] Pasang Google Business Profile / peta lokasi bila tersedia.

## 📄 Lisensi

**For demo/presentation purposes.** Proyek ini disiapkan sebagai demo & presentasi untuk pemilik Mukundo Teknologi Indonesia. Seluruh hak cipta konten bisnis, logo, dan foto milik Mukundo Teknologi Indonesia kecuali dinyatakan lain.
