import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Cafe Della Nucci — our cozy interiors, artisan food, signature drinks, and memorable events in Sector 104, Noida.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
