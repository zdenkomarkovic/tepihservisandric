import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["zamena-resa"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/zamena-resa/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/zamena-resa/`,
    images: [
      { url: `${SITE_URL}/zamena-resa-pre.jpg`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/zamena-resa/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/zamena-resa/` },
  ],
};

export default function ZamenaResaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Zamena resa" }]} />
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
                Ukoliko su Vam rese na tepihu oštećene ili dotrajale, možemo ih zameniti novim kako bi tepih
                izgledao punije i novije. Nove rese se postavljaju i iz estetskih razloga, na tepihe gde rese
                nisu šivene fabrički.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Materijali resa</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naš tepih servis nudi rese od tri vrste materijala: pamučne, vunene i svilene. Birate prema
                izgledu i materijalu Vašeg tepiha, a tačne cene po vrsti materijala možete pogledati na
                stranici{" "}
                <Link href="/cenovnik/" className="text-gold-text hover:text-gold-dark underline">Cenovnik</Link>.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "/zamena-resa-pre.jpg",
                  "/zamena-resa-posle.jpg",
                ].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Zamena resa na tepihu"
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
