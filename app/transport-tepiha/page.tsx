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
    images: [OG_IMAGE_DEFAULT],
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
                Tepih Servis Andrić nudi čišćenje tepiha koje se suočava sa dubokom nečistoćom i prašinom područja sa velikim prometom. Korišćenjem visoko-kvalitetnih, ekološki prihvatljivih proizvoda i naprednih tehnika pranja i čišćenja možemo Vam pomoći da sačuvate svetao izgled, boju i životni vek Vašeg tepiha.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trudimo se da osiguramo potpuno zadovoljstvo kupaca od trenutka početnih konsultacija do završetka Vašeg projekta, vodeći računa da Vas usput edukujemo o pranju tepiha.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  "/transport-i-dostava-tepiha-beograd-01.jpg",
                  "/transport-i-dostava-tepiha-beograd-02f.jpg",
                  "/transport-i-dostava-tepiha-beograd-03f.jpg",
                  "/transport-i-dostava-tepiha-beograd-04f.jpg",
                  "/transport-i-dostava-tepiha-beograd-05f.jpg",
                  "/transport-i-dostava-tepiha-beograd-06f.jpg",
                  "/transport-i-dostava-tepiha-beograd-07f.jpg",
                ].map((src) => (
                  <div key={src} className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Transport i dostava tepiha Beograd"
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
