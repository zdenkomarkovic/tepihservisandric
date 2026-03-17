import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_INDEX_META, BLOG_POST_META, BLOG_POSTS_ORDERED } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: BLOG_INDEX_META.title,
  description: BLOG_INDEX_META.description,
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
};

const CARD_IMAGES = [
  "/pranje-tepiha.jpg",
  "/masine-za-pranje-tepiha.jpg",
  "/tepih-servis-2024.jpg",
  "/pranje-tepiha-1.jpg",
  "/pranje-tepiha-2.jpg",
  "/pranje-tepiha-3.jpg",
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Blog</span>
            <Breadcrumb items={[{ label: "Blog" }]} />
          </div>
        </div>

        {/* Page header */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Blog</h1>
            <p className="text-gray-700 text-base leading-relaxed">
              Dobrodošli na naš blog za čišćenje tepiha. Cilj nam je da ovaj blog postane resurs za
              one koji traže savete i trikove kada je u pitanju održavanje njihovih tepiha i nameštaja
              i održavanje čistoće doma. Volimo da objavljujemo preporuke i ideje za postizanje
              najveće vrednosti Vaših tepiha, zato često proverite naše najnovije objave, savete i
              trikove za uspešno čišćenje!
            </p>
          </div>
        </div>

        {/* Blog grid */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS_ORDERED.map(({ slug, date, image, cardTitle, cardExcerpt }, index) => {
                const post = BLOG_POST_META[slug];
                if (!post) return null;
                const imgSrc = image ?? CARD_IMAGES[index % CARD_IMAGES.length]!;
                return (
                  <article key={slug} className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
                    <Link href={`/blog/${slug}/`} className="block relative aspect-video">
                      <Image
                        src={imgSrc}
                        alt={post.h1}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-gray-600 text-xs mb-2">{date}</p>
                      <h2 className="text-navy font-bold text-base leading-snug mb-3">
                        <Link href={`/blog/${slug}/`} className="hover:text-gold transition-colors">
                          {cardTitle ?? post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                        {cardExcerpt ?? post.description}
                      </p>
                      <Link
                        href={`/blog/${slug}/`}
                        className="mt-4 inline-block text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
                      >
                        Detaljnije »
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
