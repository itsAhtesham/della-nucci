"use client";

import { FadeIn } from "@/components/animations/fade-in";

export function AboutStory() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <FadeIn direction="left" className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-elevated">
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "url('/images/about/story-bg.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-burgundy-900/10 flex items-center justify-center">
                      <span className="font-serif text-burgundy-900/40 text-3xl">DN</span>
                    </div>
                    <p className="text-warm-400 text-sm italic">Our Humble Beginnings</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-burgundy-900/10" />
            </div>
          </FadeIn>

          {/* Text Side */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-burgundy-800 mb-3">
                How It Started
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 mb-6 leading-tight">
                From a Dream to
                <br />
                <span className="text-burgundy-600 italic">Your Table</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-warm-600 text-lg leading-relaxed mb-6">
                Cafe Della Nucci was born from a simple yet powerful idea — to bring the
                warmth of Italian hospitality and the richness of continental flavours to
                the heart of Noida. What started as a dream over espresso shots turned
                into a labour of love that we proudly share with you every single day.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-warm-500 leading-relaxed mb-6">
                Nestled in Sector 104, our cafe is more than just a place to eat — it&apos;s a
                sanctuary for food lovers, coffee enthusiasts, and anyone seeking a moment
                of peace in their busy day. Every recipe has been perfected over countless
                iterations, every ingredient sourced with care, and every corner of our
                space designed to make you feel at home.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-warm-500 leading-relaxed">
                The name &quot;Della Nucci&quot; is an ode to Italian heritage — meaning &quot;of the
                walnut tree,&quot; symbolising strength, wisdom, and deep roots. Just like a
                walnut tree that grows tall and provides shade, we aim to be a place of
                comfort and nourishment for our community.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
