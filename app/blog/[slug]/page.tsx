import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POST_META, BLOG_SLUGS, BLOG_POST_IMAGES } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { BLOG_POST_CONTENT } from "@/lib/blogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = BLOG_POST_META[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/blog/${slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const meta = BLOG_POST_META[slug];
  if (!meta) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.h1,
    description: meta.description,
    url: `${SITE_URL}/blog/${slug}/`,
    publisher: {
      "@type": "Organization",
      name: "Tepih Servis Andrić Beograd",
      url: SITE_URL,
    },
  };

  const coverImage = BLOG_POST_IMAGES[slug];

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{meta.h1}</span>
            <Breadcrumb hideHome items={[{ label: "Blog", href: "/blog/" }, { label: meta.pageH1 ?? meta.h1 }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            {!meta.noH1 && (
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{meta.pageH1 ?? meta.h1}</h1>
            )}

            {coverImage && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 max-w-3xl">
                <Image
                  src={coverImage}
                  alt={meta.h1}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <article className="bg-white rounded-xl p-6 md:p-10 shadow-sm">
              <div className="[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul_li]:text-gray-700 [&_ul_li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol_li]:text-gray-700 [&_ol_li]:mb-2">
                {BLOG_POST_CONTENT[slug] ?? <p>{meta.description}</p>}
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
      <JsonLd data={articleSchema} />
    </>
  );
}
