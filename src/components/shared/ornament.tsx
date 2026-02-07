"use client";

import { cn } from "@/lib/utils";

interface OrnamentProps {
  className?: string;
  light?: boolean;
}

export function Ornament({ className, light = false }: OrnamentProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span
        className={cn(
          "block h-px w-16 bg-gradient-to-r",
          light ? "from-transparent to-white/30" : "from-transparent to-burgundy-900/25"
        )}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={cn("shrink-0", light ? "text-peach-200" : "text-burgundy-900")}
      >
        <path
          d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
      <span
        className={cn(
          "block h-px w-16 bg-gradient-to-l",
          light ? "from-transparent to-white/30" : "from-transparent to-burgundy-900/25"
        )}
      />
    </div>
  );
}

export function OrnamentDivider({ className, light = false }: OrnamentProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "block h-px flex-1 bg-gradient-to-r",
          light ? "from-transparent to-white/15" : "from-transparent to-burgundy-900/10"
        )}
      />
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "block w-1.5 h-1.5 rounded-full",
            light ? "bg-white/20" : "bg-burgundy-900/15"
          )}
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={cn("shrink-0", light ? "text-white/25" : "text-burgundy-900/20")}
        >
          <path
            d="M8 0C8 4.418 4.418 8 0 8C4.418 8 8 11.582 8 16C8 11.582 11.582 8 16 8C11.582 8 8 4.418 8 0Z"
            fill="currentColor"
          />
        </svg>
        <span
          className={cn(
            "block w-1.5 h-1.5 rounded-full",
            light ? "bg-white/20" : "bg-burgundy-900/15"
          )}
        />
      </div>
      <span
        className={cn(
          "block h-px flex-1 bg-gradient-to-l",
          light ? "from-transparent to-white/15" : "from-transparent to-burgundy-900/10"
        )}
      />
    </div>
  );
}
