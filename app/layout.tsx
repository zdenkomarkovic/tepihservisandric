import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SCHEMA, CONTACT, SOCIAL } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { CircleText } from "@/components/ui/CircleText";
import { HOME_META } from "@/lib/siteData";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_META.title,
  description: HOME_META.description,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/tepih-servis-andric-10.jpg",
        width: 640,
        height: 480,
        alt: "Mašine za pranje tepiha — Tepih Servis Andrić",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CarpetCleaner",
  name: SCHEMA.name,
  url: SCHEMA.url,
  telephone: SCHEMA.telephone,
  email: CONTACT.email,
  priceRange: SCHEMA.priceRange,
  foundingDate: SCHEMA.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: SCHEMA.address.streetAddress,
    addressLocality: SCHEMA.address.addressLocality,
    postalCode: SCHEMA.address.postalCode,
    addressCountry: SCHEMA.address.addressCountry,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  image: `${SITE_URL}/tepih-servis-andric-10.jpg`,
  sameAs: [
    SOCIAL.facebook,
    SOCIAL.instagram,
    SOCIAL.youtube,
    SOCIAL.gmb,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className="font-[family-name:var(--font-inter)] antialiased text-gray-800">
        <JsonLd data={localBusinessSchema} />
        {children}
        <CircleText />
      </body>
    </html>
  );
}
