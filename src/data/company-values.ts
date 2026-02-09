import { Heart, Coffee, Leaf, Users, Sparkles, Globe } from "lucide-react";

export const COMPANY_VALUES = [
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every dish we serve carries the passion of our kitchen. We don't just cook food — we craft experiences.",
  },
  {
    icon: Coffee,
    title: "Quality First",
    description:
      "From imported Italian ingredients to our house-roasted coffee beans, we never compromise on quality.",
  },
  {
    icon: Leaf,
    title: "Fresh & Local",
    description:
      "We source locally whenever possible, supporting Indian farmers while ensuring the freshest ingredients.",
  },
  {
    icon: Users,
    title: "Community Spirit",
    description:
      "More than a cafe, we're a gathering place. From karaoke nights to pet meetups, everyone belongs here.",
  },
  {
    icon: Sparkles,
    title: "Constant Innovation",
    description:
      "Our menu evolves with the seasons. We're always experimenting with new flavours while honouring traditions.",
  },
  {
    icon: Globe,
    title: "Italian Soul, Indian Heart",
    description:
      "We blend the best of Italian culinary traditions with the warmth and vibrancy of Indian hospitality.",
  },
] as const;
