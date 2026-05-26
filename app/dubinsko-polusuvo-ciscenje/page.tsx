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
    images: [OG_IMAGE_DEFAULT],
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
                Ova vrsta čišćenja primenjuje se najčešće na velikim površinama podnih prostirki koje se nalaze u stambenom ili poslovnom prostoru i nije ih moguće doneti u servis. Za ovu vrstu pranje koriste se ekološke PH neutralne hemikalije.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tepih Servis Andrić pruža stručno čišćenje tepiha, mašinsko dubinsko čišćenje nameštaja, čišćenje i pranje dušeka, hemijsko čišćenje dečijih kolica, opšivanje tepiha i zamena resa. Kao Vaše komšije, razumemo kako cenite svoje dragocenosti i svoj dom.
              </p>

              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "/dubinsko-polusuvo-ciscenje-1.png",
                    "/dubinsko-polusuvo-ciscenje-2.png",
                  ].map((src) => (
                    <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt="Dubinsko polusuvo čišćenje tepiha Beograd"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
                <Image
                  src="/dubinsko-polusuvo-ciscenje-3.jpg"
                  alt="Dubinsko polusuvo čišćenje tepiha Beograd"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  sizes="100vw"
                />
              </div>

              <p className="text-gray-500 text-sm mt-8">Dubinsko polusuvo ciscenje i pranje tepiha · Polu suvo pranje tepiha · Tepih servis Andric</p>
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
