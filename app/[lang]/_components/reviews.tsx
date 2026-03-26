"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

type ReviewsDict = {
  badge: string;
  title: string;
  items: { name: string; rating: number; text: string; image: string }[];
};

export default function Reviews({ dict }: { dict: ReviewsDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative overflow-hidden bg-charcoal-light py-24 sm:py-32"
    >
      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Gold accent line */}
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

        {/* Review cards — top row 3, bottom row 2 centered */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-sm border border-gold/10 bg-background transition-colors hover:border-gold/25 ${
                i >= 3 ? "lg:col-span-1 lg:first-of-type:col-start-1" : ""
              }`}
            >
              {/* Result photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={review.image}
                  alt={`${review.name}'s haircut`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                {/* Stars overlaid on image bottom-left */}
                <div className="absolute bottom-3 left-4 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <span key={s} className="text-sm text-gold drop-shadow-md">
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>

              {/* Text content */}
              <div className="relative p-6">
                {/* Decorative quotation mark */}
                <span className="absolute -top-3 right-4 font-display text-5xl leading-none text-gold/10">
                  &ldquo;
                </span>

                <p className="relative mb-4 text-sm leading-relaxed text-foreground/60">
                  {review.text}
                </p>

                {/* Reviewer name */}
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold/80">
                  {review.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
