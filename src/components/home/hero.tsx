"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #2a0a0c 0%, #3d1012 15%, #5B1A1A 40%, #4a1516 65%, #2a0a0c 100%)",
          }}
        />
        {/* Warm atmospheric pools of light */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 800px 600px at 25% 20%, rgba(248,221,211,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 600px 500px at 75% 70%, rgba(201,168,76,0.05) 0%, transparent 70%),
              radial-gradient(ellipse 500px 400px at 50% 50%, rgba(138,154,126,0.03) 0%, transparent 70%)
            `,
          }}
        />
        {/* Cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(20,5,6,0.5) 100%)",
          }}
        />
        {/* Film grain */}
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* ── Decorative vertical lines ── */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-white/[0.04]" />
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/[0.03]" />
        <div className="absolute top-0 bottom-0 left-[80%] w-px bg-white/[0.04]" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: "var(--header-height, 5rem)" }}>
        <div className="w-full max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 pb-32 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left Column — Headline */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Cafe label */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-peach-200/80 to-transparent" />
                <span className="text-peach-200 text-[11px] sm:text-xs uppercase tracking-[0.4em] font-accent">
                  Cafe Della Nucci
                </span>
              </motion.div>

              {/* Main headline — enormous editorial typography */}
              <div className="space-y-1 sm:space-y-2">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.2, ease }}
                    className="font-serif text-[2.5rem] min-[375px]:text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-bold text-white leading-[0.9] tracking-[-0.03em]"
                  >
                    Where
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.3, ease }}
                    className="font-serif text-[2.5rem] min-[375px]:text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.9] tracking-[-0.03em]"
                    style={{
                      background: "linear-gradient(135deg, #F8DDD3 0%, #f3c5b3 50%, #d4b978 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    bold flavours
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.4, ease }}
                    className="font-serif text-[2.5rem] min-[375px]:text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-bold text-white leading-[0.9] tracking-[-0.03em]"
                  >
                    meet{" "}
                    <span className="font-accent italic font-light text-peach-200/90">warmth</span>
                  </motion.h1>
                </div>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease }}
                className="mt-8 sm:mt-10 text-white/60 text-base sm:text-lg md:text-xl font-accent max-w-lg leading-relaxed tracking-wide"
              >
                Italian romance & continental soul in the heart of Noida.
                Crafted with passion, served with love.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
                className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/menu"
                  className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-burgundy-900 font-medium text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-700 hover:shadow-[0_10px_40px_rgba(248,221,211,0.2)]"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-burgundy-900">
                    Explore Our Menu
                  </span>
                  <div className="absolute inset-0 bg-peach-200 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border border-white/25 text-white/80 font-medium text-[13px] tracking-[0.2em] uppercase hover:bg-white/[0.05] hover:border-white/40 hover:text-white transition-all duration-500"
                >
                  Our Story
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right Column — Ambient info panel */}
            <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex flex-col items-end justify-center">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease }}
                className="relative"
              >
                {/* Decorative frame */}
                <div className="relative w-[320px] xl:w-[380px]">
                  {/* Outer frame line */}
                  <div className="absolute -inset-4 border border-white/[0.06] rounded-sm" />

                  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] p-10 xl:p-12 rounded-sm">
                    {/* Monogram */}
                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-8 bg-white/[0.02]">
                      <div className="text-center">
                        <span className="text-white/70 font-accent text-[9px] uppercase tracking-[0.4em] block">
                          Cafe
                        </span>
                        <span className="text-white font-serif text-base font-bold leading-none tracking-wider">
                          Della
                          <br />
                          Nucci
                        </span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-center font-accent text-white/50 text-sm italic tracking-wider mb-8 leading-relaxed">
                      &ldquo;{SITE_CONFIG.tagline}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-peach-200/30">
                        <path d="M6 0C6 3.314 3.314 6 0 6C3.314 6 6 8.686 6 12C6 8.686 8.686 6 12 6C8.686 6 6 3.314 6 0Z" fill="currentColor" />
                      </svg>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    {/* Rating */}
                    <div className="text-center">
                      <div className="flex justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                      <p className="text-white font-serif text-2xl font-bold mb-1">{SITE_CONFIG.rating}</p>
                      <p className="text-white/50 text-xs font-accent tracking-wider">
                        {SITE_CONFIG.reviewCount}+ reviews on Google
                      </p>
                    </div>

                    {/* Hours */}
                    <div className="mt-8 pt-8 border-t border-white/[0.06] text-center">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-accent mb-2">
                        Open Daily
                      </p>
                      <p className="text-white/70 text-sm font-accent tracking-wider">
                        {SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile rating badge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 lg:hidden px-6 pb-8"
      >
        <div className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] w-fit">
          <div className="flex text-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span className="text-white/70 text-sm">
            <strong className="text-white">{SITE_CONFIG.rating}</strong>
            <span className="opacity-50 ml-1.5">({SITE_CONFIG.reviewCount}+)</span>
          </span>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 pb-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-accent">
          Discover
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream-100 via-cream-100/50 to-transparent" />
    </section>
  );
}
