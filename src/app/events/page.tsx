import type { Metadata } from "next";
import { EventsHero } from "@/components/events/events-hero";
import { EventsList } from "@/components/events/events-list";
import { events } from "@/data/events";

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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Events",
      item: `${siteUrl}/events`,
    },
  ],
};

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
      name: "Cafe Della Nucci",
      address: {
        "@type": "PostalAddress",
        streetAddress: "HA-113, Sector 104, Hazipur",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Cafe Della Nucci",
      url: siteUrl,
    },
    image: `${siteUrl}/images/og/og-default.avif`,
  };
});

function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.trim().split(" ");
  const [rawHours, minutes] = time.split(":");
  let hours = parseInt(rawHours, 10);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {eventsJsonLd.map((eventLd, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
        />
      ))}
      <EventsHero />
      <EventsList />
    </>
  );
}
