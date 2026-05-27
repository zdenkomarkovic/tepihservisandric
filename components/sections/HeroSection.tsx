import { HOME_META } from "@/lib/siteData";
import { CheckIcon } from "@/components/ui/Icons";
import { HeroSlider } from "./HeroSlider";

const HERO_FEATURES = [
  "Mašinsko pranje tepiha",
  "Ispiranje centrifugom",
  "Šest rotacionih četki",
  "Automatsko pranje",
  "Kvalitetno i ekspeditivno",
] as const;

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <HeroSlider />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-navy/20 to-navy/10" />

      {/* Content — server rendered */}
      <div className="relative z-10 w-full self-end">
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mb-4 leading-tight text-white">
            {HOME_META.h1}
          </h1>

          <p className="text-white/75 text-2xl md:text-3xl font-normal mb-3">
            Iskustvo | Tradicija | Kvalitet
          </p>

          <p className="text-gold font-semibold text-lg mb-8 tracking-wide">Since 1984.</p>

          <ul className="flex flex-col gap-2 mb-10">
            {HERO_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckIcon className="text-gold shrink-0 mt-0.5" />
                <span className="flex flex-col">
                  <span className="text-white/70 text-xs leading-tight">Tepih servis Andrić</span>
                  <span className="text-white/90 text-base font-bold leading-snug">{f}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
