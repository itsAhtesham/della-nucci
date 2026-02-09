import type { NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "Cafe Della Nucci",
  tagline: "Where bold flavours meet warm hearts",
  description:
    "Experience Italian romance at Cafe Della Nucci in Noida. Authentic Italian coffee, wood-fired pizzas, fresh pasta, and warm ambiance.",
  url: "https://dellanucci.com",
  phone: "7861004444",
  email: "hello@dellanucci.com",
  address: {
    street: "HA-113, Sector 104, Hazipur",
    city: "Noida",
    state: "Uttar Pradesh",
    zip: "201301",
    country: "India",
    full: "HA-113, Sector 104, Hazipur, Noida, UP 201301",
  },
  hours: {
    open: "11:30 AM",
    close: "11:00 PM",
    days: "Open Daily",
  },
  rating: 4.8,
  reviewCount: 167,
  social: {
    instagram: "https://www.instagram.com/dellanucci/",
    google:
      "https://www.google.com/maps/place/Della+Nucci/@28.5395734,77.3676411,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce707ee160619:0xee511eb7aef6cb13!8m2!3d28.5395734!4d77.3676411!16s",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=28.5395734,77.3676411&destination_place_id=0x390ce707ee160619:0xee511eb7aef6cb13",
  },
  /** Google Maps embed URL — only rendered on client to avoid SSR/hydration issues */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.073!2d77.3650662!3d28.5395734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce707ee160619%3A0xee511eb7aef6cb13!2sDella%20Nucci!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin",
  coordinates: {
    lat: 28.5395734,
    lng: 77.3676411,
  },
} as const;

export const NAVIGATION: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

