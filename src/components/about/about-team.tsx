"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren } from "@/components/animations/stagger-children";
import type { TeamMember } from "@/types";

const team: TeamMember[] = [
  {
    id: "team-1",
    name: "The Founders",
    role: "Heart & Soul",
    bio: "The visionaries who dreamt of bringing Italian warmth to Noida. Their passion for great food and hospitality is the foundation of Della Nucci.",
  },
  {
    id: "team-2",
    name: "Our Kitchen Team",
    role: "Culinary Artists",
    bio: "A dedicated team of chefs who pour their creativity into every dish. From hand-tossed pizzas to delicate desserts, they make magic happen daily.",
  },
  {
    id: "team-3",
    name: "Our Baristas",
    role: "Coffee Craftsmen",
    bio: "Expertly trained in the art of espresso, our baristas turn every cup into a masterpiece. They know their beans like the back of their hand.",
  },
  {
    id: "team-4",
    name: "Front of House",
    role: "Hospitality Heroes",
    bio: "The smiling faces that welcome you, remember your favourite order, and ensure every visit feels special. They make Della Nucci feel like home.",
  },
];

export function AboutTeam() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Family"
          title="Meet Our Team"
          subtitle="The passionate people behind every cup and every plate"
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Avatar placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-peach-100 to-cream-200 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-burgundy-900/10 flex items-center justify-center">
                  <span className="font-serif text-burgundy-900/40 text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-serif text-lg font-bold text-burgundy-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-burgundy-600 text-xs font-semibold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-warm-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
