import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["opsivanje-etisona"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/opsivanje-etisona/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/opsivanje-etisona/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/opsivanje-etisona/`,
  provider: {
    "@type": "Organization",
    name: "Tepih Servis Andrić Beograd",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/opsivanje-etisona/` },
  ],
};

export default function OpsivanjeEtisonaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Opšivanje etisona" }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{meta.pageH1}</h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <article className="bg-white rounded-xl p-6 md:p-10 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Itison je traka tepiha koja se najčešće koristi u hodnicima, na stepenicama i ulazima, i
                prodaje se i opšiva po dužnom metru. Pošto se najčešće seče na meru prostora u kome se
                postavlja, oba kraja moraju biti pažljivo opšivena kako ne bi došlo do rasparanja ili
                paranja materijala.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Sečenje i opšivanje itisona po meri</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Itison sečemo na tačnu dužinu Vašeg hodnika, stepeništa ili ulaza, a zatim opšivamo oba kraja
                da bi se sprečilo rasparanje. Opšivanje se radi i kada klijent želi promenu boje postojećih
                ivica, ili nakon{" "}
                <Link href="/zamena-resa/" className="text-gold hover:text-gold-dark underline">zamene resa</Link>,
                ukoliko ih itison ima.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Gde se itisoni najčešće koriste</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Itisoni se najčešće postavljaju u hodnicima, na stepenicama, ispred ulaznih vrata i u drugim
                prostorima sa velikim prometom, gde štite pod i dodaju estetsku vrednost prostoru. Za
                opšivanje celih tepiha pogledajte stranicu{" "}
                <Link href="/opsivanje-tepiha/" className="text-gold hover:text-gold-dark underline">Opšivanje tepiha</Link>.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { src: "/opsivanje-tepiha.jpg", alt: "Opšivanje itisona — Tepih servis Andrić" },
                  { src: "/opsivanje-tepiha-2.jpg", alt: "Proces sečenja i opšivanja itisona po dužnom metru" },
                ].map(({ src, alt }) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* Footer link */}
        <div className="bg-cream py-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              Profesionalni Tepih Servis Andrić
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
