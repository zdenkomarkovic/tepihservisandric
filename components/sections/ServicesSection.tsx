import Link from "next/link";
import {
  WaterIcon, GearIcon, SpinIcon, SunIcon, SofaIcon,
  NeedleIcon, ScissorsIcon, StrollerIcon, WindIcon, TruckIcon,
} from "@/components/ui/Icons";

const SERVICES = [
  { href: "/pranje-tepiha/",                                     prefix: "Masinsko pranje tepiha",                     title: "Pranje tepiha",                        desc: "Tepih servis Andrić nudi savremene metode čišćenja...",           icon: <WaterIcon /> },
  { href: "/masinsko-pranje-tepiha/",                            prefix: "Masinsko Dubinsko pranje tepiha i namestaja", title: "Mašinsko dubinsko pranje polusuvo",    desc: "Ovakav tretman pranja...",                                        icon: <GearIcon /> },
  { href: "/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/",prefix: "Pranje tepiha Beograd",                      title: "Pranje sa ispiranjem centrifugom",     desc: "Mašinsko pranje u...",                                            icon: <SpinIcon /> },
  { href: "/susenje-tepiha/",                                    prefix: "Susenje tepiha Beograd",                     title: "Sušenje tepiha u komorama",            desc: "Sušenje u specijalnim...",                                        icon: <SunIcon /> },
  { href: "/dubinsko-ciscenje-namestaja/",                       prefix: "Masinsko dubinsko pranje namestaja",         title: "Masinsko dubinsko pranje namestaja",   desc: "Naše usluge će sigurno...",                                       icon: <SofaIcon /> },
  { href: "/opsivanje-tepiha/",                                  prefix: "Opsivanje tepiha Beograd",                   title: "Opšivanje tepiha",                     desc: "Opšivanje se radi na krajnjim ivicama tepiha...",                 icon: <NeedleIcon /> },
  { href: "/opsivanje-etisona/",                                 prefix: "Opsivanje itisona Beograd",                  title: "Opšivanje itisona",                    desc: "Opšivanje tepiha klijent može zahtevati iz više...",              icon: <NeedleIcon /> },
  { href: "/zamena-resa/",                                       prefix: "Zamena resa",                               title: "Zamena resa",                          desc: "Naš tepih servis Vam nudi rese od više...",                       icon: <ScissorsIcon /> },
  { href: "/pranje-decijah-kolica/",                             prefix: "Pranje dečijih kolica",                     title: "Pranje dečijih kolica",                desc: "Pružamo usluge profesionalnog čišćenja...",                       icon: <StrollerIcon /> },
  { href: "/tresenje-tepiha/",                                   prefix: "Automatizovano pranje tepiha",              title: "Trešenje tepiha",                      desc: "Tepih koji kod nas prođe mašinsko trešenje...",                   icon: <WindIcon /> },
  { href: "/transport-tepiha/",                                  prefix: "Tepih servis Vozdovac",                     title: "Transport tepiha",                     desc: "Transport i dostava, preuzimanje tepiha...",                      icon: <TruckIcon /> },
  { href: "/ciscenje-mebl-namestaja/",                           prefix: "Pranje tepiha Cena",                        title: "Čišćenje i pranje mebl nameštaja",     desc: "Da bi Vaš meblirani...",                                          icon: <SofaIcon /> },
] as const;

export function ServicesSection() {
  return (
    <section id="usluge" className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
          Usluge tepih servisa
        </h2>

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
              <p className="text-gray-400 text-xs mb-1">{prefix}</p>
              <h3 className="font-semibold text-navy text-sm mb-2 group-hover:text-gold transition-colors leading-snug">
                {title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">{desc}</p>
              <span className="mt-4 text-gold text-xs font-semibold group-hover:translate-x-1 inline-block transition-transform">
                Detaljnije »
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
