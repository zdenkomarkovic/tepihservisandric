import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["masinsko-pranje-tepiha"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/masinsko-pranje-tepiha/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/masinsko-pranje-tepiha/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/masinsko-pranje-tepiha/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/masinsko-pranje-tepiha/` },
  ],
};

export default function MasinskoPranjeTepihaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Mašinsko dubinsko pranje polusuvo" }]} />
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
              <h2 className="text-xl font-bold text-navy mb-3">Kako izgleda mašinsko polusuvo pranje</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ovakvo pranje odvija se automatizovanim mašinama koje vrše dubinsko temeljno pranje zahvaljujući istovremenom radu 6 rotirajućih četki koje istovremeno prelaze preko tepiha ne ostavljajući ni jedan milimetar nečistoće. Ove mašine u sebi poseduju dozere za hemijska sredstva i vodu koja je potrebna u odnosu na vrstu Vašeg tepiha. Idealan način da očuvate kvalitet Vašeg tepiha a da istovremeno odstranite sve fleke, koristeći samo propisanu količinu hemijskih sredstava koja je potrebna, kako se tepih ne bi preterano tretirao.
              </p>
              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Zašto je dubinsko pranje važno</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubinsko pranje kao što i sama reč kaže dubinski čisti i otklanja nečistoće, bakterije iz same dubine Vašeg tepiha. Dubinskim pranjem u mnogome doprinosite higijeni Vašeg doma, a samim tim i zdraviju Vaše porodice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubinsko pranje je primenjivo apsolutno svuda kako u stambenim tako i poslovnim prostorima. Pranje tepiha treba vršiti redovno, bar jednom u dva meseca, a preporuka je i češće u zavisnosti od frekvencije i broja ljudi koji koriste prostor.
              </p>
              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kvalitet i nega Vašeg tepiha</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tepih Servis Andrić nudi čišćenje tepiha koje se suočava sa dubokom nečistoćom i prašinom područja sa velikim prometom. Korišćenjem visokokvalitetnih, ekološki prihvatljivih proizvoda i naprednih metoda čišćenja možemo Vam pomoći da sačuvate svetao izgled, boju i životni vek Vašeg tepiha.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Redovnim i sistematskim čišćenjem koristeći najbolje tehnike i tehnologije, pomažemo Vam da održite izgled svog tepiha i potencijalno produžite vek trajanja tepiha. Bilo da se radi o stalnom održavanju ili godišnjem čišćenju, učinićemo sve da Vaš tepih izgleda što bolje.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zaštitite svoju investiciju na podu tepiha profesionalnim uslugama čišćenja tepiha u Tepih Servisu Andrić.
              </p>
              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Ostale usluge Tepih servisa Andrić</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tepih Servis Andrić pruža stručno čišćenje tepiha,{" "}
                <Link href="/dubinsko-ciscenje-namestaja/" className="text-gold hover:text-gold-dark underline">mašinsko dubinsko čišćenje nameštaja</Link>,
                čišćenje i pranje dušeka,{" "}
                <Link href="/pranje-decijah-kolica/" className="text-gold hover:text-gold-dark underline">hemijsko čišćenje dečijih kolica</Link>,{" "}
                <Link href="/opsivanje-tepiha/" className="text-gold hover:text-gold-dark underline">opšivanje tepiha</Link>{" "}
                i{" "}
                <Link href="/zamena-resa/" className="text-gold hover:text-gold-dark underline">zamenu resa</Link>.
                Kao Vaše komšije, razumemo kako cenite svoje dragocenosti i svoj dom. Naša napredna obuka,
                iskustvo i stručna oprema osiguravaju da se Vaš posao obavlja pažljivo, pouzdano i potpuno
                osigurano, sa profesionalnim pristupom i stručnjacima za čišćenje tepiha i poda. Održavajte
                svoj dom prema najvišim standardima — kontaktirajte nas još danas.
              </p>
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
