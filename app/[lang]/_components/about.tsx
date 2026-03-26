"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

type AboutDict = {
  badge: string;
  title: string;
  description: string;
  description2: string;
  features: { value: string; label: string }[];
};

export default function About({ dict }: { dict: AboutDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-charcoal-light py-24 sm:py-32"
    >
      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Subtle gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl"
            >
              {dict.title}
              <span className="text-gold">.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6 text-lg leading-relaxed text-foreground/60"
            >
              {dict.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-10 text-lg leading-relaxed text-foreground/60"
            >
              {dict.description2}
            </motion.p>

            {/* Features / Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap gap-8"
            >
              {dict.features.map((feat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-gold">
                    {feat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
                    {feat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/about/about-1.webp"
                alt="Harvey Cabeleireiro interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark overlay for mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>

            {/* Gold border accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 hidden aspect-[4/5] w-full rounded-sm border border-gold/20 lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
