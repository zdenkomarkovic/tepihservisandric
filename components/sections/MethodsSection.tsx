import { CONTACT } from "@/lib/constants";
import { PhoneIconLg } from "@/components/ui/Icons";

export function MethodsSection() {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 text-xs mb-1">Masinsko dubinsko pranje tepiha</p>
            <p className="text-gold font-semibold text-sm mb-1">Masinsko pranje tepiha</p>
            <h2 className="text-xl font-bold text-navy mb-3">Mašinsko dubinsko pranje polusuvo</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ovakvo pranje odvija se automatizovanim mašinama koje vrše dubinsko temeljno pranje
              zahvaljujući istovremenom radu 6 rotirajućih četki koje istovremeno prelaze preko
              tepiha ne ostavljajući ni jedan milimetar nešistoće. Ove mašine u sebi poseduju dozere
              za hemisjka sredstva i vodu koja je potrebna u odnosu na vrstu Vašeg tepiha. Idealan
              način da očuvate kvalitet Vašeg tepiha, a da istovremeno odstranite sve fleke,
              koristeći samo propisanu količinu hemisjkih sredstava koja je potrebna, kako se tepih
              ne bi preterano tretirao.
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Dubinsko ciscenje tepiha</p>
            <h2 className="text-xl font-bold text-navy mb-3">
              Mašinsko dubinsko pranje sa centrifugom
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ovakav način dubinskog pranja takođe se odvija automatizovanim pametnim mašinama koje
              istovremenim korišćenjem 5 četki prelaze preko tepiha otklanjajući svaku fleku i
              najsitniju prljavštinu i dezinfikuju ga. Koristi se samo neophodna količina hemisjkih
              sredstava u zavisnosti od vrste i veličine Vašeg tepiha. Dodatna opcija je centrifuga
              koja će iz Vašeg tepiha izvući svu vlagu.
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
