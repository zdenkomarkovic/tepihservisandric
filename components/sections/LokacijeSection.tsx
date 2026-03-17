import Link from "next/link";

const ZONE1_LINKS: { name: string; slug: string }[] = [
  { name: "Veliki Mokri Lug", slug: "veliki-mokri-lug" },
  { name: "Kaluđerica", slug: "kaludjerica" },
  { name: "Mali Mokri Lug", slug: "mali-mokri-lug" },
  { name: "Medaković", slug: "medakovic" },
  { name: "Konjarnik", slug: "konjarnik" },
  { name: "Učiteljsko naselje", slug: "uciteljsko-naselje" },
  { name: "Lekino brdo", slug: "lekino-brdo" },
  { name: "Autokomanda", slug: "autokomanda" },
  { name: "Voždovac", slug: "vojvode-stepe" },
  { name: "Vojvode Stepe", slug: "vojvode-stepe" },
  { name: "Braće Jerković", slug: "brace-jerkovic" },
  { name: "Vojvode Vlahovica", slug: "vojvode-vlahovica" },
  { name: "Mitrovo brdo", slug: "mitrovo-brdo" },
  { name: "Stepa Stepanović", slug: "stepa-stepanovic" },
  { name: "Kumodraž", slug: "kumodraz" },
  { name: "Jajinci", slug: "jajinci" },
  { name: "Banjica", slug: "banjica" },
];

const ZONE2_LINKS: { name: string; slug: string }[] = [
  { name: "Zvezdara", slug: "zvezdara" },
  { name: "Mirijevo", slug: "mirijevo" },
  { name: "Karaburma", slug: "karaburma" },
  { name: "Palilula (Centar)", slug: "palilula" },
  { name: "Slavujev venac", slug: "slavujev-venac" },
  { name: "Vukov spomenik", slug: "vukov-spomenik" },
  { name: "Đeram", slug: "djeram" },
  { name: "Vračar", slug: "vracar" },
  { name: "Čubura", slug: "cubura" },
  { name: "Bogoslovija", slug: "bogoslovija" },
  { name: "Dorćol", slug: "dorcol" },
  { name: "Stari grad", slug: "stari-grad" },
  { name: "Novi Beograd", slug: "novi-beograd" },
  { name: "Zemun", slug: "/" },
  { name: "Bežanijska kosa", slug: "bezanijska-kosa" },
  { name: "Čukarička padina", slug: "cukaricka-padina" },
  { name: "Senjak", slug: "senjak" },
  { name: "Dedinje", slug: "dedinje" },
  { name: "Savski venac", slug: "savski-venac" },
  { name: "Banovo brdo", slug: "banovo-brdo" },
  { name: "Golf naselje", slug: "golf-naselje" },
  { name: "Žarkovo", slug: "zarkovo" },
  { name: "Cerak", slug: "cerak" },
  { name: "Vidikovac", slug: "/" },
  { name: "Filmski grad", slug: "/" },
  { name: "Rakovica", slug: "rakovica" },
  { name: "Miljakovac", slug: "miljakovac" },
  { name: "Kanarevo brdo", slug: "kanarevo-brdo" },
];

export function LokacijeSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
          Lokacije koje pokrivamo
        </h2>

        <div className="flex flex-col gap-6">
          {/* Zona 1 */}
          <div className="w-full bg-navy rounded-2xl overflow-hidden">
            <div className="flex items-center gap-4 px-8 py-5 border-b border-white/10">
              <span className="bg-gold text-white text-sm font-bold px-4 py-1.5 rounded-full">
                ZONA 1
              </span>
            </div>
            <div className="px-8 py-6">
              <div className="flex flex-wrap gap-2">
                {ZONE1_LINKS.map(({ name, slug }) => (
                  <Link
                    key={name}
                    href={`/lokacija/${slug}/`}
                    className="text-sm bg-white/10 hover:bg-gold text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <p className="text-red-400 text-sm font-semibold mt-5">
                Preuzimanje i dostava tepiha u prethodno pomenutim delovima grada je bez ogranicenja u kvadraturi (transport je besplatan).
              </p>
              <p className="text-red-400 text-sm font-semibold mt-2">
                Tepisi se ne donose u servis, već ih preuzimamo i dostavljamo isključivo mi.
              </p>
            </div>
          </div>

          {/* Zona 2 */}
          <div className="w-full bg-navy-dark rounded-2xl overflow-hidden">
            <div className="flex items-center gap-4 px-8 py-5 border-b border-white/10">
              <span className="bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                ZONA 2
              </span>
            </div>
            <div className="px-8 py-6">
              <div className="flex flex-wrap gap-2">
                {ZONE2_LINKS.map(({ name, slug }) => (
                  <Link
                    key={name}
                    href={slug === "/" ? "/" : `/lokacija/${slug}/`}
                    className="text-sm bg-white/10 hover:bg-gold text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <p className="text-red-400 text-sm font-semibold mt-5">
                Minimalna kvadratura za preuzimanje tepiha sa gore pomenutih lokacija je 6m2 (ili se tako računa ako je kvadratura manja od 6m2.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
