"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { SITE_STATS } from "@/data/site-stats";

export function AboutStats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #5B1A1A 0%, #7A2828 50%, #5B1A1A 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(248,221,211,0.4) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {SITE_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-peach-200 font-semibold text-sm uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-white/50 text-xs">{stat.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
