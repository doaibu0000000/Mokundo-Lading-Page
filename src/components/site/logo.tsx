import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

type LogoProps = {
  className?: string;
  idPrefix?: string;
  onlyMark?: boolean;
};

export function Logo({ className, onlyMark = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo.png"
        alt={`Logo ${site.name}`}
        width={40}
        height={34}
        className="h-8 w-auto shrink-0 object-contain sm:h-9"
        priority
      />
      {!onlyMark && (
        <span className="flex flex-col leading-none">
          <span className="text-[17px] font-extrabold tracking-tight">
            Mukundo
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
            Teknologi Indonesia
          </span>
        </span>
      )}
    </span>
  );
}
