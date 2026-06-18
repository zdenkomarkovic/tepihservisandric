import type { Metadata } from "next";
import Link from "next/link";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
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
            <PriceTable
              title="Pranje tepiha"
              href="/pranje-tepiha/"
              rows={[
                {
                  label: "Mašinsko dubinsko čišćenje tepiha sa ispiranjem do bistre kapi",
                  unit: "m²",
                  price: "480 RSD",
                },
                {
                  label:
                    "Hemijsko pranje tepiha polu suvo na bazi pene (kožni, persijski, svileni, buhare)",
                  unit: "m²",
                  price: "600 RSD",
                },
              ]}
            />

            <PriceTable
              title="Mašinsko dubinsko čišćenje nameštaja"
              href="/ciscenje-mebl-namestaja/"
              rows={[
                { label: "Pranje stolice", unit: "1 kom", price: "300 - 500 RSD" },
                { label: "Pranje taburea", unit: "1 kom", price: "300 - 600 RSD" },
                { label: "Jastuk manji", unit: "1 kom", price: "300 RSD" },
                { label: "Jastuk veći", unit: "1 kom", price: "500 RSD" },
                { label: "Pranje fotelje", unit: "1 kom", price: "1.200 RSD" },
                { label: "Pranje dvoseda", unit: "1 kom", price: "2.400 RSD" },
                { label: "Pranje troseda", unit: "1 kom", price: "3.600 RSD" },
                {
                  label: "Pranje ugaone garniture",
                  unit: "Po jednom sednom mestu",
                  price: "1.200 RSD",
                },
              ]}
            />

            <PriceTable
              title="Čišćenje i pranje dušeka"
              rows={[
                { label: "Single", unit: "1 kom", price: "1.800 RSD" },
                { label: "Bračni", unit: "1 kom", price: "2.800 RSD" },
                { label: "Dečiji", unit: "1 kom", price: "1.200 RSD" },
              ]}
            />

            <PriceTable
              title="Hemijsko čišćenje dečijih kolica"
              href="/pranje-decijah-kolica/"
              rows={[
                {
                  label: "Hemijsko čišćenje dečijih kolica sa transportom",
                  unit: "1 kom",
                  price: "3.000 RSD",
                },
                { label: "Auto sedište", unit: "1 kom", price: "1.500 RSD" },
                { label: "Nosiljka", unit: "1 kom", price: "1.500 RSD" },
              ]}
            />

            <PriceTable
              title="Opšivanje tepiha"
              href="/opsivanje-tepiha/"
              rows={[
                { label: "Opšivanje tepiha", unit: "Po metru dužnom", price: "320 RSD" },
                {
                  label: "Opšivanje tepiha sa trakom od tepiha",
                  unit: "Po metru dužnom",
                  price: "700 RSD",
                },
              ]}
            />

            <PriceTable
              title="Zamena resa ručno čvorovanje"
              href="/zamena-resa/"
              rows={[
                {
                  label: "Pamučne",
                  price: "1.000 RSD",
                  note: "Rese se rade u dužini od 1 do 10 cm",
                },
                {
                  label: "Svilene",
                  price: "1.700 RSD",
                  note: "Rese se rade u dužini od 1 do 10 cm",
                },
                {
                  label: "Vunene",
                  price: "1.600 RSD",
                  note: "Rese se rade u dužini od 1 do 10 cm",
                },
              ]}
            />

            <PriceTable
              title="Zamena resa sa trakom za ojačavanje pri zameni resa"
              href="/zamena-resa/"
              rows={[
                { label: "Pamučne", unit: "1 m", price: "1.400 RSD" },
                { label: "Svilene", unit: "1 m", price: "2.000 RSD" },
                { label: "Vunene", unit: "1 m", price: "1.900 RSD" },
              ]}
            />

            <p className="text-gray-500 text-sm mt-4">Cenovnik je važeći od 02.06.2026.</p>
          </div>
        </div>
        <LokacijeSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
