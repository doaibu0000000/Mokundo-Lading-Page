import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  titleAccent,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        {align === "center" && (
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-8 shrink-0 bg-gradient-to-r from-transparent to-orange-500/70",
              dark && "to-orange-400/70"
            )}
          />
        )}
        <p
          className={cn(
            "text-xs font-black uppercase tracking-[0.22em]",
            dark ? "text-orange-400" : "text-orange-600"
          )}
        >
          {kicker}
        </p>
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-8 shrink-0 bg-gradient-to-l from-transparent to-orange-500/70",
            dark && "to-orange-400/70"
          )}
        />
      </div>
      <h2
        className={cn(
          "mt-3 text-balance text-3xl font-black tracking-tight md:text-4xl",
          dark ? "text-white" : "text-slate-950 dark:text-white"
        )}
      >
        {title}{" "}
        {titleAccent && (
          <span className={dark ? "text-orange-400" : "text-orange-600 dark:text-orange-400"}>{titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed md:text-lg",
            dark ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
