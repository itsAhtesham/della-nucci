export interface GalleryItem {
  id: number;
  label: string;
  subtitle: string;
  gradient: string;
  span: string;
  height: string;
  image: string;
  dark?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    label: "Cozy Interiors",
    subtitle: "Warm lights & roses",
    gradient: "linear-gradient(145deg, #F8DDD3 0%, #f3c5b3 40%, #ede6da 100%)",
    span: "sm:col-span-2 sm:row-span-2",
    height: "h-64 sm:h-full",
    image: "/images/gallery/ambiance/og-default.avif",
  },
  {
    id: 2,
    label: "Wood-Fired Pizza",
    subtitle: "Hand-tossed daily",
    gradient: "linear-gradient(145deg, #ede6da 0%, #F5EFE6 40%, #f3c5b3 100%)",
    span: "sm:col-span-1 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/food/wood-fired-pizza.webp",
  },
  {
    id: 3,
    label: "Signature Coffee",
    subtitle: "Bean to cup",
    gradient: "linear-gradient(145deg, #e0d4c0 0%, #F5EFE6 50%, #ede6da 100%)",
    span: "sm:col-span-1 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/food/signature-coffee.webp",
  },
  {
    id: 4,
    label: "Romantic Ambiance",
    subtitle: "Perfect for dates",
    gradient: "linear-gradient(135deg, #5B1A1A 0%, #7A2828 40%, #a33135 100%)",
    span: "sm:col-span-2 sm:row-span-1",
    height: "h-48 sm:h-full",
    dark: true,
    image: "/images/gallery/ambiance/romantic.webp",
  },
  {
    id: 5,
    label: "Sweet Endings",
    subtitle: "Italian desserts",
    gradient: "linear-gradient(145deg, #fbeee9 0%, #F8DDD3 40%, #f3c5b3 100%)",
    span: "sm:col-span-2 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/ambiance/sweet-endings.webp",
  },
  {
    id: 6,
    label: "Lush Greenery",
    subtitle: "Nature meets comfort",
    gradient: "linear-gradient(145deg, #e8ede6 0%, #c5d4bf 40%, #e8ede6 100%)",
    span: "sm:col-span-2 sm:row-span-1",
    height: "h-48 sm:h-full",
    image: "/images/gallery/ambiance/lush-greenery.avif",
  },
];
