export const SITE_STATS = [
  { value: "50+", label: "Menu Creations", description: "Curated with love" },
  { value: "167+", label: "5-Star Reviews", description: "On Google" },
  { value: "1000+", label: "Coffees Poured", description: "And counting" },
  { value: "1", label: "Big Family", description: "Our team & community" },
] as const;

/** Subset used in the home about section (first 3 stats) */
export const HOME_STATS = SITE_STATS.slice(0, 3);
