"use client";

import { FadeIn } from "@/components/animations/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_STATS } from "@/data/site-stats";

export function HomeAbout() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-peach-100/30 to-transparent blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-sage-100/20 to-transparent blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left — Visual composition */}
          <FadeIn direction="left" className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-dramatic">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(145deg, #F8DDD3 0%, #f3c5b3 30%, #ede6da 60%, #F5EFE6 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("/images/about/story-bg.avif")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="w-full">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-sm shadow-soft">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-burgundy-900 flex items-center justify-center">
                          <span className="text-white font-serif text-[7px] font-bold">DN</span>
                        </div>
                        <div>
                          <p className="font-serif text-burgundy-900 font-bold text-sm">Della Nucci</p>
                          <p className="text-warm-400 text-[10px] font-accent tracking-wider">Sector 104, Noida</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-gold-400 text-gold-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                        <span className="text-[11px] text-warm-500 ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 lg:-right-8 w-32 h-32 border border-burgundy-900/10 rounded-sm" />

              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-burgundy-900 text-white p-5 rounded-sm shadow-dramatic z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-peach-200/80 font-accent mb-1">Est.</p>
                <p className="font-serif text-3xl font-bold leading-none">2024</p>
                <p className="text-[10px] text-white/60 font-accent tracking-wider mt-1">Sector 104</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — Story content */}
          <div className="lg:col-span-7 lg:pl-8 xl:pl-16">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-burgundy-800/60 font-accent">
                  Our Story
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-burgundy-900 leading-[1.05] mb-8">
                A Taste of Italy,
                <br />
                <span
                  className="font-accent italic font-normal"
                  style={{
                    background: "linear-gradient(135deg, #5B1A1A, #a33135)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Right in Noida
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5 mb-10">
                <p className="text-warm-600 text-lg leading-[1.8] font-light">
                  Born from a passion for authentic Italian flavours and warm hospitality,
                  Cafe Della Nucci brings the charm of a Roman trattoria to Sector 104.
                  Every dish is crafted with love, every coffee poured with precision, and
                  every visit designed to feel like coming home.
                </p>
                <p className="text-warm-500 leading-[1.8]">
                  From our hand-tossed pizzas to our signature espresso blend, we believe
                  in bold flavours that tell a story. Our cozy interiors — adorned with
                  roses, warm lighting, and lush greenery — create the perfect backdrop for
                  dates, family gatherings, or a quiet afternoon with a great book.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12 mb-10 pb-10 border-b border-burgundy-900/8">
                {HOME_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-900 leading-none mb-1.5">
                      {stat.value}
                    </p>
                    <p className="text-xs text-warm-400 font-accent tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-burgundy-900 font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-400"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
