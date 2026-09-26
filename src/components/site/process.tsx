"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { steps } from "@/config/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/** Alur pemesanan — garis penghubung tergambar saat masuk viewport + titik berjalan. */
export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  return (
    <section aria-label="Cara pesan" className="bg-white py-16 md:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Cara Pesan"
          title="Semudah"
          titleAccent="Chat Biasa"
        />

        <ol className="relative mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-4 md:gap-4">
          {/* Garis penghubung (desktop) — tergambar saat discroll */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 overflow-visible bg-gradient-to-r from-orange-500/15 via-orange-500/25 to-orange-500/15 md:block"
          >
            {/* Garis aktif yang tumbuh dari kiri */}
            <motion.div
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : undefined}
              transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-orange-500/60 via-orange-500 to-orange-500/60"
            />
            {/* Titik berjalan pelan sepanjang garis */}
            {!reduce && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: [0, 1, 1, 0], left: ["0%", "50%", "100%", "100%"] } : undefined}
                transition={{ duration: 3.2, times: [0, 0.1, 0.9, 1], ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5, delay: 1.6 }}
                className="absolute -top-[5px] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(234,88,12,0.2)]"
              />
            )}
          </div>
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex flex-col items-center text-center">
                <span className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white shadow-[0_14px_28px_-10px_rgba(2,20,40,0.5)] ring-1 ring-white/10 md:rounded-full dark:bg-white dark:text-slate-950">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-[220px] text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
