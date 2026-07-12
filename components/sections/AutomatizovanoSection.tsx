import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

const PROCESS_ITEMS: { label: string; href?: string }[] = [
  { label: "Preuzimanje tepiha sa adrese", href: "/transport-tepiha/" },
  { label: "Usisavanje tepiha (tresač - automatsko trešenje)", href: "/tresenje-tepiha/" },
  { label: "Merenje i slikanje tepiha pre pranja" },
  { label: "Natapanje tepiha u koritima sa vodom" },
  { label: "Pranje automatizovanim mašinama setom od 5 četki", href: "/masinsko-pranje-tepiha/" },
  { label: "Pranje resa ručno (ako tepih ima rese)" },
  {
    label: "Centrifugiranje tepiha i ispiranje do bistre kapi",
    href: "/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/",
  },
  { label: "Prirodno sušenje (preko dana)", href: "/susenje-tepiha/" },
  { label: "Sušenje u automatizovanim komorama (preko noći)", href: "/susenje-tepiha/" },
  { label: "Finish usisavanje automatizovanim mašinama, parfemisanje, slikanje posle pranja" },
  { label: "Pakovanje i dostava tepiha", href: "/transport-tepiha/" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Automatizovano pranje tepiha",
  description: "Kompletan proces pranja tepiha u Tepih servisu Andrić, od preuzimanja do dostave.",
  step: PROCESS_ITEMS.map(({ label, href }, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: label,
    text: label,
    ...(href && { url: `${SITE_URL}${href}` }),
  })),
};

export function AutomatizovanoSection() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/masine-za-pranje-tepiha.webp"
              alt="Mašine za pranje tepiha — Tepih Servis Andrić Beograd"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
              Automatizovano pranje tepiha
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Kompletan proces pranja tepiha izgleda ovako:
            </p>
            <ol className="space-y-3">
              {PROCESS_ITEMS.map(({ label, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="text-gold shrink-0 mt-0.5" />
                  {href ? (
                    <Link
                      href={href}
                      className="text-gray-700 text-sm leading-relaxed underline underline-offset-2 decoration-gold/40 hover:decoration-gold transition-colors"
                    >
                      {label}
                      <span className="ml-1 text-gold text-xs">→</span>
                    </Link>
                  ) : (
                    <span className="text-gray-700 text-sm leading-relaxed">{label}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
    <JsonLd data={howToSchema} />
  </>
  );
}
