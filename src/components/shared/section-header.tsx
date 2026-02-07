"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Ornament } from "@/components/shared/ornament";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("mb-14 lg:mb-20", align === "center" && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "text-xs sm:text-sm font-medium uppercase tracking-[0.3em] mb-4 font-accent",
            light ? "text-peach-200/80" : "text-burgundy-800/70"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.08]",
          light ? "text-white" : "text-burgundy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-[1.1rem] max-w-xl leading-relaxed font-accent tracking-wide",
            align === "center" && "mx-auto",
            light ? "text-white/50" : "text-warm-500"
          )}
        >
          {subtitle}
        </p>
      )}
      <Ornament light={light} className="mt-6" />
    </FadeIn>
  );
}
