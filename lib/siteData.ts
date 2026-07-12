/**
 * Metadata za sve stranice sajta.
 * Izvor istine: E:\internal_all.csv (Screaming Frog export, crawled 2026-03-09)
 *
 * VAŽNO: Ne menjati vrednosti ručno bez provere u CSV fajlu.
 * Svaka promena title/description direktno utiče na SEO pozicije.
 */

export interface PageMeta {
  title: string;
  description: string;
  h1: string;
  pageH1?: string;
  noH1?: boolean;
}

// ─── Homepage ──────────────────────────────────────────────────────────────
export const HOME_META: PageMeta = {
  title: "Tepih servis Andrić Beograd | Pranje tepiha – preuzimanje i dostava",
  description:
    "Profesionalno mašinsko pranje tepiha, nameštaja i dečijih kolica u Beogradu. Preuzimamo i dostavljamo na adresu. Tradicija od 1984. Pozovite i zakažite!",
  h1: "Tepih servis Andrić Beograd – profesionalno mašinsko pranje tepiha",
};

// ─── Service pages ─────────────────────────────────────────────────────────
export const SERVICE_META: Record<string, PageMeta> = {
  "pranje-tepiha": {
    title: "Pranje tepiha - Tepih Servis Andrić Beograd",
    description:
      "Profesionalno pranje tepiha u Beogradu — mašinsko dubinsko čišćenje, transport i dostava na adresu. Pozovite Tepih servis Andrić za besplatnu procenu.",
    h1: "Pranje tepiha",
  },
  "masinsko-pranje-tepiha": {
    title: "Mašinsko polusuvo pranje tepiha - Tepih Servis Andrić Beograd",
    description:
      "Polusuvo mašinsko dubinsko pranje tepiha sa šest rotirajućih četki, uz potpuno očuvanje kvaliteta i boje Vašeg tepiha. Pozovite Tepih servis Andrić u Beogradu.",
    h1: "Mašinsko dubinsko pranje polusuvo",
    pageH1: "Mašinsko dubinsko pranje tepiha polusuvo u Beogradu",
  },
  "masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom": {
    title: "Pranje tepiha sa ispiranjem centrifugom - Tepih Servis Andrić",
    description:
      "Mašinsko pranje tepiha sa ispiranjem centrifugom u Beogradu — uklanjamo svaku fleku i prljavštinu, koristeći mašine poslednje generacije. Pozovite Tepih servis Andrić.",
    h1: "Mašinsko pranje sa ispiranjem centrifugom",
    pageH1: "Mašinsko pranje tepiha sa ispiranjem centrifugom u Beogradu",
  },
  "dubinsko-polusuvo-ciscenje": {
    title: "Dubinsko polusuvo čišćenje tepiha - Tepih Servis Andrić Beograd",
    description:
      "Dubinsko polusuvo čišćenje velikih tepiha i prostirki na licu mesta u Beogradu, bez potrebe da ih donosite u servis. Pozovite Tepih servis Andrić.",
    h1: "Dubinsko polusuvo čišćenje",
    pageH1: "Dubinsko polusuvo čišćenje tepiha na licu mesta",
  },
  "dubinsko-ciscenje-namestaja": {
    title: "Mašinsko dubinsko pranje nameštaja - Tepih Servis Andrić Beograd",
    description:
      "Mašinsko dubinsko pranje nameštaja u Beogradu — rotacione četke i ekstrakcija uklanjaju alergene i prljavštinu iz dubine tkanine. Pozovite Tepih servis Andrić.",
    h1: "Mašinsko dubinsko pranje nameštaja",
    pageH1: "Mašinsko dubinsko pranje nameštaja u Beogradu",
  },
  "ciscenje-mebl-namestaja": {
    title: "Čišćenje i pranje mebl nameštaja - Tepih Servis Andrić Beograd",
    description:
      "Profesionalno čišćenje i dubinsko pranje mebl nameštaja u Beogradu — ekološki proizvodi koji čuvaju boju i kvalitet Vašeg nameštaja. Pozovite Tepih servis Andrić.",
    h1: "Čišćenje i pranje mebl nameštaja",
    pageH1: "Čišćenje i pranje mebl nameštaja u Beogradu",
  },
  "ciscenje-tepiha-beograd": {
    title: "Čišćenje tepiha šamponom - Tepih Servis Andrić Beograd",
    description:
      "Čišćenje tepiha šamponom u Beogradu — nanošenje, utrljavanje i ekstrakcija prljavštine specijalizovanom opremom. Pozovite Tepih servis Andrić.",
    h1: "Čišćenje tepiha šamponom",
    pageH1: "Čišćenje tepiha šamponom u Beogradu",
  },
  "ciscenje-itisona": {
    title: "Čišćenje itisona šamponom - Tepih Servis Andrić Beograd",
    description:
      "Čišćenje itisona šamponom u Beogradu — uklanjamo prašinu, alergene i fleke iz hodnika i stepenica. Pozovite Tepih servis Andrić.",
    h1: "Čišćenje itisona šamponom",
  },
  "susenje-tepiha": {
    title: "Sušenje tepiha u komorama - Tepih Servis Andrić Beograd",
    description:
      "Sušenje tepiha u specijalnim komorama u Beogradu, uz visoke temperature i kontrolisan protok vazduha za potpunu suvoću. Pozovite Tepih servis Andrić.",
    h1: "Sušenje tepiha",
    pageH1: "Sušenje tepiha u komorama u Beogradu",
  },
  "tresenje-tepiha": {
    title: "Mašinsko trešenje tepiha - Tepih Servis Andrić Beograd",
    description:
      "Mašinsko trešenje tepiha u Beogradu uklanja prašinu, pesak i nečistoće pre samog pranja. Pozovite Tepih servis Andrić za procenu.",
    h1: "Trešenje tepiha",
    pageH1: "Mašinsko trešenje tepiha u Beogradu",
  },
  "transport-tepiha": {
    title: "Transport i dostava tepiha - Tepih Servis Andrić Beograd",
    description:
      "Besplatno preuzimanje i dostava tepiha na adresu u Beogradu — Zona 1 bez ograničenja kvadrature, Zona 2 od 6m². Pozovite Tepih servis Andrić.",
    h1: "Transport tepiha",
    pageH1: "Transport i dostava tepiha u Beogradu",
  },
  "opsivanje-tepiha": {
    title: "Sečenje i opšivanje tepiha - Tepih Servis Andrić Beograd",
    description:
      "Sečenje i opšivanje tepiha u Beogradu — prilagođavamo dimenzije i štitimo ivice od rasparanja. Pozovite Tepih servis Andrić za procenu.",
    h1: "Opšivanje tepiha",
    pageH1: "Sečenje i opšivanje tepiha u Beogradu",
  },
  "opsivanje-etisona": {
    title: "Opšivanje itisona - Tepih Servis Andrić Beograd",
    description:
      "Sečenje i opšivanje itisona po dužnom metru u Beogradu — idealno za hodnike, stepenice i ulaze. Pozovite Tepih servis Andrić za procenu.",
    h1: "Opšivanje itisona",
    pageH1: "Opšivanje itisona u Beogradu",
  },
  "zamena-resa": {
    title: "Zamena resa na tepihu - Tepih Servis Andrić Beograd",
    description:
      "Zamena oštećenih resa na tepihu u Beogradu — birate između pamučnih, vunenih i svilenih resa. Pozovite Tepih servis Andrić za procenu.",
    h1: "Zamena resa",
    pageH1: "Zamena resa na tepihu u Beogradu",
  },
  "pranje-decijih-kolica": {
    title: "Pranje dečijih kolica - Tepih Servis Andrić Beograd",
    description:
      "Profesionalno pranje i dezinfekcija dečijih kolica u Beogradu — kompletno rasklapanje, čišćenje toplom parom i dezinfekcija svakog dela. Pozovite Tepih servis Andrić.",
    h1: "Pranje dečijih kolica",
    pageH1: "Pranje dečijih kolica u Beogradu",
  },
};

// ─── Info / utility pages ──────────────────────────────────────────────────
export const INFO_META: Record<string, PageMeta> = {
  usluge: {
    title: "Usluge tepih servisa Andrić Beograd",
    description: "Pogledajte kompletnu listu usluga: mašinsko pranje, sušenje, opšivanje, transport i još mnogo toga. Pozovite nas i zakažite termin već danas.",
    h1: "Usluge tepih servisa u Beogradu",
  },
  "o-nama": {
    title: "O nama - Tepih Servis Andrić Beograd",
    description:
      "Tepih servis Andrić je jedan od prvih tepih servisa u Beogradu, sa dugom tradicijom od 1984. godine i velikim iskustvom u dubinskom pranju tepiha i nameštaja.",
    h1: "O nama",
  },
  kontakt: {
    title: "Kontakt i lokacije - Tepih Servis Andrić Beograd",
    description: "Pozovite nas ili pogledajte sve lokacije u Beogradu koje pokrivamo. Besplatna dostava i preuzimanje tepiha u Zoni 1.",
    h1: "Kontakt & Lokacije",
  },
  cenovnik: {
    title: "Cenovnik usluga - Tepih Servis Andrić Beograd",
    description: "Cena pranja tepiha kreće od 480 RSD po kvadratnom metru, u zavisnosti od vrste i veličine tepiha. Pogledajte kompletan cenovnik usluga.",
    h1: "Cenovnik usluga pranja tepiha",
  },
  galerija: {
    title: "Foto galerija - Tepih Servis Andrić Beograd",
    description: "Pogledajte fotografije naših radova: pranje, sušenje i opšivanje tepiha u Tepih servisu Andrić Beograd.",
    h1: "Foto galerija",
  },
  video: {
    title: "Video - Tepih Servis Andrić Beograd",
    description:
      "Pogledajte video zapise procesa pranja tepiha u tepih servisu Andrić u Beogradu.",
    h1: "Video pranja tepiha u Beogradu",
  },
  "najcesca-pitanja": {
    title: "Najčešća pitanja o pranju tepiha - Tepih Servis Andrić Beograd",
    description:
      "Pronađite odgovore na najčešća pitanja o ceni, trajanju, dostavi i vrstama tepiha koje peremo.",
    h1: "Najčešća pitanja",
  },
  zaposlenje: {
    title: "Zaposlenje - Tepih Servis Andrić Beograd",
    description:
      "Zbog povećanog obima posla, Tepih servis Andrić zapošljava nove radnike u Beogradu. Pogledajte trenutno otvorene pozicije.",
    h1: "Zaposlenje",
  },
};

// ─── Location pages ────────────────────────────────────────────────────────
// 41 aktivnih lokacija — svaka na /lokacija/{slug}/
export const LOCATION_META: Record<string, PageMeta> = {
  autokomanda: {
    title: "Pranje Tepiha Autokomanda | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Autokomanda — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    pageH1: "Pranje Tepiha Autokomanda — Tepih Servis Andrić",
    h1: "Tepih Servis, Pranje Tepiha Autokomanda",
  },
  banjica: {
    title: "Pranje Tepiha Banjica | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Banjica — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Banjica",
    pageH1: "Pranje Tepiha Banjica — Tepih Servis Andrić",
  },
  "banovo-brdo": {
    title: "Pranje Tepiha Banovo Brdo | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Banovo Brdo — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Banovo Brdo",
    pageH1: "Pranje Tepiha Banovo Brdo — Tepih Servis Andrić",
  },
  "bezanijska-kosa": {
    title: "Pranje Tepiha Bezanijska Kosa | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Bezanijska Kosa — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Bezanijska kosa",
    pageH1: "Pranje Tepiha Bezanijska Kosa — Tepih Servis Andrić",
  },
  bogoslovija: {
    title: "Pranje Tepiha Bogoslovija | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Bogoslovija — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Bogoslovija",
    pageH1: "Pranje Tepiha Bogoslovija — Tepih Servis Andrić",
  },
  "brace-jerkovic": {
    title: "Pranje Tepiha Braće Jerković | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Braće Jerković — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Braće Jerković",
    pageH1: "Pranje Tepiha Braće Jerković — Tepih Servis Andrić",
  },
  cerak: {
    title: "Pranje Tepiha Cerak | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Cerak — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Cerak",
    pageH1: "Pranje Tepiha Cerak — Tepih Servis Andrić",
  },
  cubura: {
    title: "Pranje Tepiha Čubura | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Čubura — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Čubura",
    pageH1: "Pranje Tepiha Čubura — Tepih Servis Andrić",
  },
  "cukaricka-padina": {
    title: "Pranje Tepiha Čukarička Padina | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Čukarička Padina — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Čukarička Padina",
    pageH1: "Pranje Tepiha Čukarička Padina — Tepih Servis Andrić",
  },
  dedinje: {
    title: "Pranje Tepiha Dedinje | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Dedinje — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Dedinje",
    pageH1: "Pranje Tepiha Dedinje — Tepih Servis Andrić",
  },
  djeram: {
    title: "Pranje Tepiha Đeram | Tepih Servis Andrić",
    pageH1: "Pranje Tepiha Đeram — Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Đeram — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Đeram",
  },
  dorcol: {
    title: "Pranje Tepiha Dorćol | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Dorćol — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Dorćol",
    pageH1: "Pranje Tepiha Dorćol — Tepih Servis Andrić",
  },
  "golf-naselje": {
    title: "Pranje Tepiha Golf Naselje | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Golf Naselje — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Golf Naselje",
    pageH1: "Pranje Tepiha Golf Naselje — Tepih Servis Andrić",
  },
  jajinci: {
    title: "Pranje Tepiha Jajinci | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Jajinci — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Jajinci",
    pageH1: "Pranje Tepiha Jajinci — Tepih Servis Andrić",
  },
  kaludjerica: {
    title: "Pranje Tepiha Kaluđerica | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Kaluđerica — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Kaluđerica",
    pageH1: "Pranje Tepiha Kaluđerica — Tepih Servis Andrić",
  },
  "kanarevo-brdo": {
    title: "Pranje Tepiha Kanarevo Brdo | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Kanarevo Brdo — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Kanarevo Brdo",
    pageH1: "Pranje Tepiha Kanarevo Brdo — Tepih Servis Andrić",
  },
  karaburma: {
    title: "Pranje Tepiha Karaburma | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Karaburma — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Karaburma",
    pageH1: "Pranje Tepiha Karaburma — Tepih Servis Andrić",
  },
  konjarnik: {
    title: "Pranje Tepiha Konjarnik | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Konjarnik — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Konjarnik",
    pageH1: "Pranje Tepiha Konjarnik — Tepih Servis Andrić",
  },
  kumodraz: {
    title: "Pranje Tepiha Kumodraž | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Kumodraž — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Kumodraž",
    pageH1: "Pranje Tepiha Kumodraž — Tepih Servis Andrić",
  },
  "lekino-brdo": {
    title: "Pranje Tepiha Lekino Brdo | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Lekino Brdo — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    pageH1: "Pranje Tepiha Lekino Brdo — Tepih Servis Andrić",
    h1: "Tepih Servis, Pranje Tepiha Lekino Brdo",
  },
  "mali-mokri-lug": {
    title: "Pranje Tepiha Mali Mokri Lug | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Mali Mokri Lug — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Mali Mokri Lug",
    pageH1: "Pranje Tepiha Mali Mokri Lug — Tepih Servis Andrić",
  },
  medakovic: {
    title: "Pranje Tepiha Medaković | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Medaković — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Medaković",
    pageH1: "Pranje Tepiha Medaković — Tepih Servis Andrić",
  },
  miljakovac: {
    title: "Pranje Tepiha Miljakovac | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Miljakovac — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Miljakovac",
    pageH1: "Pranje Tepiha Miljakovac — Tepih Servis Andrić",
  },
  mirijevo: {
    title: "Pranje Tepiha Mirijevo | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Mirijevo — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Mirijevo",
    pageH1: "Pranje Tepiha Mirijevo — Tepih Servis Andrić",
  },
  "mitrovo-brdo": {
    title: "Pranje Tepiha Mitrovo Brdo | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Mitrovo Brdo — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Mitrovo brdo",
    pageH1: "Pranje Tepiha Mitrovo Brdo — Tepih Servis Andrić",
  },
  "novi-beograd": {
    title: "Pranje Tepiha Novi Beograd | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Novi Beograd — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Novi Beograd",
    pageH1: "Pranje Tepiha Novi Beograd — Tepih Servis Andrić",
  },
  palilula: {
    title: "Pranje Tepiha Palilula (Centar) | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Palilula (Centar) — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Palilula (Centar)",
    pageH1: "Pranje Tepiha Palilula (Centar) — Tepih Servis Andrić",
  },
  rakovica: {
    title: "Pranje Tepiha Rakovica | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Rakovica — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Rakovica",
    pageH1: "Pranje Tepiha Rakovica — Tepih Servis Andrić",
  },
  "savski-venac": {
    title: "Pranje Tepiha Savski Venac | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Savski Venac — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Savski Venac",
    pageH1: "Pranje Tepiha Savski Venac — Tepih Servis Andrić",
  },
  senjak: {
    title: "Pranje Tepiha Senjak | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Senjak — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Senjak",
    pageH1: "Pranje Tepiha Senjak — Tepih Servis Andrić",
  },
  "slavujev-venac": {
    title: "Pranje Tepiha Slavujev Venac | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Slavujev Venac — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Slavujev venac",
    pageH1: "Pranje Tepiha Slavujev Venac — Tepih Servis Andrić",
  },
  "stari-grad": {
    title: "Pranje Tepiha Stari Grad | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Stari Grad — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Stari Grad",
    pageH1: "Pranje Tepiha Stari Grad — Tepih Servis Andrić",
  },
  "stepa-stepanovic": {
    title: "Pranje Tepiha Stepa Stepanović | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Stepa Stepanović — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Stepa Stepanović",
    pageH1: "Pranje Tepiha Stepa Stepanović — Tepih Servis Andrić",
  },
  "uciteljsko-naselje": {
    title: "Pranje Tepiha Učiteljsko Naselje | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Učiteljsko Naselje — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    pageH1: "Pranje Tepiha Učiteljsko Naselje — Tepih Servis Andrić",
    h1: "Tepih Servis, Pranje Tepiha Uciteljsko naselje",
  },
  "veliki-mokri-lug": {
    title: "Pranje Tepiha Veliki Mokri Lug | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Veliki Mokri Lug — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Veliki Mokri Lug",
    pageH1: "Pranje Tepiha Veliki Mokri Lug — Tepih Servis Andrić",
  },
  "vojvode-stepe": {
    title: "Pranje Tepiha Vojvode Stepe | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Vojvode Stepe — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Vojvode Stepe",
    pageH1: "Pranje Tepiha Vojvode Stepe — Tepih Servis Andrić",
  },
  "vojvode-vlahovica": {
    title: "Pranje Tepiha Vojvode Vlahovića | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Vojvode Vlahovića — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Vojvode Vlahovića",
    pageH1: "Pranje Tepiha Vojvode Vlahovića — Tepih Servis Andrić",
  },
  vozdovac: {
    title: "Pranje Tepiha Voždovac | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Voždovac — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Voždovac",
    pageH1: "Pranje Tepiha Voždovac — Tepih Servis Andrić",
  },
  vracar: {
    title: "Pranje Tepiha Vračar | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Vračar — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Vračar",
    pageH1: "Pranje Tepiha Vračar — Tepih Servis Andrić",
  },
  "vukov-spomenik": {
    title: "Pranje Tepiha Vukov Spomenik | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Vukov Spomenik — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Vukov spomenik",
    pageH1: "Pranje Tepiha Vukov Spomenik — Tepih Servis Andrić",
  },
  zarkovo: {
    title: "Pranje Tepiha Žarkovo | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Žarkovo — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Žarkovo",
    pageH1: "Pranje Tepiha Žarkovo — Tepih Servis Andrić",
  },
  zvezdara: {
    title: "Pranje Tepiha Zvezdara (Centar) | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Zvezdara (Centar) — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Zvezdara (Centar)",
    pageH1: "Pranje Tepiha Zvezdara (Centar) — Tepih Servis Andrić",
  },
  zemun: {
    title: "Pranje Tepiha Zemun | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Zemun — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Zemun",
    pageH1: "Pranje Tepiha Zemun — Tepih Servis Andrić",
  },
  vidikovac: {
    title: "Pranje Tepiha Vidikovac | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Vidikovac — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Vidikovac",
    pageH1: "Pranje Tepiha Vidikovac — Tepih Servis Andrić",
  },
  "filmski-grad": {
    title: "Pranje Tepiha Filmski Grad | Tepih Servis Andrić",
    description: "Tepih Servis Andrić nudi pranje tepiha Filmski grad — preuzimamo i dostavljamo. Dubinsko čišćenje tepiha, nameštaja i dečijih kolica. Beograd.",
    h1: "Tepih Servis, Pranje Tepiha Filmski Grad",
    pageH1: "Pranje Tepiha Filmski Grad — Tepih Servis Andrić",
  },
};

// Slugovi svih lokacijskih stranica — za generateStaticParams i sitemap
export const LOCATION_SLUGS = Object.keys(LOCATION_META);

// ─── Blog ──────────────────────────────────────────────────────────────────
export const BLOG_INDEX_META: PageMeta = {
  title: "Blog Tepih Servis Andrić Beograd",
  description:
    "Pogledajte najnovije blog objave i informišite se o uslugama tepih servisa, kao i dodatnim uslugama koje nudi tepih servis Andrić.",
  h1: "Blog",
};

export const BLOG_POST_META: Record<string, PageMeta> = {
  "automatizovano-pranje-tepiha-u-tepih-servisu": {
    title: "Automatizovano pranje tepiha u tepih servisu",
    description:
      "Automatizovano pranje tepiha u tepih servisu - Tepih Servis Andrić raspolaže sa najsavremenijim mašinama za dubinsko pranje.",
    h1: "Automatizovano pranje tepiha u tepih servisu",
  },
  "cist-tepih-zdrav-dom": {
    title: "Čist tepih - zdrav dom",
    description:
      "Redovno održavanje tepiha je investicija u zdravlje. Ne dozvolite da zapostavljanje tepiha dovede do negativnih posledica po zdravlje.",
    h1: "Čist tepih, zdrav dom",
  },
  "dubinsko-ciscenje-namestaja-kako-produziti-vek-trajanja-vaseg-namestaja": {
    title: "Dubinsko čišćenje nameštaja: Kako produžiti njegov vek?",
    description:
      "Otkrijte prednosti dubinskog čišćenja nameštaja – uklonite prljavštinu, mrlje i alergene, produžite vek nameštaja i očuvajte dom svežim i zdravim.",
    h1: "Dubinsko čišćenje nameštaja: Kako produžiti vek trajanja vašeg nameštaja?",
    noH1: true,
  },
  "dubinsko-polusuvo-ciscenje-tepiha": {
    title: "Dubinsko polusuvo čišćenje tepiha",
    description:
      "Održavajte tepihe čistim i produžite njihov vek uz dubinsko polusuvo čišćenje tepiha. Naša usluga u Beogradu nudi efikasno čišćenje sa brzim sušenjem.",
    h1: "Dubinsko polusuvo čišćenje tepiha",
  },
  "dubinsko-pranje-i-ciscenje-mebl-namestaja": {
    title: "Dubinsko pranje i čišćenje mebl nameštaja",
    description:
      "Profesionalno dubinsko pranje i čišćenje mebl nameštaja. Ekološki pristup za dugovečan i sjajan nameštaj",
    h1: "Dubinsko pranje i čišćenje mebl nameštaja",
  },
  "dubinsko-pranje-namestaja-zasto-je-vazno": {
    title: "Dubinsko pranje nameštaja – zašto je važno?",
    description:
      "Saznajte zašto je dubinsko pranje nameštaja važno za zdravlje i dugovečnost. Uklonite nečistoće i uživajte u svežem enterijeru.",
    h1: "Dubinsko pranje nameštaja – zašto je važno?",
  },
  "dubinsko-pranje-tepiha-vracar": {
    title: "Dubinsko pranje tepiha Vracar",
    description:
      "Dubinsko pranje tepiha Vracar -  Naša napredna obuka, iskustvo i stručna oprema osiguravaju da se vaš posao obavlja pažljivo i pouzdano.",
    h1: "Dubinsko pranje tepiha Vracar",
    pageH1: "Dubinsko pranje tepiha Vračar",
  },
  "dubinsko-pranje-tepiha-zasto-je-vazno-i-kako-se-pravilno-izvodi": {
    title: "Dubinsko pranje tepiha – Zašto je važno i kako se pravilno izvodi?",
    description:
      "Dubinsko pranje tepiha uklanja prašinu, grinje i mirise, produžava vek i poboljšava kvalitet vazduha. Saznajte zašto je važno i kako se izvodi.",
    h1: "Zašto je važno dubinsko pranje tepiha i kako se pravilno izvodi?",
    pageH1: "Dubinsko pranje tepiha",
  },
  "hemijsko-ciscenje-tepiha-efikasno-resenje-za-cist-dom": {
    title: "Hemijsko čišćenje tepiha – Efikasno rešenje za čist dom",
    description:
      "Hemijsko čišćenje tepiha efikasno uklanja mrlje, prljavštinu i bakterije, osiguravajući dubinsku čistoću i brzo sušenje, bez oštećenja tepiha.",
    h1: "Hemijsko čišćenje tepiha – Efikasno rešenje za čist dom",
  },
  "kada-je-vreme-za-ciscenje-tepiha": {
    title: "Kada je vreme za ciscenje tepiha?",
    description:
      "Ciscenje tepiha - Tepisi različitih vrsta, oblika i boja postali su neophodan detalj skoro svih domova i odgovorni su za ambijent i atmosferu.",
    h1: "Kada je vreme za ciscenje tepiha?",
    pageH1: "Kada je vreme za čišćenje tepiha?",
  },
  "kako-odrzavati-tepihe-u-svom-domu": {
    title: "Kako održavati tepihe u svom domu?",
    description:
      "Naši profesionalci imaju dugogodišnje iskustvo i koriste najnoviju opremu i tehnologiju kako bi Vaš tepih izgledao savršeno.",
    h1: "Kako održavati tepihe u svom domu?",
    pageH1: "Kako održavati tepihe u svom domu",
  },
  "koje-su-prednosti-dubinskog-pranja": {
    title: "Koje su prednosti dubinskog pranja?",
    description:
      "Koje su prednosti dubinskog pranja? Dubinsko pranje kao što i sama reč kaže dubinski čisti i otklanja nečistoće, bakterije iz same dubine Vašeg tepiha.",
    h1: "Koje su prednosti dubinskog pranja?",
  },
  "masinsko-dubinsko-pranje-i-ciscenje-namestaja": {
    title: "Mašinsko dubinsko pranje i ciscenje nameštaja",
    description:
      "Mašinsko dubinsko pranje i ciscenje nameštaja - Pozovite nas jer mi koristimo specijalne mašine za čišćenje.",
    h1: "Mašinsko dubinsko pranje i ciscenje nameštaja",
    pageH1: "Mašinsko dubinsko pranje i čišćenje nameštaja",
  },
  "masinsko-pranje-tepiha-u-beogradu": {
    title: "Masinsko pranje tepiha u Beogradu",
    description:
      "Masinsko pranje tepiha u Beogradu - U zavisnosti od vrste tepiha određuje se pritisak, ali i mekoća vlakana četke koje koristimo.",
    h1: "Masinsko pranje tepiha u Beogradu",
  },
  "opsivanje-tepiha-produzite-vek-vaseg-omiljenog-tepiha": {
    title: "Opšivanje tepiha – Produžite vek Vašeg omiljenog tepiha",
    description:
      "Opšivanje tepiha sprečava krzanje ivica, produžava trajnost i estetski osvežava prostor. Izaberite profesionalnu uslugu za svoj dom.",
    h1: "Produžite vek Vašeg omiljenog tepiha",
    pageH1: "Profesionalno opšivanje tepiha",
  },
  "pranje-tepiha-beograd-profesionalna-usluga-za-savrsenu-cistocu": {
    title: "Pranje tepiha Beograd: Profesionalna usluga za savršenu čistoću",
    description:
      "Profesionalno pranje tepiha Beograd - vrhunska usluga, ekološka sredstva, preuzimanje i dostava na adresu. Vaš tepih zaslužuje savršenu čistoću!",
    h1: "Pranje tepiha Beograd: Profesionalna usluga za savršenu čistoću",
  },
  "pranje-tepiha-sa-sest-rotacionih-cetki": {
    title: "Pranje tepiha sa šest rotacionih četki",
    description:
      "Pranje tepiha - U zavisnosti od vrste tepiha određuje se pritisak, ali i mekoća vlakana četke koje koristimo.",
    h1: "Pranje tepiha sa šest rotacionih četki",
  },
  "pranje-tepiha-tepih-servis-beograd": {
    title: "Pranje tepiha Tepih servis Beograd",
    description:
      "Pranje tepiha Tepih servis Beograd - Ako želite da iskoristite profesionalne usluge kompanije od poverenja sa velikim iskustvom, kontaktirajte nas.",
    h1: "Pranje tepiha tepih servis Beograd",
  },
  "pravo-vreme-za-pranje-tepiha-u-beogradu": {
    title: "Pravo vreme za pranje tepiha u Beogradu",
    description:
      "Pravo vreme za pranje tepiha u Beogradu - Proleće je u vazduhu i savršeno je vreme za početak razmatranja prolećnog čišćenja tepiha.",
    h1: "Pravo vreme za pranje tepiha u Beogradu",
  },
  "prednosti-tamnijih-tepiha": {
    title: "Prednosti tamnijih tepiha",
    description:
      "Neki vlasnici kuća, izbegavaju da biraju tamnije nijanse tepiha, jer veruju da će tamna nijansa učiniti da soba izgleda dosadno ili prljavo.",
    h1: "Prednosti tamnijih tepiha",
  },
  "profesionalne-usluge-masinskog-pranja-tepiha": {
    title: "Profesionalne usluge mašinskog pranja tepiha",
    description:
      "Nudimo profesionalne usluge masinskog pranja tepiha. Pozovite i zakažite pranje svojih tepiha.",
    h1: "Usluga mašinskog pranja tepiha",
    pageH1: "Profesionalne usluge mašinskog pranja tepiha",
  },
  "profesionalno-ciscenje-tepiha-vozdovac": {
    title: "Profesionalno pranje i ciscenje tepiha Vozdovac",
    description:
      "Profesionalno pranje i ciscenje tepiha Vozdovac -  Zbog pandemije Covid-19, veoma je dobro održavati dom čistim, a to uključuje i tepihe.",
    h1: "Profesionalno pranje i ciscenje tepiha Vozdovac",
    pageH1: "Profesionalno čišćenje tepiha Voždovac",
  },
  "profesionalno-pranje-decijih-kolica": {
    title: "Profesionalno pranje dečijih kolica",
    description: "Profesionalno pranje dečijih kolica",
    h1: "Profesionalno pranje dečijih kolica",
  },
  "profesionalno-pranje-tepiha": {
    title: "Profesionalno pranje tepiha Beograd",
    description:
      "Profesionalno pranje tepiha Beograd - Ako ste zainteresovani za čišćenje tepiha u Tepih servisu Andrić, pozovite nas.",
    h1: "Profesionalno pranje tepiha",
  },
  "stilovi-i-prednosti-tepiha": {
    title: "Stilovi i prednosti tepiha",
    description:
      "Postoji niz različitih stilova tepiha, dezena i boja koje možete izabrati kako biste zadovoljili svaki lični stil dok se uklapaju u svaki mogući dekor.",
    h1: "Stilovi i prednosti tepiha",
  },
  "tepisi-koji-su-trend-za-2022-godinu": {
    title: "Tepisi koji su trend za 2022. godinu",
    description: "Tepisi koji su trend za 2022. godinu - Tepih je ponovo došao u fokus.",
    h1: "Tepisi koji su trend za 2022. godinu",
  },
  "transport-i-dostava-tepiha": {
    title: "Transport i dostava tepiha",
    description: "Transport i dostava tepiha - uslužno pranje i prevoz tepiha",
    h1: "Transport i dostava tepiha",
  },
  "zamena-resa-za-svez-i-elegantan-izgled-tepiha": {
    title: "Zamena resa za svež i elegantan izgled tepiha",
    description:
      "Rese na tepihu mogu biti istaknuti deo njegovog dizajna, ali vremenom mogu postati dotrajale, oštećene ili jednostavno više ne odgovaraju Vašem ukusu.",
    h1: "Zamena resa za svež i elegantan izgled tepiha",
  },
  "zastita-tepiha-odakle-poceti": {
    title: "Zastita tepiha - odakle početi?",
    description:
      "Zastita tepiha - Postoje neki koraci koje možete preduzeti kako biste osigurali da Vaš tepih zadrži svež i čist izgled.",
    h1: "Zaštita tepiha - odakle početi?",
  },
  "zasto-je-masinsko-pranje-tepiha-idealno-resenje-za-cist-i-odrzavan-tepih": {
    title: "Zašto je mašinsko pranje tepiha idealno rešenje za čist tepih?",
    description:
      "Dubinsko čišćenje uklanja prljavštinu, prašinu, alergene i druge potencijalno štetne materije koje mogu oštetiti vlakna tepiha tokom vremena.",
    h1: "Zašto je mašinsko pranje tepiha sa ispiranjem centrifugom idealno rešenje za čist i održavan tepih?",
  },
  "zasto-je-potrebno-dubinsko-pranje-tepiha": {
    title: "Zašto je potrebno dubinsko pranje tepiha?",
    description:
      "Dubinsko pranje tepiha je potrebno, odnosno neopodno, da bi smo sačuvali zdravlje, svežinu, sjaj, boju i uredan izgled tepiha.",
    h1: "Zašto je potrebno dubinsko pranje tepiha?",
  },
  "zasto-je-profesionalno-ciscenje-tepiha-investicija-koja-se-isplati": {
    title: "Zašto je profesionalno čišćenje tepiha investicija koja se isplati?",
    description:
      "Saznajte zašto je profesionalno čišćenje tepiha investicija koja se isplati. Uklonite dubinsku prljavštinu i produžite vek trajanja tepiha.",
    h1: "Zašto je profesionalno čišćenje tepiha investicija koja se isplati?",
    pageH1: "Profesionalno čišćenje tepiha",
  },
  "zasto-je-vazno-prati-tepihe-i-namestaj-redovno": {
    title: "Zašto je važno prati tepihe i nameštaj redovno?",
    description:
      "U stvarnosti, tepisi i nameštaj sakupljaju velike količine prašine, prljavštine, bakterija i alergena koji mogu ugroziti zdravlje ljudi koji žive u domu.",
    h1: "Zašto je važno prati tepihe i nameštaj redovno?",
    pageH1: "Zašto je važno prati tepihe i nameštaj redovno",
  },
  "zasto-je-vazno-redovno-pranje-tepiha": {
    title: "Zašto je važno redovno pranje tepiha?",
    description:
      "Redovno pranje tepiha uklanja alergene i mirise, osigurava zdravlje i produžava vek. Tepih Servis Andrić nudi vrhunsko dubinsko pranje.",
    h1: "Zašto je važno redovno pranje tepiha?",
  },
};

// Slugovi svih blog postova — za generateStaticParams i sitemap
export const BLOG_SLUGS = Object.keys(BLOG_POST_META);

// Datumi i redosled prikaza na listingu (od najnovijeg ka najstarijem)
export const BLOG_POSTS_ORDERED: {
  slug: string;
  date: string;
  image?: string;
  cardTitle?: string;
  cardExcerpt?: string;
}[] = [
  {
    slug: "dubinsko-pranje-tepiha-zasto-je-vazno-i-kako-se-pravilno-izvodi",
    date: "20. Februar 2025.",
    image: "/dubinsko-pranje-tepiha-zasto-je-vazno-i-kako-se-pravilno-izvodi.webp",
    cardExcerpt: "Tepisi su jedan od ključnih elemenata svakog doma ili poslovnog prostora, ali...",
  },
  {
    slug: "opsivanje-tepiha-produzite-vek-vaseg-omiljenog-tepiha",
    date: "7. Februar 2025.",
    image: "/opsivanje-tepiha-produzite-vek-vaseg-omiljenog-tepiha.webp",
    cardExcerpt:
      "Tepisi su važan deo svakog doma i poslovnog prostora, ali sa vremenom ivice mogu postati istrošene i...",
  },
  {
    slug: "zasto-je-profesionalno-ciscenje-tepiha-investicija-koja-se-isplati",
    date: "27. Januar 2025.",
    image: "/zasto-je-profesionalno-ciscenje-tepiha-investicija-koja-se-isplati.webp",
    cardExcerpt: "Dok se mnogi vlasnici tepiha odlučuju za kućne metode čišćenja...",
  },
  {
    slug: "pranje-tepiha-beograd-profesionalna-usluga-za-savrsenu-cistocu",
    date: "14. Januar 2025.",
    image: "/pranje-tepiha-beograd-profesionalna-usluga-za-savrsenu-cistocu.webp",
    cardExcerpt: "Tepisi su važan deo svakog doma i poslovnog prostora...",
  },
  {
    slug: "dubinsko-ciscenje-namestaja-kako-produziti-vek-trajanja-vaseg-namestaja",
    date: "20. Novembar 2024.",
    image: "/dubinsko-ciscenje-namestaja-kako-produziti-vek-trajanja-vaseg-namestaja.webp",
    cardTitle: "Dubinsko čišćenje nameštaja: Kako produžiti vek trajanja vašeg nameštaja?",
    cardExcerpt: "Dubinsko čišćenje nameštaja je efikasan način...",
  },
  {
    slug: "hemijsko-ciscenje-tepiha-efikasno-resenje-za-cist-dom",
    date: "12. Novembar 2024.",
    image: "/hemijsko-ciscenje-tepiha-efikasno-resenje-za-savrseno-cist-dom.webp",
    cardExcerpt:
      "Tepisi su neizostavan deo svakog doma, ali isto tako mogu biti i pravi magnet za prašinu, prljavštinu i mrlje...",
  },
  {
    slug: "zasto-je-vazno-redovno-pranje-tepiha",
    date: "09. Oktobar 2024.",
    image: "/zasto-je-vazno-redovno-pranje-tepiha.jpg",
    cardExcerpt:
      "Tepisi su neizostavan deo svakog doma, bilo da je u pitanju dnevni boravak, spavaća soba ili poslovni prostor...",
  },
  {
    slug: "dubinsko-pranje-namestaja-zasto-je-vazno",
    date: "15. Septembar 2024.",
    image: "/dubinsko-pranje-namestaja-zasto-je-vazno.webp",
    cardExcerpt:
      "Nameštaj je srce svakog doma, gde provodimo najviše vremena – bilo da se radi o omiljenom kauču u dnevnoj sobi...",
  },
  {
    slug: "cist-tepih-zdrav-dom",
    date: "23. Avgust 2024.",
    image: "/cist-tepih-zdrav-dom.webp",
    cardTitle: "Čist tepih, zdrav dom",
    cardExcerpt:
      "Čistoća doma je višestruko važna. Ona ne samo da pruža estetski ugođaj Vašem prostoru, već ima uticaja na zdravlje stanara. Jedan...",
  },
  {
    slug: "dubinsko-polusuvo-ciscenje-tepiha",
    date: "18. Jul 2024.",
    image: "/dubinsko-polusuvo-ciscenje-tepiha.webp",
    cardExcerpt:
      "U svakodnevnom životu, nameštaj je nezaobilazan deo našeg doma ili poslovnog prostora...",
  },
  {
    slug: "dubinsko-pranje-i-ciscenje-mebl-namestaja",
    date: "26. Jun 2024.",
    image: "/dubinsko-pranje-i-ciscenje-mebl-namestaja.webp",
    cardExcerpt:
      "U svakodnevnom životu, nameštaj je nezaobilazan deo našeg doma ili poslovnog prostora...",
  },
  {
    slug: "profesionalne-usluge-masinskog-pranja-tepiha",
    date: "17. Maj 2024.",
    image: "/profesionalne-usluge-masinskog-pranja-tepiha.webp",
    cardExcerpt:
      "Kada je u pitanju održavanje tepiha, posebno u frekventnim prostorima poput domova ili poslovnih objekata...",
  },
  {
    slug: "zamena-resa-za-svez-i-elegantan-izgled-tepiha",
    date: "22. Maj 2023.",
    image: "/zamena-resa-za-svez-i-elegantan-izgled-tepiha.webp",
    cardExcerpt:
      "Rese na tepihu mogu biti istaknuti deo njegovog dizajna, ali vremenom mogu postati dotrajale ...",
  },
  {
    slug: "zasto-je-masinsko-pranje-tepiha-idealno-resenje-za-cist-i-odrzavan-tepih",
    date: "20. Maj 2023.",
    image:
      "/zasto-je-masinsko-pranje-tepiha-sa-ispiranjem-centrifugom-idealno-resenje-za-cist-i-odrzavan-tepih.webp",
    cardTitle:
      "Zašto je mašinsko pranje tepiha sa ispiranjem centrifugom idealno rešenje za čist i održavan tepih?",
    cardExcerpt: "Kada je u pitanju čišćenje tepiha, tradicionalne metode često...",
  },
  {
    slug: "kako-odrzavati-tepihe-u-svom-domu",
    date: "30. April 2023.",
    image: "/kako-odrzavati-tepihe-u-svom-domu.webp",
    cardExcerpt:
      "Kada investirate u lep tepih za svoj dom, želite da Vam dugo traje i izgleda dobro kao i prvog dana...",
  },
  {
    slug: "zasto-je-vazno-prati-tepihe-i-namestaj-redovno",
    date: "25. April 2023.",
    image: "/zasto-je-vazno-prati-tepihe-i-namestaj-redovno.jpg",
    cardExcerpt:
      "Većina ljudi smatra da je redovno usisavanje dovoljno da održava tepihe i nameštaj čistim i urednim...",
  },
  {
    slug: "profesionalno-pranje-decijih-kolica",
    date: "23. Mart 2023.",
    image: "/profesionalno-pranje-decijih-kolica.jpg",
    cardExcerpt: "Uzimajući u obzir da se dečija kolica uglavnom koriste za spoljne uslove...",
  },
  {
    slug: "transport-i-dostava-tepiha",
    date: "20. Mart 2023.",
    image: "/transport-i-dostava-tepiha.jpg",
    cardExcerpt: "Da li ste se našli u situaciji da vam je potrebno profesionalno pranje tepiha...",
  },
  {
    slug: "zasto-je-potrebno-dubinsko-pranje-tepiha",
    date: "13. Oktobar 2022.",
    image: "/zasto-je-potrebno-dubinsko-pranje-tepiha.jpg",
    cardExcerpt: "Oduvek su tepisi bitan deo enterijera, oni utiču na toplinu...",
  },
  {
    slug: "stilovi-i-prednosti-tepiha",
    date: "12. Avgust 2022.",
    image: "/stilovi-i-prednosti-tepiha.jpg",
    cardExcerpt: "Postoji niz različitih stilova tepiha, dezena i boja koje možete izabrati ...",
  },
  {
    slug: "prednosti-tamnijih-tepiha",
    date: "05. Jul 2022.",
    image: "/prednosti-tamnijih-tepiha.webp",
    cardExcerpt: "Neki vlasnici kuća, izbegavaju da biraju tamnije nijanse tepiha, jer veruju ...",
  },
  {
    slug: "zastita-tepiha-odakle-poceti",
    date: "07. Jun 2022.",
    image: "/zastita-tepiha-odakle-poceti.webp",
    cardTitle: "Zaštita tepiha - odakle početi?",
    cardExcerpt: "Možda delimično zbog svog raznolikog spektra boja i stilova, a delom ...",
  },
  {
    slug: "tepisi-koji-su-trend-za-2022-godinu",
    date: "20. Maj 2022.",
    image: "/tepisi-koji-su-trend-za-2022-godinu.webp",
    cardExcerpt:
      "Tepih je ponovo došao u fokus. Od neutralnih zemljanih tonova, do smelih paleta boja ...",
  },
  {
    slug: "profesionalno-pranje-tepiha",
    date: "10. Novembar 2021.",
    image: "/profesionalno-pranje-tepiha.webp",
    cardTitle: "Profesionalno pranje tepiha",
    cardExcerpt:
      "Tepih je poželjna opcija za podove za konferencijske sale, hodnike, kancelarije ...",
  },
  {
    slug: "automatizovano-pranje-tepiha-u-tepih-servisu",
    date: "02. Avgust 2021.",
    image: "/automatizovano-pranje-tepiha-u-tepih-servisu.webp",
    cardExcerpt: "Pre svega, razvoj sektora za čišćenje tepiha poslednjih godina doveo je do...",
  },
  {
    slug: "pranje-tepiha-tepih-servis-beograd",
    date: "12. Jul 2021.",
    image: "/pranje-tepiha-tepih-servis-beograd.webp",
    cardTitle: "Pranje tepiha tepih servis Beograd",
    cardExcerpt: "Nema sumnje da je povratak u svoj savršeno čisti dom prilično je prijatan...",
  },
  {
    slug: "profesionalno-ciscenje-tepiha-vozdovac",
    date: "17. Jun 2021.",
    image: "/profesionalno-ciscenje-tepiha-vozdovac.webp",
    cardTitle: "Profesionalno čišćenje tepiha Voždovac",
    cardExcerpt: "Tepisi čine da sobe izgledaju prijatno. Zbog pandemije Covid-19...",
  },
  {
    slug: "dubinsko-pranje-tepiha-vracar",
    date: "10. Jun 2021.",
    image: "/dubinsko-pranje-tepiha-vracar.webp",
    cardTitle: "Dubinsko pranje tepiha Vračar",
    cardExcerpt: "Da li na Vašem tepihu ostaju mrlje uprkos svim pokušajima čišćenja i pranja?...",
  },
  {
    slug: "masinsko-pranje-tepiha-u-beogradu",
    date: "28. Maj 2021.",
    image: "/masinsko-pranje-tepiha-u-beogradu.webp",
    cardTitle: "Mašinsko pranje tepiha u Beogradu",
    cardExcerpt: "Tepisi ulepšavaju prostorije. Međutim, oni takođe mogu da apsorbuju velike...",
  },
  {
    slug: "pravo-vreme-za-pranje-tepiha-u-beogradu",
    date: "09. April 2021.",
    image: "/pravo-vreme-za-pranje-tepiha-u-beogradu.webp",
    cardExcerpt: "Proleće je u vazduhu, što znači da je sada savršeno vreme za početak ...",
  },
  {
    slug: "pranje-tepiha-sa-sest-rotacionih-cetki",
    date: "10. Mart 2021.",
    image: "/pranje-tepiha-sa-sest-rotacionih-cetki.webp",
    cardExcerpt:
      "U zavisnosti od vrste tepiha određuje se pritisak, ali i mekoća vlakana četke ...",
  },
  {
    slug: "kada-je-vreme-za-ciscenje-tepiha",
    date: "02. Mart 2021.",
    image: "/kada-je-vreme-za-ciscenje-tepiha.webp",
    cardTitle: "Kada je vreme za čišćenje tepiha?",
    cardExcerpt:
      "Gotovo svi želimo da svoje domove ukrasimo tepisima. Tepisi različitih vrsta, oblika i ...",
  },
  {
    slug: "koje-su-prednosti-dubinskog-pranja",
    date: "12. Februar 2021.",
    image: "/koje-su-prednosti-dubinskog-pranja.jpg",
    cardExcerpt:
      "Dubinsko pranje kao što i sama reč kaže dubinski čisti i otklanja nečistoće, bakterije ...",
  },
  {
    slug: "masinsko-dubinsko-pranje-i-ciscenje-namestaja",
    date: "10. Februar 2021.",
    image: "/masinsko-dubinsko-pranje-i-ciscenje-namestaja.webp",
    cardTitle: "Mašinsko dubinsko pranje i čišćenje nameštaja",
    cardExcerpt:
      "Da bi Vaš nameštaj ponovo zasijao i bio zaista čist, pozovite nas jer mi koristimo ...",
  },
];

// Slike za blog postove (koriste se na kartici i na samoj post stranici)
export const BLOG_POST_IMAGES: Record<string, string> = {
  "dubinsko-pranje-tepiha-zasto-je-vazno-i-kako-se-pravilno-izvodi":
    "/dubinsko-pranje-tepiha-zasto-je-vazno-i-kako-se-pravilno-izvodi.webp",
  "opsivanje-tepiha-produzite-vek-vaseg-omiljenog-tepiha":
    "/opsivanje-tepiha-produzite-vek-vaseg-omiljenog-tepiha.webp",
  "zasto-je-profesionalno-ciscenje-tepiha-investicija-koja-se-isplati":
    "/zasto-je-profesionalno-ciscenje-tepiha-investicija-koja-se-isplati.webp",
  "pranje-tepiha-beograd-profesionalna-usluga-za-savrsenu-cistocu":
    "/pranje-tepiha-beograd-profesionalna-usluga-za-savrsenu-cistocu.webp",
  "dubinsko-ciscenje-namestaja-kako-produziti-vek-trajanja-vaseg-namestaja":
    "/dubinsko-ciscenje-namestaja-kako-produziti-vek-trajanja-vaseg-namestaja.webp",
  "hemijsko-ciscenje-tepiha-efikasno-resenje-za-cist-dom":
    "/hemijsko-ciscenje-tepiha-efikasno-resenje-za-savrseno-cist-dom.webp",
  "zasto-je-vazno-redovno-pranje-tepiha": "/zasto-je-vazno-redovno-pranje-tepiha.jpg",
  "dubinsko-pranje-namestaja-zasto-je-vazno": "/dubinsko-pranje-namestaja-zasto-je-vazno.webp",
  "cist-tepih-zdrav-dom": "/cist-tepih-zdrav-dom.webp",
  "dubinsko-polusuvo-ciscenje-tepiha": "/dubinsko-polusuvo-ciscenje-tepiha.webp",
  "dubinsko-pranje-i-ciscenje-mebl-namestaja": "/dubinsko-pranje-i-ciscenje-mebl-namestaja.webp",
  "profesionalne-usluge-masinskog-pranja-tepiha":
    "/profesionalne-usluge-masinskog-pranja-tepiha.webp",
  "zamena-resa-za-svez-i-elegantan-izgled-tepiha":
    "/zamena-resa-za-svez-i-elegantan-izgled-tepiha.webp",
  "zasto-je-masinsko-pranje-tepiha-idealno-resenje-za-cist-i-odrzavan-tepih":
    "/zasto-je-masinsko-pranje-tepiha-sa-ispiranjem-centrifugom-idealno-resenje-za-cist-i-odrzavan-tepih.webp",
  "kako-odrzavati-tepihe-u-svom-domu": "/kako-odrzavati-tepihe-u-svom-domu.webp",
  "zasto-je-vazno-prati-tepihe-i-namestaj-redovno":
    "/zasto-je-vazno-prati-tepihe-i-namestaj-redovno.jpg",
  "profesionalno-pranje-decijih-kolica": "/profesionalno-pranje-decijih-kolica.jpg",
  "transport-i-dostava-tepiha": "/transport-i-dostava-tepiha.jpg",
  "zasto-je-potrebno-dubinsko-pranje-tepiha": "/zasto-je-potrebno-dubinsko-pranje-tepiha.jpg",
  "stilovi-i-prednosti-tepiha": "/stilovi-i-prednosti-tepiha.jpg",
  "prednosti-tamnijih-tepiha": "/prednosti-tamnijih-tepiha.webp",
  "zastita-tepiha-odakle-poceti": "/zastita-tepiha-odakle-poceti.webp",
  "tepisi-koji-su-trend-za-2022-godinu": "/tepisi-koji-su-trend-za-2022-godinu.webp",
  "profesionalno-pranje-tepiha": "/profesionalno-pranje-tepiha.webp",
  "automatizovano-pranje-tepiha-u-tepih-servisu":
    "/automatizovano-pranje-tepiha-u-tepih-servisu.webp",
  "pranje-tepiha-tepih-servis-beograd": "/pranje-tepiha-tepih-servis-beograd.webp",
  "profesionalno-ciscenje-tepiha-vozdovac": "/profesionalno-ciscenje-tepiha-vozdovac.webp",
  "dubinsko-pranje-tepiha-vracar": "/dubinsko-pranje-tepiha-vracar.webp",
  "masinsko-pranje-tepiha-u-beogradu": "/masinsko-pranje-tepiha-u-beogradu.webp",
  "pravo-vreme-za-pranje-tepiha-u-beogradu": "/pravo-vreme-za-pranje-tepiha-u-beogradu.webp",
  "pranje-tepiha-sa-sest-rotacionih-cetki": "/pranje-tepiha-sa-sest-rotacionih-cetki.webp",
  "kada-je-vreme-za-ciscenje-tepiha": "/kada-je-vreme-za-ciscenje-tepiha.webp",
  "koje-su-prednosti-dubinskog-pranja": "/koje-su-prednosti-dubinskog-pranja.jpg",
  "masinsko-dubinsko-pranje-i-ciscenje-namestaja":
    "/masinsko-dubinsko-pranje-i-ciscenje-namestaja.webp",
};

// ─── Location page images ────────────────────────────────────────────────────
export const LOCATION_IMAGES: Record<string, string[]> = {
  "veliki-mokri-lug": ["/susenje-tepiha-2.webp", "/susenje-tepiha-3.webp"],
  kaludjerica: ["/ciscenje-mebl-namestaja-2.webp", "/ciscenje-decijih-kolica-6s.webp"],
  "mali-mokri-lug": ["/mali-mokri-lug.webp"],
  medakovic: ["/pranje-tepiha-beograd-profesionalna-usluga-za-savrsenu-cistocu.webp"],
  konjarnik: ["/lokacija-konjarnik.jpg", "/konjarnik.webp"],
  "uciteljsko-naselje": ["/lokacija-konjarnik.jpg", "/profesionalno-pranje-tepiha-09s.jpg"],
  "lekino-brdo": ["/profesionalno-pranje-tepiha-10s.webp", "/profesionalno-pranje-tepiha-11s.jpg"],
  autokomanda: ["/tepih-servis-andric-02s (4).jpg", "/tepih-servis-andric-03s (3).webp"],
  "vojvode-stepe": ["/tepih-servis-andric-01s (2).jpg"],
  "brace-jerkovic": ["/tepih-servis-andric-8.webp", "/tepih-servis-andric-13s.jpg"],
  "vojvode-vlahovica": ["/tepih-servis-andric-04s (2).jpg", "/zastita-tepiha-odakle-poceti.webp"],
  "mitrovo-brdo": ["/tepisi-koji-su-trend-za-2022-godinu.webp", "/tepih-servis-andric-prevoz.jpg"],
  "stepa-stepanovic": [
    "/transport-i-dostava-tepiha-beograd-06f.webp",
    "/tepih-servis-andric-19s.jpg",
  ],
  kumodraz: ["/profesionalno-pranje-tepiha-10s.webp", "/profesionalno-pranje-tepiha-09s.jpg"],
  jajinci: ["/tepih-servis-andric-20s.jpg", "/tepih-servis-andric-19s.jpg"],
  banjica: ["/tepih-servis-andric-20s.jpg", "/tepih-servis-andric-19s.jpg"],
  zvezdara: ["/tepih-servis-andric-03s.webp", "/tepih-servis-andric-5s.webp"],
  mirijevo: ["/tepih-servis-andric-37.webp"],
  karaburma: ["/transport-i-dostava-tepiha-beograd-05f.webp"],
  palilula: ["/profesionalno-pranje-tepiha-02s (1).webp"],
  "slavujev-venac": [
    "/profesionalno-ciscenje-tepiha-vozdovac.webp",
    "/profesionalno-pranje-tepiha-09s.jpg",
  ],
  "vukov-spomenik": [
    "/profesionalno-pranje-tepiha-10s.webp",
    "/profesionalno-pranje-tepiha-09s.jpg",
  ],
  djeram: ["/profesionalno-pranje-tepiha-11s.jpg", "/profesionalno-pranje-tepiha-09s.jpg"],
  vracar: ["/tepih-servis-andric-03s (3).webp"],
  cubura: ["/tepih-servis-andric-03s (3).webp", "/tepih-servis-andric-02s (3).jpg"],
  bogoslovija: ["/tepih-servis-andric-02s (3).jpg", "/tepih-servis-andric-02s.webp"],
  dorcol: ["/profesionalno-pranje-tepiha-09s.jpg"],
  "stari-grad": ["/tepih-servis-andric-02s (3).jpg"],
  "novi-beograd": ["/tepih-servis-andric-03s (3).webp"],
  "bezanijska-kosa": ["/profesionalne-usluge-masinskog-pranja-tepiha.webp"],
  "cukaricka-padina": [
    "/profesionalno-pranje-tepiha-11s.jpg",
    "/profesionalno-pranje-tepiha-10s.webp",
  ],
  senjak: ["/pravo-vreme-za-pranje-tepiha-u-beogradu.webp", "/prednosti-tamnijih-tepiha.webp"],
  dedinje: ["/pranje-tepiha-4 (2).jpg"],
  "savski-venac": ["/pranje-tepiha-5 (1).webp"],
  "banovo-brdo": ["/pranje-tepiha-6 (1).webp", "/pranje-tepiha-4.webp"],
  "golf-naselje": ["/pranje-tepiha-4 (2).jpg"],
  vozdovac: ["/profesionalno-ciscenje-tepiha-vozdovac.webp"],
  zarkovo: ["/pranje-tepiha-1.webp"],
  cerak: ["/pranje-tepiha-5 (1).webp", "/pranje-tepiha-6 (1).webp"],
  rakovica: ["/pranje-tepiha-4 (2).jpg"],
  miljakovac: ["/pranje-tepiha-6 (1).webp"],
  "kanarevo-brdo": ["/pranje-tepiha-sa-sest-rotacionih-cetki.webp", "/pranje-tepiha-3.jpg"],
};

export const LOCATION_IMAGE_ALTS: Record<string, string[]> = {
  kaludjerica: [
    "Pranje Tepiha Kaluđerica - Tepih servis Andric",
    "Pranje Dečijih kolica Kaluđerica - Tepih servis Beograd",
  ],
  medakovic: ["Pranje Tepiha Medaković - Tepih servis Andric"],
  konjarnik: [
    "Pranje Tepiha Lokacija Konjarnik - Tepih Servis Andric",
    "Pranje Tepiha Lokacija Konjarnik - Tepih Servis Beograd",
  ],
  "uciteljsko-naselje": [
    "Pranje Tepiha Uciteljsko naselje - Tepih servis Andric",
    "Pranje Tepiha Uciteljsko naselje - Tepih servis Beograd",
  ],
  "vojvode-stepe": ["Tepih Servis Andrić - Lokacija Vojvode Stepe"],
  "brace-jerkovic": [
    "Pranje Tepiha Braće Jerković - Tepih servis Andric",
    "Pranje Tepiha Braće Jerković - Tepih servis Beograd",
  ],
  "vojvode-vlahovica": [
    "Pranje Tepiha Vojvode Vlahovića - Tepih servis Andric",
    "Pranje Tepiha Vojvode Vlahovića - Tepih servis Andrić Beograd",
  ],
  "mitrovo-brdo": [
    "Pranje Tepiha Mitrovo brdo - Tepih servis Andric",
    "Pranje Tepiha Mitrovo brdo - Tepih servis Beograd",
  ],
  "stepa-stepanovic": [
    "Pranje Tepiha Stepa Stepanović - Tepih servis Andric",
    "Pranje Tepiha Stepa Stepanović - Tepih servis Beograd",
  ],
  kumodraz: [
    "Pranje Tepiha Kumodraž - Tepih servis Andric",
    "Pranje Tepiha Kumodraž - Tepih servis Beograd",
  ],
  jajinci: ["Pranje Tepiha Jajinci - Tepih servis Andric", "Pranje Tepiha - Tepih servis Beograd"],
  zvezdara: [
    "Pranje Tepiha Zvezdara (Centar) - Tepih servis Andric",
    "Pranje Tepiha Zvezdara (Centar) - Tepih servis Beograd",
  ],
  karaburma: ["Pranje Tepiha Karaburma - Tepih servis Andric"],
  palilula: ["Pranje Tepiha Palilula (Centar) - Tepih servis Andric"],
  "slavujev-venac": ["Pranje Tepiha Slavujev venac - Tepih servis Andric"],
  djeram: [
    "Pranje Tepiha Đeram - Tepih servis Andric",
    "Pranje Tepiha Đeram - Tepih servis Beograd",
  ],
  cubura: [
    "Pranje Tepiha Čubura - Tepih servis Andric",
    "Pranje Tepiha Čubura - Tepih servis Andric",
  ],
  bogoslovija: [
    "Pranje Tepiha Bogoslovija - Tepih servis Andric",
    "Pranje Tepiha Bogoslovija - Tepih servis Andric",
  ],
  dorcol: ["Pranje Tepiha Dorćol - Tepih servis Beograd"],
  "stari-grad": ["Pranje Tepiha Stari Grad - Tepih servis Andric"],
  "novi-beograd": ["Pranje Tepiha Novi Beograd - Tepih servis Andric"],
  "bezanijska-kosa": ["Pranje Tepiha Bezanijska kosa - Tepih servis Beograd"],
  "cukaricka-padina": [
    "Pranje Tepiha Čukarička Padina - Tepih servis Andric",
    "Pranje Tepiha Čukarička Padina - Tepih servis Andric",
  ],
  senjak: [
    "Pranje Tepiha Senjak - Tepih servis Andric",
    "Pranje Tepiha Senjak - Tepih servis Beograd",
  ],
  dedinje: ["Pranje Tepiha Dedinje - Tepih servis Beograd"],
  "savski-venac": ["Pranje Tepiha Savski Venac - Tepih servis Beograd"],
  "golf-naselje": ["Pranje Tepiha Golf Naselje - Tepih servis Beograd"],
  cerak: [
    "Pranje Tepiha Cerak - Tepih servis Andric",
    "Pranje Tepiha Cerak - Tepih servis Beograd",
  ],
  rakovica: ["Pranje Tepiha Rakovica - Tepih servis Beograd"],
  "kanarevo-brdo": [
    "Pranje Tepiha Kanarevo Brdo - Tepih servis Andric",
    "Pranje Tepiha Kanarevo Brdo - Tepih servis Andrić Beograd",
  ],
  vozdovac: ["Pranje Tepiha Voždovac - Tepih servis Andrić Beograd"],
};
