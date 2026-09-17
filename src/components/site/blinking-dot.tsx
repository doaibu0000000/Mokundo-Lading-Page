export function BlinkingDot() {
  return (
    <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
      {/* Ping ring halus standar Tailwind / Vercel */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      {/* Titik hijau inti presisi tanpa lingkaran gelap di belakang */}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
    </span>
  );
}
