import type { Metadata } from "next";
import { MenuHero } from "@/components/menu/menu-hero";
import { MenuContent } from "@/components/menu/menu-content";
import { menuSections } from "@/data/menu";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  title: "Menu — Pizzas, Pasta, Coffee & More",
  description:
    "Explore our full menu — wood-fired pizzas from ₹349, fresh pasta from ₹299, signature coffee, gourmet burgers, desserts & more. Authentic Italian cuisine at Cafe Della Nucci, Sector 104, Noida.",
  alternates: {
    canonical: `${siteUrl}/menu`,
  },
  openGraph: {
    title: "Menu — Cafe Della Nucci",
    description:
      "Wood-fired pizzas, fresh pasta, specialty coffee, gourmet burgers & Italian desserts. View our full menu with prices.",
    url: `${siteUrl}/menu`,
    images: [
      {
        url: "/images/gallery/food/wood-fired-pizza.webp",
        width: 1200,
        height: 630,
        alt: "Cafe Della Nucci — Wood-fired Pizza & Italian Cuisine",
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
      name: "Menu",
      item: `${siteUrl}/menu`,
    },
  ],
};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Cafe Della Nucci Menu",
  description: "Full menu with Italian pizzas, pasta, coffee, burgers, desserts and more",
  url: `${siteUrl}/menu`,
  hasMenuSection: menuSections.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    description: section.subtitle,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "INR",
        availability: item.isAvailable
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      },
      suitableForDiet: item.tags.includes("vegetarian")
        ? "https://schema.org/VegetarianDiet"
        : undefined,
    })),
  })),
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <MenuHero />
      <MenuContent />
    </>
  );
}
