import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { SITE_CONFIG, NAVIGATION } from "@/lib/constants";
import { OrnamentDivider } from "@/components/shared/ornament";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-950 text-white relative overflow-hidden">
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(91,26,26,0.3) 0%, transparent 100%),
            radial-gradient(ellipse 400px 300px at 80% 70%, rgba(201,168,76,0.04) 0%, transparent 100%)
          `,
        }}
      />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 lg:py-22 relative z-10">
        {/* Top section — Brand */}
        <div className="text-center mb-14">
          <div className="inline-flex w-24 h-24 rounded-full border border-white/10 items-center justify-center mb-5">
            <div className="text-center">
              <span className="text-white/60 font-accent text-[9px] uppercase tracking-[0.3em] block mb-0.5">
                Cafe
              </span>
              <span className="text-white font-serif text-base font-bold leading-none tracking-wider">
                Della
                <br />
                Nucci
              </span>
            </div>
          </div>
          <p className="font-accent text-white/30 text-lg italic tracking-wide max-w-xs mx-auto">
            &ldquo;{SITE_CONFIG.tagline}&rdquo;
          </p>
        </div>

        <OrnamentDivider light className="mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-6 font-accent">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-peach-200 transition-colors duration-300 link-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-6 font-accent">
              Visit Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-peach-200/50" />
                <span>{SITE_CONFIG.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-peach-200 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-peach-200/50" />
                  <span>+91 {SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-peach-200 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0 text-peach-200/50" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Clock className="w-4 h-4 shrink-0 text-peach-200/50" />
                <span>
                  {SITE_CONFIG.hours.days}<br />
                  {SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-6 font-accent">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/60" />
              </a>
              <a
                href={SITE_CONFIG.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4 text-white/60" />
              </a>
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              Follow @dellanucci for daily updates,<br />behind the scenes & more
            </p>
          </div>

          {/* Google Rating */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-6 font-accent">
              Loved by Noida
            </h3>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-3xl font-serif font-bold text-white">{SITE_CONFIG.rating}</span>
                <div className="flex text-gold-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-white/40 mb-3">
                {SITE_CONFIG.reviewCount}+ reviews on Google
              </p>
              <a
                href={SITE_CONFIG.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-peach-200/60 hover:text-peach-200 transition-colors duration-300 link-underline"
              >
                Read reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 tracking-wider font-accent">
            &copy; {currentYear} Cafe Della Nucci. All rights reserved.
          </p>
          <p className="text-[11px] text-white/25 flex items-center gap-1.5 tracking-wider font-accent">
            Crafted with <Heart className="w-3 h-3 text-burgundy-400 fill-burgundy-400" /> in Noida
          </p>
        </div>
      </div>
    </footer>
  );
}
