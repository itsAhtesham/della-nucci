"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/shared/ornament";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}

export function PageHero({ label, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden film-grain">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #3d1012 0%, #5B1A1A 35%, #7A2828 55%, #5B1A1A 80%, #3d1012 100%)",
          }}
        />
        {/* Atmospheric light */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 600px 400px at 25% 50%, rgba(248,221,211,0.08) 0%, transparent 100%),
              radial-gradient(ellipse 500px 300px at 75% 30%, rgba(138,154,126,0.06) 0%, transparent 100%),
              radial-gradient(ellipse 800px 600px at 50% 120%, rgba(61,16,18,0.4) 0%, transparent 100%)
            `,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(61,16,18,0.4) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-peach-200/80 text-xs sm:text-sm font-medium uppercase tracking-[0.35em] mb-5 font-accent"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-white font-bold mb-5 leading-[1.05]"
        >
          {title}{" "}
          <span className="italic font-normal text-peach-200">{titleAccent}</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Ornament light className="mb-5" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-base sm:text-lg max-w-md mx-auto font-accent leading-relaxed tracking-wide"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-100 to-transparent" />
    </section>
  );
}
