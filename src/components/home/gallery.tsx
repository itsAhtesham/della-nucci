"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { GALLERY_ITEMS } from "@/data/gallery-items";

export function HomeGallery() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-burgundy-800/60 font-accent">
                  Gallery
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 leading-[1.05]">
                A Glimpse{" "}
                <span className="font-accent italic font-normal">Inside</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-warm-500 text-base sm:text-lg max-w-lg font-accent tracking-wide leading-relaxed">
                Warm lighting, lush greenery, and the aroma of fresh coffee — step into our world
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 text-burgundy-900 font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-400 shrink-0"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, i) => {
            const isDark = item.dark || !!item.image;
            return (
              <FadeIn key={item.id} delay={i * 0.08} className={item.span}>
                <div
                  className={`relative w-full ${item.height} rounded-sm overflow-hidden group cursor-pointer`}
                  style={{ background: item.gradient }}
                >
                  {item.image && (
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  )}
                  {item.image && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)",
                      }}
                    />
                  )}

                  <div className={`absolute inset-0 ${isDark ? 'bg-black/0 group-hover:bg-black/20' : 'bg-burgundy-900/0 group-hover:bg-burgundy-900/20'} transition-all duration-600`} />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className={`font-serif text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-burgundy-950'} leading-tight mb-1`}>
                        {item.label}
                      </p>
                      <p className={`text-xs font-accent tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'text-white/60' : 'text-burgundy-900/50'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`absolute top-4 right-4 w-8 h-8 border-t border-r ${isDark ? 'border-white/0 group-hover:border-white/30' : 'border-burgundy-900/0 group-hover:border-burgundy-900/20'} transition-all duration-500`} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
