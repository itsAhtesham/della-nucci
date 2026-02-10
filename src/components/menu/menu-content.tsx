"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { menuSections } from "@/data/menu";
import { formatCurrency, cn } from "@/lib/utils";
import { isVeg, DIETARY_FILTERS } from "@/lib/menu-utils";
import { CATEGORY_EMOJIS, CATEGORY_GRADIENTS } from "@/config/menu-display";
import { useMenuFilter } from "@/hooks/useMenuFilter";

export function MenuContent() {
  const {
    activeCategory,
    setActiveCategory,
    activeDietaryFilter,
    toggleDietaryFilter,
    searchQuery,
    setSearchQuery,
    filteredSections,
    totalItems,
  } = useMenuFilter(menuSections);

  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
          <input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-white rounded-full border border-warm-200 text-warm-700 placeholder:text-warm-400 focus:outline-none focus:border-burgundy-800 focus:ring-2 focus:ring-burgundy-900/10 transition-all text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300",
              activeCategory === "all"
                ? "bg-burgundy-900 text-white shadow-[0_4px_14px_rgba(91,26,26,0.3)]"
                : "bg-white text-warm-600 hover:bg-warm-50 border border-warm-200"
            )}
          >
            All
          </button>
          {menuSections.map((section) => (
            <button
              key={section.category}
              onClick={() => setActiveCategory(section.category)}
              className={cn(
                "shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5",
                activeCategory === section.category
                  ? "bg-burgundy-900 text-white shadow-[0_4px_14px_rgba(91,26,26,0.3)]"
                  : "bg-white text-warm-600 hover:bg-warm-50 border border-warm-200"
              )}
            >
              <span>{CATEGORY_EMOJIS[section.category]}</span>
              <span className="hidden sm:inline">{section.title}</span>
              <span className="sm:hidden">{section.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Dietary Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {DIETARY_FILTERS.map(({ tag, label, icon: Icon }) => (
            <button
              key={tag}
              onClick={() => toggleDietaryFilter(tag)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-300",
                activeDietaryFilter === tag
                  ? "bg-burgundy-100 text-burgundy-900 border border-burgundy-300"
                  : "bg-cream-50 text-warm-500 hover:bg-cream-200 border border-warm-200"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-sm text-warm-400 mb-10">
          Showing {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>

        {/* Menu Sections */}
        <AnimatePresence mode="wait">
          {filteredSections.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <p className="text-5xl mb-4">🍽️</p>
              <p className="font-serif text-xl text-burgundy-900 mb-2">
                No items found
              </p>
              <p className="text-warm-500 text-sm">
                Try adjusting your search or filters
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${activeDietaryFilter}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-20"
            >
              {filteredSections.map((section) => (
                <div key={section.category}>
                  {/* Section Header */}
                  <div className="text-center mb-10">
                    <span className="text-4xl mb-3 block">
                      {CATEGORY_EMOJIS[section.category]}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-900 mb-2">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="text-warm-500 text-sm italic font-accent">
                        {section.subtitle}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <span className="block w-12 h-px bg-burgundy-900/20" />
                      <span className="block w-2 h-2 rounded-full bg-burgundy-900" />
                      <span className="block w-12 h-px bg-burgundy-900/20" />
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, i) => {
                      const vegStatus = isVeg(item.tags);
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="group"
                        >
                          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                            {/* Image */}
                            <div
                              className={`relative h-40 bg-gradient-to-br ${
                                CATEGORY_GRADIENTS[item.category] || "from-cream-100 to-cream-200"
                              } flex items-center justify-center`}
                            >
                              <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
                                {CATEGORY_EMOJIS[item.category] || "🍽️"}
                              </span>

                              {/* Tags */}
                              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                {item.tags.includes("best-seller") && (
                                  <span className="px-2 py-0.5 bg-burgundy-900 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                                    Bestseller
                                  </span>
                                )}
                                {item.tags.includes("chef-special") && (
                                  <span className="px-2 py-0.5 bg-sage-400 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                                    Chef&apos;s Pick
                                  </span>
                                )}
                                {item.tags.includes("new") && (
                                  <span className="px-2 py-0.5 bg-peach-300 text-burgundy-900 text-[10px] font-semibold uppercase tracking-wider rounded-full">
                                    New
                                  </span>
                                )}
                              </div>

                              {/* Dietary */}
                              <div className="absolute top-3 right-3">
                                <div
                                  className={cn(
                                    "w-5 h-5 rounded-sm border-2 flex items-center justify-center",
                                    vegStatus ? "border-green-600" : "border-red-600"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "w-2.5 h-2.5 rounded-full",
                                      vegStatus ? "bg-green-600" : "bg-red-600"
                                    )}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                              <h3 className="font-serif text-lg font-bold text-burgundy-900 mb-1.5 group-hover:text-burgundy-700 transition-colors">
                                {item.name}
                              </h3>
                              <p className="text-warm-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between pt-3 border-t border-warm-100">
                                <span className="font-serif text-lg font-bold text-burgundy-900">
                                  {formatCurrency(item.price)}
                                </span>
                                <div className="flex items-center gap-2">
                                  {item.tags.includes("spicy") && (
                                    <span className="text-xs text-warm-400">🌶️ Spicy</span>
                                  )}
                                  {item.tags.includes("vegan") && (
                                    <span className="text-xs text-sage-500">🌱 Vegan</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
