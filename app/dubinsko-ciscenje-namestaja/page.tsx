import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = SERVICE_META["dubinsko-ciscenje-namestaja"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/dubinsko-ciscenje-namestaja/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/dubinsko-ciscenje-namestaja/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: meta.h1,
  description: meta.description,
  url: `${SITE_URL}/dubinsko-ciscenje-namestaja/`,
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
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/dubinsko-ciscenje-namestaja/` },
  ],
};

export default function DubinskoCistenjeNamestajaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: "Mašinsko dubinsko pranje nameštaja" }]} />
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
                Da bi Vaš nameštaj ponovo zasijao i bio zaista čist, koristimo specijalne mašine za dubinsko
                pranje, ne samo površinsko čišćenje. Otklanjamo sve alergene, grinje, prašinu i fleke,
                vraćajući boju i sjaj Vašem nameštaju. Kada nameštaj prođe kroz naš proces, izgleda kao da ste
                ga tek kupili.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Mašinski proces pranja nameštaja</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naše mašine koriste rotacione četke prilagođene mekšem, tapaciranom materijalu, koje pažljivo
                prelaze preko nameštaja bez oštećenja tkanine. Nakon pranja, specijalni uređaji za ekstrakciju
                izvlače vodu i sredstvo iz dubine jastučenja, čime se ubrzava sušenje i sprečava stvaranje
                vlage ili neprijatnih mirisa unutar nameštaja.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Zašto dubinsko pranje, a ne samo površinsko čišćenje</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Alergeni, grinje i prašina se vremenom nakupljaju duboko u vlaknima tapaciranog nameštaja, ne
                samo na površini. Obično kućno usisavanje ili površinsko brisanje ne dopire do tog sloja, dok
                naš mašinski proces dubinski čisti celu strukturu tkanine, čime se značajno poboljšava higijena
                prostora u kome boravite.
              </p>

              <h2 className="text-xl font-bold text-navy mt-8 mb-3">Koji nameštaj perete</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Perimo sofe, fotelje, taburee, jastuke i dušeke, prilagođavajući metodu vrsti i osetljivosti
                materijala. Tačne cene po komadu možete pogledati na stranici{" "}
                <Link href="/cenovnik/" className="text-gold hover:text-gold-dark underline">Cenovnik</Link>.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "/masinsko-dubinsko-pranje-namestaja-1.jpg",
                  "/masinsko-dubinsko-pranje-namestaja-2.jpg",
                  "/masinsko-dubinsko-pranje-namestaja-3.jpg",
                  "/masinsko-dubinsko-pranje-namestaja-4.jpg",
                ].map((src) => (
                  <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Mašinsko dubinsko pranje nameštaja Beograd"
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
