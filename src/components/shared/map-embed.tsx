"use client";

import { useState, useSyncExternalStore, useCallback } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

type MapEmbedProps = {
  className?: string;
  /** Height class or style; default responsive heights */
  heightClass?: string;
};

/**
 * Client-only Google Maps embed. Renders the iframe only after mount so it is
 * never SSR'd, and keeps a skeleton overlay until the iframe content has fully
 * loaded — preventing the browser's empty-iframe "X" placeholder from showing.
 */
export function MapEmbed({ className, heightClass = "h-72 sm:h-80 lg:h-[450px]" }: MapEmbedProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cn("relative w-full", heightClass, className)}>
      {/* Skeleton stays visible until iframe content actually loads */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-cream-200/60 animate-pulse rounded-xl"
          aria-hidden
        />
      )}

      {mounted && (
        <iframe
          src={SITE_CONFIG.mapEmbedUrl}
          onLoad={handleLoad}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cafe Della Nucci Location"
          className={cn(
            "w-full h-full rounded-xl transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
