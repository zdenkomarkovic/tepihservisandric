import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["tresenje-tepiha"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/tresenje-tepiha/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/tresenje-tepiha/`,
    images: [
      { url: `${SITE_URL}/tepih-servis-andric-beograd.jpg`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/tresenje-tepiha/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/tresenje-tepiha/` },
  ],
};

export default function TresenjeTepihaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Trešenje tepiha" }]} />
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
                Trešenje služi za detaljno čišćenje tepiha od različitih vrsta nečistoća, prašine, peska i
                svih drugih mrva. Ovaj proces vršimo uz pomoć automatizovanih mašina za trešenje tepiha, nakon
                čega je tepih zaista očišćen i spreman za pranje.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Sledeći korak: pranje tepiha</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nakon trešenja, tepih ide na{" "}
                <Link href="/masinsko-pranje-tepiha/" className="text-gold-text hover:text-gold-dark underline">mašinsko dubinsko pranje</Link>,
                gde se uklanjaju i najsitnije fleke i nečistoće koje trešenje ne može da otkloni.
              </p>

              <div className="mt-8 space-y-4">
                <Image
                  src="/tepih-servis-andric-beograd.jpg"
                  alt="Mašina za trešenje tepiha — Tepih servis Andrić"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  sizes="100vw"
                />
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { src: "/tresenje-tepiha-1.jpg", alt: "Proces trešenja tepiha u Beogradu" },
                    { src: "/tresenje-tepiha-2.jpg", alt: "Uklanjanje prašine trešenjem tepiha" },
                    { src: "/tresenje-tepiha-3.jpg", alt: "Tepih nakon trešenja, spreman za pranje" },
                  ].map(({ src, alt }) => (
                    <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
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
