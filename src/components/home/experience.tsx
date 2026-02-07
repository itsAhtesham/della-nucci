"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PawPrint,
  TreePalm,
  Car,
  Music,
  Wind,
  Baby,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const iconMap = { PawPrint, TreePalm, Car, Music, Wind, Baby };

const amenities = [
  {
    icon: "PawPrint" as const,
    title: "Pet Friendly",
    description: "Your furry friends are always welcome at our tables",
    color: "from-sage-100/80 to-sage-200/40",
    iconColor: "text-sage-500",
  },
  {
    icon: "TreePalm" as const,
    title: "Al Fresco Dining",
    description: "Breathe fresh air while you dine under open skies",
    color: "from-sage-100/60 to-cream-200/60",
    iconColor: "text-sage-400",
  },
  {
    icon: "Car" as const,
    title: "Drive-Through",
    description: "Grab your coffee on the go — no wait needed",
    color: "from-peach-100/70 to-cream-200/50",
    iconColor: "text-burgundy-600",
  },
  {
    icon: "Music" as const,
    title: "Karaoke Nights",
    description: "Sing, laugh, and create memories with friends",
    color: "from-burgundy-100/60 to-peach-100/50",
    iconColor: "text-burgundy-700",
  },
  {
    icon: "Wind" as const,
    title: "Air Conditioned",
    description: "Cool, comfortable interiors for every season",
    color: "from-cream-200/70 to-cream-100/50",
    iconColor: "text-warm-500",
  },
  {
    icon: "Baby" as const,
    title: "Family Friendly",
    description: "A welcoming space for guests of all ages",
    color: "from-peach-50/80 to-cream-100/60",
    iconColor: "text-peach-300",
  },
];

export function HomeExperience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative overflow-hidden">
      {/* Full-width dark band */}
      <div className="bg-burgundy-950 py-24 sm:py-32 lg:py-40 relative">
        {/* Atmospheric gradients */}
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
            {amenities.map((amenity, i) => {
              const Icon = iconMap[amenity.icon];
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-sm p-7 sm:p-8 hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-500">
                    {/* Icon */}
                    <div className={`inline-flex w-12 h-12 rounded-full items-center justify-center bg-gradient-to-br ${amenity.color} mb-5 group-hover:scale-105 transition-transform duration-400`}>
                      <Icon className={`w-5 h-5 ${amenity.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-peach-200 transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
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
