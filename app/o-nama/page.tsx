import type { Metadata } from "next";
import Link from "next/link";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL, CONTACT, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PhoneIconLg } from "@/components/ui/Icons";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = INFO_META["o-nama"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/o-nama/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/o-nama/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/o-nama/` },
  ],
};

export default function ONamaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">O nama</span>
            <Breadcrumb items={[{ label: "O nama" }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Dobrodošli u Tepih Servis Andrić Beograd, osnovan 1984.
            </h1>
            <p className="text-gold font-semibold text-lg mb-8">
              Porodičan tepih servis u Beogradu, jedan od većih u gradu, sa tradicijom dugom više od četiri decenije
            </p>

            <div className="space-y-5 text-gray-700 text-base leading-relaxed max-w-4xl">
              <p>
                Tepih servis Andrić je porodičan biznis osnovan 1984. godine, kada je počeo kao mali
                servis za pranje tepiha u Beogradu. Tokom više od četiri decenije rada, izrastao je u
                jedan od većih tepih servisa u gradu, sa timom zaposlenih radnika posvećenih
                kvalitetnoj usluzi. Iz generacije u generaciju, gradili smo poverenje naših klijenata
                kroz pažljiv odnos prema svakom tepihu koji nam je poveren.
              </p>
              <p>
                Danas pružamo kompletnu uslugu dubinskog pranja tepiha i nameštaja, koristeći savremenu
                opremu i ekološki bezbedna sredstva za čišćenje. Svaki tepih se pažljivo procenjuje pre
                pranja, kako bismo odabrali metodu koja najbolje odgovara njegovom materijalu i stanju.
              </p>
              <p>
                Bilo da je u pitanju mašinsko dubinsko pranje, opšivanje, zamena resa ili{" "}
                <Link href="/pranje-decijah-kolica/" className="text-gold-text hover:text-gold-dark underline">pranje dečijih kolica</Link>,
                naš tim u Tepih servisu Andrić trudi se da svaki posao obavi profesionalno i u
                dogovorenom roku. Zahvaljujući dugogodišnjem iskustvu i porodičnoj tradiciji, mnogi
                klijenti nam veruju svoje tepihe već godinama.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream rounded-xl p-6 border-t-4 border-gold">
                <h3 className="font-bold text-navy text-lg mb-2">Iskustvo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sa sigurnošću možemo reći da nudimo najbolji odnos cene i kvaliteta, i specijalne
                  pogodnosti za veće količine. Pogledajte naš{" "}
                  <Link href="/cenovnik/" className="text-gold-text hover:text-gold-dark underline">cenovnik</Link>{" "}
                  za sve detalje.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-t-4 border-gold">
                <h3 className="font-bold text-navy text-lg mb-2">Tradicija</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tepih Servis Andrić je osnovan 1984. godine i od tada, pa sve do danas nudi
                  profesionalne i ekspeditivne usluge.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-t-4 border-gold">
                <h3 className="font-bold text-navy text-lg mb-2">Kvalitet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Koristimo visoko savremenu opremu i najkvalitetnija sredstva za čišćenje tepiha i{" "}
                  <Link href="/dubinsko-ciscenje-namestaja/" className="text-gold-text hover:text-gold-dark underline">dubinsko pranje nameštaja</Link>.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={CONTACT.phone1Href}
                className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <PhoneIconLg />
                Pozovite nas
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
