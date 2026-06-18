import Link from "next/link";
import Image from "next/image";
import { CONTACT, HOURS, SOCIAL, SITE_NAME } from "@/lib/constants";

const USEFUL_LINKS = [
  { href: "/usluge/", label: "Usluge tepih servisa" },
  { href: "/cenovnik/", label: "Cenovnik" },
  { href: "/galerija/", label: "Foto galerija" },
  { href: "/o-nama/", label: "O nama" },
  { href: "/najcesca-pitanja/", label: "Najčešća pitanja" },
  { href: "/blog/", label: "Blog" },
  { href: "/zaposlenje/", label: "Zaposlenje" },
  { href: "/kontakt/", label: "Kontakt i lokacije" },
] as const;

const SERVICE_LINKS = [
  { href: "/pranje-tepiha/", label: "Pranje tepiha" },
  { href: "/masinsko-pranje-tepiha/", label: "Mašinsko dubinsko pranje" },
  { href: "/masinsko-dubinsko-pranje-sa-ispiranjem-centrifugom/", label: "Pranje sa centrifugom" },
  { href: "/ciscenje-tepiha-beograd/", label: "Čišćenje tepiha šamponom" },
  { href: "/susenje-tepiha/", label: "Sušenje tepiha" },
  { href: "/tresenje-tepiha/", label: "Trešenje tepiha" },
  { href: "/transport-tepiha/", label: "Transport tepiha" },
  { href: "/ciscenje-mebl-namestaja/", label: "Pranje nameštaja" },
  { href: "/pranje-decijah-kolica/", label: "Pranje dečijih kolica" },
  { href: "/opsivanje-tepiha/", label: "Opšivanje tepiha" },
  { href: "/opsivanje-etisona/", label: "Opšivanje itisona" },
  { href: "/ciscenje-itisona/", label: "Čišćenje itisona šamponom" },
  { href: "/zamena-resa/", label: "Zamena resa" },
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

      {/* Popularne lokacije */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <Link href="/lokacija/vozdovac/" className="hover:text-white/40 transition-colors">
              Tepih servis Voždovac
            </Link>
            <Link href="/lokacija/novi-beograd/" className="hover:text-white/40 transition-colors">
              Tepih servis Novi Beograd
            </Link>
            <Link href="/lokacija/zvezdara/" className="hover:text-white/40 transition-colors">
              Tepih servis Zvezdara
            </Link>
            <Link href="/lokacija/vracar/" className="hover:text-white/40 transition-colors">
              Tepih servis Vračar
            </Link>
            <Link href="/lokacija/zemun/" className="hover:text-white/40 transition-colors">
              Tepih servis Zemun
            </Link>
            <Link href="/lokacija/cukaricka-padina/" className="hover:text-white/40 transition-colors">
              Tepih servis Čukarica
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
