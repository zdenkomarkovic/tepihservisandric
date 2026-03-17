import type { Metadata } from "next";
import Link from "next/link";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = INFO_META["najcesca-pitanja"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/najcesca-pitanja/` },
};

const FAQS = [
  {
    question: "Koja je cena pranja tepiha u Vašem tepih servisu?",
    answer: (
      <>
        Garantujemo najpovoljnije cena pranja tepiha, a sve informacije i cene usluga možete videti na stranici{" "}
        <Link href="/cenovnik/" className="text-gold hover:text-gold-dark">Cenovnik</Link>.
      </>
    ),
  },
  {
    question: "Da li vršite dostavu/transport tepiha?",
    answer: (
      <>
        Vršimo transport i dostavu tepiha, preuzimanje tepiha i vraćanje na adresu! Pogledajte{" "}
        <Link href="/kontakt/" className="text-gold hover:text-gold-dark">sve lokacije koje pokrivamo</Link>.
      </>
    ),
  },
  {
    question: "Da li vršite uslugu opšivanja tepiha?",
    answer: (
      <>
        Da. Opšivanje tepiha klijent može zahtevati iz više razloga: nakon uklanjanja starih resa, promena boje postojećih ivica na tepihu, nakon skraćivanja ili usecanja itisona....a sve u cilju kako ne bi došlo do rasipanja i paranja tepiha ili itisona.
      </>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: question,
    },
  })),
};

export default function NajcescaPitanjaPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{meta.h1}</h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm space-y-6">
              {FAQS.map(({ question, answer }) => (
                <div key={question} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <h2 className="text-lg font-bold text-navy mb-3">{question}</h2>
                  <p className="text-gray-700 leading-relaxed">{answer}</p>
                </div>
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
      <JsonLd data={faqSchema} />
    </>
  );
}
