import type { Metadata } from "next";
import { EventsHero } from "@/components/events/events-hero";
import { EventsList } from "@/components/events/events-list";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming events at Cafe Della Nucci — karaoke nights, pizza workshops, live music, pet brunches & more in Sector 104, Noida.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsList />
    </>
  );
}
