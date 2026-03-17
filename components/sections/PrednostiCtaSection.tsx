import { CONTACT } from "@/lib/constants";
import { PhoneIconLg } from "@/components/ui/Icons";

export function PrednostiCtaSection() {
  return (
    <section className="bg-navy text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Tepih servis Beograd Vozdovac Zvezdara
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-8">
          Za informacije o našim uslugama i zakazivanju, budite slobodni da nas kontaktirate na broj
          telefona +381 65 333 2 555.
        </p>
        <a
          href={CONTACT.phone1Href}
          className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          <PhoneIconLg />
          Pozovite nas
        </a>
      </div>
    </section>
  );
}
