import type { Metadata } from "next";
import { INFO_META } from "@/lib/siteData";
import { CONTACT, HOURS, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { LokacijeSection } from "@/components/sections/LokacijeSection";

const meta = INFO_META["kontakt"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/kontakt/` },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Kontakt & Lokacije</span>
            <Breadcrumb items={[{ label: "Kontakt & Lokacije" }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Kontakt & Lokacije</h1>
            <p className="text-gray-700 text-base leading-relaxed">
              Hvala Vam što ste posetili Tepih Servis Andrić. Trudimo se da osiguramo potpuno
              zadovoljstvo naših klijenata od trenutka početnih konsultacija do postavljanja čistog
              i mirisnog tepiha u Vaš dom, vodeći računa da Vas usput edukujemo o pranju i
              održavanju tepiha.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kontakt podaci */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
                <h2 className="text-xl font-bold text-navy mb-5">Kontakt podaci</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Kontakt:</p>
                    <p>
                      <a
                        href={CONTACT.phone1Href}
                        className="text-navy font-semibold hover:text-gold transition-colors"
                      >
                        {CONTACT.phone1}
                      </a>
                    </p>
                    <p>
                      <a
                        href={CONTACT.phone2Href}
                        className="text-navy font-semibold hover:text-gold transition-colors"
                      >
                        {CONTACT.phone2}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Email:</p>
                    <a
                      href={CONTACT.emailHref}
                      className="text-navy font-semibold hover:text-gold transition-colors break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Podaci firme:</p>
                    <p className="font-bold text-navy">TEPIH SERVIS ANDRIĆ</p>
                    <p className="text-gray-600">Profesionalni servis za pranje tepiha</p>
                    <div className="mt-2 space-y-1 text-gray-700">
                      <p>PIB: 107016058</p>
                      <p>Matični broj: 62437553</p>
                      <p>Sedište firme: {CONTACT.fullAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lokacija */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
                <h2 className="text-xl font-bold text-navy mb-5">Lokacija</h2>
                <div className="text-sm">
                  <p className="text-gray-500 font-medium mb-1">Adresa:</p>
                  <p className="text-gray-700">{CONTACT.fullAddress}</p>
                </div>
                <div className="mt-8 rounded-xl aspect-square overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d87843.85859649327!2d20.465474373139724!3d44.76067218214042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70d05004e9ff%3A0xa389996448371c1d!2z0JvQsNC00L3QviDQkdGA0LTQviA0Zywg0JHQtdC-0LPRgNCw0LQgMTEwMDA!5e0!3m2!1ssr!2srs!4v1773622197465!5m2!1ssr!2srs"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tepih Servis Andrić — lokacija"
                  />
                </div>
              </div>

              {/* Radno vreme */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
                <h2 className="text-xl font-bold text-navy mb-5">Radno vreme</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-500 font-medium mb-2">Call centar:</p>
                    <div className="space-y-1 text-gray-700">
                      <div className="flex justify-between gap-4">
                        <span>Ponedeljak – Petak:</span>
                        <span className="font-medium">{HOURS.weekdays}h</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Subota:</span>
                        <span className="font-medium">{HOURS.saturday}h</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Nedelja:</span>
                        <span className="font-medium">Neradno</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-2">Terenska služba:</p>
                    <div className="space-y-1 text-gray-700">
                      <div className="flex justify-between gap-4">
                        <span>Ponedeljak – Subota:</span>
                        <span className="font-medium">{HOURS.field.weekdays}h</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Nedelja:</span>
                        <span className="font-medium">Neradno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <LokacijeSection />
            {/* Google Maps */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
