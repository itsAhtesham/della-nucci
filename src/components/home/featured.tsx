"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featuredItems } from "@/data/menu";
import { formatCurrency } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";

const categoryIcons: Record<string, string> = {
  pizza: "Pizza",
  pasta: "Pasta",
  coffee: "Coffee",
  desserts: "Dolci",
  burgers: "Burger",
  beverages: "Drinks",
};

const categoryEmojis: Record<string, string> = {
  pizza: "🍕",
  pasta: "🍝",
  coffee: "☕",
  desserts: "🍰",
  burgers: "🍔",
  beverages: "🥤",
};

export function HomeFeatured() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-50 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235B1A1A' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3zm0-18V0h20v2H20v2l-2-3 2-3z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-burgundy-800/60 font-accent">
                  Signature Dishes
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 leading-[1.05]">
                Taste Our{" "}
                <span className="font-accent italic font-normal">Bestsellers</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-warm-500 text-base sm:text-lg max-w-lg font-accent tracking-wide leading-relaxed">
                Hand-picked favourites loved by our guests — from wood-fired pizzas to signature espresso
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-burgundy-900 text-white font-medium text-[13px] tracking-[0.15em] uppercase hover:bg-burgundy-800 transition-all duration-400 shadow-[0_4px_20px_rgba(91,26,26,0.25)] hover:shadow-[0_8px_30px_rgba(91,26,26,0.35)] shrink-0"
            >
              Full Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>

        {/* Menu Items Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {featuredItems.slice(0, 6).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="relative bg-white border border-burgundy-900/[0.06] rounded-sm overflow-hidden h-full flex flex-col transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(91,26,26,0.15)] border-l-2 border-l-transparent hover:border-l-burgundy-900">
                {/* Decorative category emoji watermark */}
                <div className="absolute top-4 right-4 text-6xl opacity-[0.06] pointer-events-none select-none leading-none">
                  {categoryEmojis[item.category] || "✨"}
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-3 right-3 w-7 h-7 border-t border-r border-burgundy-900/0 group-hover:border-burgundy-900/20 transition-all duration-500" />

                <div className="p-7 sm:p-8 lg:p-9 h-full flex flex-col relative">
                  {/* Top row — category + dietary */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-burgundy-800/60 font-accent font-medium">
                      {categoryIcons[item.category] || item.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {item.tags.includes("best-seller") && (
                        <span className="px-2.5 py-1 bg-burgundy-900/8 text-burgundy-900 text-[9px] font-medium uppercase tracking-wider rounded-full">
                          Bestseller
                        </span>
                      )}
                      {item.tags.includes("chef-special") && (
                        <span className="px-2.5 py-1 bg-sage-100 text-sage-500 text-[9px] font-medium uppercase tracking-wider rounded-full">
                          Chef&apos;s Pick
                        </span>
                      )}
                      {item.tags.includes("new") && (
                        <span className="px-2.5 py-1 bg-peach-100 text-burgundy-800 text-[9px] font-medium uppercase tracking-wider rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Name + description */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-[1.35rem] font-bold text-burgundy-900 mb-2.5 group-hover:text-burgundy-700 transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-warm-500 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom row — price + veg indicator */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-burgundy-900/[0.05]">
                    <span className="font-serif text-xl font-bold text-burgundy-900 bg-burgundy-900/[0.04] px-3 py-1 rounded-full">
                      {formatCurrency(item.price)}
                    </span>
                    <div className="flex items-center gap-2">
                      {item.tags.includes("spicy") && (
                        <span className="text-[10px] text-warm-400 font-accent tracking-wider">Spicy</span>
                      )}
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center ${
                            item.tags.includes("vegetarian") || item.tags.includes("vegan")
                              ? "border-green-600"
                              : "border-red-600"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.tags.includes("vegetarian") || item.tags.includes("vegan")
                                ? "bg-green-600"
                                : "bg-red-600"
                            }`}
                          />
                        </div>
                        <span className={`text-[9px] uppercase tracking-wider font-medium ${
                          item.tags.includes("vegetarian") || item.tags.includes("vegan")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}>
                          {item.tags.includes("vegan") ? "Vegan" : item.tags.includes("vegetarian") ? "Veg" : "Non-Veg"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <FadeIn className="mt-10 text-center lg:hidden">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-burgundy-900 text-white font-medium text-[13px] tracking-[0.15em] uppercase hover:bg-burgundy-800 transition-all duration-300 shadow-[0_4px_20px_rgba(91,26,26,0.25)]"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
