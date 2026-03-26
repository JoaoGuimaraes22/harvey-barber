"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarDict = {
  brand: string;
  cta: string;
  ctaPhone: string;
  links: { id: string; label: string }[];
};

export default function Navbar({ dict, lang }: { dict: NavbarDict; lang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const otherLang = lang === "pt" ? "en" : "pt";
  const switchPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href={`/${lang}`}
          className="font-display text-2xl font-bold tracking-wider text-foreground uppercase"
        >
          {dict.brand}
          <span className="text-gold">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {dict.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium uppercase tracking-widest text-foreground/60 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={switchPath}
            className="text-sm font-medium uppercase tracking-widest text-foreground/40 transition-colors hover:text-gold"
          >
            {otherLang.toUpperCase()}
          </Link>
          <a
            href={dict.ctaPhone}
            className="rounded-sm border border-gold bg-gold/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            {dict.cta}
          </a>
        </div>

        {/* Mobile: lang switch + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={switchPath}
            className="text-sm font-medium uppercase tracking-widest text-foreground/40 transition-colors hover:text-gold"
          >
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-charcoal/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-[100dvh] border-b border-gold/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {dict.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium uppercase tracking-widest text-foreground/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={dict.ctaPhone}
            className="mt-4 rounded-sm border border-gold bg-gold/10 px-5 py-3 text-center text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            {dict.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
