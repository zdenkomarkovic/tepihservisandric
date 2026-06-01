import type { Metadata } from "next";
import { HOME_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection";
import { AutomatizovanoSection } from "@/components/sections/AutomatizovanoSection";
import { DubinskoSection } from "@/components/sections/DubinskoSection";
import { AndricCtaSection } from "@/components/sections/AndricCtaSection";
import { PrednostiSection } from "@/components/sections/PrednostiSection";
import { PrednostiCtaSection } from "@/components/sections/PrednostiCtaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VideoBannerSection } from "@/components/sections/VideoBannerSection";
import { MethodsSection } from "@/components/sections/MethodsSection";
import { CompanyPillarsSection } from "@/components/sections/CompanyPillarsSection";
import { LokacijeSection } from "@/components/sections/LokacijeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export const metadata: Metadata = {
  title: HOME_META.title,
  description: HOME_META.description,
  alternates: { canonical: `${SITE_URL}/` },
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  review: [
    { "@type": "Review", author: { "@type": "Person", name: "Desimirka Masal" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2026-01-15", reviewBody: "Сваки пут презадовољна. И тако више од 10 година. Свака част и на ефикасности и на љубазности." },
    { "@type": "Review", author: { "@type": "Person", name: "Maja Mijailović" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2026-01-15", reviewBody: "Све похвале! Средили су нам колица за бебу као нова. Професионални, брзи и ефикасни!!!! Све препоруке!" },
    { "@type": "Review", author: { "@type": "Person", name: "Snezana Ivanovic" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2026-02-15", reviewBody: "Prvi put sam naručila pranje tepih kod Vas,i oduševljena sam.tepih em lepo miriše em je tako čist..a ono što je najvažnije vaša uslužnost i ljubaznost i brzina rada...svako dobro i najbolje.sardjivacemo.." },
    { "@type": "Review", author: { "@type": "Person", name: "Katarina Nikolic" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2025-11-15", reviewBody: "Svaki put tepihe dovedu do perfekcije, izgledaju kao kad su kupljeni prvog dana! Uspeju da se izbore sa svim dečijim radovima - flekama od hrane, plastelinom, flomasterima... Nećemo ih menjati!" },
    { "@type": "Review", author: { "@type": "Person", name: "Goja Popovic" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2025-08-15", reviewBody: "Veoma rado izdvajam malo vremena da pohvalim ove momke, kao redovne musterije za pranje tepiha (porodica sa malom decom i psom). Ovakva ljubaznost se nije mnogo puta videla u Beogradu. Usluga brza i povoljna. Puno pozdrava" },
    { "@type": "Review", author: { "@type": "Person", name: "Gordana Basta" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2024-05-15", reviewBody: "Htela sam dubinski da ocistim sedište od kolica za bebu, sasvim slučajno i bez preporuke na internetu sam našla da tepih servis Andric izmedju ostalog radi i to. Ljudi su veoma profesionalni i ljubazni a sediste bukvalno izgleda kao novo , čak i na mestima gde je boja izbledela, sada opet izgleda kao prvi dan. Svaka čast, za svaku preporuku ❤️ krivo mi je samo sto nisam slikala sediste pre i posle pranja." },
    { "@type": "Review", author: { "@type": "Person", name: "Aleksandar Miscevic" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2024-05-15", reviewBody: "Odličan kvalitet usluge i komunikacija. Uvek su pazljivi sa skupocenim I bilo kojim drugim tepisima. Takodje, kod njih sam radio I prekrajanje I opšivanje tepiha. Veoma sam zadovoljan I definitivno su najbolji u gradu. Za svaku preporuku I pohvalu." },
    { "@type": "Review", author: { "@type": "Person", name: "Jana Pumpalovic" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2024-05-15", reviewBody: "Sjajni! Svaki tepih i staza neverovatno mirisu, precisti i skinute su sve fleke! Preljubazni, cene odlicne, postuju dogovoreno vreme, a profesionalnost celog tepih servisa Andric je na najvisem nivou. Vec ko zna koji put saradjujemo i uvek nas iznova oduseve jer su masteri svog posla! Sve pohvale i preporuke, samo tako nastavite! Veliko bravo za ceo tim👏🏼" },
    { "@type": "Review", author: { "@type": "Person", name: "Irena" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }, datePublished: "2025-11-15", reviewBody: "Jednostavno receno svaka čast! Imam teoih koji je viskozan i po mnogima neperiv . S obzirom da je imao fleke od čaja i kafe ,a da sam ja to pokusala sama da operem pa mi nije uspelo zvala sam jedan servis da mi tepih skrati jer to reklamiraju da mogu i da ga naravno operu . Posle nedelju dana sam dobila tepih koji nije skracen jer ga zbog debljine nisu skratili, a tepih je smrdeo na vlagu . Na reklamaciju su odreagovali ok , ali su opet vratili tepih koji je i dalje smrdeo . Resila sam da probam sa jos nekim servisom i slucajno sam dosla do tepih servisa Andric Oni su moj tepih ponovo oprali , lepo ga osusili tako da vise ne smrdi , a fleke koje je imao sada su toliko malo vidljive . Ono sto me je najvise obradovalo je to sto su tepih i skratili , znaci moze , nego treba umeti . Bravooo i hvala 🤗 Svaka preporuka !" },
  ],
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBadgesSection />
        <AutomatizovanoSection />
        <DubinskoSection />
        <AndricCtaSection />
        <PrednostiSection />
        <PrednostiCtaSection />
        <ServicesSection />
        <VideoBannerSection />
        <MethodsSection />
        <ReviewsSection />
        <LokacijeSection />
        <FaqSection />
        <CompanyPillarsSection />
      </main>
      <Footer />
      <JsonLd data={reviewsSchema} />
    </>
  );
}
