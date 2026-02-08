import type { Metadata } from "next";
import { playfair, inter, cormorant } from "@/styles/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cafe Della Nucci — Italian Cafe & Restaurant in Sector 104, Noida",
    template: "%s | Cafe Della Nucci",
  },
  description:
    "Experience Italian romance at Cafe Della Nucci in Sector 104, Noida. Authentic Italian coffee, wood-fired pizzas, fresh pasta & warm ambiance. Pet friendly, outdoor seating, drive-through coffee. Open daily 11:30 AM – 11 PM.",
  keywords: [
    "cafe noida",
    "italian restaurant noida",
    "pizza noida sector 104",
    "coffee shop noida",
    "della nucci",
    "romantic cafe noida",
    "pet friendly cafe noida",
    "best cafe sector 104",
    "italian cafe noida",
    "wood fired pizza noida",
    "pasta restaurant noida",
    "cafe with outdoor seating noida",
    "drive through coffee noida",
    "karaoke cafe noida",
    "family restaurant sector 104",
    "cafe della nucci menu",
    "best restaurant sector 104 noida",
  ],
  authors: [{ name: "Cafe Della Nucci" }],
  creator: "Cafe Della Nucci",
  publisher: "Cafe Della Nucci",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Cafe Della Nucci",
    title: "Cafe Della Nucci — Italian Cafe & Restaurant in Noida",
    description:
      "Where bold flavours meet warm hearts. Authentic Italian cuisine, wood-fired pizzas, specialty coffee & romantic ambiance in Sector 104, Noida. Open daily.",
    images: [
      {
        url: "/images/og/og-default.avif",
        width: 1200,
        height: 630,
        alt: "Cafe Della Nucci — Italian Cafe & Restaurant in Sector 104, Noida",
        type: "image/avif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Della Nucci — Italian Cafe & Restaurant in Noida",
    description:
      "Where bold flavours meet warm hearts. Authentic Italian cuisine, wood-fired pizzas & specialty coffee in Sector 104, Noida.",
    images: ["/images/og/og-default.avif"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "restaurant",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: "Cafe Della Nucci",
  image: [
    `${siteUrl}/images/og/og-default.avif`,
    `${siteUrl}/images/hero/main.avif`,
  ],
  url: siteUrl,
  telephone: "+917861004444",
  email: "hello@dellanucci.com",
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
  openingHoursSpecification: [
    {
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
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "167",
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
    "https://www.instagram.com/dellanucci/",
    "https://www.google.com/maps/place/Della+Nucci/@28.5395734,77.3650662,17z",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Cafe Della Nucci",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/og/og-default.avif`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917861004444",
    contactType: "reservations",
    email: "hello@dellanucci.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.instagram.com/dellanucci/",
    "https://www.google.com/maps/place/Della+Nucci/@28.5395734,77.3650662,17z",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Cafe Della Nucci",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
