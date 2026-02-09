import type { Metadata } from "next";
import { playfair, inter, cormorant } from "@/styles/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd, restaurantSchema, organizationSchema, websiteSchema } from "@/config/schema";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dellanucci.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cafe Della Nucci — Italian Cafe & Restaurant in Sector 104, Noida",
    template: "%s | Cafe Della Nucci",
  },
  description:
    "Experience Italian romance at Cafe Della Nucci in Sector 104, Noida. Authentic Italian coffee, wood-fired pizzas, fresh pasta & warm ambiance. Pet friendly, outdoor seating, drive-through coffee. Open daily 11:30 AM – 11 PM.",
  keywords: [
    "cafe noida",
    "italian restaurant noida",
    "pizza noida sector 104",
    "coffee shop noida",
    "della nucci",
    "romantic cafe noida",
    "pet friendly cafe noida",
    "best cafe sector 104",
    "italian cafe noida",
    "wood fired pizza noida",
    "pasta restaurant noida",
    "cafe with outdoor seating noida",
    "drive through coffee noida",
    "karaoke cafe noida",
    "family restaurant sector 104",
    "cafe della nucci menu",
    "best restaurant sector 104 noida",
  ],
  authors: [{ name: "Cafe Della Nucci" }],
  creator: "Cafe Della Nucci",
  publisher: "Cafe Della Nucci",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Cafe Della Nucci",
    title: "Cafe Della Nucci — Italian Cafe & Restaurant in Noida",
    description:
      "Where bold flavours meet warm hearts. Authentic Italian cuisine, wood-fired pizzas, specialty coffee & romantic ambiance in Sector 104, Noida. Open daily.",
    images: [
      {
        url: "/images/og/og-default.avif",
        width: 1200,
        height: 630,
        alt: "Cafe Della Nucci — Italian Cafe & Restaurant in Sector 104, Noida",
        type: "image/avif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Della Nucci — Italian Cafe & Restaurant in Noida",
    description:
      "Where bold flavours meet warm hearts. Authentic Italian cuisine, wood-fired pizzas & specialty coffee in Sector 104, Noida.",
    images: ["/images/og/og-default.avif"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <JsonLd data={restaurantSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
