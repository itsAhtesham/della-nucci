"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-600",
          isScrolled
            ? "bg-cream-100/95 backdrop-blur-md shadow-[0_1px_20px_rgba(91,26,26,0.06)]"
            : isHome
              ? "bg-transparent"
              : "bg-cream-100"
        )}
      >
        {/* Announcement Bar */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-burgundy-950 text-white text-center py-2 text-[11px] tracking-[0.15em] font-accent overflow-hidden"
            >
              <span className="opacity-50">Open Daily</span>
              <span className="mx-3 opacity-20">|</span>
              <span className="opacity-70">{SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}</span>
              <span className="mx-3 opacity-20">|</span>
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-peach-200 transition-colors inline-flex items-center gap-1.5 opacity-70 hover:opacity-100">
                <Phone className="w-3 h-3" />
                +91 {SITE_CONFIG.phone}
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-burgundy-900/20 flex items-center justify-center transition-all duration-300 group-hover:border-burgundy-900/40"
                style={{
                  backgroundColor: isScrolled || !isHome ? "rgba(91,26,26,0.05)" : "rgba(255,255,255,0.06)",
                  borderColor: isScrolled || !isHome ? "rgba(91,26,26,0.15)" : "rgba(255,255,255,0.15)",
                }}
              >
                <span
                  className={cn(
                    "font-serif text-[8px] font-bold leading-tight text-center tracking-wide transition-colors",
                    isScrolled || !isHome ? "text-burgundy-900" : "text-white"
                  )}
                >
                  DN
                </span>
              </div>
              <div className="hidden sm:block">
                <p className={cn(
                  "font-serif text-lg font-bold tracking-wide transition-colors duration-300",
                  isScrolled || !isHome ? "text-burgundy-900" : "text-white"
                )}>
                  Della Nucci
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium tracking-[0.05em] transition-colors duration-300",
                    pathname === item.href
                      ? isScrolled || !isHome
                        ? "text-burgundy-900"
                        : "text-white"
                      : isScrolled || !isHome
                        ? "text-warm-500 hover:text-burgundy-900"
                        : "text-white/60 hover:text-white"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{
                        backgroundColor:
                          !isScrolled && isHome ? "rgba(255,255,255,0.5)" : "rgba(91,26,26,0.5)",
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  "hidden lg:inline-flex items-center px-6 py-2.5 text-[13px] font-medium tracking-[0.1em] transition-all duration-400",
                  isScrolled || !isHome
                    ? "bg-burgundy-900 text-white hover:bg-burgundy-800 shadow-[0_4px_14px_rgba(91,26,26,0.2)]"
                    : "bg-white/[0.08] backdrop-blur-sm border border-white/15 text-white hover:bg-white/15"
                )}
              >
                Get in Touch
              </Link>

              <button
                onClick={() => setIsMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  isScrolled || !isHome ? "text-burgundy-900" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-burgundy-950/70 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-cream-100 shadow-dramatic"
            >
              <div className="flex items-center justify-between p-6 border-b border-cream-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-burgundy-900/15 bg-burgundy-900/5 flex items-center justify-center">
                    <span className="text-burgundy-900 font-serif text-[8px] font-bold">DN</span>
                  </div>
                  <span className="font-serif text-burgundy-900 font-bold tracking-wide">
                    Della Nucci
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-warm-500 hover:text-burgundy-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-6">
                <ul className="space-y-1">
                  {NAVIGATION.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-3.5 px-4 text-base font-medium transition-all duration-300 rounded-lg",
                          pathname === item.href
                            ? "bg-burgundy-900 text-white"
                            : "text-warm-600 hover:bg-cream-200/60 hover:text-burgundy-900"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-cream-200/60 space-y-4">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 text-warm-500 hover:text-burgundy-900 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 {SITE_CONFIG.phone}</span>
                  </a>
                  <p className="text-xs text-warm-400 font-accent tracking-wide">
                    {SITE_CONFIG.address.full}
                  </p>
                  <p className="text-xs text-warm-400 font-accent tracking-wide">
                    {SITE_CONFIG.hours.days} · {SITE_CONFIG.hours.open} — {SITE_CONFIG.hours.close}
                  </p>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
