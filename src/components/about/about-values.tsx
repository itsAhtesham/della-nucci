"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Heart, Coffee, Leaf, Users, Sparkles, Globe } from "lucide-react";

const values = [
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
];

export function AboutValues() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Stand For"
          title="Our Values"
          subtitle="The principles that guide everything we do at Della Nucci"
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-7 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy-50 flex items-center justify-center mb-5 group-hover:bg-burgundy-900 transition-colors duration-500">
                <value.icon className="w-6 h-6 text-burgundy-900 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-burgundy-900 mb-3">
                {value.title}
              </h3>
              <p className="text-warm-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
