"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Tombol kembali ke atas — muncul setelah scroll, hanya di desktop. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      className={cn(
        "fixed bottom-7 left-7 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:text-orange-600 md:flex dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:text-orange-400",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
