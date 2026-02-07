import type { Metadata } from "next";
import { MenuHero } from "@/components/menu/menu-hero";
import { MenuContent } from "@/components/menu/menu-content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our full menu — artisan pizzas, fresh pasta, gourmet burgers, signature coffee & more. Authentic Italian cuisine at Cafe Della Nucci, Sector 104, Noida.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuContent />
    </>
  );
}
