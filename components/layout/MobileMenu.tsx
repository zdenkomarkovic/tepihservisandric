"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

interface MobileMenuProps {
  links: readonly NavLink[];
  phone1: string;
  phone1Href: string;
  phone2: string;
  phone2Href: string;
}

export function MobileMenu({ links, phone1, phone1Href, phone2, phone2Href }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white rounded-md hover:bg-navy-light transition-colors"
        aria-label={open ? "Zatvori meni" : "Otvori meni"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-navy-dark shadow-2xl z-50 border-t border-navy-light/30">
          <nav aria-label="Mobilna navigacija">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-6 py-3.5 text-white/90 hover:text-white hover:bg-navy transition-colors border-b border-white/5 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-5 border-t border-white/10 space-y-3 bg-navy-dark/80">
            <a
              href={phone1Href}
              className="flex items-center gap-3 text-gold font-bold text-lg"
            >
              <PhoneIcon />
              {phone1}
            </a>
            <a
              href={phone2Href}
              className="flex items-center gap-3 text-white/70 text-sm"
            >
              <PhoneIcon />
              {phone2}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.04 6.04l1.48-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
