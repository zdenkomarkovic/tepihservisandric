"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<number[]>([0]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % SLIDES.length;
        setLoaded((l) => (l.includes(next) ? l : [...l, next]));
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {SLIDES.map((slide, i) =>
        loaded.includes(i) ? (
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
              sizes="100vw"
              className="object-cover"
              style={{
                objectPosition: slide.position,
                animation: i === current ? "hero-zoom 6s ease-out forwards" : "none",
              }}
            />
          </div>
        ) : null
      )}

      {/* Dots */}
      <div className="hidden md:flex absolute bottom-16 left-4 md:left-[max(1rem,calc((100vw-80rem)/2+1rem))] gap-2 z-20">
        {SLIDES.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-5 h-5 rounded-full transition-all ${
              i === current ? "bg-gold scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={slide.alt}
          />
        ))}
      </div>
    </>
  );
}
