import Link from "next/link";
import Image from "next/image";
import { CONTACT, HOURS, SOCIAL, SITE_NAME } from "@/lib/constants";

const USEFUL_LINKS = [
  { href: "/pranje-tepiha/", label: "Pranje tepiha Beograd" },
  { href: "/cenovnik/", label: "Tepih servis cenovnik" },
  { href: "/cenovnik/", label: "Cena pranja tepiha" },
  { href: "/usluge/", label: "Tepih servis" },
  { href: "/kontakt/", label: "Tepih servis lokacije koje pokrivamo" },
  { href: "/masinsko-pranje-tepiha/", label: "Mašinsko pranje tepiha" },
  {
    href: "/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/",
    label: "Automatsko pranje tepiha",
  },
  { href: "/najcesca-pitanja/", label: "Najčešća pitanja za pranje tepiha" },
  { href: "/usluge/", label: "Dostava i pranje tepiha" },
  { href: "/masinsko-pranje-tepiha/", label: "Dubinsko pranje tepiha" },
  { href: "/ciscenje-mebl-namestaja/", label: "Dubinsko pranje nameštaja" },
  { href: "/dubinsko-ciscenje-namestaja/", label: "Mašinsko pranje nameštaja" },
  { href: "/pranje-decijah-kolica/", label: "Pranje dečijih kolica" },
] as const;

const SERVICE_LINKS = [
  { href: "/masinsko-pranje-tepiha/", label: "Masinsko pranje tepiha" },
  { href: "/susenje-tepiha/", label: "Sušenje tepiha" },
  { href: "/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/", label: "Centrifuga" },
  { href: "/transport-tepiha/", label: "Dostava i transport tepiha" },
  { href: "/pranje-decijah-kolica/", label: "Pranje dečijih kolica" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pb-10">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Company info */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label={SITE_NAME} className="inline-block mb-5">
              <Image
                src="/profesionalni-tepih-servis-andric-beograd.webp"
                alt={SITE_NAME}
                width={260}
                height={200}
                className="h-26 w-auto object-contain"
              />
            </Link>

            <address className="not-italic text-sm text-white/60 space-y-2 mb-5">
              <p>{CONTACT.fullAddress}</p>
              <p>
                <a
                  href={CONTACT.phone1Href}
                  className="hover:text-gold transition-colors font-medium text-white/80"
                >
                  {CONTACT.phone1}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.phone2Href}
                  className="hover:text-gold transition-colors text-white/70"
                >
                  {CONTACT.phone2}
                </a>
              </p>
              <p>
                <a href={CONTACT.emailHref} className="hover:text-gold transition-colors break-all">
                  {CONTACT.email}
                </a>
              </p>
            </address>

            {/* Radno vreme */}
            <div className="text-xs text-white/50 space-y-1 mb-4">
              <p className="text-white/70 font-semibold mb-1">Radno vreme</p>
              <p>
                <span className="text-white/70 font-medium">Ponedeljak – Petak:</span>{" "}
                {HOURS.weekdays}h
              </p>
              <p>
                <span className="text-white/70 font-medium">Subota:</span> {HOURS.saturday}h
              </p>
            </div>

            {/* Radno vreme call centra */}
            <div className="text-xs text-white/50 space-y-1 mb-5">
              <p className="text-white/70 font-semibold mb-1">Radno vreme call centra</p>
              <p>
                <span className="text-white/70 font-medium">Ponedeljak – Petak:</span>{" "}
                {HOURS.weekdays}h
              </p>
              <p>
                <span className="text-white/70 font-medium">Subota:</span> {HOURS.saturday}h
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/50 hover:text-white transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Korisni linkovi */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Korisni linkovi
            </h3>
            <ul className="space-y-2">
              {USEFUL_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Usluge */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Usluge
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Trust / GMB */}
          <div>
            <div className="flex gap-3 mb-5">
              <div className="bg-navy rounded-lg px-3 py-2 text-center border border-navy-light/20 flex-1">
                <p className="text-gold text-xs font-bold uppercase tracking-wider">Iskustvo</p>
              </div>
              <div className="bg-navy rounded-lg px-3 py-2 text-center border border-navy-light/20 flex-1">
                <p className="text-gold text-xs font-bold uppercase tracking-wider">Tradicija</p>
              </div>
              <div className="bg-navy rounded-lg px-3 py-2 text-center border border-navy-light/20 flex-1">
                <p className="text-gold text-xs font-bold uppercase tracking-wider">Kvalitet</p>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-5">Since 1984.</p>

            <a
              href={SOCIAL.gmb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors mb-5"
            >
              <GoogleIcon />
              Google My Business
            </a>

            <div className="bg-navy rounded-lg p-4 border border-navy-light/20">
              <Image
                src="/zagarantovan-kvalitet-u-tepih-servisu-andric-beograd.png"
                alt="Zagarantovan kvalitet - Tepih Servis Andrić Beograd"
                width={160}
                height={60}
                className="w-full h-auto object-contain mb-3"
              />
              <p className="text-white font-semibold text-sm mb-1">Tepih servis Andric</p>
              <p className="text-white/60 text-xs">&ldquo;Sa nama ste zaista sigurni!&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO text */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <Link
              href="/pranje-tepiha-najbolja-cena-beograd/"
              className="hover:text-white/40 transition-colors"
            >
              Pranje tepiha Najbolja cena Beograd
            </Link>
            <Link
              href="/dubinsko-pranje-tepiha-beograd/"
              className="hover:text-white/40 transition-colors"
            >
              Dubinsko pranje tepiha Beograd
            </Link>
            <Link
              href="/ciscenje-tepiha-beograd/"
              className="hover:text-white/40 transition-colors"
            >
              Ciscenje tepiha Beograd
            </Link>
            <Link
              href="/tepih-servis-novi-beograd-najbolje-cene/"
              className="hover:text-white/40 transition-colors"
            >
              Tepih servis Novi Beograd Najbolje cene
            </Link>
            <Link href="/ciscenje-itisona/" className="hover:text-white/40 transition-colors">
              Ciscenje itisona
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/60">
          <p>
            © {year} {SITE_NAME}. Sva prava zadržana. &nbsp;·&nbsp; Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/najcesca-pitanja/" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/kontakt/" className="hover:text-white transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Social icons ─────────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
