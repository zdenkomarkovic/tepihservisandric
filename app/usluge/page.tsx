import type { Metadata } from "next";
import Link from "next/link";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  WaterIcon, GearIcon, SpinIcon, SunIcon, SofaIcon,
  NeedleIcon, ScissorsIcon, StrollerIcon, WindIcon, TruckIcon, DropIcon,
} from "@/components/ui/Icons";

const meta = INFO_META["usluge"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/usluge/` },
};

const SERVICES = [
  {
    href: "/pranje-tepiha/",
    prefix: "Pranje tepiha Beograd",
    title: "Pranje tepiha",
    desc: "Tepih servis Andrić nudi savremene metode čišćenja tepiha povratiće prvobitni sjaj i boju Vaših tepiha.",
    icon: <WaterIcon />,
  },
  {
    href: "/masinsko-pranje-tepiha/",
    prefix: "Pranje tepiha Beograd",
    title: "Mašinsko dubinsko pranje polusuvo",
    desc: "Ovakav tretman pranja tepiha omogućava i podrazumeva potpuno očuvanje kvaliteta tepiha.",
    icon: <GearIcon />,
  },
  {
    href: "/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/",
    prefix: "Pranje tepiha Beograd",
    title: "Mašinsko pranje sa ispiranjem centrifugom",
    desc: "Mašinsko pranje tepiha u našem tepih servisu se vrsi mašinama koje su poslednje generacije.",
    icon: <SpinIcon />,
  },
  {
    href: "/susenje-tepiha/",
    prefix: "Pranje tepiha Beograd",
    title: "Sušenje tepiha u komorama",
    desc: "Sušenje u specijalnim komorama, gde vladaju visoke temperature uz protok i strujanje vazduha.",
    icon: <SunIcon />,
  },
  {
    href: "/dubinsko-ciscenje-namestaja/",
    prefix: "Pranje tepiha Beograd",
    title: "Mašinsko dubinsko pranje nameštaja",
    desc: "Naše usluge će sigurno ukloniti sve mrlje i mirise koje je Vaš ljubimac ostavio za sobom.",
    icon: <SofaIcon />,
  },
  {
    href: "/opsivanje-tepiha/",
    prefix: "Pranje tepiha Beograd",
    title: "Opšivanje tepiha",
    desc: "Opšivanje se radi na krajnjim ivicama tepiha kako se on ne bi rasparao ili ukoliko klijent želi promenu boje na ivicama.",
    icon: <NeedleIcon />,
  },
  {
    href: "/opsivanje-etisona/",
    prefix: "Pranje tepiha Beograd",
    title: "Opšivanje itisona",
    desc: "Opšivanje tepiha klijent može zahtevati iz više razloga: nakon uklanjanja starih resa, promena boje...",
    icon: <NeedleIcon />,
  },
  {
    href: "/zamena-resa/",
    prefix: "Pranje tepiha Beograd",
    title: "Zamena resa",
    desc: "Naš tepih servis Vam nudi rese od više materijala, na Vama je da izaberete.",
    icon: <ScissorsIcon />,
  },
  {
    href: "/pranje-decijah-kolica/",
    prefix: "Pranje tepiha Beograd",
    title: "Pranje dečijih kolica",
    desc: "Pružamo usluge profesionalnog čišćenja dečijih kolica.",
    icon: <StrollerIcon />,
  },
  {
    href: "/tresenje-tepiha/",
    prefix: "Pranje tepiha Beograd",
    title: "Trešenje tepiha",
    desc: "Tepih koji kod nas prođe mašinsko trešenje je potpuno čist i spreman za pranje.",
    icon: <WindIcon />,
  },
  {
    href: "/transport-tepiha/",
    prefix: "Pranje tepiha Beograd",
    title: "Transport tepiha",
    desc: "Transport i dostava, preuzimanje tepiha i vraćanje na adresu!",
    icon: <TruckIcon />,
  },
  {
    href: "/ciscenje-mebl-namestaja/",
    prefix: "Pranje tepiha Beograd",
    title: "Čišćenje i pranje mebl nameštaja",
    desc: "Da bi Vaš meblirani nameštaj bio potpuno čist, potrebno je više od kućnog usisavanja.",
    icon: <SofaIcon />,
  },
  {
    href: "/dubinsko-polusuvo-ciscenje/",
    prefix: "Pranje tepiha Beograd",
    title: "Dubinsko polusuvo čišćenje",
    desc: "Preprati koje koristimo za čiscenje, produžavaju i životni vek trajana tepiha.",
    icon: <DropIcon />,
  },
] as const;

export default function UslugePage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Usluge</span>
            <Breadcrumb items={[{ label: "Usluge" }]} />
          </div>
        </div>

        {/* Page header */}
        <div className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Usluge tepih servisa
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-3xl">
              Redovnim čišćenjem koristeći najbolje tehnike i tehnologije, pomažemo Vam da održite
              izgled Vašeg tepiha i potencijalno produžite vek trajanja tepiha. Bilo da se radi o
              stalnom održavanju ili godišnjem čišćenju, učinićemo sve da Vaš tepih izgleda što
              bolje.
            </p>
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
              Zaštitite svoju investiciju na podu profesionalnim uslugama čišćenja tepiha u Tepih
              Servisu Andrić.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {SERVICES.map(({ href, prefix, title, desc, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border-t-4 border-gold flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold mb-3 shrink-0">
                    {icon}
                  </div>
                  <p className="text-gray-600 text-xs mb-1">{prefix}</p>
                  <h2 className="font-semibold text-navy text-sm mb-2 group-hover:text-gold transition-colors leading-snug">
                    {title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{desc}</p>
                  <span className="mt-4 text-gold text-xs font-semibold group-hover:translate-x-1 inline-block transition-transform">
                    Detaljnije »
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
