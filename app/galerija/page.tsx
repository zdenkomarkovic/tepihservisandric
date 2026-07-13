import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = INFO_META["galerija"]!;
const PAGE_SIZE = 12;

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const canonical = page > 1 ? `${SITE_URL}/galerija/?page=${page}` : `${SITE_URL}/galerija/`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    // Stranice 2+ ne treba indeksirati (duplirani sadržaj), ali link equity ide dalje.
    ...(page > 1 && { robots: { index: false, follow: true } }),
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/galerija/`,
      images: [OG_IMAGE_DEFAULT],
    },
  };
}

const IMAGES = [
  { src: "/masine-za-pranje-tepiha.webp",              alt: "Rotaciona mašina pere perzijski tepih penastim sredstvom" },
  { src: "/tepih-servis-2024.webp",                    alt: "Radnici Tepih Servisa Andrić pored kombija natovarenog namotanim tepisima" },
  { src: "/pranje-tepiha.webp",                        alt: "Mašina sa rotacionim četkama pri mašinskom pranju tepiha" },
  { src: "/pranje-tepiha-1.webp",                      alt: "Detalj opšivenih ivica tepiha u više boja vune" },
  { src: "/pranje-tepiha-2.jpg",                      alt: "Kombi natovaren namotanim tepisima spreman za dostavu" },
  { src: "/pranje-tepiha-3.jpg",                      alt: "Pranje crvenog perzijskog tepiha rotacionom četkom uz penu" },
  { src: "/pranje-tepiha-4.webp",                      alt: "Detalj resa tepiha pre postupka opšivanja" },
  { src: "/pranje-tepiha-5.webp",                      alt: "Dubinsko pranje bele kožne garniture ekstrakcionom mašinom" },
  { src: "/pranje-tepiha-6.jpg",                      alt: "Zadnja vrata kombija sa kontakt brojevima Tepih Servisa Andrić" },
  { src: "/profesionalno-pranje-tepiha-01s (1).webp",  alt: "Natpis Tepih Servis Andrić na haubi vozila" },
  { src: "/profesionalno-pranje-tepiha-02s (1).webp",  alt: "Detalj četki i točkova mašine za pranje tepiha" },
  { src: "/profesionalno-pranje-tepiha-09s.jpg",      alt: "Industrijska mašina sa nizom rotacionih glava pere tepih" },
  { src: "/profesionalno-pranje-tepiha-10s.webp",      alt: "Rotacione glave industrijske mašine tokom pranja tepiha" },
  { src: "/profesionalno-pranje-tepiha-11s.jpg",      alt: "Opran tepih sa plavim cvetnim motivom na rešetki za sušenje" },
  { src: "/tepih-servis-andric-02s (4).jpg",          alt: "Tehnix mašina mašinski pere tepih uz penu" },
  { src: "/tepih-servis-andric-02s.webp",              alt: "Tehnix mašina za pranje sa namotanim tepisima u redu čekanja" },
  { src: "/tepih-servis-andric-03s (3).webp",          alt: "Pena i rotacione glave tokom industrijskog pranja tepiha" },
  { src: "/tepih-servis-andric-03s.webp",              alt: "Detalj procesa mašinskog pranja tepiha penom" },
  { src: "/tepih-servis-andric-04s (2).jpg",          alt: "Vozilo Tepih Servisa Andrić parkirano u stambenom naselju" },
  { src: "/tepih-servis-andric-04s.webp",              alt: "Tehnix Mega Duster 3000 — mašina za trešenje tepiha" },
  { src: "/tepih-servis-andric-05s (1).webp",          alt: "Mašina za ceđenje tepiha u radionici servisa" },
  { src: "/tepih-servis-andric-10.jpg",               alt: "Opran tepih sa crveno-plavim ornamentom i rojtama" },
  { src: "/tepih-servis-andric-10s.webp",              alt: "Kombi natovaren namotanim tepisima ispred sedišta servisa" },
  { src: "/tepih-servis-andric-11s.jpg",              alt: "Pranje crvenog tepiha sa cvetnim medaljonom rotacionom četkom" },
  { src: "/tepih-servis-andric-13s.jpg",              alt: "Dubinsko pranje presvlake fotelje sa ukrasnom dugmadi" },
  { src: "/tepih-servis-andric-14s.webp",              alt: "Ekstrakciono pranje bele kožne garniture u domu klijenta" },
  { src: "/tepih-servis-andric-15s.webp",              alt: "Pranje bele kožne garniture ekstrakcionom mašinom, bočni ugao" },
  { src: "/tepih-servis-andric-16s.webp",              alt: "Pranje ugaone kožne garniture ekstrakcionom mašinom" },
  { src: "/tepih-servis-andric-17s.webp",              alt: "Poređenje oprane i neoprane površine mikrofiber sofe" },
  { src: "/tepih-servis-andric-18s.webp",              alt: "Zaprljana presvlaka sofe pre dubinskog pranja" },
  { src: "/tepih-servis-andric-19.jpg",               alt: "Tri faze čišćenja sedišta dečijih kolica" },
  { src: "/tepih-servis-andric-19s.jpg",              alt: "Opran moderni tepih sa plavo-bež geometrijskim šarama" },
  { src: "/tepih-servis-andric-20s.jpg",              alt: "Zaprljan tepih sa geometrijskim šarama pre pranja" },
  { src: "/tepih-servis-andric-22s.webp",              alt: "Unutrašnjost sedišta dečijih kolica pre dubinskog čišćenja" },
  { src: "/tepih-servis-andric-23s.jpg",              alt: "Detalj rojti tepiha nakon opšivanja, dva ugla" },
  { src: "/tepih-servis-andric-31.jpg",               alt: "Rasklopljena konstrukcija dečijih kolica pripremljena za pranje" },
  { src: "/tepih-servis-andric-32.webp",               alt: "Oprani tepisi okačeni na sušenje u komori servisa" },
  { src: "/tepih-servis-andric-33.jpg",               alt: "Mercedes Sprinter vozilo Tepih Servisa Andrić, prednji ugao" },
  { src: "/tepih-servis-andric-34.jpg",               alt: "Zadnja strana vozila sa punim brendiranjem — tradicija od 1984" },
  { src: "/tepih-servis-andric-35.jpg",               alt: "Rasklopljena dečija kolica sa uklonjenim sedištem pre pranja" },
  { src: "/tepih-servis-andric-36.jpg",               alt: "Detalj točkova i rama dečijih kolica pripremljenih za pranje" },
  { src: "/tepih-servis-andric-37.webp",               alt: "Konci i predivo za opšivanje i zamenu resa u više boja" },
  { src: "/tepih-servis-andric-3s.webp",               alt: "Poređenje pre i posle dubinskog pranja okrugle foteljice" },
  { src: "/tepih-servis-andric-4s.jpg",               alt: "Poređenje zaprljanog i opranog naslona za ruke na sofi" },
  { src: "/tepih-servis-andric-5s.webp",               alt: "Zadnja vrata kombija sa spiskom usluga Tepih Servisa Andrić" },
  { src: "/tepih-servis-andric-6s.webp",               alt: "Profesionalna rotaciona mašina Cimex Truvox za pranje tepiha" },
  { src: "/tepih-servis-andric-7s.jpg",               alt: "Redovi opranih tepiha okačenih na sušenje pod nadstrešnicom" },
  { src: "/tepih-servis-andric-8.webp",                alt: "Tehnix mašina obrađuje tepih uz dva namotana tepiha u čekanju" },
  { src: "/tepih-servis-andric-8s.webp",               alt: "Naslagani tepisi u skladištu servisa spremni za preuzimanje" },
  { src: "/tepih-servis-andric-9s.webp",               alt: "Tepisi okačeni na sušenje uz fasadu objekta servisa" },
  { src: "/tepih-servis-andric-prevoz.jpg",           alt: "Vozilo za transport tepiha — Tepih Servis Andrić, osnovan 1984" },
  { src: "/tepih-servis-pranje-namestaja.webp",        alt: "Karcher ekstrakciona mašina pri pranju ugaone bež garniture" },
  { src: "/tepih-servis-pranje-tepiha.webp",           alt: "Naslagani namotani tepisi spremni za pranje" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/galerija/` },
  ],
};

export default async function GalerijaPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const totalPages = Math.ceil(IMAGES.length / PAGE_SIZE);
  const page = Math.min(Math.max(1, Number(pageParam) || 1), totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const pageImages = IMAGES.slice(start, start + PAGE_SIZE);

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
              Naša profesionalna usluga čišćenja tepiha savršen je komplement za održavanje Vašeg
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
              {pageImages.map((img) => (
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

            {totalPages > 1 && (
              <nav className="flex items-center justify-center flex-wrap gap-2 mt-10" aria-label="Paginacija galerije">
                <Link
                  href={page <= 2 ? "/galerija/" : `/galerija/?page=${page - 1}`}
                  aria-disabled={page === 1}
                  tabIndex={page === 1 ? -1 : undefined}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    page === 1
                      ? "pointer-events-none opacity-40 border-gray-200 text-gray-400"
                      : "border-gray-300 text-navy hover:bg-white"
                  }`}
                >
                  Prethodna
                </Link>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <Link
                    key={n}
                    href={n === 1 ? "/galerija/" : `/galerija/?page=${n}`}
                    aria-current={n === page ? "page" : undefined}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                      n === page ? "bg-gold text-white" : "border border-gray-300 text-navy hover:bg-white"
                    }`}
                  >
                    {n}
                  </Link>
                ))}

                <Link
                  href={`/galerija/?page=${page + 1}`}
                  aria-disabled={page === totalPages}
                  tabIndex={page === totalPages ? -1 : undefined}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    page === totalPages
                      ? "pointer-events-none opacity-40 border-gray-200 text-gray-400"
                      : "border-gray-300 text-navy hover:bg-white"
                  }`}
                >
                  Sledeća
                </Link>
              </nav>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
