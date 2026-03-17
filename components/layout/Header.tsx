import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/usluge/", label: "Usluge" },
  { href: "/cenovnik/", label: "Cenovnik" },
  { href: "/galerija/", label: "Foto galerija" },
  { href: "/video/", label: "Video" },
  { href: "/o-nama/", label: "O nama" },
  { href: "/zaposlenje/", label: "Zaposlenje" },
  { href: "/blog/", label: "Blog" },
  { href: "/kontakt/", label: "Kontakt & Lokacije" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      {/* Top info bar — desktop only */}
      <div className="hidden md:block bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-end gap-3">
          <a
            href={CONTACT.phone1Href}
            className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-white font-bold px-3 py-1 rounded text-xs transition-colors"
          >
            <PhoneIcon />
            {CONTACT.phone1}
          </a>
          <a
            href={CONTACT.phone2Href}
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-1 rounded text-xs transition-colors border border-white/20"
          >
            <PhoneIcon />
            {CONTACT.phone2}
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Tepih Servis Andrić — početna stranica"
          >
            <Image
              src="/profesionalni-tepih-servis-andric-beograd.webp"
              alt="Tepih Servis Andrić Beograd"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Glavna navigacija"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 text-white/80 hover:text-white hover:bg-navy-light rounded-md text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <MobileMenu
            links={NAV_LINKS}
            phone1={CONTACT.phone1}
            phone1Href={CONTACT.phone1Href}
            phone2={CONTACT.phone2}
            phone2Href={CONTACT.phone2Href}
          />
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.04 6.04l1.48-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
