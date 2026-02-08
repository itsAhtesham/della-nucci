"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";

export function HomeCTA() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-peach-50">
      {/* Decorative corner flourish */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-burgundy-900/10 pointer-events-none hidden lg:block" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235B1A1A' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3zm0-18V0h20v2H20v2l-2-3 2-3z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-burgundy-800/60 text-[11px] sm:text-xs font-medium uppercase tracking-[0.35em] font-accent">
                  We&apos;d Love to See You
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-burgundy-900 font-bold leading-[1.05] mb-5">
                Your Table is{" "}
                <span className="font-accent italic font-normal text-burgundy-700">Waiting</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              {/* Decorative divider */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-burgundy-900/20 to-transparent" />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-burgundy-900/25">
                  <path d="M6 0C6 3.314 3.314 6 0 6C3.314 6 6 8.686 6 12C6 8.686 8.686 6 12 6C8.686 6 6 3.314 6 0Z" fill="currentColor" />
                </svg>
                <div className="w-16 h-px bg-gradient-to-l from-burgundy-900/20 to-transparent" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-warm-500 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed font-accent tracking-wide">
                Walk in, drive through, or order ahead. However you visit, we promise
                bold flavours and the warmest welcome.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/menu"
                  className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-burgundy-900 text-white font-medium text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-burgundy-800 hover:shadow-[0_10px_40px_rgba(91,26,26,0.25)]"
                >
                  View Our Menu
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2.5 px-10 sm:px-12 py-4 sm:py-5 border border-burgundy-900/20 text-burgundy-900 font-medium text-[13px] tracking-[0.2em] uppercase hover:bg-burgundy-900/[0.04] hover:border-burgundy-900/35 transition-all duration-500"
                >
                  <Phone className="w-4 h-4" />
                  Call to Order
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              {/* Image frame */}
              <div className="relative rounded-sm overflow-hidden shadow-[0_25px_60px_-12px_rgba(91,26,26,0.2)]">
                <Image
                  src="/images/gallery/ambiance/table-waiting.jpg"
                  alt="Cafe Della Nucci interior ambiance"
                  width={640}
                  height={480}
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/20 via-transparent to-transparent" />
              </div>

              {/* Overlapping hours badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white rounded-sm shadow-[0_10px_40px_-10px_rgba(91,26,26,0.15)] px-6 py-4 border border-burgundy-900/[0.06]">
                <p className="font-serif text-lg font-bold text-burgundy-900 tracking-tight">DN</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-500 font-accent mt-0.5">
                  {SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Info strip */}
        <FadeIn delay={0.4}>
          <div className="mt-20 pt-8 border-t border-burgundy-900/[0.06]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
              <div className="flex items-center justify-center gap-2.5 text-warm-500 text-sm font-accent tracking-wider sm:border-r sm:border-burgundy-900/[0.06]">
                <Clock className="w-4 h-4 text-burgundy-900/40 shrink-0" />
                <span>{SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 text-warm-500 text-sm font-accent tracking-wider sm:border-r sm:border-burgundy-900/[0.06]">
                <MapPin className="w-4 h-4 text-burgundy-900/40 shrink-0" />
                <span>Sector 104, Noida</span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2.5 text-warm-500 text-sm font-accent tracking-wider hover:text-burgundy-900/70 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-burgundy-900/40 shrink-0" />
                <span>+91 {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
