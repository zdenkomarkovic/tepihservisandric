import type { Metadata } from "next";
import Image from "next/image";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["dubinsko-pranje-tepiha-beograd"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/dubinsko-pranje-tepiha-beograd/` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/dubinsko-pranje-tepiha-beograd/` },
  ],
};

export default function DubinskoPranjeTepihaBeogradPage() {
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
              Da li na Vašem tepihu ostaju mrlje uprkos svim pokušajima čišćenja i pranja? Tada biste trebali očistiti tepih. Najbolje mesto za to je profesionalno pranje tepiha. Ovo je jedini način da se garantuje uklanjanje čak i nevidljivih zagađivača, poput grinja iz kućne prašine ili moljaca.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Ovakvo pranje odvija se automatizovanim mašinama koje vrše dubinsko temeljno pranje zahvaljujući istovremenom radu 6 rotirajućih četki koje istovremeno prelaze preko tepiha ne ostavljajući ni jedan milimetar nešistoće. Ove mašine u sebi poseduju dozere za hemisjka sredstva i vodu koja je potrebna u odnosu na vrstu Vašeg tepiha. Idealan način da očuvate kvalitet Vašeg tepiha a da istovremeno odstranite sve fleke, koristeći samo propisanu količinu hemisjkih sredstava koja je potrebna, kako se tepih ne bi preterano tretirao.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Dubinsko pranje kao što i sama reč kaže dubinski čisti i otklanja nečistoće, bakterije iz same dubine Vašeg tepiha. Dubinskim pranjem u mnogome doprinosite higijeni Vašeg doma, a samim tim i zdraviju Vaše porodice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Dubinsko pranje je primenjivo apsolutno svuda kako u stambenim tako i poslovnim prostorima. Pranje tepiha treba vršiti redovno, bar jednom u dva meseca, a preporuka je i češće u zavisnosti od frekvencije i broja ljudi koji koriste prostor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
              Za informacije o našim uslugama i zakazivanju, budite slobodni da nas kontaktirate na broj telefona +381 65 333 2 555.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-beograd.jpg"
                  alt="Dubinsko pranje tepiha Beograd"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-02s (3).jpg"
                  alt="Dubinsko pranje tepiha Beograd"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/susenje-tepiha-1.png"
                  alt="Dubinsko pranje tepiha Beograd"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
