"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  MapPin,
  MessageSquareText,
  Send,
  ShieldCheck,
  Timer,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { coverageAreas, services, waLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppIcon } from "./whatsapp-icon";

const OTHER_SERVICE = "Lainnya";
const OTHER_AREA = "Di luar daftar";

/**
 * Formulir pesan cepat: pengguna isi 4 kolom singkat,
 * tombol kirim membuka WhatsApp dengan pesan yang sudah tersusun rapi.
 * Tanpa backend, tanpa data tersimpan — murni deep link WhatsApp.
 */
type SubmitFeedback = { type: "ok" | "blocked"; url: string };

export function QuoteForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [area, setArea] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ name?: string; service?: string }>({});
  const [feedback, setFeedback] = useState<SubmitFeedback | null>(null);
  const reduce = useReducedMotion();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: { name?: string; service?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Mohon isi nama Anda.";
    if (!service) nextErrors.service = "Pilih jenis layanan dulu, ya.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      "Halo Mukundo Teknologi, saya ingin pesan jasa:",
      `• Nama: ${name.trim()}`,
      `• Layanan: ${service}`,
      `• Wilayah: ${area || "-"}`,
    ];
    if (notes.trim()) lines.push(`• Catatan: ${notes.trim()}`);

    const url = waLink(lines.join("\n"));
    // window.open mengembalikan null bila pop-up diblokir browser —
    // tampilkan fallback manual agar pengunjung tetap punya jalur chat.
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setFeedback({ type: opened ? "ok" : "blocked", url });
  }

  return (
    <section
      id="pesan"
      className="relative scroll-mt-24 overflow-hidden bg-[#f6f8fb] py-16 md:py-24 dark:bg-slate-900"
      aria-label="Formulir pesan cepat"
    >
      {/* Dekorasi latar lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Kolom penjelasan */}
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeading
            align="left"
            kicker="Pesan Cepat"
            title="Isi 30 Detik,"
            titleAccent="Kami yang Menghubungi"
            subtitle="Ceritakan kebutuhan Anda lewat formulir singkat ini — pesan langsung tersusun rapi di WhatsApp kami, tanpa aplikasi tambahan."
          />

          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Timer,
                text: "Respons cepat — rata-rata di bawah 30 menit pada jam kerja.",
              },
              {
                icon: ShieldCheck,
                text: "Estimasi biaya jelas sebelum pengerjaan. Tanpa biaya tersembunyi.",
              },
              {
                icon: MessageSquareText,
                text: "Tidak perlu buat akun atau isi data panjang — langsung chat WhatsApp.",
              },
            ].map((point) => (
              <li key={point.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400">
                  <point.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-slate-700 md:text-base dark:text-slate-300">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Kartu "Terkirim langsung ke" dihapus (permintaan pemilik, Task 17):
              nomor sudah cukup tampil di footer & tombol melayang —
              kolom penjelasan form kini lebih ramping & profesional. */}
        </Reveal>

        {/* Kartu formulir */}
        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative overflow-hidden rounded-[1.75rem] border border-slate-900/8 bg-white p-6 shadow-[0_30px_60px_-25px_rgba(2,20,40,0.25)] sm:p-8 dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]"
          >
            {/* Aksen atas gradien */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600"
            />
            {/* Tekstur titik */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(2,20,40,0.05)_1px,transparent_1px)] [background-size:20px_20px]"
            />

            <div className="relative">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <ClipboardList className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
                  Formulir Permintaan Jasa
                </h3>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* Nama */}
                <div className="sm:col-span-1">
                  <Label htmlFor="quote-name" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Nama Anda <span className="text-orange-600 dark:text-orange-400">*</span>
                  </Label>
                  <div className="relative mt-2">
                    <User
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <Input
                      id="quote-name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Contoh: Budi"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "quote-name-error" : undefined}
                      className="h-12 rounded-xl border-slate-200 bg-slate-50/60 pl-10 text-base transition-colors focus-visible:border-orange-500 focus-visible:bg-white focus-visible:ring-orange-500/25 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 dark:focus-visible:bg-slate-900 dark:[color-scheme:dark]"
                    />
                  </div>
                  {errors.name ? (
                    <p id="quote-name-error" role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                {/* Layanan */}
                <div className="sm:col-span-1">
                  <Label htmlFor="quote-service" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Jenis Layanan <span className="text-orange-600 dark:text-orange-400">*</span>
                  </Label>
                  <div className="mt-2">
                    {/* Sengaja uncontrolled: state React hanya cerminan utk validasi & pesan WA */}
                    <Select onValueChange={(v) => {
                      setService(v);
                      setErrors((prev) => ({ ...prev, service: undefined }));
                    }}>
                      <SelectTrigger
                        id="quote-service"
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? "quote-service-error" : undefined}
                        className="h-12 w-full rounded-xl border-slate-200 bg-slate-50/60 text-base data-[size=default]:h-12 transition-colors focus-visible:ring-orange-500/25 aria-invalid:border-red-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 dark:data-[placeholder]:text-slate-500"
                      >
                        <SelectValue placeholder="Pilih layanan…" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72 rounded-xl border-slate-200">
                        {services.map((s) => (
                          <SelectItem key={s.title} value={s.title} className="rounded-lg text-base">
                            {s.title}
                          </SelectItem>
                        ))}
                        <SelectItem value={OTHER_SERVICE} className="rounded-lg font-semibold text-orange-700 text-base">
                          {OTHER_SERVICE}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.service ? (
                    <p id="quote-service-error" role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                      {errors.service}
                    </p>
                  ) : null}
                </div>

                {/* Wilayah */}
                <div className="sm:col-span-2">
                  <Label htmlFor="quote-area" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Wilayah / Lokasi
                  </Label>
                  <div className="relative mt-2">
                    <MapPin
                      className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <Select onValueChange={(v) => {
                      setArea(v);
                    }}>
                      <SelectTrigger
                        id="quote-area"
                        className="h-12 w-full rounded-xl border-slate-200 bg-slate-50/60 pl-10 text-base data-[size=default]:h-12 transition-colors focus-visible:ring-orange-500/25 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 dark:data-[placeholder]:text-slate-500"
                      >
                        <SelectValue placeholder="Pilih wilayah (opsional)…" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72 rounded-xl border-slate-200">
                        {coverageAreas.map((a) => (
                          <SelectItem key={a} value={a} className="rounded-lg text-base">
                            {a}
                          </SelectItem>
                        ))}
                        <SelectItem value={OTHER_AREA} className="rounded-lg font-semibold text-orange-700 text-base">
                          {OTHER_AREA}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Catatan */}
                <div className="sm:col-span-2">
                  <Label htmlFor="quote-notes" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Ceritakan Masalahnya{" "}
                    <span className="font-medium normal-case tracking-normal text-slate-400 dark:text-slate-500">
                      (opsional)
                    </span>
                  </Label>
                  <Textarea
                    id="quote-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: AC ruang tamu tidak dingin sejak kemarin, kira-kira bisa dicek hari ini?"
                    rows={4}
                    className="mt-2 resize-none rounded-xl border-slate-200 bg-slate-50/60 text-base transition-colors focus-visible:border-orange-500 focus-visible:bg-white focus-visible:ring-orange-500/25 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus-visible:bg-slate-900 dark:[color-scheme:dark]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="btn-shine mt-7 h-[54px] w-full rounded-full bg-[#1faa53] text-base font-black text-white shadow-[0_18px_35px_-12px_rgba(31,170,83,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#189a47]"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                Kirim via WhatsApp
              </Button>

              {/* Umpan balik setelah kirim: sukses / pop-up diblokir */}
              <AnimatePresence initial={false}>
                {feedback ? (
                  <motion.div
                    key={feedback.type + feedback.url}
                    role="status"
                    aria-live="polite"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={cn(
                      "mt-4 flex items-start gap-3 rounded-2xl border p-4",
                      feedback.type === "ok"
                        ? "border-[#1faa53]/30 bg-[#1faa53]/[0.08] dark:bg-[#1faa53]/10"
                        : "border-orange-500/40 bg-orange-50 dark:bg-orange-500/10"
                    )}
                  >
                    {feedback.type === "ok" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1faa53]" aria-hidden="true" />
                    ) : (
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                    )}
                    <div className="min-w-0 text-sm">
                      {feedback.type === "ok" ? (
                        <>
                          <p className="font-extrabold text-slate-900 dark:text-white">
                            WhatsApp terbuka di tab baru — menunggu balasan teknisi kami.
                          </p>
                          <a
                            href={feedback.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#157a3a] underline decoration-[#1faa53]/40 underline-offset-2 transition-colors hover:text-[#1faa53] dark:text-[#4ade80] dark:decoration-[#4ade80]/40"
                          >
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                            Tidak terbuka? Buka manual di sini
                          </a>
                        </>
                      ) : (
                        <>
                          <p className="font-extrabold text-slate-900 dark:text-white">
                            Pop-up diblokir browser Anda.
                          </p>
                          <a
                            href={feedback.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1.5 inline-flex h-9 items-center gap-1.5 rounded-full bg-[#1faa53] px-4 text-xs font-bold text-white transition-colors hover:bg-[#189a47]"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5" />
                            Buka WhatsApp manual
                          </a>
                        </>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <p className="mt-3.5 text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Pesan tersusun otomatis & terbuka di WhatsApp Anda — tanpa akun,
                tanpa data tersimpan di situs ini.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
