import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["susenje-tepiha"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/susenje-tepiha/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/susenje-tepiha/`,
    images: [
      { url: `${SITE_URL}/susenje-tepiha-4.png`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/susenje-tepiha/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/susenje-tepiha/` },
  ],
};

export default function SusenjeTepihaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Sušenje tepiha" }]} />
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
                Tepih može zarobiti zagađivače u zatvorenom prostoru poput prašine, prljavštine i različitih
                mirisa. To može dovesti do toga da deca i odrasli pate od povećanog rizika od astme ili
                alergija. Redovno pranje tepiha može pomoći u prevenciji ovoga, međutim, profesionalne usluge
                čišćenja tepiha pomoći će da se osigura da tepih ne sadrži prljavštinu ili druge alergene.
                Pomoću ekološke usluge čišćenja, Tepih Servis Andrić uklanja zagađivače, oslobađa tepih od
                grinja i sprečava rast plesni, a istovremeno se brine o životnoj sredini. Pre sušenja, tepih
                prolazi kroz{" "}
                <Link href="/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/" className="text-gold hover:text-gold-dark underline">pranje i ispiranje centrifugom</Link>,
                čime se uklanja višak vode pre samog sušenja.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje i susenje tepiha u komorama</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                U zavisnosti od vremenskih prilika tepihe sušimo u najboljim uslovima, i u stanju smo da postignemo apsolutnu suvoću tepiha bez trunke vlage.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li className="text-gray-700 mb-2">Ukoliko je letnji period tepisi se suše na otvorenom, na prirodan način.</li>
                <li className="text-gray-700 mb-2">Ukoliko je loše vreme, tepisi se suše u komorama za sušenje gde su visoke temperature uz odgovarajući protok i sušenje vazduha.</li>
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { src: "/susenje-tepiha-4.png", alt: "Sušenje tepiha u komori — Tepih servis Andrić" },
                  { src: "/susenje-tepiha-3.png", alt: "Komora za sušenje tepiha u Beogradu" },
                  { src: "/susenje-tepiha-2.png", alt: "Proces sušenja tepiha vrelim vazduhom" },
                  { src: "/susenje-tepiha-1.png", alt: "Tepih spreman nakon sušenja u komori" },
                ].map(({ src, alt }) => (
                  <div key={src} className="relative aspect-video rounded-xl overflow-hidden">
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
