"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

type ContactDict = {
  badge: string;
  title: string;
  description: string;
  phone: string;
  phoneLink: string;
  phoneCta: string;
  address: string;
  mapsEmbed: string;
  mapsLink: string;
  instagram: string;
  hours: { day: string; time: string }[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact({ dict }: { dict: ContactDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <span className="inline-block border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {dict.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mb-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl"
        >
          {dict.title}
          <span className="text-gold">.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground/60"
        >
          {dict.description}
        </motion.p>

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column: contact info + hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="flex flex-col gap-10"
          >
            {/* Phone CTA */}
            <a
              href={dict.phoneLink}
              className="group inline-flex items-center gap-3 self-start rounded-sm border border-gold bg-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
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
              {dict.phoneCta}
            </a>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-gold/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <a
                href={dict.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors duration-200 hover:text-gold"
              >
                {dict.address}
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 shrink-0 text-gold/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              <a
                href={dict.instagram.startsWith("http") ? dict.instagram : `https://instagram.com/${dict.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors duration-200 hover:text-gold"
              >
                @{dict.instagram.replace(/https?:\/\/(www\.)?instagram\.com\//, "")}
              </a>
            </div>

            {/* Hours table */}
            <div>
              <table className="w-full">
                <tbody>
                  {dict.hours.map((row, i) => {
                    const isClosed =
                      row.time.toLowerCase() === "closed" ||
                      row.time.toLowerCase() === "encerrado" ||
                      row.time.toLowerCase() === "fechado";
                    return (
                      <tr
                        key={i}
                        className="border-b border-foreground/5 last:border-b-0"
                      >
                        <td className="py-3 pr-8 text-sm font-medium text-foreground/60">
                          {row.day}
                        </td>
                        <td
                          className={`py-3 text-right text-sm ${
                            isClosed
                              ? "text-foreground/40"
                              : "font-medium text-gold"
                          }`}
                        >
                          {row.time}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Right column: Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <div className="overflow-hidden rounded-sm border border-gold/10">
              <iframe
                src={dict.mapsEmbed}
                className="aspect-video w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
