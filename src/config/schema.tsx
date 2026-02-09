import { SITE_CONFIG } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export function getBreadcrumbSchema(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path ? `${siteUrl}${item.path}` : siteUrl,
    })),
  };
}

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: SITE_CONFIG.name,
  image: [
    `${siteUrl}/images/og/og-default.avif`,
    `${siteUrl}/images/hero/main.avif`,
  ],
  url: siteUrl,
  telephone: `+91${SITE_CONFIG.phone}`,
  email: SITE_CONFIG.email,
  priceRange: "₹₹",
  servesCuisine: ["Italian", "Continental", "Pizza", "Coffee"],
  acceptsReservations: "True",
  menu: `${siteUrl}/menu`,
  hasMenu: {
    "@type": "Menu",
    url: `${siteUrl}/menu`,
    hasMenuSection: [
      { "@type": "MenuSection", name: "Pizzas" },
      { "@type": "MenuSection", name: "Pasta" },
      { "@type": "MenuSection", name: "Coffee" },
      { "@type": "MenuSection", name: "Desserts" },
      { "@type": "MenuSection", name: "Burgers" },
      { "@type": "MenuSection", name: "Sandwiches" },
      { "@type": "MenuSection", name: "Starters" },
      { "@type": "MenuSection", name: "Beverages" },
    ],
  },
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "11:30",
      closes: "23:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(SITE_CONFIG.rating),
    bestRating: "5",
    worstRating: "1",
    reviewCount: String(SITE_CONFIG.reviewCount),
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Drive-Through", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kids Friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Live Entertainment", value: true },
  ],
  sameAs: [
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.google,
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: SITE_CONFIG.name,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/og/og-default.avif`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+91${SITE_CONFIG.phone}`,
    contactType: "reservations",
    email: SITE_CONFIG.email,
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.google,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: SITE_CONFIG.name,
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/menu?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/** Renders a JSON-LD script tag */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
