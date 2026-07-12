import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["dubinsko-polusuvo-ciscenje"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/dubinsko-polusuvo-ciscenje/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/dubinsko-polusuvo-ciscenje/`,
    images: [
      { url: `${SITE_URL}/dubinsko-polusuvo-ciscenje-1.webp`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/dubinsko-polusuvo-ciscenje/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/dubinsko-polusuvo-ciscenje/` },
  ],
};

export default function DubinskoPolusuvoPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Dubinsko polusuvo čišćenje" }]} />
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
                Ova vrsta čišćenja primenjuje se najčešće na velikim površinama podnih prostirki koje se nalaze u stambenom ili poslovnom prostoru i nije ih moguće doneti u servis — čišćenje obavljamo direktno na licu mesta, kod Vas. Za ovu vrstu čišćenja koriste se ekološke, PH neutralne hemikalije.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Čišćenje na licu mesta, bez transporta</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Za razliku od{" "}
                <Link href="/masinsko-pranje-tepiha/" className="text-gold-text hover:text-gold-dark underline">mašinskog dubinskog pranja</Link>{" "}
                koje se radi u našem servisu nakon preuzimanja tepiha, dubinsko polusuvo čišćenje obavljamo
                direktno na adresi, jer su podne prostirke koje pokrivamo prevelike ili fiksirane za prostor da
                bi se transportovale.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Pored ove usluge, Tepih Servis Andrić pruža i stručno čišćenje tepiha,{" "}
                <Link href="/dubinsko-ciscenje-namestaja/" className="text-gold-text hover:text-gold-dark underline">mašinsko dubinsko čišćenje nameštaja</Link>,
                čišćenje i pranje dušeka,{" "}
                <Link href="/pranje-decijah-kolica/" className="text-gold-text hover:text-gold-dark underline">hemijsko čišćenje dečijih kolica</Link>,{" "}
                <Link href="/opsivanje-tepiha/" className="text-gold-text hover:text-gold-dark underline">opšivanje tepiha</Link>{" "}
                i{" "}
                <Link href="/zamena-resa/" className="text-gold-text hover:text-gold-dark underline">zamenu resa</Link>.
                Kao Vaše komšije, razumemo kako cenite svoje dragocenosti i svoj dom.
              </p>

              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { src: "/dubinsko-polusuvo-ciscenje-1.webp", alt: "Dubinsko polusuvo čišćenje na licu mesta" },
                    { src: "/dubinsko-polusuvo-ciscenje-2.webp", alt: "Čišćenje velike podne prostirke u Beogradu" },
                  ].map(({ src, alt }) => (
                    <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
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
                <Image
                  src="/dubinsko-polusuvo-ciscenje-3.jpg"
                  alt="Tepih servis Andrić — polusuvo čišćenje prostirke"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  sizes="100vw"
                />
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
