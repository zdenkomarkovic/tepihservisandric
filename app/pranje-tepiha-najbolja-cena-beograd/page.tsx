import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["pranje-tepiha-najbolja-cena-beograd"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/pranje-tepiha-najbolja-cena-beograd/` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/pranje-tepiha-najbolja-cena-beograd/` },
  ],
};

export default function PranjeTepihaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: meta.h1 }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{meta.pageH1}</h1>
            <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
              Tepih Servis Andrić pruža stručno čišćenje tepiha, dubinsko čišćenje nameštaja, čišćenje i pranje dušeka, hemijsko čišćenje dečijih kolica, opšivanje tepiha i zamena resa. Kao Vaše komšije, razumemo kako cenite svoje dragocenosti i svoj dom. Naša napredna obuka, iskustvo i stručna oprema osiguravaju da se Vaš tepih pere pažljivo i pouzdano.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Potpuno sigurno. Profesionalna usluga. Stručnjaci za čišćenje tepiha. Održavajte Vaš dom prema najvišim standardima. Kontaktirajte nas još danas.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy mb-6">Povoljna cena pranja tepiha</h2>

            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Tepih može zarobiti različite zagađivače u zatvorenom prostoru poput prašine, prljavštine i različitih mirisa. To može dovesti do toga da deca i odrasli pate od povećanog rizika od astme ili alergija. Profesionalne usluge čišćenja tepiha pomoći će Vam da se osigurate da tepih ne sadrži prljavštinu ili druge alergene. Pomoću ekološke usluge čišćenja tepiha, Tepih Servis Andrić je zadužen da ukloni zagađivače, oslobodi se grinja i spreči rast plesni, a istovremeno da se brine o životnoj sredini.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
              Zaštitite svoju investiciju na podu tepiha profesionalnim uslugama čišćenja tepiha u Tepih Servisu Andrić. Pozovite nas za pranje tepiha, garantujemo najpovoljnije cene!
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/zasto-je-masinsko-pranje-tepiha-sa-ispiranjem-centrifugom-idealno-resenje-za-cist-i-odrzavan-tepih.jpg"
                  alt="Pranje tepiha cena po kvadratu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/transport-i-dostava-tepiha.jpg"
                  alt="Povoljna cena pranja tepiha"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/transport-i-dostava-tepiha-beograd-07f.jpg"
                  alt="Pranje tepiha Najbolja cena Beograd"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
