import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  "@id": `${SITE_URL}/#business`,
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.76703052729707,
    longitude: 20.517446634745358,
  },
  hasMap: SOCIAL.gmb,
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
  areaServed: [
    { "@type": "City", "name": "Beograd", "sameAs": "https://www.wikidata.org/wiki/Q3711" },
    { "@type": "AdministrativeArea", "name": "Voždovac" },
    { "@type": "AdministrativeArea", "name": "Čukarica" },
    { "@type": "AdministrativeArea", "name": "Novi Beograd" },
    { "@type": "AdministrativeArea", "name": "Savski Venac" },
    { "@type": "AdministrativeArea", "name": "Stari Grad" },
    { "@type": "AdministrativeArea", "name": "Palilula" },
    { "@type": "AdministrativeArea", "name": "Zvezdara" },
    { "@type": "AdministrativeArea", "name": "Rakovica" },
    { "@type": "AdministrativeArea", "name": "Vračar" },
    { "@type": "AdministrativeArea", "name": "Zemun" },
    { "@type": "AdministrativeArea", "name": "Grocka" },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17825755545"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17825755545');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17825755545/BiBvCK_K-Y4cEJnj_bNC',
                'value': 1.0,
                'currency': 'RSD',
                'event_callback': callback
              });
              return false;
            }

            document.addEventListener('click', function(e) {
              var target = e.target.closest('a[href^="tel:"]');
              if (target) {
                gtag_report_conversion();
              }
            });
          `}
        </Script>
        <JsonLd data={localBusinessSchema} />
        {children}
        <CircleText />
      </body>
    </html>
  );
}
