import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
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
    images: [
      { url: `${SITE_URL}/ciscenje-mebl-namestaja.webp`, width: 640, height: 480, alt: meta.h1 },
    ],
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
  areaServed: { "@type": "City", name: "Beograd" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/ciscenje-mebl-namestaja/` },
  ],
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
              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kada je vreme za čišćenje nameštaja</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tapacirani nameštaj je preporučljivo dubinski očistiti bar jednom godišnje, a češće ako u
                domaćinstvu imate decu, kućne ljubimce ili alergije na prašinu. Vidljive mrlje, neprijatan
                miris ili promena boje tkanine siguran su znak da je vreme za profesionalno čišćenje, pre
                nego što nečistoća dublje prodre u materijal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naša napredna obuka, iskustvo i stručna oprema osiguravaju da se Vaš posao obavlja pažljivo,
                pouzdano i potpuno osigurano, uz profesionalnu uslugu naših stručnjaka za čišćenje tepiha i
                nameštaja. Održavajte svoj dom prema najvišim standardima — kontaktirajte Tepih servis Andrić
                već danas ukoliko Vam je potrebno{" "}
                <Link href="/dubinsko-ciscenje-namestaja/" className="text-gold-text hover:text-gold-dark underline">dubinsko pranje nameštaja</Link>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { src: "/ciscenje-mebl-namestaja.webp", alt: "Čišćenje mebl nameštaja — Tepih servis Andrić" },
                  { src: "/ciscenje-mebl-namestaja-2.webp", alt: "Dubinsko pranje nameštaja u Beogradu" },
                  { src: "/pranje-namestaja-1.webp", alt: "Pranje tapaciranog nameštaja" },
                  { src: "/pranje-namestaja-2.webp", alt: "Profesionalno čišćenje nameštaja — Andrić Beograd" },
                  { src: "/pranje-namestaja-3.webp", alt: "Uklanjanje mrlja sa mebl nameštaja" },
                  { src: "/pranje-namestaja-4.webp", alt: "Mašinsko pranje nameštaja u tepih servisu Andrić" },
                  { src: "/pranje-namestaja-5.webp", alt: "Rezultat čišćenja mebl nameštaja" },
                  { src: "/pranje-namestaja-6.webp", alt: "Nega i održavanje tapaciranog nameštaja" },
                ].map(({ src, alt }) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
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
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
