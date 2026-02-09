"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "@/components/animations/fade-in";
import { AMENITIES } from "@/data/amenities";

export function HomeExperience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative overflow-hidden">
      <div className="bg-burgundy-950 py-24 sm:py-32 lg:py-40 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 600px 400px at 15% 50%, rgba(91,26,26,0.4) 0%, transparent 100%),
              radial-gradient(ellipse 500px 350px at 85% 30%, rgba(201,168,76,0.04) 0%, transparent 100%)
            `,
          }}
        />
        <div className="absolute inset-0 film-grain" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-16 lg:mb-20">
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-px bg-gradient-to-r from-peach-200/80 to-transparent" />
                  <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-peach-200/80 font-accent">
                    Why Visit Us
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
                  The Della Nucci{" "}
                  <span className="font-accent italic font-normal text-peach-200">Experience</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <p className="text-white/55 text-base sm:text-lg font-accent tracking-wide leading-relaxed lg:pt-8">
                More than just a cafe — it&apos;s a place where every detail is crafted for your comfort,
                every moment designed to delight, and every visit feels like an escape.
              </p>
            </FadeIn>
          </div>

          {/* Amenity Cards */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {AMENITIES.map((amenity, i) => {
              const Icon = amenity.icon;
              const indexLabel = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] border-l-2 border-l-white/[0.06] rounded-sm p-7 sm:p-8 hover:bg-white/[0.10] hover:border-white/20 hover:border-l-peach-200/40 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-4 right-5 font-serif text-5xl font-bold text-white/[0.04] leading-none pointer-events-none select-none group-hover:text-white/[0.08] transition-colors duration-500">
                      {indexLabel}
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-peach-200/50 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                    <div className={`inline-flex w-12 h-12 rounded-full items-center justify-center bg-gradient-to-br ${amenity.color} mb-5 group-hover:scale-110 transition-transform duration-400`}>
                      <Icon className={`w-5 h-5 ${amenity.iconColor}`} />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-peach-100 transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed opacity-60 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                      {amenity.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
