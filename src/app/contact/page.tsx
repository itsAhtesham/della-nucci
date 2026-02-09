import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { MapEmbed } from "@/components/shared/map-embed";
import { JsonLd, getBreadcrumbSchema } from "@/config/schema";
import { SITE_CONFIG } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  title: "Contact Us — Reservations, Location & Inquiries",
  description:
    "Get in touch with Cafe Della Nucci — make reservations, event bookings, or general inquiries. Visit us at HA-113, Sector 104, Noida or call +91 7861004444. Open daily 11:30 AM – 11 PM.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Cafe Della Nucci — Reservations & Location",
    description:
      "Make a reservation or get directions to Cafe Della Nucci in Sector 104, Noida. Call +91 7861004444.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: "/images/og/og-default.avif",
        width: 1200,
        height: 630,
        alt: "Contact Cafe Della Nucci",
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  telephone: `+91${SITE_CONFIG.phone}`,
  email: SITE_CONFIG.email,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.zip,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.coordinates.lat,
    longitude: SITE_CONFIG.coordinates.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "11:30",
    closes: "23:00",
  },
  hasMap: SITE_CONFIG.social.google,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the opening hours of Cafe Della Nucci?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Cafe Della Nucci is open daily from ${SITE_CONFIG.hours.open} to ${SITE_CONFIG.hours.close}.`,
      },
    },
    {
      "@type": "Question",
      name: "Where is Cafe Della Nucci located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We are located at ${SITE_CONFIG.address.full}.`,
      },
    },
    {
      "@type": "Question",
      name: "Is Cafe Della Nucci pet friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Cafe Della Nucci is completely pet friendly. We welcome your furry friends and even host special Pet Brunch Sundays.",
      },
    },
    {
      "@type": "Question",
      name: "Does Cafe Della Nucci take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes, you can make reservations by calling us at +91 ${SITE_CONFIG.phone} or by filling out the contact form on our website.`,
      },
    },
    {
      "@type": "Question",
      name: "Does Cafe Della Nucci have outdoor seating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer beautiful lush green outdoor seating along with air-conditioned interiors.",
      },
    },
    {
      "@type": "Question",
      name: "What type of cuisine does Cafe Della Nucci serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve authentic Italian cuisine including wood-fired pizzas, fresh pasta, gourmet burgers, specialty coffee, desserts, and more. We offer both vegetarian and non-vegetarian options.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={faqJsonLd} />
      <ContactHero />
      <section className="section-padding bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>

          {/* Full-width Map — client-only so embed displays correctly */}
          <div className="mt-12 lg:mt-16 rounded-xl overflow-hidden shadow-elevated">
            <MapEmbed className="w-full" heightClass="h-72 sm:h-80 lg:h-[450px]" />
          </div>
        </div>
      </section>
    </>
  );
}
