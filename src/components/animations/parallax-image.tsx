"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
  children?: React.ReactNode;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  overlay = true,
  overlayColor = "rgba(91, 26, 26, 0.6)",
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      {overlay && (
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      {children && (
        <div className="relative z-[2]">{children}</div>
      )}
    </div>
  );
}
