"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Wrapper animasi halus: fade + slide-up saat elemen masuk viewport.
 *
 * Menggunakan plain <div> + CSS transition + useInView untuk menghindari:
 * - Hydration mismatch: framer-motion serialisasi opacity berbeda server vs client
 * - Flickering: tidak ada DOM node swap (div → motion.div)
 *
 * useInView mengembalikan false di server DAN di client sebelum IO fire →
 * HTML server & client identik → tidak ada hydration error.
 * CSS transition jauh lebih smooth karena dikerjakan GPU compositor.
 * prefers-reduced-motion ditangani via CSS global di globals.css.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : `translateY(${y}px)`,
        transition: [
          `opacity 0.6s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`,
          `transform 0.6s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`,
        ].join(", "),
      }}
    >
      {children}
    </div>
  );
}
