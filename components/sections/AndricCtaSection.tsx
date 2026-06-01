import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { PhoneIconLg } from "@/components/ui/Icons";

export function AndricCtaSection() {
  return (
    <section className="bg-navy text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/tepih-servis-2024.jpg"
              alt="Tepih servis Andrić Beograd"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tepih servis Beograd Zvezdara</h2>
            <p className="text-white/75 text-base leading-relaxed mb-8">
              Ukoliko Vam je stalo da Vaši tepisi i nameštaj budu zaista čisti i dezinfikovani,
              pozovite nas. Vršimo detaljno mašinsko dubinsko ispiranje tepiha i nameštaja na
              najdetaljniji način, pokrivamo svaki segment čišćenja i održavanja tepiha i nameštaja.
              U prilici smo da se pobrinemo oko svakog aspekta sušenja i pranja Vaših tepiha,
              održavanja resa ukoliko ih ima, kao i adekvatan način sušenja u odnosu na vremenske
              prilike, dostavu i način čuvanja tepiha. Nakupljanje prašine i nečistoća u nameštaju
              mogu biti izvor raznih neprijatnih pojava; virusa, alergija i neprijatnog mirisa u
              stanu kojeg se ne možete osloboditi dok ne uradite temeljno i dubinsko čišćenje.
            </p>
            <a
              href={CONTACT.phone1Href}
              className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <PhoneIconLg />
              Pozovite nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
