// ─── Site constants ────────────────────────────────────────────────────────
// Izvor istine za sve podatke o firmi koji se koriste u SEO-u, schemi i UI-u.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tepihservisandric.rs";

export const SITE_NAME = "Tepih Servis Andrić Beograd";

// ─── Contact ───────────────────────────────────────────────────────────────
export const CONTACT = {
  phone1: "065 333 2 555",
  phone2: "011 333 22 55",
  phone3: "069 333 2 555",
  phone1Href: "tel:+381653332555",
  phone2Href: "tel:+381113332255",
  phone3Href: "tel:+381693332555",
  email: "tepihservis.andric@gmail.com",
  emailHref: "mailto:tepihservis.andric@gmail.com",
  address: "Ladno brdo 4g",
  neighborhood: "Veliki Mokri Lug",
  city: "Beograd",
  postalCode: "11000",
  country: "RS",
  fullAddress: "Ladno brdo 4g, Veliki Mokri Lug, Beograd 11000",
} as const;

// ─── Working hours ─────────────────────────────────────────────────────────
export const HOURS = {
  weekdays: "08:00 – 20:00",
  saturday: "08:00 – 18:00",
  sunday: "Zatvoreno",
  field: {
    weekdays: "10:00 – 18:00",
    saturday: "10:00 – 18:00",
    sunday: "Zatvoreno",
  },
} as const;

// ─── Social ────────────────────────────────────────────────────────────────
// TODO: Popuniti tačne URL-ove profila
export const SOCIAL = {
  facebook: "https://www.facebook.com/SERVISANDRIC",
  instagram: "https://www.instagram.com/tepihservisandric",
  youtube: "https://www.youtube.com/channel/UCF0sXmvYYZFqvHHfM20SU4A",
  gmb: "https://g.page/tepihservisandric",
} as const;

// ─── Default OG image ──────────────────────────────────────────────────────
export const OG_IMAGE_DEFAULT = {
  url: "/tepih-servis-andric-10.jpg",
  width: 640,
  height: 480,
  alt: "Tepih Servis Andrić Beograd",
} as const;

// ─── LocalBusiness schema data ─────────────────────────────────────────────
export const SCHEMA = {
  name: SITE_NAME,
  type: "CarpetCleaner",
  url: SITE_URL,
  telephone: "+381653332555",
  email: CONTACT.email,
  priceRange: "480–3000 RSD",
  address: {
    streetAddress: CONTACT.address,
    addressLocality: CONTACT.city,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.country,
  },
  openingHours: [
    "Mo-Fr 08:00-20:00",
    "Sa 08:00-18:00",
  ],
  foundingDate: "1984",
} as const;
