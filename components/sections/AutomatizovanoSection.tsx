import Image from "next/image";
import { CheckIcon } from "@/components/ui/Icons";

const PROCESS_ITEMS = [
  "Preuzimanje tepiha sa adrese",
  "Usisavanje tepiha (tresač — automatsko trešenje)",
  "Merenje i slikanje tepiha pre pranja",
  "Natapanje tepiha u koritima sa vodom",
  "Pranje automatizovanim mašinama setom od 5 četki",
  "Pranje resa ručno (ako tepih ima rese)",
  "Centrifugiranje tepiha i ispiranje do bistre kapi",
  "Prirodno sušenje (preko dana)",
  "Sušenje u automatizovanim komorama (preko noći)",
  "Finish usisavanje automatizovanim mašinama, parfemisanje, slikanje posle pranja",
  "Pakovanje i dostava tepiha",
] as const;

export function AutomatizovanoSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/masine-za-pranje-tepiha.jpg"
              alt="Mašine za pranje tepiha — Tepih Servis Andrić Beograd"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">Automatizovano pranje</h2>
            <p className="text-gray-500 text-sm mb-6">
              Kompletan proces pranja tepiha izgleda ovako:
            </p>
            <ol className="space-y-3">
              {PROCESS_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
