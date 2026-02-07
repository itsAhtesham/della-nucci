"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/types";

interface GalleryItem {
  id: string;
  label: string;
  category: GalleryCategory[];
  gradient: string;
  span: string;
  emoji: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    label: "Cozy Interiors",
    category: ["ambiance"],
    gradient: "from-peach-100 to-cream-200",
    span: "sm:col-span-2 sm:row-span-2",
    emoji: "🪴",
  },
  {
    id: "g2",
    label: "Artisan Pizza",
    category: ["food"],
    gradient: "from-orange-100 to-peach-50",
    span: "",
    emoji: "🍕",
  },
  {
    id: "g3",
    label: "Signature Coffee",
    category: ["drinks"],
    gradient: "from-amber-50 to-cream-300",
    span: "",
    emoji: "☕",
  },
  {
    id: "g4",
    label: "Outdoor Seating",
    category: ["ambiance"],
    gradient: "from-sage-100 to-cream-100",
    span: "",
    emoji: "🌿",
  },
  {
    id: "g5",
    label: "Fresh Pasta",
    category: ["food"],
    gradient: "from-yellow-50 to-cream-200",
    span: "sm:col-span-2",
    emoji: "🍝",
  },
  {
    id: "g6",
    label: "Karaoke Night",
    category: ["events"],
    gradient: "from-purple-50 to-peach-50",
    span: "",
    emoji: "🎤",
  },
  {
    id: "g7",
    label: "Dessert Table",
    category: ["food"],
    gradient: "from-pink-50 to-cream-100",
    span: "",
    emoji: "🍰",
  },
  {
    id: "g8",
    label: "Warm Ambiance",
    category: ["ambiance"],
    gradient: "from-amber-50 to-peach-100",
    span: "sm:col-span-2 sm:row-span-2",
    emoji: "✨",
  },
  {
    id: "g9",
    label: "Italian Soda Bar",
    category: ["drinks"],
    gradient: "from-sky-50 to-cream-100",
    span: "",
    emoji: "🧊",
  },
  {
    id: "g10",
    label: "Gourmet Burgers",
    category: ["food"],
    gradient: "from-orange-50 to-cream-200",
    span: "",
    emoji: "🍔",
  },
  {
    id: "g11",
    label: "Pet Meetups",
    category: ["events"],
    gradient: "from-emerald-50 to-cream-100",
    span: "sm:col-span-2",
    emoji: "🐾",
  },
  {
    id: "g12",
    label: "Latte Art",
    category: ["drinks"],
    gradient: "from-amber-100 to-cream-200",
    span: "",
    emoji: "🎨",
  },
];

const categories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ambiance", label: "Ambiance" },
  { value: "food", label: "Food" },
  { value: "drinks", label: "Drinks" },
  { value: "events", label: "Events" },
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300",
                activeFilter === cat.value
                  ? "bg-burgundy-900 text-white shadow-[0_4px_14px_rgba(91,26,26,0.3)]"
                  : "bg-white text-warm-600 hover:bg-warm-50 border border-warm-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn("group cursor-pointer", item.span)}
                onClick={() => setSelectedImage(item)}
              >
                <div
                  className={cn(
                    "relative h-64 sm:h-full min-h-[16rem] rounded-xl overflow-hidden bg-gradient-to-br",
                    item.gradient
                  )}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                      {item.emoji}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-burgundy-900/0 group-hover:bg-burgundy-900/60 transition-all duration-500 flex items-end p-5">
                    <p className="text-white font-serif text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-dramatic"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-soft"
              >
                <X className="w-5 h-5 text-warm-700" />
              </button>
              <div
                className={cn(
                  "h-72 sm:h-96 bg-gradient-to-br flex items-center justify-center",
                  selectedImage.gradient
                )}
              >
                <span className="text-8xl">{selectedImage.emoji}</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-burgundy-900 mb-2">
                  {selectedImage.label}
                </h3>
                <p className="text-warm-500 text-sm capitalize">
                  {selectedImage.category.join(" & ")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
