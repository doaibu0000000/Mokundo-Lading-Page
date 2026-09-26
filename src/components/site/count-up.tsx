"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const ANIMATABLE_SUFFIXES = new Set(["", "+", "%"]);

/**
 * Menampilkan angka statistik dengan animasi hitung naik saat masuk viewport.
 * Nilai yang tidak bisa dianimasikan (mis. "24/7") dirender apa adanya.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const match = value.match(/^([\d.,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/\./g, "").replace(/,/g, ".")) : null;
  const suffix = match ? match[2] : value;
  const animatable =
    target !== null && Number.isFinite(target) && ANIMATABLE_SUFFIXES.has(suffix);

  useEffect(() => {
    if (!animatable || !inView) return;
    // Reduced motion → duration 0 (langsung nilai akhir tanpa animasi)
    const controls = animate(0, target, {
      duration: reduce ? 0 : 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [animatable, inView, target, reduce]);

  if (!animatable) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {new Intl.NumberFormat("id-ID").format(display)}
      {suffix}
    </span>
  );
}
