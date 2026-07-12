import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/`,
    images: [
      { url: `${SITE_URL}/masinsko-pranje-tepiha.webp`, width: 640, height: 480, alt: meta.h1 },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/` },
  ],
};

export default function MasinskoDubinskoPranjeIspiranjemCentrifugomPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Mašinsko pranje sa ispiranjem centrifugom" }]} />
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
                Ovakav način dubinskog pranja odvija se automatizovanim pametnim mašinama koje istovremenim korišćenjem 5 četki prelaze preko tepiha otklanjajući svaku fleku i najsitniju prljavštinu i dezinfikuju ga. Koristi se samo neophodna količina hemijskih sredstava u zavisnosti od vrste i veličine Vašeg tepiha. Dodatna opcija je centrifuga koja će iz Vašeg tepiha izvući svu vlagu.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Dubinsko čišćenje tepiha</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubinsko čišćenje tepiha predstavlja temeljno uklanjanje prljavštine i mrlja iz vlakana tepiha. Ovaj proces je posebno važan za održavanje higijene i dugovečnosti tepiha. Zahvaljujući savremenim mašinama, tepisi se temeljno čiste uz pomoć više četki koje rade istovremeno, prolazeći kroz sve slojeve tepiha. Mašinsko čišćenje omogućava uklanjanje nečistoća koje su se zadržale duboko u vlaknima, kao i bakterija i grinja koje se ne mogu videti golim okom. Svaka mrlja, bez obzira na njenu vrstu, uspešno se uklanja korišćenjem specijalizovanih sredstava koja su prilagođena materijalu tepiha.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Ispiranje tepiha centrifugom</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nakon što se tepih temeljno opere, sledeći korak u procesu je ispiranje i uklanjanje suvišne vode. Centrifuga igra ključnu ulogu u ovoj fazi. Ova moćna mašina izvlači vlagu iz tepiha, ostavljajući ga gotovo suvog, što značajno ubrzava proces sušenja. Ispiranje tepiha centrifugom ne samo da uklanja preostalu vodu, već i sve ostatke deterdženata, osiguravajući da tepih bude potpuno čist i osvežen. Ova tehnika čini da tepih zadrži svoj prvobitni izgled i elastičnost, a uz to sprečava stvaranje neprijatnih mirisa koji se mogu javiti usled dužeg zadržavanja vlage. Nakon centrifugiranja, tepih dodatno prolazi kroz{" "}
                <Link href="/susenje-tepiha/" className="text-gold-text hover:text-gold-dark underline">sušenje u specijalnim komorama</Link>.
              </p>

              <h3 className="text-lg font-bold text-navy mt-8 mb-2">Mašinsko pranje tepiha — fotografija</h3>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden max-w-3xl mt-8">
                <Image
                  src="/masinsko-pranje-tepiha.webp"
                  alt={meta.h1}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
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
