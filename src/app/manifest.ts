import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cafe Della Nucci — Italian Cafe & Restaurant",
    short_name: "Della Nucci",
    description:
      "Authentic Italian cafe in Sector 104, Noida. Wood-fired pizzas, fresh pasta, specialty coffee & warm ambiance.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfaf7",
    theme_color: "#6b1d1d",
    orientation: "portrait-primary",
    categories: ["food", "restaurant", "lifestyle"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
