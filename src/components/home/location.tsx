"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MapPin, Clock, Phone, Instagram, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const infoItems = [
  {
    icon: MapPin,
    title: "Address",
    content: SITE_CONFIG.address.full,
    link: SITE_CONFIG.social.directions,
    linkText: "Get Directions",
    linkIcon: Navigation,
    accent: "bg-burgundy-900",
  },
  {
    icon: Clock,
    title: "Hours",
    content: `${SITE_CONFIG.hours.days}\n${SITE_CONFIG.hours.open} — ${SITE_CONFIG.hours.close}`,
    accent: "bg-sage-400",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: SITE_CONFIG.phone,
    link: `tel:${SITE_CONFIG.phone}`,
    linkText: "Dine-in · Drive-through · Delivery",
    accent: "bg-peach-200",
    iconDark: true,
  },
  {
    icon: Instagram,
    title: "Follow Us",
    content: "@dellanucci",
    link: SITE_CONFIG.social.instagram,
    linkText: "Daily updates & behind the scenes",
    accent: "bg-burgundy-900",
    dark: true,
  },
];

export function HomeLocation() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-100 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-peach-100/20 to-transparent blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-burgundy-900/30" />
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-burgundy-800/60 font-accent">
                  Find Us
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 leading-[1.05]">
                Visit{" "}
                <span className="font-accent italic font-normal">Della Nucci</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-warm-500 text-base sm:text-lg max-w-lg font-accent tracking-wide leading-relaxed">
                Nestled in Sector 104, Noida — easy to find, hard to leave
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <a
              href={SITE_CONFIG.social.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-burgundy-900 font-medium text-sm uppercase tracking-[0.15em] hover:gap-3 transition-all duration-400 shrink-0"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <FadeIn className="lg:col-span-3">
            <div className="relative w-full h-72 sm:h-80 lg:h-full lg:min-h-[400px] rounded-sm overflow-hidden shadow-elevated">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.073!2d77.3650662!3d28.5395734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce707ee160619%3A0xee511eb7aef6cb13!2sDella%20Nucci!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Della Nucci Location"
              />
              {/* Overlay border */}
              <div className="absolute inset-0 border border-burgundy-900/[0.04] rounded-sm pointer-events-none" />
            </div>
          </FadeIn>

          {/* Info Cards */}
          <FadeIn delay={0.15} className="lg:col-span-2 space-y-4">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const LinkIcon = item.linkIcon;
              const isExternal = item.link?.startsWith("http");

              return (
                <div
                  key={item.title}
                  className={`rounded-sm p-6 ${
                    item.dark
                      ? "bg-burgundy-900 text-white shadow-elevated"
                      : "bg-white shadow-soft border border-burgundy-900/[0.04]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 ${item.accent}`}
                    >
                      <Icon className={`w-4 h-4 ${item.iconDark ? "text-burgundy-900" : "text-white"}`} />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-serif font-bold text-sm mb-1 ${
                          item.dark ? "text-white" : "text-burgundy-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.link && item.title === "Call Us" ? (
                        <a
                          href={item.link}
                          className={`text-sm ${
                            item.dark ? "text-white/60 hover:text-white" : "text-warm-600 hover:text-burgundy-900"
                          } transition-colors`}
                        >
                          {item.content}
                        </a>
                      ) : item.link && item.title === "Follow Us" ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p
                          className={`text-sm leading-relaxed whitespace-pre-line ${
                            item.dark ? "text-white/60" : "text-warm-500"
                          }`}
                        >
                          {item.content}
                        </p>
                      )}
                      {item.link && item.title === "Address" && LinkIcon && (
                        <a
                          href={item.link}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-sm text-burgundy-900 font-medium mt-2 hover:text-burgundy-700 transition-colors"
                        >
                          <LinkIcon className="w-3 h-3" />
                          {item.linkText}
                        </a>
                      )}
                      {item.linkText && item.title !== "Address" && (
                        <p
                          className={`text-xs mt-1.5 font-accent tracking-wider ${
                            item.dark ? "text-white/30" : "text-warm-400"
                          }`}
                        >
                          {item.linkText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
