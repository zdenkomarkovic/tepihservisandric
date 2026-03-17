import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATION_META, LOCATION_SLUGS, LOCATION_IMAGES, LOCATION_IMAGE_ALTS } from "@/lib/siteData";
import { LOCATION_CONTENT } from "@/lib/locationContent";
import { SITE_URL } from "@/lib/constants";
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
  };
}

export default async function LokacijaPage({ params }: Props) {
  const { slug } = await params;
  const meta = LOCATION_META[slug];
  if (!meta) notFound();

  const images = LOCATION_IMAGES[slug] ?? [];
  const content = LOCATION_CONTENT[slug];

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
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb items={[{ label: meta.h1 }]} />
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
