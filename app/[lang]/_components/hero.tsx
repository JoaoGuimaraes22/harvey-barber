"use client";

import { useEffect, useState } from "react";

type HeroDict = {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  tagline: string;
  cta: string;
  ctaPhone: string;
  stats: { value: string; label: string }[];
};

export default function Hero({ dict }: { dict: HeroDict }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Desktop: moody image background */}
      <div className="absolute inset-0 hidden md:block">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
            loaded ? "animate-slow-zoom" : ""
          }`}
          style={{ backgroundImage: "url(/hero/hero-bg.webp)" }}
        />
      </div>

      {/* Mobile: vertical video background */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/hero/hero-bg.webp"
        >
          <source src="/hero/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />

      {/* Gold radial glow */}
      <div className="absolute bottom-0 left-1/2 h-[60%] w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-[0.04]" />

      {/* Film grain */}
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6">
        <div className="mx-auto w-full max-w-7xl pt-24 pb-20">
          {/* Title block */}
          <div className="mb-8">
            <h1 className="font-display font-black leading-[0.9] tracking-tight">
              <span
                className={`block text-6xl text-foreground sm:text-7xl lg:text-9xl ${
                  loaded ? "animate-cinematic-up delay-100" : "opacity-0"
                }`}
              >
                {dict.titleLine1}
              </span>
              <span
                className={`block text-6xl text-gold sm:text-7xl lg:text-9xl ${
                  loaded ? "animate-cinematic-up delay-300" : "opacity-0"
                }`}
              >
                {dict.titleLine2}
              </span>
              <span
                className={`block text-6xl text-foreground/40 sm:text-7xl lg:text-9xl ${
                  loaded ? "animate-cinematic-up delay-500" : "opacity-0"
                }`}
              >
                {dict.titleLine3}
              </span>
            </h1>
          </div>

          {/* Gold line */}
          <div
            className={`mb-8 h-px bg-gold ${
              loaded ? "animate-gold-line" : "w-0"
            }`}
          />

          {/* Tagline */}
          <p
            className={`mb-10 max-w-lg text-lg font-light tracking-wide text-foreground/60 sm:text-xl ${
              loaded ? "animate-cinematic-up delay-700" : "opacity-0"
            }`}
          >
            {dict.tagline}
          </p>

          {/* CTA */}
          <div
            className={`mb-16 ${
              loaded ? "animate-cinematic-up delay-800" : "opacity-0"
            }`}
          >
            <a
              href={dict.ctaPhone}
              className="group inline-flex items-center gap-3 rounded-sm border border-gold bg-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
            >
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {dict.cta}
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-10 sm:gap-16 ${
              loaded ? "animate-cinematic-up delay-1000" : "opacity-0"
            }`}
          >
            {dict.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-gold sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className={`flex flex-col items-center gap-2 ${
              loaded ? "animate-cinematic-up delay-1200" : "opacity-0"
            }`}
          >
            <div className="animate-scroll-hint h-8 w-px bg-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
