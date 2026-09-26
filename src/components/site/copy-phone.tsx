"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Tombol salin nomor WhatsApp/telepon ke clipboard — untuk pengunjung
 * yang ingin menyimpan atau membagikan nomor tanpa membuka chat dulu.
 * Memakai Clipboard API dengan fallback execCommand (browser lama).
 */
export function CopyPhoneButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const value = `+${site.whatsappNumber}`;

    const legacyCopy = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch {
        return false;
      }
    };

    let ok = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        ok = true;
      } catch {
        ok = false;
      }
    }
    if (!ok) ok = legacyCopy();

    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      aria-label={
        copied
          ? `Nomor ${site.phoneDisplay} tersalin`
          : `Salin nomor ${site.phoneDisplay}`
      }
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-xs font-bold transition-colors",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#1faa53]" aria-hidden="true" />
          Tersalin!
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          Salin Nomor
        </>
      )}
    </button>
  );
}
