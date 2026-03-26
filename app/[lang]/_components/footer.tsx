type FooterDict = {
  brand: string;
  tagline: string;
  phone: string;
  address: string;
  instagram: string;
  mapsLink: string;
  copyright: string;
};

export default function Footer({ dict }: { dict: FooterDict }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal">
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              {dict.brand}
              <span className="text-gold">.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/40">
              {dict.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href="#about"
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                About
              </a>
              <a
                href="#services"
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <a
                href={`tel:${dict.phone.replace(/\s/g, "")}`}
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                {dict.phone}
              </a>

              {/* Address */}
              <a
                href={dict.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                {dict.address}
              </a>

              {/* Instagram */}
              <a
                href={dict.instagram.startsWith("http") ? dict.instagram : `https://instagram.com/${dict.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/50 transition-colors duration-200 hover:text-gold"
              >
                {dict.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/5">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-xs text-foreground/30">
            &copy; {year} {dict.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
