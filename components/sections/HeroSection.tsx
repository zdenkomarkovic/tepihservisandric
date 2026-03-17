"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HOME_META } from "@/lib/siteData";
import { CheckIcon } from "@/components/ui/Icons";

const SLIDES = [
  {
    src: "/automatizovano-pranje-tepiha-u-tepih-servisu.jpg",
    alt: "Mašine za pranje tepiha — Tepih Servis Andrić",
  },
  { src: "/dubinsko-polusuvo-ciscenje-2.png", alt: "Tepih servis Andrić Beograd" },
  { src: "/pozadina2024.jpg", alt: "Profesionalni tepih servis Beograd" },
];

const HERO_FEATURES = [
  "Mašinsko pranje tepiha",
  "Ispiranje centrifugom",
  "Šest rotacionih četki",
  "Automatsko pranje",
  "Kvalitetno i ekspeditivno",
] as const;

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            style={{
              animation: i === current ? "hero-zoom 6s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/40 to-navy/20" />

      {/* Content */}
      <div className="relative z-10 w-full self-end">
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide mb-4 leading-tight text-white">
            {HOME_META.h1}
          </h1>

          <p className="text-white/75 text-2xl md:text-3xl font-normal mb-3">
            Iskustvo | Tradicija | Kvalitet
          </p>

          <p className="text-gold font-semibold text-lg mb-8 tracking-wide">Since 1984.</p>

          <ul className="flex flex-col gap-2 mb-10">
            {HERO_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-white/90 text-base font-bold">
                <CheckIcon className="text-gold shrink-0" />
                <span className="text-white/70 text-base mr-1">Tepih servis Andrić</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Dots */}
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-5 h-5 rounded-full transition-all ${
                  i === current ? "bg-gold scale-125" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slika ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
