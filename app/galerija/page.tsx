import type { Metadata } from "next";
import Image from "next/image";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = INFO_META["galerija"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/galerija/` },
};

const IMAGES = [
  { src: "/masine-za-pranje-tepiha.jpg",              alt: "Mašine za pranje tepiha — Tepih Servis Andrić" },
  { src: "/tepih-servis-2024.jpg",                    alt: "Tepih servis Andrić Beograd 2024" },
  { src: "/pranje-tepiha.jpg",                        alt: "Pranje tepiha — Tepih Servis Andrić" },
  { src: "/pranje-tepiha-1.jpg",                      alt: "Pranje tepiha Beograd" },
  { src: "/pranje-tepiha-2.jpg",                      alt: "Pranje tepiha Beograd" },
  { src: "/pranje-tepiha-3.jpg",                      alt: "Pranje tepiha Beograd" },
  { src: "/pranje-tepiha-4.jpg",                      alt: "Pranje tepiha Beograd" },
  { src: "/pranje-tepiha-5.jpg",                      alt: "Pranje tepiha Beograd" },
  { src: "/pranje-tepiha-6.jpg",                      alt: "Pranje tepiha Beograd" },
  { src: "/profesionalno-pranje-tepiha-01s (1).jpg",  alt: "Profesionalno pranje tepiha" },
  { src: "/profesionalno-pranje-tepiha-02s (1).jpg",  alt: "Profesionalno pranje tepiha" },
  { src: "/profesionalno-pranje-tepiha-09s.jpg",      alt: "Profesionalno pranje tepiha" },
  { src: "/profesionalno-pranje-tepiha-10s.jpg",      alt: "Profesionalno pranje tepiha" },
  { src: "/profesionalno-pranje-tepiha-11s.jpg",      alt: "Profesionalno pranje tepiha" },
  { src: "/tepih-servis-andric-02s (4).jpg",          alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-02s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-03s (3).jpg",          alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-03s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-04s (2).jpg",          alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-04s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-05s (1).jpg",          alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-10.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-10s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-11s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-13s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-14s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-15s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-16s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-17s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-18s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-19.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-19s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-20s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-22s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-23s.jpg",              alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-31.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-32.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-33.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-34.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-35.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-36.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-37.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-3s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-4s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-5s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-6s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-7s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-8.jpg",                alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-8s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-9s.jpg",               alt: "Tepih servis Andrić" },
  { src: "/tepih-servis-andric-prevoz.jpg",           alt: "Prevoz tepiha — Tepih Servis Andrić" },
  { src: "/tepih-servis-pranje-namestaja.jpg",        alt: "Pranje nameštaja — Tepih Servis Andrić" },
  { src: "/tepih-servis-pranje-tepiha.jpg",           alt: "Pranje tepiha — Tepih Servis Andrić" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/galerija/` },
  ],
};

export default function GalerijaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Foto galerija</span>
            <Breadcrumb items={[{ label: "Foto galerija" }]} />
          </div>
        </div>

        {/* Page header */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Foto galerija</h1>
            <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-3xl">
              Naša profesionalna usluga čišćenja tepiha savršen je kompliment za održavanje Vašeg
              doma. Naš profesionalni tim potpuno je opremljen vodećom opremom i proizvodima u
              industriji kako bi osigurali da je to dobro urađen posao.
            </p>
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
              U galeriji možete pogledati kako mi to radimo. Tepih o kome brinete poslužiće da doda
              toplinu i udobnost u Vaše prostorije. Do tebe je!
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {IMAGES.map((img) => (
                <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
