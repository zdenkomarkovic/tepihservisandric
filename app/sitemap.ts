import type { MetadataRoute } from "next";
import { execSync } from "child_process";
import { SITE_URL } from "@/lib/constants";
import { LOCATION_SLUGS, BLOG_SLUGS, BLOG_POSTS_ORDERED } from "@/lib/siteData";

// Svi URL-ovi pokriveni sitemapom: 103 stranice
// Izvor: E:\internal_all.csv (Screaming Frog, 2026-03-09)

const FALLBACK_DATE = new Date("2026-01-01");

// Vraća datum poslednjeg git commita za dati fajl (ili više fajlova — uzima najnoviji)
function gitDate(...files: string[]): Date {
  const dates = files.flatMap((f) => {
    try {
      const iso = execSync(`git log -1 --format=%cI -- "${f}"`, {
        cwd: process.cwd(),
        encoding: "utf8",
      }).trim();
      return iso ? [new Date(iso)] : [];
    } catch {
      return [];
    }
  });
  return dates.length ? new Date(Math.max(...dates.map((d) => d.getTime()))) : FALLBACK_DATE;
}

const SERBIAN_MONTHS: Record<string, string> = {
  Januar: "01", Februar: "02", Mart: "03", April: "04",
  Maj: "05", Jun: "06", Jul: "07", Avgust: "08",
  Septembar: "09", Oktobar: "10", Novembar: "11", Decembar: "12",
};

function parseSerbianDate(dateStr: string): Date {
  const parts = dateStr.replace(/\./g, "").trim().split(/\s+/);
  const day = (parts[0] ?? "01").padStart(2, "0");
  const month = SERBIAN_MONTHS[parts[1] ?? ""] ?? "01";
  const year = parts[2] ?? "2020";
  return new Date(`${year}-${month}-${day}`);
}

const blogDateMap = Object.fromEntries(
  BLOG_POSTS_ORDERED.map(({ slug, date }) => [slug, parseSerbianDate(date)])
);

const SERVICE_SLUGS = [
  "pranje-tepiha",
  "masinsko-pranje-tepiha",
  "masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom",
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
  return [
    // Homepage
    {
      url: `${SITE_URL}/`,
      lastModified: gitDate("app/page.tsx", "lib/siteData.ts"),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Service pages
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: gitDate(`app/${slug}/page.tsx`, "lib/siteData.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Info / utility pages
    ...INFO_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: gitDate(`app/${slug}/page.tsx`, "lib/siteData.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Location pages — template + sadržaj iz siteData i locationContent
    ...LOCATION_SLUGS.map((slug) => ({
      url: `${SITE_URL}/lokacija/${slug}/`,
      lastModified: gitDate(
        "app/lokacija/[slug]/page.tsx",
        "lib/siteData.ts",
        "lib/locationContent.ts"
      ),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Blog index
    {
      url: `${SITE_URL}/blog/`,
      lastModified: gitDate("app/blog/page.tsx", "lib/siteData.ts"),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Blog posts — datum objave iz podataka
    ...BLOG_SLUGS.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}/`,
      lastModified: blogDateMap[slug] ?? FALLBACK_DATE,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
