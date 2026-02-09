import type { DietaryTag } from "@/types";
import { Leaf, Flame, Star, ChefHat, Sparkles } from "lucide-react";

export const DIETARY_FILTERS: { tag: DietaryTag; label: string; icon: typeof Leaf }[] = [
  { tag: "vegetarian", label: "Veg", icon: Leaf },
  { tag: "non-vegetarian", label: "Non-Veg", icon: Flame },
  { tag: "best-seller", label: "Bestsellers", icon: Star },
  { tag: "chef-special", label: "Chef's Special", icon: ChefHat },
  { tag: "new", label: "New", icon: Sparkles },
];

export function isVeg(tags: DietaryTag[]): boolean {
  return tags.includes("vegetarian") || tags.includes("vegan");
}

export function getDietaryLabel(tags: DietaryTag[]): string {
  if (tags.includes("vegan")) return "Vegan";
  if (tags.includes("vegetarian")) return "Veg";
  return "Non-Veg";
}
