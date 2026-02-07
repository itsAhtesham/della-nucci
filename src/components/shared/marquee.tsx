"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  variant?: "light" | "dark";
}

const items = [
  "Artisan Pizzas",
  "Signature Espresso",
  "Fresh Pasta",
  "Karaoke Nights",
  "Pet Friendly",
  "Outdoor Seating",
  "Gourmet Burgers",
  "Italian Desserts",
  "Drive-Through",
  "Live Music",
];

function MarqueeContent({ variant }: { variant: "light" | "dark" }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8 shrink-0">
          <span
            className={cn(
              "font-accent text-lg sm:text-xl tracking-wide whitespace-nowrap",
              variant === "dark"
                ? "text-white/70"
                : "text-burgundy-900/50"
            )}
          >
            {item}
          </span>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            className={cn(
              "shrink-0",
              variant === "dark" ? "text-peach-200/40" : "text-burgundy-900/20"
            )}
          >
            <path
              d="M4 0C4 2.209 2.209 4 0 4C2.209 4 4 5.791 4 8C4 5.791 5.791 4 8 4C5.791 4 4 2.209 4 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </>
  );
}

export function Marquee({ className, variant = "dark" }: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden py-5 sm:py-6",
        variant === "dark"
          ? "bg-burgundy-950"
          : "bg-cream-200/60",
        className
      )}
    >
      {/* Fade edges */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r",
          variant === "dark"
            ? "from-burgundy-950 to-transparent"
            : "from-cream-200/60 to-transparent"
        )}
      />
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l",
          variant === "dark"
            ? "from-burgundy-950 to-transparent"
            : "from-cream-200/60 to-transparent"
        )}
      />

      <div className="flex gap-8 marquee-track">
        <MarqueeContent variant={variant} />
        <MarqueeContent variant={variant} />
      </div>
    </div>
  );
}
