import Link from "next/link";
import Image from "next/image";
import { PlayIcon } from "@/components/ui/Icons";

export function VideoBannerSection() {
  return (
    <section className="relative w-full h-64 md:h-80 overflow-hidden">
      <Image
        src="/pozadina2024.webp"
        alt="Video pranja tepiha - Tepih Servis Andrić Beograd"
        fill
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
        <Link
          href="/video/"
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          <PlayIcon />
          Pogledajte video
        </Link>
      </div>
    </section>
  );
}
