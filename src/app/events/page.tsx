import type { Metadata } from "next";
import { EventsHero } from "@/components/events/events-hero";
import { EventsList } from "@/components/events/events-list";
import { JsonLd, getBreadcrumbSchema } from "@/config/schema";
import { events } from "@/data/events";
import { SITE_CONFIG } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  title: "Events — Karaoke, Workshops, Live Music & More",
  description:
    "Discover upcoming events at Cafe Della Nucci — karaoke nights, pizza making workshops, live acoustic music, pet brunches, latte art masterclasses & more in Sector 104, Noida.",
  alternates: {
    canonical: `${siteUrl}/events`,
  },
  openGraph: {
    title: "Events — Cafe Della Nucci",
    description:
      "Karaoke Saturdays, pizza workshops, live music, pet brunches & more. See what's happening at Della Nucci.",
    url: `${siteUrl}/events`,
    images: [
      {
        url: "/images/og/og-default.avif",
        width: 1200,
        height: 630,
        alt: "Events at Cafe Della Nucci",
      },
    ],
  },
};

function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.trim().split(" ");
  const [rawHours, minutes] = time.split(":");
  let hours = parseInt(rawHours, 10);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

const eventsJsonLd = events.map((event) => {
  const [startTime] = event.time.split(" — ");
  const eventDateTime = `${event.date}T${convertTo24Hour(startTime)}:00+05:30`;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.longDescription || event.description,
    startDate: eventDateTime,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: SITE_CONFIG.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: siteUrl,
    },
    image: `${siteUrl}/images/og/og-default.avif`,
  };
});

export default function EventsPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home" }, { name: "Events", path: "/events" }])} />
      {eventsJsonLd.map((eventLd, index) => (
        <JsonLd key={index} data={eventLd} />
      ))}
      <EventsHero />
      <EventsList />
    </>
  );
}
