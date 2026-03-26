"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Image from "next/image";

type GalleryDict = {
  badge: string;
  title: string;
  seeMore: string;
  seeLess: string;
  images: { src: string; alt: string }[];
};

const INITIAL_COUNT = 6;

export default function Gallery({ dict }: { dict: GalleryDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? dict.images : dict.images.slice(0, INITIAL_COUNT);

  return (
    <section
      id="gallery"
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
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-center"
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
          className="mb-16 text-center font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl"
        >
          {dict.title}
          <span className="text-gold">.</span>
        </motion.h2>

        {/* Image grid — masonry-style with mixed sizes */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: i < INITIAL_COUNT ? 0.2 + i * 0.08 : 0.05 * (i - INITIAL_COUNT),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative aspect-[3/2] overflow-hidden rounded-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-sm border border-transparent transition-colors duration-300 group-hover:border-gold/30" />
                </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See more / less button */}
        {dict.images.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
            >
              {expanded ? dict.seeLess : dict.seeMore}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
