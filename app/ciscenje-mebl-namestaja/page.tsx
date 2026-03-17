import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["ciscenje-mebl-namestaja"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/ciscenje-mebl-namestaja/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/ciscenje-mebl-namestaja/`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/ciscenje-mebl-namestaja/`,
  provider: {
    "@type": "Organization",
    name: "Tepih Servis Andrić Beograd",
    url: SITE_URL,
  },
};

export default function CiscenjeMeblNamestajaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Čišćenje i pranje mebl nameštaja" }]} />
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
                Svakodnevnim korišćenjem, nameštaj se vremenom prlja. To su i dovoljni razlozi zbog kojih je preporučljivo periodično očistiti tapacirani nameštaj. Čišćenje nameštaja radimo po zahtevima kako u stambenom tako i u poslovnom prostoru.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Korišćenjem visokokvalitetnih, ekološki prihvatljivih proizvoda za pranje nameštaja i naprednih metoda čišćenja možemo Vam pomoći da sačuvate svetao izgled, boju i životni vek Vašeg nameštaja.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naša napredna obuka, iskustvo i stručna oprema osiguravaju da se Vaš posao obavlja pažljivo i pouzdano. Potpuno osiguran. Profesionalna usluga. Stručnjaci za čišćenje tepiha i nameštaja - Tepih servis Andrić.
                Održavajte svoj dom prema najvišim standardima. Kontaktirajte nas još danas i pozovite nas ukoliko Vam je potrebno dubinsko pranje nameštaja.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  "/ciscenje-mebl-namestaja.jpg",
                  "/ciscenje-mebl-namestaja-2.jpg",
                  "/pranje-namestaja-1.png",
                  "/pranje-namestaja-2.png",
                  "/pranje-namestaja-3.png",
                  "/pranje-namestaja-4.png",
                  "/pranje-namestaja-5.png",
                  "/pranje-namestaja-6.png",
                ].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Dubinsko pranje i čišćenje mebl nameštaja Beograd"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
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
