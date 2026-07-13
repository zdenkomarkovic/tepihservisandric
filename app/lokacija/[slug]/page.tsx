import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATION_META, LOCATION_SLUGS, LOCATION_IMAGES, LOCATION_IMAGE_ALTS } from "@/lib/siteData";
import { LOCATION_CONTENT } from "@/lib/locationContent";
import { LOCATION_ZONE, LOCATION_AREA } from "@/lib/locationZones";
import { SITE_URL, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = LOCATION_META[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/lokacija/${slug}/` },
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/lokacija/${slug}/`,
      images: [
        LOCATION_IMAGES[slug]?.[0]
          ? { url: `${SITE_URL}${LOCATION_IMAGES[slug]![0]}`, width: 640, height: 480, alt: meta.h1 }
          : OG_IMAGE_DEFAULT,
      ],
    },
  };
}

export default async function LokacijaPage({ params }: Props) {
  const { slug } = await params;
  const meta = LOCATION_META[slug];
  if (!meta) notFound();

  const images = LOCATION_IMAGES[slug] ?? [];
  const content = LOCATION_CONTENT[slug];

  const stripLocationName = (m: { pageH1?: string; h1: string }) =>
    (m.pageH1 ?? m.h1).replace("Pranje Tepiha ", "").replace(" — Tepih Servis Andrić", "");

  const locationName = stripLocationName(meta);
  const breadcrumbLabel = `Tepih Servis ${locationName}`;

  const zone = LOCATION_ZONE[slug];
  const nearbySlugs = LOCATION_SLUGS.filter(
    (s) => s !== slug && LOCATION_AREA[s] === LOCATION_AREA[slug]
  ).slice(0, 6);

  const zoneFaqAnswer =
    zone === 1
      ? `Ne. Preuzimanje i dostava tepiha za ${locationName} su potpuno besplatni, bez ograničenja u kvadraturi.`
      : `Preuzimanje i dostava tepiha za ${locationName} su besplatni, uz minimalnu kvadraturu od 6m² po preuzimanju.`;

  const faqItems = [
    {
      question: `Da li Tepih Servis Andrić pokriva ${locationName}?`,
      answer: `Da, redovno pokrivamo ${locationName}. Preuzimamo tepihe sa Vaše adrese, peremo ih mašinski i vraćamo oprane i osušene, direktno na Vašu lokaciju.`,
    },
    {
      question: `Da li se plaća prevoz tepiha u ${locationName}?`,
      answer: zoneFaqAnswer,
    },
    {
      question: "Koliko traje pranje tepiha?",
      answer:
        "Standardno pranje i sušenje tepiha traje 2 do 3 radna dana, u zavisnosti od veličine i vrste tepiha.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.h1,
    description: meta.description,
    url: `${SITE_URL}/lokacija/${slug}/`,
    provider: {
      "@type": "Organization",
      name: "Tepih Servis Andrić Beograd",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{breadcrumbLabel}</span>
            <Breadcrumb items={[{ label: breadcrumbLabel }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {meta.pageH1 ?? meta.h1}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <article className="bg-white rounded-xl p-6 md:p-10 shadow-sm">
              {content}

              {images.length > 0 && (
                <div className={`grid gap-4 mt-8 ${images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                  {images.map((src, i) => (
                    <div key={src} className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={LOCATION_IMAGE_ALTS[slug]?.[i] ?? meta.h1}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          </div>
        </div>

        {/* Interne veze — usluge */}
        <div className="bg-white py-10 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-lg font-bold text-navy mb-5">Naše usluge</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { href: "/pranje-tepiha/", label: "Pranje tepiha" },
                { href: "/masinsko-pranje-tepiha/", label: "Mašinsko dubinsko pranje" },
                { href: "/dubinsko-ciscenje-namestaja/", label: "Pranje nameštaja" },
                { href: "/pranje-decijah-kolica/", label: "Pranje dečijih kolica" },
                { href: "/opsivanje-tepiha/", label: "Opšivanje tepiha" },
                { href: "/zamena-resa/", label: "Zamena resa" },
                { href: "/transport-tepiha/", label: "Transport tepiha" },
                { href: "/cenovnik/", label: "Cenovnik usluga" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-cream rounded-lg px-4 py-3 text-sm text-navy font-medium hover:text-gold hover:bg-cream border border-gray-200 hover:border-gold transition-colors"
                >
                  {label} »
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Obližnje lokacije */}
        {nearbySlugs.length > 0 && (
          <div className="bg-cream py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-lg font-bold text-navy mb-5">Obližnje lokacije koje takođe pokrivamo</h2>
              <div className="flex flex-wrap gap-2">
                {nearbySlugs.map((nearbySlug) => {
                  const nearbyMeta = LOCATION_META[nearbySlug]!;
                  return (
                    <Link
                      key={nearbySlug}
                      href={`/lokacija/${nearbySlug}/`}
                      className="text-sm bg-white hover:bg-gold hover:text-white text-navy px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gold transition-colors"
                    >
                      Tepih Servis {stripLocationName(nearbyMeta)}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white py-10 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold text-navy mb-5">Najčešća pitanja — {locationName}</h2>
            <div className="space-y-3">
              {faqItems.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group bg-cream rounded-xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none hover:text-gold transition-colors">
                    <span className="font-semibold text-navy text-sm md:text-base group-hover:text-gold transition-colors">
                      {question}
                    </span>
                    <span className="shrink-0 text-gold text-lg leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
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
      <JsonLd data={faqSchema} />
    </>
  );
}
