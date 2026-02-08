import type { Review, PlatformRating } from "@/types";

export const PLATFORM_RATINGS: PlatformRating[] = [
  {
    source: "google",
    rating: 4.8,
    reviewCount: 167,
    url: "https://www.google.com/maps/place/Della+Nucci/@28.5395734,77.3676411,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce707ee160619:0xee511eb7aef6cb13!8m2!3d28.5395734!4d77.3676411!16s",
  },
  {
    source: "zomato",
    rating: 4.5,
    reviewCount: 89,
    url: "https://www.zomato.com/ncr/della-nucci-sector-104-noida",
  },
];

export const REVIEWS: Review[] = [
  // Google Reviews
  {
    id: 1,
    name: "Priya Sharma",
    text: "The ambiance is absolutely stunning! Perfect for a date night. The Margherita pizza was authentic Italian and the coffee is some of the best in Noida. Will definitely come back!",
    rating: 5,
    date: "2 weeks ago",
    source: "google",
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "Such a cozy and beautiful place! The interiors are Instagram-worthy. Had the Alfredo pasta and molten lava cake — both were incredible. Service was warm and friendly.",
    rating: 5,
    date: "1 month ago",
    source: "google",
  },
  {
    id: 3,
    name: "Anisha Kapoor",
    text: "Finally, a cafe in Sector 104 that gets it right! The drive-through is super convenient. Their Caramel Latte is my new addiction. Pet-friendly too — my dog loved it!",
    rating: 5,
    date: "3 weeks ago",
    source: "google",
  },
  {
    id: 4,
    name: "Vikram Singh",
    text: "Brought my family here for a Sunday brunch. The kids loved the waffles, my wife enjoyed the tiramisu, and I had the best espresso. Great value for the quality!",
    rating: 4,
    date: "1 week ago",
    source: "google",
  },
  {
    id: 5,
    name: "Neha Gupta",
    text: "The Quattro Formaggi pizza is to die for! Beautiful romantic setting with roses and warm lights. The karaoke night was so much fun. Highly recommend for celebrations!",
    rating: 5,
    date: "2 months ago",
    source: "google",
  },
  // Zomato Reviews
  {
    id: 6,
    name: "Arjun Mehta",
    text: "One of the finest cafes in Noida hands down. The wood-fired pizzas have that perfect char and the pasta is cooked al dente. Ambiance gives major European vibes.",
    rating: 5,
    date: "1 week ago",
    source: "zomato",
  },
  {
    id: 7,
    name: "Sneha Reddy",
    text: "Visited for a birthday dinner and was blown away. The staff went out of their way to make it special. Tiramisu was the real deal — creamy and authentic. Love this place!",
    rating: 4,
    date: "3 weeks ago",
    source: "zomato",
  },
  {
    id: 8,
    name: "Karan Malhotra",
    text: "Perfect spot for work meetings and casual hangouts alike. The cold brew is smooth, sandwiches are loaded, and the AC section is very comfortable. Pricing is fair too.",
    rating: 4,
    date: "2 weeks ago",
    source: "zomato",
  },
  {
    id: 9,
    name: "Ishita Bansal",
    text: "The outdoor seating area is gorgeous, especially in the evening. Tried their new burgers — juicy and well-seasoned. The dessert menu is a must-try, especially the cheesecake!",
    rating: 5,
    date: "1 month ago",
    source: "zomato",
  },
  {
    id: 10,
    name: "Devesh Tiwari",
    text: "We come here almost every weekend now. Consistent quality, friendly staff, and that warm Italian vibe you can't find anywhere else in Sector 104. Our go-to family spot.",
    rating: 5,
    date: "5 days ago",
    source: "google",
  },
];
