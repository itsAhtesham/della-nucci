"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const galleryItems = [
  {
    id: 1,
    label: "Cozy Interiors",
    subtitle: "Warm lights & roses",
    gradient: "linear-gradient(145deg, #F8DDD3 0%, #f3c5b3 40%, #ede6da 100%)",
    span: "sm:col-span-2 sm:row-span-2",
    height: "h-64 sm:h-full",
    image: "/images/gallery/ambiance/og-default.avif",
  },
  {
    id: 2,
    label: "Wood-Fired Pizza",
    subtitle: "Hand-tossed daily",
    gradient: "linear-gradient(145deg, #ede6da 0%, #F5EFE6 40%, #f3c5b3 100%)",
    span: "sm:col-span-1 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/food/wood-fired-pizza.webp",
  },
  {
    id: 3,
    label: "Signature Coffee",
    subtitle: "Bean to cup",
    gradient: "linear-gradient(145deg, #e0d4c0 0%, #F5EFE6 50%, #ede6da 100%)",
    span: "sm:col-span-1 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/food/signature-coffee.webp",
  },
  {
    id: 4,
    label: "Romantic Ambiance",
    subtitle: "Perfect for dates",
    gradient: "linear-gradient(135deg, #5B1A1A 0%, #7A2828 40%, #a33135 100%)",
    span: "sm:col-span-2 sm:row-span-1",
    height: "h-48 sm:h-full",
    dark: true,
    image: "/images/gallery/ambiance/romantic.webp",
  },
  {
    id: 5,
    label: "Sweet Endings",
    subtitle: "Italian desserts",
    gradient: "linear-gradient(145deg, #fbeee9 0%, #F8DDD3 40%, #f3c5b3 100%)",
    span: "sm:col-span-2 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/ambiance/sweet-endings.webp",
  },
  {
    id: 6,
    label: "Lush Greenery",
    subtitle: "Nature meets comfort",
    gradient: "linear-gradient(145deg, #e8ede6 0%, #c5d4bf 40%, #e8ede6 100%)",
    span: "sm:col-span-2 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/ambiance/lush-greenery.avif",
  },
];

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
          {galleryItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08} className={item.span}>
              <div
                className={`relative w-full ${item.height} rounded-sm overflow-hidden group cursor-pointer`}
                style={{ background: item.gradient }}
              >
                {/* Image layer — visible when present */}
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
                {/* Gradient overlay for text contrast when image is present */}
                {item.image && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)",
                    }}
                  />
                )}

                {/* Hover overlay */}
                <div className={`absolute inset-0 ${item.dark || item.image ? 'bg-black/0 group-hover:bg-black/20' : 'bg-burgundy-900/0 group-hover:bg-burgundy-900/20'} transition-all duration-600`} />

                {/* Content — bottom aligned */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className={`font-serif text-base sm:text-lg font-bold ${item.dark || item.image ? 'text-white' : 'text-burgundy-950'} leading-tight mb-1`}>
                      {item.label}
                    </p>
                    <p className={`text-xs font-accent tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.dark || item.image ? 'text-white/60' : 'text-burgundy-900/50'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Corner accent on hover */}
                <div className={`absolute top-4 right-4 w-8 h-8 border-t border-r ${item.dark || item.image ? 'border-white/0 group-hover:border-white/30' : 'border-burgundy-900/0 group-hover:border-burgundy-900/20'} transition-all duration-500`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
