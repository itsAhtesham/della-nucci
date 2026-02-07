"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "The ambiance is absolutely stunning! Perfect for a date night. The Margherita pizza was authentic Italian and the coffee is some of the best in Noida. Will definitely come back!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "Such a cozy and beautiful place! The interiors are Instagram-worthy. Had the Alfredo pasta and molten lava cake — both were incredible. Service was warm and friendly.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Anisha Kapoor",
    text: "Finally, a cafe in Sector 104 that gets it right! The drive-through is super convenient. Their Caramel Latte is my new addiction. Pet-friendly too — my dog loved it!",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Vikram Singh",
    text: "Brought my family here for a Sunday brunch. The kids loved the waffles, my wife enjoyed the tiramisu, and I had the best espresso. Great value for the quality!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Neha Gupta",
    text: "The Quattro Formaggi pizza is to die for! Beautiful romantic setting with roses and warm lights. The karaoke night was so much fun. Highly recommend for celebrations!",
    date: "2 months ago",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeReviews() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-50 relative overflow-hidden">
      {/* Atmospheric light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-peach-50/40 to-transparent rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Section info */}
          <div className="lg:col-span-4">
            <FadeIn>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-burgundy-800/60 font-accent">
                  Testimonials
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 leading-[1.05] mb-6">
                Loved by{" "}
                <span className="font-accent italic font-normal">Noida</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-warm-500 text-base font-accent tracking-wide leading-relaxed mb-8">
                Rated {SITE_CONFIG.rating} stars from {SITE_CONFIG.reviewCount}+ happy guests on Google
              </p>
            </FadeIn>

            {/* Rating display */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-sm shadow-soft border border-burgundy-900/[0.04]">
                <div>
                  <p className="font-serif text-3xl font-bold text-burgundy-900 leading-none">{SITE_CONFIG.rating}</p>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-[10px] text-warm-400 font-accent tracking-wider uppercase">
                    Google Reviews
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Navigation — desktop only */}
            <FadeIn delay={0.25} className="hidden lg:flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-burgundy-900/10 flex items-center justify-center text-burgundy-900 hover:bg-burgundy-900 hover:border-burgundy-900 hover:text-white transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 rounded-full ${
                      i === current
                        ? "w-8 h-1.5 bg-burgundy-900"
                        : "w-1.5 h-1.5 bg-burgundy-900/15 hover:bg-burgundy-900/30"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-burgundy-900/10 flex items-center justify-center text-burgundy-900 hover:bg-burgundy-900 hover:border-burgundy-900 hover:text-white transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </FadeIn>
          </div>

          {/* Right — Review card */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Large quote SVG */}
              <div className="absolute -top-4 -left-2 lg:-top-6 lg:-left-6 z-10">
                <svg width="48" height="40" viewBox="0 0 48 40" fill="none" className="text-burgundy-900/8">
                  <path d="M0 40V24C0 10.4 8.32 2.4 20.56 0L22.24 4.48C15.68 6.88 11.76 12.32 11.2 19.2H20.56V40H0ZM26.4 40V24C26.4 10.4 34.72 2.4 46.96 0L48.64 4.48C42.08 6.88 38.16 12.32 37.6 19.2H46.96V40H26.4Z" fill="currentColor" />
                </svg>
              </div>

              {/* Review content */}
              <div className="bg-white rounded-sm shadow-soft border border-burgundy-900/[0.04] p-8 sm:p-10 lg:p-14 min-h-[280px] flex items-center relative overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-peach-50/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cream-100/30 to-transparent" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={reviews[current].id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease }}
                    className="w-full relative"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 sm:mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-accent text-lg sm:text-xl lg:text-2xl text-warm-700 leading-[1.7] mb-8 sm:mb-10 italic tracking-wide">
                      &ldquo;{reviews[current].text}&rdquo;
                    </p>

                    {/* Reviewer info */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-burgundy-900/8 flex items-center justify-center">
                        <span className="font-serif text-burgundy-900 text-sm font-bold">
                          {reviews[current].name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-serif font-bold text-burgundy-900 text-base tracking-wide">
                          {reviews[current].name}
                        </p>
                        <p className="text-xs text-warm-400 font-accent tracking-wider">
                          {reviews[current].date} · Google Review
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex items-center justify-center gap-4 mt-8 lg:hidden">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-burgundy-900/10 flex items-center justify-center text-burgundy-900 hover:bg-burgundy-900 hover:text-white transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 rounded-full ${
                      i === current
                        ? "w-8 h-1.5 bg-burgundy-900"
                        : "w-1.5 h-1.5 bg-burgundy-900/15"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-burgundy-900/10 flex items-center justify-center text-burgundy-900 hover:bg-burgundy-900 hover:text-white transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
