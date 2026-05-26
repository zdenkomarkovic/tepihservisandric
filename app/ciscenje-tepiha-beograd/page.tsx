import type { Metadata } from "next";
import Image from "next/image";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["ciscenje-tepiha-beograd"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/ciscenje-tepiha-beograd/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/ciscenje-tepiha-beograd/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/ciscenje-tepiha-beograd/` },
  ],
};

export default function CistenjeTepihaBeogradPage() {
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
              Redovno usisavanje je neophodno za tepihe, ali samo usisavanje ne uklanja uvek grinje i plesni koje se zaglave na gomili. Profesionalno dubinsko pranje tepiha uklanja sve ostatke, bakterije, viruse i hemijske opasnosti izazvane ostacima parfema i insekticida.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Profesionalno čišćenje treba obavljati često, i što češće u jako korišćenom prostoru. Profesionalna sredstva za čišćenje tepiha koriste specijalizovane proizvode za čišćenje koji pomažu da vlakna tepiha budu netaknuta, a to može produžiti životni vek tepiha.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Temeljnim čišćenjem prvo se uklanja prašina, ostaci hrane, dlake, ljuspice kože i ostali ostaci. Nanosi se vlažni šampon pogodan za tip tepiha. To se dobro utrlja mašinom da prodre kroz ceo tepih. Konačno, tečnost i prljavština se isisavaju.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Redovnim čišćenjem koristeći najbolje tehnike i tehnologije, pomažemo Vam da održite izgled Vašeg tepiha i potencijalno produžite vek trajanja tepiha. Bilo da se radi o stalnom održavanju ili godišnjem čišćenju, učinićemo sve da Vaš tepih izgleda što bolje.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
              Zaštitite svoju investiciju na podu profesionalnim uslugama čišćenja tepiha u Tepih Servisu Andrić.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-03s (3).jpg"
                  alt="Čišćenje tepiha"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-02s.jpg"
                  alt="Ciscenje tepiha"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-02s (4).jpg"
                  alt="Ciscenje tepiha Beograd"
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
