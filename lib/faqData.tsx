import type { ReactNode } from "react";
import Link from "next/link";

export interface FaqItem {
  question: string;
  answerText: string;
  answer: ReactNode;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Koja je cena pranja tepiha u Vašem tepih servisu?",
    answerText:
      "Garantujemo najpovoljnije cene pranja tepiha. Cena kreće od 480 RSD po kvadratnom metru i zavisi od veličine i vrste tepiha. Sve informacije i cene usluga možete videti na stranici Cenovnik.",
    answer: (
      <>
        Garantujemo najpovoljnije cene pranja tepiha. Cena kreće od 480 RSD po kvadratnom metru i zavisi od veličine i vrste tepiha. Sve informacije možete videti na stranici{" "}
        <Link href="/cenovnik/" className="text-gold-text hover:text-gold-dark underline">Cenovnik</Link>.
      </>
    ),
  },
  {
    question: "Da li vršite dostavu i transport tepiha?",
    answerText:
      "Da. Tepisi se ne donose u servis — mi ih preuzimamo i dostavljamo isključivo mi. Za lokacije u Zoni 1 (Voždovac, Veliki Mokri Lug, Konjarnik i okolina) transport je besplatan bez ograničenja kvadrature. Za Zonu 2 minimalna kvadratura za preuzimanje je 6m².",
    answer: (
      <>
        Da. Tepisi se ne donose u servis — mi ih preuzimamo i dostavljamo isključivo mi. Za lokacije u Zoni 1 (Voždovac, Veliki Mokri Lug, Konjarnik i okolina) transport je besplatan bez ograničenja kvadrature. Za Zonu 2 minimalna kvadratura je 6m². Pogledajte{" "}
        <Link href="/kontakt/" className="text-gold-text hover:text-gold-dark underline">sve lokacije koje pokrivamo</Link>.
      </>
    ),
  },
  {
    question: "Koliko traje pranje tepiha?",
    answerText:
      "Standardno pranje i sušenje tepiha traje 2 do 3 radna dana. Rok zavisi od veličine tepiha, vrste materijala i trenutne zauzetosti servisa. U hitnim slučajevima kontaktirajte nas radi dogovora.",
    answer: (
      <>
        Standardno pranje i sušenje tepiha traje 2 do 3 radna dana. Rok zavisi od veličine tepiha, vrste materijala i trenutne zauzetosti servisa. U hitnim slučajevima kontaktirajte nas radi dogovora.
      </>
    ),
  },
  {
    question: "Koje vrste tepiha perete?",
    answerText:
      "Peremo sve vrste tepiha: ručno tkane, mašinski tkane, vunene, sintetičke, svilene, perzijaske i dečije tepihe, kao i itisone. Svaki tepih se pre pranja meri, fotografiše i procenjuje kako bi se odabrala optimalna metoda pranja.",
    answer: (
      <>
        Peremo sve vrste tepiha: ručno tkane, mašinski tkane, vunene, sintetičke, svilene, perzijaske i dečije tepihe, kao i itisone. Svaki tepih se pre pranja meri, fotografiše i procenjuje kako bi se odabrala optimalna metoda pranja.
      </>
    ),
  },
  {
    question: "Da li je pranje bezbedno za decu i kućne ljubimce?",
    answerText:
      "Da. Koristimo isključivo ekološka i antibakterijska sredstva za pranje koja su bezbedna za decu i kućne ljubimce. Nakon pranja tepih prolazi kroz centrifugiranje i sušenje u specijalnim komorama, tako da ne ostaju hemijski ostaci.",
    answer: (
      <>
        Da. Koristimo isključivo ekološka i antibakterijska sredstva za pranje koja su bezbedna za decu i kućne ljubimce. Nakon pranja tepih prolazi kroz centrifugiranje i sušenje u specijalnim komorama, tako da ne ostaju hemijski ostaci.
      </>
    ),
  },
  {
    question: "Da li perete nameštaj i dečija kolica?",
    answerText:
      "Da. Pored tepiha nudimo i mašinsko dubinsko pranje nameštaja (sofe, fotelje, madraci) kao i profesionalno pranje dečijih kolica.",
    answer: (
      <>
        Da. Pored tepiha nudimo i{" "}
        <Link href="/dubinsko-ciscenje-namestaja/" className="text-gold-text hover:text-gold-dark underline">mašinsko dubinsko pranje nameštaja</Link>{" "}
        (sofe, fotelje, madraci) kao i{" "}
        <Link href="/pranje-decijah-kolica/" className="text-gold-text hover:text-gold-dark underline">profesionalno pranje dečijih kolica</Link>.
      </>
    ),
  },
  {
    question: "Da li vršite uslugu opšivanja tepiha?",
    answerText:
      "Da. Opšivanje tepiha klijent može zahtevati iz više razloga: nakon uklanjanja starih resa, promena boje postojećih ivica na tepihu, nakon skraćivanja ili usecanja itisona — a sve u cilju kako ne bi došlo do rasipanja i paranja tepiha ili itisona.",
    answer: (
      <>
        Da. Opšivanje tepiha klijent može zahtevati iz više razloga: nakon uklanjanja starih resa, promena boje postojećih ivica na tepihu, nakon skraćivanja ili usecanja itisona. Više informacija na stranici{" "}
        <Link href="/opsivanje-tepiha/" className="text-gold-text hover:text-gold-dark underline">Opšivanje tepiha</Link>.
      </>
    ),
  },
  {
    question: "Kako mogu da zakažem pranje tepiha?",
    answerText:
      "Pranje tepiha možete zakazati pozivom na 065 333 2 555 ili 011 333 22 55, kao i putem e-maila tepihservis.andric@gmail.com. Naš tim će se dogovoriti sa vama oko termina preuzimanja.",
    answer: (
      <>
        Pranje tepiha možete zakazati pozivom na 065 333 2 555 ili 011 333 22 55, kao i putem e-maila tepihservis.andric@gmail.com. Više detalja na stranici{" "}
        <Link href="/kontakt/" className="text-gold-text hover:text-gold-dark underline">Kontakt</Link>.
      </>
    ),
  },
  {
    question: "Da li radite subotom?",
    answerText:
      "Da. Radimo ponedeljkom do petka od 08:00 do 20:00 i subotom od 08:00 do 18:00. Nedeljom ne radimo.",
    answer: (
      <>
        Da. Radimo ponedeljkom do petka od 08:00 do 20:00 i subotom od 08:00 do 18:00. Nedeljom ne radimo.
      </>
    ),
  },
  {
    question: "Kako se vrši plaćanje usluge pranja tepiha?",
    answerText:
      "Plaćanje se vrši gotovinom pri dostavi tepiha na Vašu adresu. Za više informacija o načinu plaćanja kontaktirajte nas telefonom ili e-mailom.",
    answer: (
      <>
        Plaćanje se vrši gotovinom pri dostavi tepiha na Vašu adresu. Za više informacija kontaktirajte nas na stranici{" "}
        <Link href="/kontakt/" className="text-gold-text hover:text-gold-dark underline">Kontakt</Link>.
      </>
    ),
  },
];
