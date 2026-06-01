const REVIEWS = [
  {
    name: "Desimirka Masal",
    date: "2026-01-15",
    dateLabel: "Januar 2026",
    rating: 5,
    text: "Сваки пут презадовољна. И тако више од 10 година. Свака част и на ефикасности и на љубазности.",
  },
  {
    name: "Maja Mijailović",
    date: "2026-01-15",
    dateLabel: "Januar 2026",
    rating: 5,
    text: "Све похвале! Средили су нам колица за бебу као нова. Професионални, брзи и ефикасни!!!! Све препоруке!",
  },
  {
    name: "Snezana Ivanovic",
    date: "2026-02-15",
    dateLabel: "Februar 2026",
    rating: 5,
    text: "Prvi put sam naručila pranje tepih kod Vas,i oduševljena sam.tepih em lepo miriše em je tako čist..a ono što je najvažnije vaša uslužnost i ljubaznost i brzina rada...svako dobro i najbolje.sardjivacemo..",
  },
  {
    name: "Katarina Nikolic",
    date: "2025-11-15",
    dateLabel: "Novembar 2025",
    rating: 5,
    text: "Svaki put tepihe dovedu do perfekcije, izgledaju kao kad su kupljeni prvog dana! Uspeju da se izbore sa svim dečijim radovima - flekama od hrane, plastelinom, flomasterima... Nećemo ih menjati!",
  },
  {
    name: "Goja Popovic",
    date: "2025-08-15",
    dateLabel: "Avgust 2025",
    rating: 5,
    text: "Veoma rado izdvajam malo vremena da pohvalim ove momke, kao redovne musterije za pranje tepiha (porodica sa malom decom i psom). Ovakva ljubaznost se nije mnogo puta videla u Beogradu. Usluga brza i povoljna. Puno pozdrava",
  },
  {
    name: "Gordana Basta",
    date: "2024-05-15",
    dateLabel: "Maj 2024",
    rating: 5,
    text: "Htela sam dubinski da ocistim sedište od kolica za bebu, sasvim slučajno i bez preporuke na internetu sam našla da tepih servis Andric izmedju ostalog radi i to. Ljudi su veoma profesionalni i ljubazni a sediste bukvalno izgleda kao novo , čak i na mestima gde je boja izbledela, sada opet izgleda kao prvi dan. Svaka čast, za svaku preporuku ❤️ krivo mi je samo sto nisam slikala sediste pre i posle pranja.",
  },
  {
    name: "Aleksandar Miscevic",
    date: "2024-05-15",
    dateLabel: "Maj 2024",
    rating: 5,
    text: "Odličan kvalitet usluge i komunikacija. Uvek su pazljivi sa skupocenim I bilo kojim drugim tepisima. Takodje, kod njih sam radio I prekrajanje I opšivanje tepiha. Veoma sam zadovoljan I definitivno su najbolji u gradu. Za svaku preporuku I pohvalu.",
  },
  {
    name: "Jana Pumpalovic",
    date: "2024-05-15",
    dateLabel: "Maj 2024",
    rating: 5,
    text: "Sjajni! Svaki tepih i staza neverovatno mirisu, precisti i skinute su sve fleke! Preljubazni, cene odlicne, postuju dogovoreno vreme, a profesionalnost celog tepih servisa Andric je na najvisem nivou. Vec ko zna koji put saradjujemo i uvek nas iznova oduseve jer su masteri svog posla! Sve pohvale i preporuke, samo tako nastavite! Veliko bravo za ceo tim👏🏼",
  },
  {
    name: "Irena",
    date: "2025-11-15",
    dateLabel: "Novembar 2025",
    rating: 5,
    text: "Jednostavno receno svaka čast! Imam teoih koji je viskozan i po mnogima neperiv . S obzirom da je imao fleke od čaja i kafe ,a da sam ja to pokusala sama da operem pa mi nije uspelo zvala sam jedan servis da mi tepih skrati jer to reklamiraju da mogu i da ga naravno operu . Posle nedelju dana sam dobila tepih koji nije skracen jer ga zbog debljine nisu skratili, a tepih je smrdeo na vlagu . Na reklamaciju su odreagovali ok , ali su opet vratili tepih koji je i dalje smrdeo . Resila sam da probam sa jos nekim servisom i slucajno sam dosla do tepih servisa Andric Oni su moj tepih ponovo oprali , lepo ga osusili tako da vise ne smrdi , a fleke koje je imao sada su toliko malo vidljive . Ono sto me je najvise obradovalo je to sto su tepih i skratili , znaci moze , nego treba umeti . Bravooo i hvala 🤗 Svaka preporuka !",
  },
] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Ocena ${count} od 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
          Šta kažu naši klijenti
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Recenzije preuzete sa Google — proverene i stvarne
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map(({ name, dateLabel, rating, text }) => (
            <div
              key={name}
              className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3 border border-gray-100"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy text-sm truncate">{name}</p>
                  <p className="text-gray-400 text-xs">{dateLabel}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 shrink-0" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              <Stars count={rating} />

              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
