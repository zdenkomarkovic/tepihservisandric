"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HOME_META } from "@/lib/siteData";
import { CheckIcon } from "@/components/ui/Icons";

const SLIDES = [
  {
    src: "/hero1.png",
    alt: "Mašine za pranje tepiha — Tepih Servis Andrić",
    position: "center 20%",
  },
  {
    src: "/tepih-servis-andric-03f.jpg",
    alt: "Tepih servis Andrić Beograd",
    position: "center 40%",
  },
  {
    src: "/hero2.png",
    alt: "Profesionalni tepih servis Beograd",
    position: "center 100%",
  },
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
              objectPosition: slide.position,
              animation: i === current ? "hero-zoom 6s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-navy/20 to-navy/10" />

      {/* Content */}
      <div className="relative z-10 w-full self-end">
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mb-4 leading-tight text-white">
            {HOME_META.h1}
          </h1>

          <p className="text-white/75 text-2xl md:text-3xl font-normal mb-3">
            Iskustvo | Tradicija | Kvalitet
          </p>

          <p className="text-gold font-semibold text-lg mb-8 tracking-wide">Since 1984.</p>

          <ul className="flex flex-col gap-2 mb-10">
            {HERO_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckIcon className="text-gold shrink-0 mt-0.5" />
                <span className="flex flex-col">
                  <span className="text-white/70 text-xs leading-tight">Tepih servis Andrić</span>
                  <span className="text-white/90 text-base font-bold leading-snug">{f}</span>
                </span>
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
