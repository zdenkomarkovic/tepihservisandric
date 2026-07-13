import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode za React - hvata potencijalne probleme ranije
  reactStrictMode: true,

  // Trailing slash — WordPress koristi trailing slash na svim URL-ovima.
  // Ovo mora da se poklopi 1:1 da se ne izgube pozicije na Googleu.
  trailingSlash: true,

  // Optimizacija slika - dodaj domene po potrebi
  images: {
    // Default je 60s — bez ovoga se svaka slika re-optimizuje na edge-u
    // gotovo pri svakom zahtevu, što nepotrebno troši Vercel Image Optimization kvotu.
    minimumCacheTTL: 2678400, // 31 dan
    // Suženo sa Next.js podrazumevanih 8 device širina (uključujući 2048/3840px) —
    // sadržaj je max-w-7xl (1280px), pa se te ekstra varijante nikad realno ne koriste,
    // a svaka bi se posebno naplaćivala kao Vercel Image Optimization transformacija.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
    remotePatterns: [
      // Primer:
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  // 301 redirecti — preuzeti iz WordPress sajta (Screaming Frog export).
  // VAŽNO: Ne menjati ove redirecte bez odobrenja — direktno utiču na SEO.
  async redirects() {
    return [
      // Preimenovana stranica
      {
        source: "/ciscenje-decijih-kolica{/}?",
        destination: "/pranje-decijah-kolica/",
        permanent: true,
      },

      // Konsolidovana stranica — spojena sa /masinsko-pranje-tepiha/
      {
        source: "/dubinsko-pranje-tepiha-beograd",
        destination: "/masinsko-pranje-tepiha",
        permanent: true,
      },
      {
        source: "/dubinsko-pranje-tepiha-beograd/",
        destination: "/masinsko-pranje-tepiha/",
        permanent: true,
      },

      // Konsolidovana stranica — spojena sa /lokacija/novi-beograd/
      {
        source: "/tepih-servis-novi-beograd-najbolje-cene",
        destination: "/lokacija/novi-beograd",
        permanent: true,
      },
      {
        source: "/tepih-servis-novi-beograd-najbolje-cene/",
        destination: "/lokacija/novi-beograd/",
        permanent: true,
      },

      //Pogrešni putevi ka slikama — nastali usled bad linkova u sadržaju
      {
        source: "/lokacija/slike/instagram.png",
        destination: "/slike/instagram.png",
        permanent: true,
      },
      {
        source: "/lokacija/slike/facebook.png",
        destination: "/slike/facebook.png",
        permanent: true,
      },
      {
        source: "/blog/zamena-resa-za-svez-i-elegantan-izgled-tepiha/slike/facebook.png",
        destination: "/slike/facebook.png",
        permanent: true,
      },
      {
        source: "/blog/zamena-resa-za-svez-i-elegantan-izgled-tepiha/slike/instagram.png",
        destination: "/slike/instagram.png",
        permanent: true,
      },
    ];
  },

  // Headers za bolju sigurnost
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
