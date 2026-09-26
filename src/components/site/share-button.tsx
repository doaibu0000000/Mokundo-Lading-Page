"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Tombol "Bagikan" — memakai Web Share API bila tersedia (Android/iOS),
 * fallback: salin tautan halaman ke clipboard dengan feedback "Tersalin!".
 * Bukan AI — hanya berbagi tautan situs.
 */
export function ShareButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const data = {
      title: `${site.name} — ${site.tagline}`,
      text: `${site.name}: jasa perbaikan & instalasi serba ada, buka 24 jam.`,
      url: window.location.href,
    };

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(data);
        return;
      } catch {
        // Pengguna membatalkan share sheet — bukan galat, cukup berhenti.
        return;
      }
    }

    // Fallback: salin tautan
    let ok = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(data.url);
        ok = true;
      } catch {
        ok = false;
      }
    }
    if (!ok) {
      try {
        const ta = document.createElement("textarea");
        ta.value = data.url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }

    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      aria-live="polite"
      aria-label={
        copied ? "Tautan halaman tersalin" : `Bagikan situs ${site.name}`
      }
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-xs font-bold transition-colors",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#1faa53]" aria-hidden="true" />
          Tautan Tersalin!
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
          Bagikan
        </>
      )}
    </button>
  );
}
