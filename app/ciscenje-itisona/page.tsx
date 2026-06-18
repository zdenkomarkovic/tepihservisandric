import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["ciscenje-itisona"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/ciscenje-itisona/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/ciscenje-itisona/`,
    images: [
      { url: `${SITE_URL}/tepih-servis-andric-10s.jpg`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/ciscenje-itisona/` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/ciscenje-itisona/`,
  provider: {
    "@type": "Organization",
    name: "Tepih Servis Andrić Beograd",
    url: SITE_URL,
  },
};

export default function CistenjeItisonaPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{meta.h1}</h1>
            <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
              Tepih servis Andrić Vam nudi kompletnu uslugu održavanja itisona - čišćenje, pranje, zamena dotrajalih resa, opšivanje.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Redovno usisavanje je neophodno za itisone, ali samo usisavanje ne uklanja uvek grinje i plesni koje se zaglave na gomili. Profesionalno dubinsko pranje itisona uklanja sve ostatke, bakterije, viruse i hemijske opasnosti izazvane ostacima parfema i insekticida.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Profesionalno čišćenje treba obavljati često, i što češće u jako korišćenom prostoru. Profesionalna sredstva za čišćenje itisona koriste specijalizovane proizvode za čišćenje koji pomažu da vlakna itisona budu netaknuta, a to može produžiti životni vek itisona.
            </p>
            <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kako izgleda čišćenje itisona šamponom</h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Temeljnim čišćenjem prvo se uklanja prašina, ostaci hrane, dlake, ljuspice kože i ostali ostaci. Nanosi se vlažni šampon pogodan za tip itisona. To se dobro utrlja mašinom da prodre kroz ceo itison. Konačno, tečnost i prljavština se isisavaju.
            </p>
            <h2 className="text-xl font-bold text-navy mt-8 mb-3">Povezana usluga: opšivanje itisona</h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Nakon čišćenja, ako su ivice itisona oštećene ili je potrebno prilagoditi dužinu prostoru,
              nudimo i{" "}
              <Link href="/opsivanje-etisona/" className="text-gold-text hover:text-gold-dark underline">sečenje i opšivanje itisona</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
              Ako želite da iskoristite profesionalne usluge kompanije od poverenja sa velikim iskustvom, ne ustručavajte se da nas kontaktirate. Ovde pogledajte naše <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">usluge</Link> ili nas <Link href="/kontakt/" className="text-gold-text hover:text-gold-dark underline">kontaktirajte</Link>, a primere našeg rada možete videti u našoj <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">galeriji</Link>.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-10s.jpg"
                  alt="Čišćenje itisona šamponom — Tepih servis Andrić"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-10.jpg"
                  alt="Proces čišćenja itisona u Beogradu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-8.jpg"
                  alt="Rezultat čišćenja itisona"
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
      <JsonLd data={serviceSchema} />
    </>
  );
}
