import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["tepih-servis-novi-beograd-najbolje-cene"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/tepih-servis-novi-beograd-najbolje-cene/` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/tepih-servis-novi-beograd-najbolje-cene/` },
  ],
};

export default function TepihServisNoviBeogradPage() {
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
              Tepih Servis Andrić pruža stručno čišćenje tepiha, dubinsko čišćenje nameštaja, čišćenje i pranje dušeka, hemijsko čišćenje dečijih kolica, opšivanje tepiha i zamena resa.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Tepih Servis Andrić nudi čišćenje tepiha koje se suočava sa dubokom nečistoćom i prašinom područja sa velikim prometom. Korišćenjem visokokvalitetnih, ekološki prihvatljivih proizvoda i naprednih metoda čišćenja možemo Vam pomoći da sačuvate svetao izgled, boju i životni vek Vašeg tepiha.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Da bi Vaš nameštaj ponovo zasijao i bio zaista čist, pozovite nas jer mi koristimo specijalne mašine za čišćenje. Otklanjamo sve alergene, grinje, prašinu i fleke. Vraćamo boju Vašem nameštaju. Kada Vaš nameštaj prođe sve naše mašine, on izgleda kao da ste ga tek punili. Vraćamo mu strai sjaj, boju i čistoću uz prijatne mirise koji će osvežiti Vaš prostor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Tepih Servis Andrić pruža stručno čišćenje tepiha, mašinsko dubinsko čišćenje nameštaja, čišćenje i pranje dušeka, hemijsko čišćenje dečijih kolica, opšivanje tepiha i zamena resa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Kao Vaše komšije, razumemo kako cenite svoje dragocenosti i svoj dom. Naša napredna obuka, iskustvo i stručna oprema osiguravaju da se Vaš tepih pere pažljivo i pouzdano. Potpuno sigurno. Profesionalna usluga. Stručnjaci za čišćenje tepiha. Održavajte Vaš dom prema najvišim standardima. Kontaktirajte nas još danas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
              Ako želite da iskoristite profesionalne usluge kompanije od poverenja sa velikim iskustvom, ne ustručavajte se da nas kontaktirate. Ovde pogledajte naše <Link href="/usluge/" className="text-gold hover:text-gold-dark">usluge</Link> ili nas <Link href="/kontakt/" className="text-gold hover:text-gold-dark">kontaktirajte</Link>, a primere našeg rada možete videti u našoj <Link href="/galerija/" className="text-gold hover:text-gold-dark">galeriji</Link>.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-8s.jpg"
                  alt="Tepih servis Novi Beograd Najbolje cene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-10.jpg"
                  alt="Tepih servis Novi Beograd Najbolje cene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/tepih-servis-andric-13s.jpg"
                  alt="Tepih servis Novi Beograd Najbolje cene"
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
