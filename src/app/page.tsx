import { HomeHero } from "@/components/home/hero";
import { HomeAbout } from "@/components/home/about";
import { HomeFeatured } from "@/components/home/featured";
import { HomeExperience } from "@/components/home/experience";
import { HomeGallery } from "@/components/home/gallery";
import { HomeReviews } from "@/components/home/reviews";
import { HomeInstagram } from "@/components/home/instagram";
import { HomeCTA } from "@/components/home/cta";
import { HomeLocation } from "@/components/home/location";
import { Marquee } from "@/components/shared/marquee";
import { JsonLd, getBreadcrumbSchema } from "@/config/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home" }])} />
      <HomeHero />
      <Marquee variant="dark" />
      <HomeAbout />
      <HomeFeatured />
      <HomeExperience />
      <HomeGallery />
      <HomeReviews />
      <HomeInstagram />
      <HomeCTA />
      <HomeLocation />
    </>
  );
}
