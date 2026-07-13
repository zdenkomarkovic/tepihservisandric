import type { Metadata } from "next";
import Link from "next/link";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { PRICE_TABLES, buildOfferCatalogSchema } from "./priceData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { LokacijeSection } from "@/components/sections/LokacijeSection";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = INFO_META["cenovnik"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/cenovnik/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/cenovnik/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

function PriceTable({
  title,
  href,
  rows,
}: {
  title: string;
  href?: string;
  rows: { label: string; unit?: string; price: string; note?: string }[];
}) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-white bg-navy px-5 py-3 rounded-t-xl">
        {href ? <Link href={href} className="text-white">{title}</Link> : title}
      </h2>
      <div className="border border-gray-200 rounded-b-xl overflow-hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-5 py-3 text-sm gap-4 ${
              i % 2 === 0 ? "bg-white" : "bg-cream"
            }`}
          >
            <span className="text-gray-700 flex-1">{row.label}</span>
            <div className="text-right shrink-0">
              <span className="font-bold text-navy">{row.price}</span>
              {row.unit && <span className="text-gray-600 text-xs ml-1">/ {row.unit}</span>}
              {row.note && <p className="text-gray-600 text-xs mt-0.5">{row.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/cenovnik/` },
  ],
};

const offerCatalogSchema = buildOfferCatalogSchema();

export default function CenovnikPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Cenovnik</span>
            <Breadcrumb items={[{ label: "Cenovnik" }]} />
          </div>
        </div>

        {/* Page header */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Cenovnik usluga pranja tepiha</h1>
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
              Verujemo u transparentne cene bez skrivenih troškova. U nastavku pogledajte kompletan
              cenovnik svih usluga našeg tepih servisa u Beogradu — od pranja tepiha i nameštaja, do
              opšivanja i zamene resa. Za tačnu procenu na osnovu veličine i vrste Vašeg tepiha,
              pozovite nas ili nam pošaljite fotografiju.
            </p>
          </div>
        </div>

        {/* Price tables */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            {PRICE_TABLES.map((table) => (
              <PriceTable key={table.title} {...table} />
            ))}

            <p className="text-gray-500 text-sm mt-4">Cenovnik je važeći od 02.06.2026.</p>
          </div>
        </div>
        <LokacijeSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={offerCatalogSchema} />
    </>
  );
}
