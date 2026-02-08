import { HomeHero } from "@/components/home/hero";
import { HomeAbout } from "@/components/home/about";
import { HomeFeatured } from "@/components/home/featured";
import { HomeExperience } from "@/components/home/experience";
import { HomeGallery } from "@/components/home/gallery";
import { HomeReviews } from "@/components/home/reviews";
import { HomeCTA } from "@/components/home/cta";
import { HomeLocation } from "@/components/home/location";
import { Marquee } from "@/components/shared/marquee";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || undefined;

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
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HomeHero />
      <Marquee variant="dark" />
      <HomeAbout />
      <HomeFeatured />
      <HomeExperience />
      <HomeGallery />
      <HomeReviews />
      <HomeCTA />
      <HomeLocation />
    </>
  );
}
