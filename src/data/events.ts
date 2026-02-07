import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "event-1",
    title: "Karaoke Saturday",
    slug: "karaoke-saturday",
    description:
      "Grab the mic and sing your heart out! Every Saturday night, we transform our cafe into a karaoke haven with classic hits and crowd favourites.",
    longDescription:
      "Our Karaoke Saturday is the perfect way to unwind after a long week. Enjoy discounted beverages, a curated playlist of Bollywood and international hits, and a lively atmosphere that gets everyone on their feet. Whether you're a shower singer or a stage pro — all are welcome!",
    date: "2026-02-08",
    time: "8:00 PM — 11:00 PM",
    tags: ["Music", "Weekly", "Fun"],
    featured: true,
  },
  {
    id: "event-2",
    title: "Pizza Making Workshop",
    slug: "pizza-making-workshop",
    description:
      "Learn the art of hand-tossed pizza from our head chef. Knead, top, and bake your own Margherita from scratch!",
    longDescription:
      "Join our interactive Pizza Making Workshop where our head chef walks you through every step — from making the perfect dough to mastering the art of stretching and topping. You'll take home the recipe, the skills, and of course, the pizza you made. Perfect for date nights and family weekends.",
    date: "2026-02-15",
    time: "4:00 PM — 6:00 PM",
    tags: ["Workshop", "Food", "Interactive"],
    featured: true,
  },
  {
    id: "event-3",
    title: "Live Acoustic Evening",
    slug: "live-acoustic-evening",
    description:
      "Soulful acoustic performances by local artists, paired with our finest coffee and desserts. An evening to remember.",
    longDescription:
      "Our Live Acoustic Evenings bring Noida's best independent musicians to the Della Nucci stage. Enjoy unplugged performances across genres — from indie folk to soft rock — while sipping on our signature beverages. The perfect setting for a romantic evening or a chill hangout with friends.",
    date: "2026-02-22",
    time: "7:00 PM — 10:00 PM",
    tags: ["Music", "Live", "Romantic"],
  },
  {
    id: "event-4",
    title: "Pet Brunch Sunday",
    slug: "pet-brunch-sunday",
    description:
      "A special brunch for you and your furry friends! Enjoy our brunch menu while your pets get special treats and play time.",
    longDescription:
      "We know your pets are family, and that's why we host Pet Brunch Sundays. Enjoy our curated brunch menu with freshly baked goods, eggs, and coffee, while your four-legged companions enjoy treats, water bowls, and a dedicated play area. Come meet other pet parents in the community!",
    date: "2026-03-02",
    time: "10:00 AM — 1:00 PM",
    tags: ["Pets", "Brunch", "Community"],
  },
  {
    id: "event-5",
    title: "Latte Art Masterclass",
    slug: "latte-art-masterclass",
    description:
      "Discover the secrets of latte art with our expert baristas. From hearts to rosettas, learn to pour like a pro.",
    longDescription:
      "Our Latte Art Masterclass is a hands-on experience where you'll learn milk steaming, free-pour techniques, and etching. Led by our award-winning barista, you'll leave with the skills to impress at home. All materials and unlimited coffee included!",
    date: "2026-03-08",
    time: "3:00 PM — 5:00 PM",
    tags: ["Workshop", "Coffee", "Interactive"],
  },
  {
    id: "event-6",
    title: "Italian Wine & Cheese Night",
    slug: "italian-wine-cheese-night",
    description:
      "An evening of curated Italian wines paired with artisan cheeses. A sophisticated celebration of Italian culture.",
    longDescription:
      "Immerse yourself in Italian culture at our Wine & Cheese Night. Sample a selection of Italian wines — from Chianti to Prosecco — expertly paired with imported and artisanal cheeses. Our sommelier will guide you through each pairing with stories from Italian vineyards.",
    date: "2026-03-15",
    time: "7:30 PM — 10:30 PM",
    tags: ["Wine", "Food", "Sophisticated"],
  },
];

export const upcomingEvents = events.filter(
  (e) => new Date(e.date) >= new Date()
);

export const featuredEvents = events.filter((e) => e.featured);
