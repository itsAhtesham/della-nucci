"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { COMPANY_VALUES } from "@/data/company-values";

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
          {COMPANY_VALUES.map((value) => (
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
