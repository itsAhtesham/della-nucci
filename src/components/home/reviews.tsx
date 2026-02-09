"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { GoogleIcon } from "@/components/icons/google-icon";
import { ZomatoIcon } from "@/components/icons/zomato-icon";
import { REVIEWS, PLATFORM_RATINGS } from "@/data/reviews";
import type { ReviewSource } from "@/types";

const ease = [0.16, 1, 0.3, 1] as const;

function SourceBadge({ source }: { source: ReviewSource }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full shadow-sm border border-burgundy-900/[0.06] text-[10px] font-medium tracking-wide uppercase">
      {source === "google" ? (
        <>
          <GoogleIcon className="w-3.5 h-3.5" />
          <span className="text-warm-500">Google</span>
        </>
      ) : (
        <>
          <ZomatoIcon className="w-3.5 h-3.5 rounded-sm" />
          <span className="text-warm-500">Zomato</span>
        </>
      )}
    </span>
  );
}

function Stars({ count, size = "sm" }: { count: number; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < count
              ? "fill-gold-400 text-gold-400"
              : "fill-warm-200 text-warm-200"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewNavigation({
  current,
  total,
  onPrev,
  onNext,
  onSelect,
  className,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className || ""}`}>
      <button
        onClick={onPrev}
        className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-burgundy-900/10 flex items-center justify-center text-burgundy-900 hover:bg-burgundy-900 hover:border-burgundy-900 hover:text-white transition-all duration-300"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
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
        onClick={onNext}
        className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-burgundy-900/10 flex items-center justify-center text-burgundy-900 hover:bg-burgundy-900 hover:border-burgundy-900 hover:text-white transition-all duration-300"
        aria-label="Next review"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function HomeReviews() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % REVIEWS.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const review = REVIEWS[current];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-50 relative overflow-hidden">
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
                Hear what our guests say across Google &amp; Zomato
              </p>
            </FadeIn>

            {/* Platform ratings */}
            <FadeIn delay={0.2}>
              <div className="space-y-3 mb-8">
                {PLATFORM_RATINGS.map((platform) => (
                  <a
                    key={platform.source}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-5 py-3.5 bg-white rounded-sm shadow-soft border border-burgundy-900/[0.04] hover:shadow-elevated transition-shadow duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      {platform.source === "google" ? (
                        <GoogleIcon className="w-6 h-6" />
                      ) : (
                        <ZomatoIcon className="w-6 h-6 rounded-sm" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-serif text-xl font-bold text-burgundy-900 leading-none">
                          {platform.rating}
                        </p>
                        <Stars count={Math.round(platform.rating)} size="sm" />
                      </div>
                      <p className="text-[10px] text-warm-400 font-accent tracking-wider uppercase">
                        {platform.reviewCount}+ reviews on{" "}
                        {platform.source === "google" ? "Google" : "Zomato"}
                      </p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-warm-300 group-hover:text-burgundy-600 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Navigation — desktop only */}
            <FadeIn delay={0.25} className="hidden lg:block">
              <ReviewNavigation
                current={current}
                total={REVIEWS.length}
                onPrev={prev}
                onNext={next}
                onSelect={setCurrent}
              />
            </FadeIn>
          </div>

          {/* Right — Review card */}
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute -top-4 -left-2 lg:-top-6 lg:-left-6 z-10">
                <svg width="48" height="40" viewBox="0 0 48 40" fill="none" className="text-burgundy-900/8">
                  <path d="M0 40V24C0 10.4 8.32 2.4 20.56 0L22.24 4.48C15.68 6.88 11.76 12.32 11.2 19.2H20.56V40H0ZM26.4 40V24C26.4 10.4 34.72 2.4 46.96 0L48.64 4.48C42.08 6.88 38.16 12.32 37.6 19.2H46.96V40H26.4Z" fill="currentColor" />
                </svg>
              </div>

              <div className="bg-white rounded-sm shadow-soft border border-burgundy-900/[0.04] p-8 sm:p-10 lg:p-14 min-h-[280px] flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-peach-50/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cream-100/30 to-transparent" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease }}
                    className="w-full relative"
                  >
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <Stars count={review.rating} size="md" />
                      <SourceBadge source={review.source} />
                    </div>

                    <p className="font-accent text-lg sm:text-xl lg:text-2xl text-warm-700 leading-[1.7] mb-8 sm:mb-10 italic tracking-wide">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-burgundy-900/8 flex items-center justify-center">
                        <span className="font-serif text-burgundy-900 text-sm font-bold">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-serif font-bold text-burgundy-900 text-base tracking-wide">
                          {review.name}
                        </p>
                        <p className="text-xs text-warm-400 font-accent tracking-wider">
                          {review.date} ·{" "}
                          {review.source === "google" ? "Google Review" : "Zomato Review"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile navigation */}
            <ReviewNavigation
              current={current}
              total={REVIEWS.length}
              onPrev={prev}
              onNext={next}
              onSelect={setCurrent}
              className="justify-center mt-8 lg:hidden"
            />

            {/* See all reviews links */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                {PLATFORM_RATINGS.map((platform) => (
                  <a
                    key={platform.source}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-accent tracking-wide text-burgundy-800/70 hover:text-burgundy-900 transition-colors duration-300 group"
                  >
                    {platform.source === "google" ? (
                      <GoogleIcon className="w-4 h-4" />
                    ) : (
                      <ZomatoIcon className="w-4 h-4 rounded-sm" />
                    )}
                    <span className="link-underline">
                      See all {platform.reviewCount}+ reviews on{" "}
                      {platform.source === "google" ? "Google" : "Zomato"}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
