import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { PhoneIconLg } from "@/components/ui/Icons";

export function MethodsSection() {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 text-xs mb-1">Masinsko dubinsko pranje tepiha</p>
            <h2 className="text-xl font-bold text-navy mb-3">
              <Link href="/masinsko-pranje-tepiha/" className="underline underline-offset-2 decoration-gold/40 hover:decoration-gold hover:text-gold transition-colors">
                Mašinsko dubinsko pranje polusuvo <span className="text-gold text-base">→</span>
              </Link>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Naš tepih servis u Beogradu koristi mašine za polusuvo dubinsko pranje tepiha sa šest
              rotirajućih četki koje istovremeno prelaze preko tepiha, uklanjajući nečistoću iz same
              dubine vlakana. Doziranje hemijskih sredstava je potpuno automatizovano i prilagođeno
              vrsti Vašeg tepiha, čime se čuva njegov kvalitet i boja.
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-xs mb-1">Dubinsko ciscenje tepiha</p>
            <h2 className="text-xl font-bold text-navy mb-3">
              <Link href="/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/" className="underline underline-offset-2 decoration-gold/40 hover:decoration-gold hover:text-gold transition-colors">
                Mašinsko dubinsko pranje sa centrifugom <span className="text-gold text-base">→</span>
              </Link>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ovaj metod pranja tepiha koristi pet rotirajućih četki koje uklanjaju i najsitniju
              prljavštinu, uz ispiranje centrifugom koje iz tepiha izvlači svu preostalu vlagu.
              Rezultat je tepih koji je potpuno čist, dezinfikovan i spreman za brže sušenje.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={CONTACT.phone1Href}
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <PhoneIconLg />
            Pozovite nas
          </a>
        </div>
      </div>
    </section>
  );
}
