import type { Metadata } from "next";
import { HOME_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: HOME_META.title,
  description: HOME_META.description,
  alternates: { canonical: `${SITE_URL}/` },
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
        <LokacijeSection />
        <FaqSection />
        <CompanyPillarsSection />
      </main>
      <Footer />
    </>
  );
}
