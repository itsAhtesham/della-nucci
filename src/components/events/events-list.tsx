"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, Tag } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";

const eventEmojis: Record<string, string> = {
  Music: "🎵",
  Workshop: "👨‍🍳",
  Food: "🍕",
  Coffee: "☕",
  Pets: "🐾",
  Wine: "🍷",
  Live: "🎸",
  Fun: "🎉",
  Interactive: "🤝",
  Romantic: "💕",
  Community: "👨‍👩‍👧‍👦",
  Brunch: "🥐",
  Weekly: "📅",
  Sophisticated: "✨",
};

export function EventsList() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Upcoming"
          title="Don't Miss Out"
          subtitle="Mark your calendars — exciting events are coming your way"
        />

        <div ref={ref} className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Date Column */}
                  <div className="md:w-48 lg:w-56 bg-gradient-to-br from-burgundy-900 to-burgundy-800 p-6 flex flex-row md:flex-col items-center justify-center gap-4 md:gap-2 text-center shrink-0">
                    <div>
                      <p className="font-serif text-3xl sm:text-4xl font-bold text-white">
                        {new Date(event.date).getDate()}
                      </p>
                      <p className="text-peach-200 text-sm font-semibold uppercase tracking-wider">
                        {new Date(event.date).toLocaleString("en-IN", {
                          month: "short",
                        })}
                      </p>
                    </div>
                    {event.featured && (
                      <span className="px-3 py-1 bg-peach-200 text-burgundy-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-cream-100 text-warm-600 text-xs font-medium rounded-full"
                        >
                          <span>{eventEmojis[tag] || "📌"}</span>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-900 mb-3 group-hover:text-burgundy-700 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-warm-500 text-sm leading-relaxed mb-4">
                      {event.longDescription || event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-warm-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-soft max-w-2xl mx-auto">
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="font-serif text-2xl font-bold text-burgundy-900 mb-3">
              Want to Host an Event?
            </h3>
            <p className="text-warm-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Cafe Della Nucci is the perfect venue for birthdays, corporate meetups,
              and private celebrations. Get in touch to plan yours!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy-900 text-white font-semibold text-sm tracking-wider uppercase hover:bg-burgundy-800 transition-all duration-300 shadow-[0_4px_14px_rgba(91,26,26,0.3)]"
            >
              Contact Us
              <Tag className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
