import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["pranje-tepiha"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/pranje-tepiha/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/pranje-tepiha/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/pranje-tepiha/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/pranje-tepiha/` },
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
            <Breadcrumb items={[{ label: "Pranje tepiha" }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Pranje tepiha</h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <article className="bg-white rounded-xl p-6 md:p-10 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                Tepih servis Andrić Vam nudi kompletnu uslugu održavanje tepiha - čišćenje, pranje, zamena dotrajalih resa, opšivanje.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Brz dolazak na poziv!</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tepih servis Andrić poseduje dostavna vozila, pa nije neophodno da ih sami donosite, već mi dolazimo do Vas. Dovoljno je da nas pozovete telefonom na broj{" "}
                <a href="tel:0653332555" className="text-gold hover:text-gold-dark">065 333 2 555</a>{" "}
                i dolazimo po Vaše tepihe u dogovoreno vreme.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Najsavremenija tehnologija pranja</h2>
              <p className="text-gray-700 font-semibold mb-2">Savremena tehnologija</p>
              <ul className="list-disc pl-5 mb-4">
                <li className="text-gray-700 mb-2">Savremene metode čišćenja tepiha povratiće prvobitni sjaj i boju Vaših tepiha</li>
                <li className="text-gray-700 mb-2">Ukloniće sve fleke i neprijatne mirise</li>
              </ul>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Postupak čišćenja tepiha</h2>
              <ol className="list-decimal pl-5 mb-4">
                <li className="text-gray-700 mb-2">Dubinsko usisavanje profesionalnim usisivačima</li>
                <li className="text-gray-700 mb-2">Pranje mašinama i četkama za uklanjanje fleka i nečistoća</li>
                <li className="text-gray-700 mb-2">Izvlačenje nečistoće odgovarajućim procesom i mašinama</li>
                <li className="text-gray-700 mb-2">Ispiranje do potpunog uklanjanja prljavštine</li>
                <li className="text-gray-700 mb-2">Sušenje</li>
              </ol>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Zašto Vam je potreban tepih servis?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Svi brinemo o zdravlju i o čistoći prostora u kome boravimo – stambeni ili poslovni prostor. Za potpunu čistoću nije dovoljno da usisate tepih ili ga povremeno površinski očistite nekim sredstvom. Mnogi su već shvatili koliko je nemoguće u kućnim uslovima zaista temeljno očistiti i oprati tepih zato su i postali naši verni klijenti.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Održavanje tepiha i podnih prekrivača</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Zamena resa na tepihu</strong> – Tepih servis Andrić pruža uslugu zamena resa na Vašem tepihu. Ako želite da zamenite dotrajale rese na omiljenom tepihu, da osvežite tepih novim resama. U ponudi imamo rese od više materijala, kao što su pamučne rese, vunene rese, svilene rese, lanene i druge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Opšivanje tepiha i itisona</strong> – Opšivanje tepiha klijent može zahtevati iz više razloga: nakon uklanjanja starih resa, promena boje postojećih ivica na tepihu, nakon skraćivanja ili usecanja itisona....a sve u cilju kako ne bi došlo do rasipanja i paranja tepiha ili itisona.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Mašinsko-dubinsko polusuvo čišćenje</strong> – Ova vrsta čišćenja primenjuje se najčešće na velikim površinama podnih prostirki koje se nalaze u stambenom ili poslovnom prostoru i nije ih moguće doneti u servis. Za ovu vrstu pranje koriste se ekološke PH neutralne hemikalije....
              </p>

              <p className="text-gray-500 text-sm mt-8">Suvo i dubinsko pranje tepiha Beograd</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  "/pranje-tepiha-4 (2).jpg",
                  "/pranje-tepiha-5 (1).jpg",
                  "/pranje-tepiha-6 (1).jpg",
                  "/pranje-tepiha-1 (1).jpg",
                  "/pranje-tepiha-2 (1).jpg",
                  "/pranje-tepiha-3 (1).jpg",
                ].map((src) => (
                  <div key={src} className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Pranje tepiha Beograd"
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
