"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

type GalleryDict = {
  title: string;
};

const images = Array.from({ length: 8 }, (_, i) => `/gallery/gallery-${i + 1}.jpg`);

export default function Gallery({ dict }: { dict: GalleryDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative overflow-hidden bg-charcoal-light py-16"
    >
      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center font-display text-2xl font-bold text-foreground sm:text-3xl"
        >
          {dict.title}
          <span className="text-gold">.</span>
        </motion.h2>

        {/* Row 1 — scrolls left */}
        <div className="mb-4 flex overflow-hidden">
          <div className="animate-gallery-scroll flex shrink-0 gap-4">
            {[...images, ...images].map((src, i) => (
              <div key={i} className="relative aspect-[3/2] w-72 shrink-0 overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex overflow-hidden">
          <div className="animate-gallery-scroll-reverse flex shrink-0 gap-4">
            {[...images, ...images].map((src, i) => (
              <div key={i} className="relative aspect-[3/2] w-72 shrink-0 overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
