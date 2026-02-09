"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  className?: string;
  /** Height class or style; default responsive heights */
  heightClass?: string;
};

/**
 * Client-only Google Maps embed. Renders the iframe only after mount so it is
 * never SSR'd — fixes maps not showing on first render / hydration issues.
 */
export function MapEmbed({ className, heightClass = "h-72 sm:h-80 lg:h-[450px]" }: MapEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn("w-full bg-cream-200/60 animate-pulse rounded-xl", heightClass, className)}
        aria-hidden
      />
    );
  }

  return (
    <iframe
      src={SITE_CONFIG.mapEmbedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Cafe Della Nucci Location"
      className={cn("w-full rounded-xl", heightClass, className)}
    />
  );
}
