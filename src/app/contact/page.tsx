import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteUrl}/contact`,
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cafe Della Nucci",
  telephone: "+917861004444",
  email: "hello@dellanucci.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "HA-113, Sector 104, Hazipur",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5395734,
    longitude: 77.3676411,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:30",
    closes: "23:00",
  },
  hasMap:
    "https://www.google.com/maps/place/Della+Nucci/@28.5395734,77.3650662,17z",
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
        text: "Cafe Della Nucci is open daily from 11:30 AM to 11:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Cafe Della Nucci located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at HA-113, Sector 104, Hazipur, Noida, Uttar Pradesh 201301, India.",
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
        text: "Yes, you can make reservations by calling us at +91 7861004444 or by filling out the contact form on our website.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactHero />
      <section className="section-padding bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>

          {/* Full-width Map */}
          <div className="mt-12 lg:mt-16 rounded-xl overflow-hidden shadow-elevated">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.073!2d77.3650662!3d28.5395734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce707ee160619%3A0xee511eb7aef6cb13!2sDella%20Nucci!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Della Nucci Location"
              className="w-full h-72 sm:h-80 lg:h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
