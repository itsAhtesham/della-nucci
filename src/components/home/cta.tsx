"use client";

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";

export function HomeCTA() {
  return (
    <section className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #2a0a0c 0%, #3d1012 20%, #5B1A1A 50%, #3d1012 80%, #2a0a0c 100%)",
        }}
      />
      {/* Warm light pools */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 600px 400px at 30% 30%, rgba(248,221,211,0.07) 0%, transparent 100%),
            radial-gradient(ellipse 500px 400px at 70% 70%, rgba(201,168,76,0.04) 0%, transparent 100%)
          `,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(20,5,6,0.4) 100%)",
        }}
      />
      <div className="absolute inset-0 film-grain" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 hidden lg:block">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/[0.03]" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-white/[0.03]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-peach-200/50" />
            <p className="text-peach-200/80 text-[11px] sm:text-xs font-medium uppercase tracking-[0.35em] font-accent">
              We&apos;d Love to See You
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-peach-200/50" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-white font-bold leading-[1.05] mb-5">
            Your Table is{" "}
            <span className="font-accent italic font-normal text-peach-200">Waiting</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/15" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-peach-200/50">
              <path d="M6 0C6 3.314 3.314 6 0 6C3.314 6 6 8.686 6 12C6 8.686 8.686 6 12 6C8.686 6 6 3.314 6 0Z" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/15" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-white/55 text-lg sm:text-xl max-w-xl mx-auto mb-14 leading-relaxed font-accent tracking-wide">
            Walk in, drive through, or order ahead. However you visit, we promise
            bold flavours and the warmest welcome.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/menu"
              className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-white text-burgundy-900 font-medium text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-700 hover:shadow-[0_10px_40px_rgba(248,221,211,0.2)]"
            >
              <span className="relative z-10">View Our Menu</span>
              <div className="absolute inset-0 bg-peach-200 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2.5 px-10 sm:px-12 py-4 sm:py-5 border border-white/25 text-white/80 font-medium text-[13px] tracking-[0.2em] uppercase hover:bg-white/[0.05] hover:border-white/40 hover:text-white transition-all duration-500"
            >
              <Phone className="w-4 h-4" />
              Call to Order
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2.5 text-white/45 text-sm font-accent tracking-wider">
              <Clock className="w-4 h-4 text-peach-200/50" />
              <span>{SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
            <div className="flex items-center gap-2.5 text-white/45 text-sm font-accent tracking-wider">
              <MapPin className="w-4 h-4 text-peach-200/50" />
              <span>Sector 104, Noida</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2.5 text-white/45 text-sm font-accent tracking-wider hover:text-white/50 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-peach-200/50" />
              <span>+91 {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
