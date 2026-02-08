import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutValues } from "@/components/about/about-values";
import { AboutStats } from "@/components/about/about-stats";
import { AboutTeam } from "@/components/about/about-team";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  title: "About Us — Our Story, Values & Team",
  description:
    "Discover the story behind Cafe Della Nucci — our journey from a dream to Noida's favourite Italian cafe. Meet the passionate team bringing Italian romance to Sector 104.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Cafe Della Nucci — Our Story & Team",
    description:
      "From a passion for Italian cuisine to Noida's beloved cafe. Discover our journey, values, and the team behind Cafe Della Nucci.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: "/images/about/new-story.avif",
        width: 1200,
        height: 630,
        alt: "Inside Cafe Della Nucci — Our Story",
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
      name: "About Us",
      item: `${siteUrl}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </>
  );
}
