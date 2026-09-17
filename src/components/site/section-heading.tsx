import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em]",
          isDark
            ? "border-orange-400/25 bg-orange-500/10 text-orange-400"
            : "border-orange-200 bg-orange-50 text-orange-700"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-balance",
          isDark ? "text-white" : "text-stone-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            isDark ? "text-stone-400" : "text-stone-500"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
