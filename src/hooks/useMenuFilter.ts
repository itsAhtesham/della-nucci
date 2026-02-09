"use client";

import { useState, useMemo } from "react";
import type { MenuCategory, DietaryTag, MenuSection } from "@/types";

export function useMenuFilter(sections: MenuSection[]) {
  const [activeCategory, setActiveCategory] = useState<"all" | MenuCategory>("all");
  const [activeDietaryFilter, setActiveDietaryFilter] = useState<DietaryTag | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    let result = activeCategory === "all"
      ? sections
      : sections.filter((s) => s.category === activeCategory);

    if (activeDietaryFilter) {
      result = result
        .map((s) => ({
          ...s,
          items: s.items.filter((item) => item.tags.includes(activeDietaryFilter)),
        }))
        .filter((s) => s.items.length > 0);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result
        .map((s) => ({
          ...s,
          items: s.items.filter(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q)
          ),
        }))
        .filter((s) => s.items.length > 0);
    }

    return result;
  }, [sections, activeCategory, activeDietaryFilter, searchQuery]);

  const totalItems = filteredSections.reduce((sum, s) => sum + s.items.length, 0);

  const toggleDietaryFilter = (tag: DietaryTag) => {
    setActiveDietaryFilter(activeDietaryFilter === tag ? null : tag);
  };

  return {
    activeCategory,
    setActiveCategory,
    activeDietaryFilter,
    toggleDietaryFilter,
    searchQuery,
    setSearchQuery,
    filteredSections,
    totalItems,
  };
}
