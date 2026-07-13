import type { Metadata } from "next";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL, CONTACT, OG_IMAGE_DEFAULT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/seo/JsonLd";

const meta = INFO_META["zaposlenje"]!;

// JobPosting datePosted/validThrough se računaju u nastavku u odnosu na "sada" —
// bez periodične regeneracije, validThrough bi posle 90 dana istekao i Google
// Search Console bi prijavio "expired" grešku iako je oglas i dalje aktivan.
export const revalidate = 86400; // dnevno osvežavanje

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/zaposlenje/` },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/zaposlenje/`,
    images: [OG_IMAGE_DEFAULT],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: meta.h1, item: `${SITE_URL}/zaposlenje/` },
  ],
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Radnik za pranje i čišćenje tepiha, nameštaja i dečijih kolica",
  description:
    "Tepih servis Andrić u Beogradu zapošljava radnike za pranje i čišćenje tepiha, nameštaja i dečijih kolica. Posao obuhvata razgovor sa klijentima, biranje metoda čišćenja i uklanjanje mrlja.",
  datePosted: new Date().toISOString().split("T")[0],
  validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  employmentType: ["FULL_TIME", "PART_TIME"],
  hiringOrganization: {
    "@type": "Organization",
    name: "Tepih Servis Andrić Beograd",
    sameAs: SITE_URL,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ladno brdo 4g",
      addressLocality: "Beograd",
      postalCode: "11000",
      addressCountry: "RS",
    },
  },
};

export default function ZaposlenjeePage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Zaposlenje</span>
            <Breadcrumb items={[{ label: "Zaposlenje" }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gold font-semibold text-lg mb-1">Širimo tim</p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Zapošljavamo radnike u Tepih Servisu Andrić Beograd
            </h1>
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
              Usled povećanog obima posla, Tepih servis Andrić u Beogradu zapošljava nove radnike za
              rad na pranju i čišćenju tepiha, nameštaja i dečijih kolica.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Opis posla */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
                <h2 className="text-xl font-bold text-navy mb-5">Opis posla</h2>
                <ul className="space-y-3">
                  {[
                    "razgovor sa klijentima o zahtevima i procena kakvo čišćenje treba da se odradi",
                    "biranje najboljih metoda čišćenja",
                    "čišćenje tepiha, nameštaja, dečijih kolica",
                    "uklanjanje ili smanjivanje mrlja i fleka",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="text-gold shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Veštine i znanje */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
                <h2 className="text-xl font-bold text-navy mb-2">Veštine i znanje</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Naši profesionalci moraju imati znanje o:
                </p>
                <ul className="space-y-3">
                  {[
                    "tepisima i tkaninama za nameštaj",
                    "sredstvima za uklanjanje mrlja i drugih hemikalija",
                    "kako se koristi i brine o mašinama i opremi za pranje tepiha",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="text-gold shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Očekivanja */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold md:col-span-2">
                <h2 className="text-xl font-bold text-navy mb-2">Očekivanja od kandidata</h2>
                <p className="text-gray-600 text-sm mb-4">Očekivanje je od radnika:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "da je vredan, požrtvovan, marljiv, tačan",
                    "sposoban za rad u kolektivu",
                    "sposoban za timski dinamičan rad",
                    "da se angažuje i svojim radom da se istakne radi daljeg napredovanja",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="text-gold shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-navy font-semibold text-sm mb-3">
                    Zainteresovani ste? Prijavite se:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={CONTACT.phone1Href}
                      className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                    >
                      Pozovite nas
                    </a>
                    <a
                      href="mailto:tepihservis.andric@gmail.com"
                      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                    >
                      Pošaljite email
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={jobPostingSchema} />
    </>
  );
}
