import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutValues } from "@/components/about/about-values";
import { AboutStats } from "@/components/about/about-stats";
import { AboutTeam } from "@/components/about/about-team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Cafe Della Nucci — our journey, values, and the passionate team that brings Italian romance to Sector 104, Noida.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </>
  );
}
