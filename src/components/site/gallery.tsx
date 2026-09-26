"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, ChevronUp, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  gallery,
  galleryFilters,
  waLink,
  type GalleryCategory,
  type GalleryItem,
} from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppIcon } from "./whatsapp-icon";
import { cn } from "@/lib/utils";

type Filter = GalleryCategory | "semua";

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("semua");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Mobile (Android/HP): tampilan awal ringkas — 6 sorotan lintas bidang,
  // sisanya dibuka lewat tombol "Lihat semua" agar tidak terasa penuh.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const items = filter === "semua" ? gallery : gallery.filter((g) => g.category === filter);
  const visibleItems = isMobile && !showAll ? items.slice(0, 6) : items;

  const closeLightbox = () => setActiveIndex(null);

  const stepTo = (delta: number) =>
    setActiveIndex((i) => (i === null ? null : (i + delta + items.length) % items.length));

  // Navigasi keyboard: Escape tutup, panah kiri/kanan pindah item
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") stepTo(1);
      if (e.key === "ArrowLeft") stepTo(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, items.length]);

  const changeFilter = (id: Filter) => {
    setActiveIndex(null);
    setFilter(id);
  };

  // Swipe mobile: geser kiri/kanan untuk pindah item
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) stepTo(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section id="galeri" className="scroll-mt-24 bg-white py-16 md:py-24 dark:bg-slate-950" aria-label="Galeri kerja">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Galeri Kerja"
          title="Bukti Nyata,"
          titleAccent="Bukan Kata-Kata"
          subtitle="Dokumentasi lapangan dari semua bidang — AC, listrik, mesin, CCTV, las, sampai renovasi. Apapun pekerjaannya, kami bisa."
        />

        {/* Filter kategori */}
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2" y={12}>
          {(["semua" as Filter, ...galleryFilters.map((f) => f.id)] as Filter[]).map(
            (id, idx) => {
              const label = id === "semua" ? "Semua" : galleryFilters.find((f) => f.id === id)!.label;
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => changeFilter(id)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 md:text-sm",
                    active
                      ? "border-orange-600 bg-orange-600 text-white shadow-[0_10px_25px_-10px_rgba(234,88,12,0.6)]"
                      : "border-slate-900/10 bg-white text-slate-600 hover:border-orange-600/40 hover:text-orange-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-300"
                  )}
                >
                  {label}
                </button>
              );
            }
          )}
        </Reveal>

        {/* Grid masonry */}
        <div
          key={filter}
          className="mt-10 columns-2 gap-3 [column-fill:_balance] md:mt-12 md:columns-3 md:gap-4 lg:columns-4"
        >
          {visibleItems.map((item, index) => {
            const isVideo = item.type === "video";
            return (
              <figure
                key={isVideo ? `video-${item.src}` : item.src.src}
                className={cn(
                  "group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl shadow-sm ring-1 ring-transparent transition-all duration-300 hover:shadow-lg md:mb-4",
                  isVideo ? "bg-slate-950" : "hover:ring-orange-500/40 dark:hover:ring-orange-500/30"
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block w-full cursor-zoom-in"
                  aria-label={isVideo ? `Putar video: ${item.caption}` : `Perbesar foto: ${item.caption}`}
                >
                  {isVideo ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      playsInline
                      muted
                      loop
                      preload="metadata"
                      tabIndex={-1}
                      className="aspect-[9/16] w-full object-cover transition-opacity group-hover:opacity-90"
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.src.width}
                      height={item.src.height}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}

                  {/* Badge VIDEO */}
                  {isVideo && (
                    <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur">
                      <Play className="h-3 w-3" aria-hidden="true" />
                      Video
                    </span>
                  )}

                  {/* Caption: selalu tampil di mobile, muncul saat hover di desktop */}
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-bold text-white opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {item.caption}
                  </span>
                  <span className="absolute right-2.5 top-2.5 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100 md:flex dark:bg-slate-900/90 dark:text-white">
                    {isVideo ? (
                      <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Camera className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </figure>
            );
          })}
        </div>

        {/* Mobile: tombol buka/tutup koleksi — semua foto tetap bisa dilihat */}
        {isMobile && (items.length > 6 || showAll) && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-orange-600/40 bg-orange-600/10 px-6 text-sm font-bold text-orange-700 transition-all duration-200 active:scale-95 hover:border-orange-600 hover:bg-orange-600 hover:text-white dark:border-orange-500/40 dark:bg-orange-500/10 dark:text-orange-300 dark:hover:bg-orange-500 dark:hover:text-white"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  Tampilkan lebih sedikit
                </>
              ) : (
                <>
                  <Camera className="h-4 w-4" aria-hidden="true" />
                  Lihat semua dokumentasi
                </>
              )}
            </button>
          </div>
        )}

        {/* Kalimat penutup galeri */}
        <p className="mx-auto mt-6 max-w-xl text-balance text-center text-sm font-medium leading-relaxed text-slate-500 md:mt-10 md:text-base dark:text-slate-400">
          Yang terlihat di sini hanya sebagian kecil. Selebihnya, biarlah pengalaman dan kepercayaan pelanggan yang berbicara.
        </p>
      </div>

      {/* Lightbox: foto + video dengan navigasi, keyboard, dan swipe */}
      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          aria-describedby={undefined}
          className="max-w-3xl border-none bg-transparent p-0 shadow-none backdrop-blur-sm [&>button]:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <DialogTitle className="sr-only">
            {activeIndex !== null && items[activeIndex]?.type === "video"
              ? "Video pekerjaan"
              : "Foto pekerjaan"}
          </DialogTitle>
          {activeIndex !== null && items[activeIndex] && (
            <div className="relative">
              {items[activeIndex].type === "video" ? (
                <video
                  key={items[activeIndex].src}
                  src={items[activeIndex].src}
                  poster={items[activeIndex].poster}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-[66vh] w-full rounded-t-2xl bg-black object-contain md:max-h-[70vh]"
                />
              ) : (
                <Image
                  key={items[activeIndex].src.src}
                  src={items[activeIndex].src}
                  alt={items[activeIndex].alt}
                  width={items[activeIndex].src.width}
                  height={items[activeIndex].src.height}
                  sizes="(max-width: 768px) 90vw, 768px"
                  className="max-h-[66vh] w-full rounded-t-2xl object-contain md:max-h-[70vh]"
                  priority
                />
              )}

              {/* Bar bawah lightbox: caption + counter + CTA WhatsApp — kini di LUAR media
                  sehingga kontrol video bawaan tidak pernah tertimpa (hapus hack pointer-events) */}
              <div className="rounded-b-2xl bg-slate-950/95 px-4 py-3.5 backdrop-blur-sm md:px-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center justify-between gap-3 sm:contents">
                    <p className="min-w-0 truncate text-sm font-bold text-white md:text-base">
                      {items[activeIndex].caption}
                    </p>
                    <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-black tabular-nums text-white backdrop-blur">
                      {(activeIndex ?? 0) + 1} / {items.length}
                    </span>
                  </div>
                  <a
                    href={waLink(
                      `Halo Mukundo Teknologi, saya lihat dokumentasi "${items[activeIndex].caption}" di galeri website Anda. Saya butuh bantuan untuk kebutuhan serupa. Bisa dibantu?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1faa53] px-5 text-xs font-black text-white shadow-[0_10px_25px_-8px_rgba(31,170,83,0.65)] transition-all duration-200 hover:bg-[#1faa53]/90 hover:shadow-[0_14px_30px_-8px_rgba(31,170,83,0.8)] focus-visible:ring-2 focus-visible:ring-[#1faa53]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95 md:text-sm"
                    aria-label={`Tanya pekerjaan ini via WhatsApp: ${items[activeIndex].caption}`}
                  >
                    <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                    Tanya pekerjaan ini
                  </a>
                </div>
              </div>

              {/* Tombol sebelumnya / berikutnya */}
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepTo(-1)}
                    aria-label="Sebelumnya"
                    className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-white dark:bg-slate-800/95 dark:text-white dark:hover:bg-slate-700"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepTo(1)}
                    aria-label="Berikutnya"
                    className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-white dark:bg-slate-800/95 dark:text-white dark:hover:bg-slate-700"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Tutup"
                className="absolute -top-2 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform hover:scale-105 md:-right-2 md:-top-2 dark:bg-slate-800 dark:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
