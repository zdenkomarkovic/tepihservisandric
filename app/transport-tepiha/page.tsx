import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["transport-tepiha"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/transport-tepiha/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/transport-tepiha/`,
    images: [
      { url: `${SITE_URL}/transport-i-dostava-tepiha-beograd-01.jpg`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/transport-tepiha/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/transport-tepiha/` },
  ],
};

export default function TransportTepihaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Transport tepiha" }]} />
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
                Tepihe ne morate sami nositi u servis — Tepih servis Andrić dolazi na Vašu adresu, preuzima
                tepihe i vraća ih čiste, osvežene i spremne za upotrebu. Termin preuzimanja dogovaramo
                telefonom, u vreme koje Vama odgovara.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Besplatna dostava i preuzimanje</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Za lokacije u Zoni 1 (Voždovac, Veliki Mokri Lug, Konjarnik i okolina) transport je potpuno
                besplatan, bez ograničenja kvadrature. Za lokacije u Zoni 2 minimalna kvadratura za
                preuzimanje je 6m². Pogledajte sve lokacije koje pokrivamo na stranici{" "}
                <Link href="/kontakt/" className="text-gold-text hover:text-gold-dark underline">Kontakt i lokacije</Link>.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kako izgleda transport</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naša dostavna vozila pažljivo transportuju Vaše tepihe, uz odgovarajuću zaštitu tokom puta do
                servisa i nazad. Nakon{" "}
                <Link href="/pranje-tepiha/" className="text-gold-text hover:text-gold-dark underline">pranja i čišćenja</Link>,
                tepih vraćamo na istu adresu, u dogovoreno vreme.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  { src: "/transport-i-dostava-tepiha-beograd-01.jpg", alt: "Transport tepiha — Tepih servis Andrić" },
                  { src: "/transport-i-dostava-tepiha-beograd-02f.jpg", alt: "Preuzimanje tepiha sa adrese u Beogradu" },
                  { src: "/transport-i-dostava-tepiha-beograd-03f.jpg", alt: "Dostavno vozilo tepih servisa Andrić" },
                  { src: "/transport-i-dostava-tepiha-beograd-04f.jpg", alt: "Utovar tepiha za transport" },
                  { src: "/transport-i-dostava-tepiha-beograd-05f.jpg", alt: "Bezbedan transport tepiha" },
                  { src: "/transport-i-dostava-tepiha-beograd-06f.jpg", alt: "Dostava opranog tepiha na adresu" },
                  { src: "/transport-i-dostava-tepiha-beograd-07f.jpg", alt: "Tepih servis Andrić — vozni park" },
                ].map(({ src, alt }) => (
                  <div key={src} className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
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
