import type { Metadata } from "next";
import { INFO_META } from "@/lib/siteData";
import { SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const meta = INFO_META["video"]!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/video/` },
};

const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/embed/UkjfRI_M8XU",
  "https://www.youtube.com/embed/HbWKBZjPFDY",
  "https://www.youtube.com/embed/gRnkh0OIbJc",
];

const LOCAL_VIDEOS = [
  "/video-tepih-servis-1.mp4",
  "/video-tepih-servis-2.mp4",
  "/video-tepih-servis-3.mp4",
  "/video-tepih-servis-6.mp4",
];

export default function VideoPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        {/* Breadcrumb bar */}
        <div className="bg-cream border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">Video</span>
            <Breadcrumb items={[{ label: "Video" }]} />
          </div>
        </div>

        {/* Page header */}
        <div className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Video</h1>
            <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-3xl">
              Neverovatno je kako čist tepih može osvežiti prostor u kome boravite. Pokazaćemo Vam
              kako uklanjamo mrlje i dajemo tepihu odgovarajuću svežinu. Videćete i najbolju opremu
              za čišćenje i dobiti nekoliko korisnih saveta koji će Vam pomoći da postignete bolji
              rezultat prilikom održavanja tepiha.
            </p>
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
              Mi ćemo se pobrinuti za Vaše tepihe, ostavljajući Vam vremena da uživate u svom domu
              - umesto da morate da razmišljate o njegovom čišćenju. Naše usluge uključuju čišćenje
              tepiha, čišćenje nameštaja kao čišćenje i pranje dušeka.
            </p>
          </div>
        </div>

        {/* YouTube videos */}
        <div className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {YOUTUBE_VIDEOS.map((src) => (
                <div key={src} className="relative aspect-video rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src={src}
                    title="Tepih Servis Andrić video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Local videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LOCAL_VIDEOS.map((src) => (
                <div key={src} className="rounded-xl overflow-hidden shadow-sm bg-navy">
                  <video
                    src={src}
                    controls
                    preload="metadata"
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
