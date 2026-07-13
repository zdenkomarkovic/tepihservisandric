import { SITE_URL } from "@/lib/constants";

export interface PriceRow {
  label: string;
  unit?: string;
  price: string;
  note?: string;
}

export interface PriceTable {
  title: string;
  href?: string;
  rows: PriceRow[];
}

export const PRICE_TABLES: PriceTable[] = [
  {
    title: "Pranje tepiha",
    href: "/pranje-tepiha/",
    rows: [
      {
        label: "Mašinsko dubinsko čišćenje tepiha sa ispiranjem do bistre kapi",
        unit: "m²",
        price: "480 RSD",
      },
      {
        label:
          "Hemijsko pranje tepiha polu suvo na bazi pene (kožni, persijski, svileni, buhare)",
        unit: "m²",
        price: "600 RSD",
      },
    ],
  },
  {
    title: "Mašinsko dubinsko čišćenje nameštaja",
    href: "/ciscenje-mebl-namestaja/",
    rows: [
      { label: "Pranje stolice", unit: "1 kom", price: "300 - 500 RSD" },
      { label: "Pranje taburea", unit: "1 kom", price: "300 - 600 RSD" },
      { label: "Jastuk manji", unit: "1 kom", price: "300 RSD" },
      { label: "Jastuk veći", unit: "1 kom", price: "500 RSD" },
      { label: "Pranje fotelje", unit: "1 kom", price: "1.200 RSD" },
      { label: "Pranje dvoseda", unit: "1 kom", price: "2.400 RSD" },
      { label: "Pranje troseda", unit: "1 kom", price: "3.600 RSD" },
      {
        label: "Pranje ugaone garniture",
        unit: "Po jednom sednom mestu",
        price: "1.200 RSD",
      },
    ],
  },
  {
    title: "Čišćenje i pranje dušeka",
    rows: [
      { label: "Single", unit: "1 kom", price: "1.800 RSD" },
      { label: "Bračni", unit: "1 kom", price: "2.800 RSD" },
      { label: "Dečiji", unit: "1 kom", price: "1.200 RSD" },
    ],
  },
  {
    title: "Hemijsko čišćenje dečijih kolica",
    href: "/pranje-decijah-kolica/",
    rows: [
      {
        label: "Hemijsko čišćenje dečijih kolica sa transportom",
        unit: "1 kom",
        price: "3.000 RSD",
      },
      { label: "Auto sedište", unit: "1 kom", price: "1.500 RSD" },
      { label: "Nosiljka", unit: "1 kom", price: "1.500 RSD" },
    ],
  },
  {
    title: "Opšivanje tepiha",
    href: "/opsivanje-tepiha/",
    rows: [
      { label: "Opšivanje tepiha", unit: "Po metru dužnom", price: "320 RSD" },
      {
        label: "Opšivanje tepiha sa trakom od tepiha",
        unit: "Po metru dužnom",
        price: "700 RSD",
      },
    ],
  },
  {
    title: "Zamena resa ručno čvorovanje",
    href: "/zamena-resa/",
    rows: [
      { label: "Pamučne", price: "1.000 RSD", note: "Rese se rade u dužini od 1 do 10 cm" },
      { label: "Svilene", price: "1.700 RSD", note: "Rese se rade u dužini od 1 do 10 cm" },
      { label: "Vunene", price: "1.600 RSD", note: "Rese se rade u dužini od 1 do 10 cm" },
    ],
  },
  {
    title: "Zamena resa sa trakom za ojačavanje pri zameni resa",
    href: "/zamena-resa/",
    rows: [
      { label: "Pamučne", unit: "1 m", price: "1.400 RSD" },
      { label: "Svilene", unit: "1 m", price: "2.000 RSD" },
      { label: "Vunene", unit: "1 m", price: "1.900 RSD" },
    ],
  },
];

/** "1.200 RSD" -> 1200, "300 - 500 RSD" -> [300, 500] */
function parsePrice(price: string): number | [number, number] {
  const clean = price.replace(/RSD/gi, "").trim();
  if (clean.includes("-")) {
    const parts = clean.split("-").map((p) => Number(p.replace(/\./g, "").trim()));
    return [parts[0]!, parts[1]!];
  }
  return Number(clean.replace(/\./g, ""));
}

export function buildOfferCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Usluge pranja tepiha, nameštaja i dušeka",
    provider: {
      "@type": "Organization",
      name: "Tepih Servis Andrić Beograd",
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "Beograd" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cenovnik usluga",
      itemListElement: PRICE_TABLES.flatMap((table) =>
        table.rows.map((row) => {
          const parsed = parsePrice(row.price);
          const base = {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${table.title} — ${row.label}` },
            url: table.href ? `${SITE_URL}${table.href}` : `${SITE_URL}/cenovnik/`,
          };
          if (Array.isArray(parsed)) {
            return {
              ...base,
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "RSD",
                minPrice: parsed[0],
                maxPrice: parsed[1],
                ...(row.unit && { unitText: row.unit }),
              },
            };
          }
          return {
            ...base,
            price: parsed,
            priceCurrency: "RSD",
            ...(row.unit && {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "RSD",
                price: parsed,
                unitText: row.unit,
              },
            }),
          };
        })
      ),
    },
  };
}
