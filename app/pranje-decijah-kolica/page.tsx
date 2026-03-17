import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["pranje-decijih-kolica"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/pranje-decijah-kolica/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/pranje-decijah-kolica/`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/pranje-decijah-kolica/`,
  provider: {
    "@type": "Organization",
    name: "Tepih Servis Andrić Beograd",
    url: SITE_URL,
  },
};

export default function PranjeDecijihKolicaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Pranje dečijih kolica" }]} />
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
                Dečija kolica mogu biti pravo leglo bakterija, jer se prvenstveno koriste u spoljnim uslovima, gde se zagađen vazduh, prašina i nečistoće koje dolaze spolja lepe za kolica i talože u njenim čoškovima. Znamo da želite samo najbolje za Vaše mališane i zato im obezbedite zaista čisto mesto gde provode dobar deo dana, kako bi bili zaista zaštićeni i bez rizika za nastanak alergija i drugih neželjenih posledica, boravka u neadekvatnom transportu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nakon našeg tretmana svaki deo kolica je u potpunosti očišćen, dezinfikovan i zaista čist.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Dubinsko pranje dečijih kolica u Beogradu</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Kada donesete kolica u naš servis ona prolaze kroz sledeće faze:</p>
              <ol className="list-decimal pl-5 mb-4">
                <li className="text-gray-700 mb-2">Kompletno rasklapanje kolica</li>
                <li className="text-gray-700 mb-2">Svaki deo se čisti posebno sa sredstvom za čišćenje kolica "Baby organic".</li>
                <li className="text-gray-700 mb-2">Toplotnom parom se dezinfikuje svaki deo kolica</li>
                <li className="text-gray-700 mb-2">Ispiranje omekšivačem "CHICCO- CHORE DI TALCO"</li>
                <li className="text-gray-700 mb-2">Ispiranje asepsolom</li>
                <li className="text-gray-700 mb-2">Dubinsko usisavanje</li>
                <li className="text-gray-700 mb-2">Sušenje</li>
                <li className="text-gray-700 mb-2">Sklapanje kolica</li>
                <li className="text-gray-700 mb-2">Pakovanje streč folijom</li>
              </ol>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Prednosti dubinskog pranja dečijih kolica</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kvalitetno pranje dečijih kolica ne samo da pruža čistoću, već i značajno produžava njihov vek trajanja. Čistom i dezinfikovanom kolicom pružate vašoj bebi sigurno i higijensko okruženje, bez bakterija i alergena. Redovno čišćenje kolica doprinosi i očuvanju materijala, kao i lakšoj održivosti, jer sprečava nagomilavanje prljavštine i habanje.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  "/ciscenje-decijih-kolica-1s.jpg",
                  "/ciscenje-decijih-kolica-2s.jpg",
                  "/ciscenje-decijih-kolica-3s.jpg",
                  "/ciscenje-decijih-kolica-4s.jpg",
                  "/ciscenje-decijih-kolica-5s.jpg",
                  "/ciscenje-decijih-kolica-6s.jpg",
                  "/ciscenje-decijih-kolica-7s.jpg",
                  "/ciscenje-decijih-kolica-8s.jpg",
                  "/ciscenje-decijih-kolica-9s.jpg",
                  "/pranje-kolica-1.png",
                  "/pranje-kolica-2.png",
                  "/pranje-kolica-3.png",
                ].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Pranje dečijih kolica Beograd"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 25vw"
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
    </>
  );
}
