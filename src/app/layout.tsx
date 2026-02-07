import type { Metadata } from "next";
import { playfair, inter, cormorant } from "@/styles/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cafe Della Nucci — Where Bold Flavours Meet Warm Hearts",
    template: "%s | Cafe Della Nucci",
  },
  description:
    "Experience Italian romance at Cafe Della Nucci in Sector 104, Noida. Authentic Italian coffee, artisan pizzas, fresh pasta & warm ambiance. Pet friendly, outdoor seating, drive-through.",
  keywords: [
    "cafe noida",
    "italian restaurant noida",
    "pizza noida sector 104",
    "coffee shop noida",
    "della nucci",
    "romantic cafe noida",
    "pet friendly cafe noida",
    "best cafe sector 104",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Cafe Della Nucci",
    title: "Cafe Della Nucci — Italian Cafe & Restaurant in Noida",
    description:
      "Where bold flavours meet warm hearts. Authentic Italian cuisine, specialty coffee & romantic ambiance in Sector 104, Noida.",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Cafe Della Nucci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Della Nucci — Italian Cafe in Noida",
    description: "Where bold flavours meet warm hearts",
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Cafe Della Nucci",
              image: `${siteUrl}/images/og/og-default.jpg`,
              url: siteUrl,
              telephone: "+917861004444",
              priceRange: "$$",
              servesCuisine: ["Italian", "Continental", "Pizza", "Coffee"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "HA-113, Sector 104, Hazipur",
                addressLocality: "Noida",
                addressRegion: "UP",
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
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "11:30",
                closes: "23:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "167",
              },
            }),
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
