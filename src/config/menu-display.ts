import type { MenuCategory } from "@/types";

export const CATEGORY_EMOJIS: Record<string, string> = {
  starters: "🥗",
  pizza: "🍕",
  pasta: "🍝",
  burgers: "🍔",
  sandwiches: "🥪",
  coffee: "☕",
  beverages: "🥤",
  desserts: "🍫",
};

export const CATEGORY_LABELS: Record<string, string> = {
  pizza: "Pizza",
  pasta: "Pasta",
  coffee: "Coffee",
  desserts: "Dolci",
  burgers: "Burger",
  beverages: "Drinks",
  sandwiches: "Sandwich",
  starters: "Starters",
};

export const CATEGORY_GRADIENTS: Record<string, string> = {
  starters: "from-emerald-50 to-cream-100",
  pizza: "from-orange-100 to-peach-100",
  pasta: "from-yellow-50 to-cream-200",
  burgers: "from-orange-50 to-cream-200",
  sandwiches: "from-amber-50 to-cream-100",
  coffee: "from-amber-50 to-cream-300",
  beverages: "from-sky-50 to-cream-100",
  desserts: "from-pink-50 to-peach-50",
};
