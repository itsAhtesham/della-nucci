import {
  PawPrint,
  TreePalm,
  Car,
  Music,
  Wind,
  Baby,
} from "lucide-react";

export const AMENITIES = [
  {
    icon: PawPrint,
    title: "Pet Friendly",
    description: "Your furry friends are always welcome at our tables",
    color: "from-sage-100/80 to-sage-200/40",
    iconColor: "text-sage-500",
  },
  {
    icon: TreePalm,
    title: "Al Fresco Dining",
    description: "Breathe fresh air while you dine under open skies",
    color: "from-sage-100/60 to-cream-200/60",
    iconColor: "text-sage-400",
  },
  {
    icon: Car,
    title: "Drive-Through",
    description: "Grab your coffee on the go — no wait needed",
    color: "from-peach-100/70 to-cream-200/50",
    iconColor: "text-burgundy-600",
  },
  {
    icon: Music,
    title: "Karaoke Nights",
    description: "Sing, laugh, and create memories",
    color: "from-burgundy-100/60 to-peach-100/50",
    iconColor: "text-burgundy-700",
  },
  {
    icon: Wind,
    title: "Air Conditioned",
    description: "Cool, comfortable interiors for every season",
    color: "from-cream-200/70 to-cream-100/50",
    iconColor: "text-warm-500",
  },
  {
    icon: Baby,
    title: "Family Friendly",
    description: "A welcoming space for guests of all ages",
    color: "from-peach-50/80 to-cream-100/60",
    iconColor: "text-peach-300",
  },
] as const;
