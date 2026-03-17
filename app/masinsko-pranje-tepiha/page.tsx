import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
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
              <p className="text-gray-700 leading-relaxed mb-4">
                Ovakvo pranje odvija se automatizovanim mašinama koje vrše dubinsko temeljno pranje zahvaljujući istovremenom radu 6 rotirajućih četki koje istovremeno prelaze preko tepiha ne ostavljajući ni jedan milimetar nečistoće. Ove mašine u sebi poseduju dozere za hemijska sredstva i vodu koja je potrebna u odnosu na vrstu Vašeg tepiha. Idealan način da očuvate kvalitet Vašeg tepiha a da istovremeno odstranite sve fleke, koristeći samo propisanu količinu hemijskih sredstava koja je potrebna, kako se tepih ne bi preterano tretirao.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubinsko pranje kao što i sama reč kaže dubinski čisti i otklanja nečistoće, bakterije iz same dubine Vašeg tepiha. Dubinskim pranjem u mnogome doprinosite higijeni Vašeg doma, a samim tim i zdraviju Vaše porodice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubinsko pranje je primenjivo apsolutno svuda kako u stambenim tako i poslovnim prostorima. Pranje tepiha treba vršiti redovno, bar jednom u dva meseca, a preporuka je i češće u zavisnosti od frekvencije i broja ljudi koji koriste prostor.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tepih Servis Andrić nudi čišćenje tepiha koje se suočava sa dubokom nečistoćom i prašinom područja sa velikim prometom. Korišćenjem visokokvalitetnih, ekološki prihvatljivih proizvoda i naprednih metoda čišćenja možemo Vam pomoći da sačuvate svetao izgled, boju i životni vek Vašeg tepiha.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Redovnim i sistematskim čišćenjem koristeći najbolje tehnike i tehnologije, pomažemo Vam da održite izgled svog tepiha i potencijalno produžite vek trajanja tepiha. Bilo da se radi o stalnom održavanju ili godišnjem čišćenju, učinićemo sve da Vaš tepih izgleda što bolje.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zaštitite svoju investiciju na podu tepiha profesionalnim uslugama čišćenja tepiha u Tepih Servisu Andrić.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tepih Servis Andrić pruža stručno čišćenje tepiha, mašinsko dubinsko čišćenje nameštaja, čišćenje i pranje dušeka, hemijsko čišćenje dečijih kolica, opšivanje tepiha i zamena resa. Kao Vaše komšije, razumemo kako cenite svoje dragocenosti i svoj dom. Naša napredna obuka, iskustvo i stručna oprema osiguravaju da se vaš posao obavlja pažljivo i pouzdano. Potpuno osiguran. Profesionalna usluga. Stručnjaci za čišćenje tepiha i poda. Održavajte svoj dom prema najvišim standardima. Kontaktirajte nas još danas.
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
    </>
  );
}
