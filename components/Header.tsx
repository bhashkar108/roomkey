"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Residences" },
  { href: "/agents", label: "Advisors" },
  { href: "/about", label: "Maison" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c1210]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c4a574]/40 bg-[#c4a574]/10 text-sm font-semibold tracking-[0.2em] text-[#e8d5b0]">
            RK
          </span>
          <span>
            <span className="block font-serif text-xl tracking-[0.18em] text-[#f7f3eb]">ROOMKEY</span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-[#c4a574]">Private Residences</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.22em] transition ${
                pathname === link.href ? "text-[#e8d5b0]" : "text-[#f7f3eb]/70 hover:text-[#f7f3eb]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-[#c4a574] px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#0c1210] transition hover:bg-[#d8bf8d]"
          >
            Private tour
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-[#f7f3eb]"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-px w-6 bg-current mb-1.5" />
          <span className="block h-px w-6 bg-current mb-1.5" />
          <span className="block h-px w-4 bg-current ml-auto" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0c1210] px-5 py-4 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.2em] text-[#f7f3eb]/80"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
