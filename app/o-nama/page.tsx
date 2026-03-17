import type { Metadata } from "next";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL, CONTACT } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CheckIcon, PhoneIconLg } from "@/components/ui/Icons";

const meta = INFO_META["o-nama"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/o-nama/` },
};

const PREDNOSTI = [
  "Tradicija i iskustvo",
  "Servis je osnovan 1984. godine",
  "Profesionalna usluga",
  "Ekspeditivnost",
  "Dolazimo na Vašu adresu",
  "Automatsko mašinsko pranje",
  "Šest rotacionih četki",
  "Ispiranje centrifugom",
];

export default function ONamaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">O nama</span>
            <Breadcrumb items={[{ label: "O nama" }]} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Dobrodošli u Tepih Servis Andrić, osnovan 1984.
            </h1>
            <p className="text-gold font-semibold text-lg mb-8">
              Jedan od prvih tepih servisa u Beogradu sa velikim iskustvom i dugom tradicijom
            </p>

            <div className="space-y-5 text-gray-700 text-base leading-relaxed max-w-4xl">
              <p>
                Ukoliko Vam je stalo da Vaši tepisi i nameštaj budu zaista čisti i dezinfikovani,
                pozovite nas. Vršimo detaljno mašinsko dubinsko pranje tepiha i nameštaja na
                najdetaljniji način, pokrivamo svaki segment čišćenja i održavanja tepiha i
                nameštaja. U prilici smo da se pobrinemo oko svakog aspekta sušenja i pranja Vaših
                tepiha, održavanja resa ukoliko ih ima, kao i adekvatan način sušenja u odnosu na
                vremenske prilike, dostavu i način čuvanja tepiha. Nakupljanje prašine i nečistoća
                u nameštaju mogu biti izvor raznih neprijatnih pojava; virusa, alergija i
                neprijatnog mirisa u stanu kojeg se ne možete osloboditi dok ne uradite temeljno i
                dubinsko čišćenje.
              </p>
              <p>
                Dubinsko pranje nameštaja i tepiha nije samo stvar estetike, već pre svega Vašeg
                zdravlja. Možete biti sigurni da će, pošto prođe sve procese pranja i sušenja, Vaš
                tepih ili nameštaj biti dubinski čisti i dezinfikovani od svih prljavština, virusa i
                prašine koja se mesecima nataložila. Nakon našeg pranja Vaš nameštaj i tepisi će
                zaista moći da dišu a Vaš prostor dobiće novu i svežiju notu i mirisaće na čisto.
                Naše usluge su vezane za temeljno, dubinsko pranje Vašeg nameštaja, tepiha ali i
                kolica za bebe kojima je takođe potrebno redovno dubinsko pranje.
              </p>
              <p>
                Tepih Servis Andrić nudi čišćenje tepiha koji se suočava sa dubokom nečistoćom i
                prašinom. Korišćenjem visokokvalitetnih, ekološki prihvatljivih proizvoda i
                naprednih metoda čišćenja, možemo Vam pomoći da sačuvate svetao izgled, boju i
                životni vek Vašeg tepiha.
              </p>
            </div>
          </div>
        </div>

        {/* Zašto odabrati */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
              Zašto odabrati Tepih Servis Andrić?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {PREDNOSTI.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <CheckIcon className="text-gold shrink-0" />
                  <span className="text-navy text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={CONTACT.phone1Href}
              className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <PhoneIconLg />
              Pozovite nas
            </a>
          </div>
        </div>

        {/* Pillars */}
        <div className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream rounded-xl p-6 border-t-4 border-gold">
                <h3 className="font-bold text-navy text-lg mb-2">Iskustvo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sa sigurnošću možemo reći da nudimo najbolji odnos cene i kvaliteta, i specijalne
                  pogodnosti za veće količine.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-t-4 border-gold">
                <h3 className="font-bold text-navy text-lg mb-2">Tradicija</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tepih Servis Andrić je osnovan 1984. godine i od tada, pa sve do danas nudi
                  profesionalne i ekspeditivne usluge.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-t-4 border-gold">
                <h3 className="font-bold text-navy text-lg mb-2">Kvalitet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Koristimo visoko savremenu opremu i najkvalitetnija sredstva za čišćenje tepiha,
                  dubinsko pranje nameštaja...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
