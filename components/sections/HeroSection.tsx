import Link from "next/link";
import { HOME_META } from "@/lib/siteData";
import { CONTACT } from "@/lib/constants";
import { CheckIcon } from "@/components/ui/Icons";
import { HeroSlider } from "./HeroSlider";

const HERO_FEATURES = [
  "Profesionalno mašinsko pranje tepiha",
  "Ispiranje i ceđenje u centrifugi",
  "Automatsko pranje sa šest rotacionih četki",
  "Brza i kvalitetna usluga",
] as const;

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <HeroSlider />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-navy/20 to-navy/10" />

      {/* Content — server rendered */}
      <div className="relative z-10 w-full self-end">
        <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-40 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Leva strana */}
          <div className="flex-1">
            <h1 className="font-extrabold tracking-wide mb-4 leading-tight text-white">
              <span className="block text-3xl sm:text-5xl md:text-6xl">
                Tepih servis Andrić Beograd
              </span>
              <span className="block text-xl sm:text-3xl md:text-4xl font-bold mt-1">
                profesionalno mašinsko pranje tepiha
              </span>
            </h1>

            <p className="text-white text-base md:text-lg font-normal mb-2 max-w-xl leading-relaxed">
              Preuzimanje i dostava na adresu • Automatizovano pranje • Sušenje u komorama
            </p>

            <p
              className="text-gold font-semibold text-lg mb-6 tracking-wide"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
            >
              Sa dugom tradicijom od 1984. godine
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT.phone1Href}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                <PhoneIcon />
                Pozovite i zakažite preuzimanje
              </a>
              <Link
                href="/usluge/"
                className="inline-block bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-6 py-3 rounded-lg border border-white/30 transition-colors"
              >
                Naše usluge »
              </Link>
            </div>
          </div>

          {/* Desna strana — lista, sakrivena na mobilnom */}
          <div className="hidden md:block shrink-0">
            <ul className="flex flex-col gap-3">
              {HERO_FEATURES.map((f) => (
                <li
                  key={f}
                  className="whitespace-nowrap bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white/90 text-sm font-semibold"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}
