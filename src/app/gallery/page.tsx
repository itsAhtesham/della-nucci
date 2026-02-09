import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { JsonLd, getBreadcrumbSchema } from "@/config/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  title: "Gallery — Photos of Our Cafe, Food & Events",
  description:
    "Browse photos of Cafe Della Nucci — lush green interiors, artisan wood-fired pizzas, signature coffee, romantic ambiance & memorable events in Sector 104, Noida.",
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: "Gallery — Cafe Della Nucci",
    description:
      "See our beautiful Italian cafe, artisan food photography, lush interiors & event highlights.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: "/images/gallery/ambiance/lush-greenery.avif",
        width: 1200,
        height: 630,
        alt: "Cafe Della Nucci — Lush Green Outdoor Seating",
      },
    ],
  },
};

const imageGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Cafe Della Nucci Photo Gallery",
  description:
    "Photos of our Italian cafe interiors, food, drinks, and events in Sector 104, Noida",
  url: `${siteUrl}/gallery`,
  about: {
    "@type": "Restaurant",
    name: "Cafe Della Nucci",
  },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home" }, { name: "Gallery", path: "/gallery" }])} />
      <JsonLd data={imageGalleryJsonLd} />
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
