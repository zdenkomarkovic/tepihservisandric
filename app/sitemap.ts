import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LOCATION_SLUGS, BLOG_SLUGS } from "@/lib/siteData";

// Svi URL-ovi pokriveni sitemapom: 103 stranice
// Izvor: E:\internal_all.csv (Screaming Frog, 2026-03-09)

const SERVICE_SLUGS = [
  "pranje-tepiha",
  "masinsko-pranje-tepiha",
  "masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom",
  "dubinsko-pranje-tepiha-beograd",
  "dubinsko-polusuvo-ciscenje",
  "dubinsko-ciscenje-namestaja",
  "ciscenje-mebl-namestaja",
  "ciscenje-tepiha-beograd",
  "ciscenje-itisona",
  "susenje-tepiha",
  "tresenje-tepiha",
  "transport-tepiha",
  "opsivanje-tepiha",
  "opsivanje-etisona",
  "zamena-resa",
  "pranje-decijah-kolica",
  "pranje-tepiha-najbolja-cena-beograd",
  "tepih-servis-novi-beograd-najbolje-cene",
];

const INFO_SLUGS = [
  "usluge",
  "o-nama",
  "kontakt",
  "cenovnik",
  "galerija",
  "video",
  "najcesca-pitanja",
  "zaposlenje",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Homepage
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Service pages
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Info / utility pages
    ...INFO_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Location pages
    ...LOCATION_SLUGS.map((slug) => ({
      url: `${SITE_URL}/lokacija/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Blog index
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Blog posts
    ...BLOG_SLUGS.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}/`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
