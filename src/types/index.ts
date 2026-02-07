export type MenuCategory =
  | "pizza"
  | "pasta"
  | "coffee"
  | "desserts"
  | "beverages"
  | "burgers"
  | "sandwiches"
  | "starters";

export type DietaryTag =
  | "vegetarian"
  | "non-vegetarian"
  | "vegan"
  | "spicy"
  | "chef-special"
  | "best-seller"
  | "new";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  image?: string;
  tags: DietaryTag[];
  isAvailable: boolean;
  featured?: boolean;
}

export interface MenuSection {
  category: MenuCategory;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export type GalleryCategory = "all" | "ambiance" | "food" | "drinks" | "events";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory[];
  width: number;
  height: number;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  date: string;
  time: string;
  image?: string;
  featured?: boolean;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  category: string;
  tags: string[];
  readingTime: number;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
