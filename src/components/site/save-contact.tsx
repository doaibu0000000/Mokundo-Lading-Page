"use client";

import { ContactRound } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Menyusun file vCard (.vcf) berisi kontak workshop — dibuat di sisi pengunjung. */
function buildVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${site.name}`,
    `ORG:${site.name}`,
    `TEL;TYPE=CELL,VOICE:+${site.whatsappNumber}`,
    `EMAIL:${site.email}`,
    "ADR;TYPE=WORK:;;Jl. Raya Kalijati Timur No.17, Dawuan;Kalijati, Subang;Jawa Barat;;Indonesia",
    `URL:${site.url}`,
    `NOTE:${site.hours}. Jasa perbaikan serba ada.`,
    "END:VCARD",
  ];
  return lines.join("\r\n");
}

/**
 * Tombol "Simpan Kontak" — satu ketukan menyimpan kontak workshop
 * ke buku telepon HP pengunjung (file .vcf standar, didukung Android & iOS).
 *
 * Disembunyikan di tampilan mobile (permintaan pemilik, Task 17):
 * di Android tombol ini membuat kartu terasa ramai; cukup tombol utama
 * (Petunjuk Arah / Bagikan). Tetap tampil di layar desktop (md+).
 */
export function SaveContactButton({ className }: { className?: string }) {
  function download() {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kontak-mukundo-teknologi.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
  }

  return (
    <button
      type="button"
      onClick={download}
      className={cn(
        "hidden h-9 items-center gap-1.5 rounded-full border px-4 text-xs font-bold transition-colors md:inline-flex",
        className
      )}
    >
      <ContactRound className="h-3.5 w-3.5" aria-hidden="true" />
      Simpan Kontak
    </button>
  );
}
