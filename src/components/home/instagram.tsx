"use client";

import { Heart, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { INSTAGRAM_POSTS } from "@/data/instagram";
import { SITE_CONFIG } from "@/lib/constants";
import type { InstagramPost } from "@/types";

function PostCard({ post }: { post: InstagramPost }) {
  return (
    <a
      href={SITE_CONFIG.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-sm overflow-hidden group cursor-pointer block shadow-soft border border-burgundy-900/[0.04] shrink-0"
    >
      {/* Image */}
      <div
        className="absolute inset-0 transition-transform duration-600 group-hover:scale-105"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

      {/* Heart + likes on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-1.5 text-white">
          <Heart className="w-5 h-5 fill-white" />
          <span className="font-serif text-sm font-bold">{post.likes}</span>
        </div>
      </div>

      {/* Bottom overlay — username + caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[8px] font-bold text-white uppercase">
              {post.username.charAt(1)}
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-medium text-white/90 truncate">
            {post.username}
          </p>
        </div>
        <p className="text-[9px] sm:text-[10px] text-white/60 font-accent tracking-wide line-clamp-2 leading-relaxed">
          {post.caption}
        </p>
      </div>

      {/* Corner ornament */}
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/30 transition-all duration-500" />
    </a>
  );
}

function MarqueeRow() {
  return (
    <>
      {INSTAGRAM_POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export function HomeInstagram() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-burgundy-800/60 font-accent">
                  Instagram
                </p>
                <InstagramIcon className="w-4 h-4" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 leading-[1.05]">
                Guest{" "}
                <span className="font-accent italic font-normal">Moments</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-warm-500 text-base sm:text-lg max-w-lg font-accent tracking-wide leading-relaxed">
                Real moments shared by our guests — the flavours, the ambiance,
                the memories
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-burgundy-900 font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-400 shrink-0"
            >
              Follow @dellanucci
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Marquee — full width, breaks out of container */}
      <FadeIn delay={0.25}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 z-10 bg-gradient-to-r from-cream-50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 z-10 bg-gradient-to-l from-cream-50 to-transparent" />

          <div className="flex gap-4 instagram-marquee">
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>
      </FadeIn>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <FadeIn delay={0.35}>
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-accent tracking-wide text-burgundy-800/70 hover:text-burgundy-900 transition-colors duration-300 group"
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="link-underline">
                Follow @dellanucci on Instagram
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
