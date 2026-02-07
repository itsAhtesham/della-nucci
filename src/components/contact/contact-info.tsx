"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [SITE_CONFIG.address.street, `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}`],
    href: SITE_CONFIG.social.google,
  },
  {
    icon: Clock,
    title: "Hours",
    lines: [`${SITE_CONFIG.hours.open} — ${SITE_CONFIG.hours.close}`, SITE_CONFIG.hours.days],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [`+91 ${SITE_CONFIG.phone}`],
    href: `tel:+91${SITE_CONFIG.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [SITE_CONFIG.email],
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Instagram,
    title: "Follow Us",
    lines: ["@dellanucci"],
    href: SITE_CONFIG.social.instagram,
  },
];

export function ContactInfo() {
  return (
    <FadeIn delay={0.2}>
      <div className="space-y-6">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-burgundy-900 mb-2">
            Contact Information
          </h2>
          <p className="text-warm-500 text-sm">
            Drop by, give us a call, or slide into our DMs — we&apos;re always happy to connect
          </p>
        </div>

        <div className="space-y-5">
          {contactDetails.map((detail) => {
            const content = (
              <div className="flex gap-4 p-5 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-burgundy-50 flex items-center justify-center shrink-0 group-hover:bg-burgundy-900 transition-colors duration-300">
                  <detail.icon className="w-5 h-5 text-burgundy-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-burgundy-900 text-sm mb-1">{detail.title}</p>
                  {detail.lines.map((line) => (
                    <p key={line} className="text-warm-500 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            );

            if (detail.href) {
              return (
                <a
                  key={detail.title}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }
            return <div key={detail.title}>{content}</div>;
          })}
        </div>

        {/* Map */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-soft h-64">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9!2d${SITE_CONFIG.coordinates.lng}!3d${SITE_CONFIG.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7b1b3e2e1e9%3A0x1c0!2sDella%20Nucci!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cafe Della Nucci Location"
          />
        </div>
      </div>
    </FadeIn>
  );
}
