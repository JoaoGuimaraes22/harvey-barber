"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

type ReviewsDict = {
  badge: string;
  title: string;
  more: string;
  less: string;
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

        {/* Mobile: horizontal slider */}
        <MobileSlider items={dict.items} inView={inView} labels={{ more: dict.more, less: dict.less }} />

        {/* Desktop: 3x2 grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
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
              className="group overflow-hidden rounded-sm border border-gold/10 bg-background transition-colors hover:border-gold/25"
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileSlider({
  items,
  inView,
  labels,
}: {
  items: { name: string; rating: number; text: string; image: string }[];
  inView: boolean;
  labels: { more: string; less: string };
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / items.length;
    setActive(Math.round(scrollLeft / cardWidth));
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {items.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group w-[80vw] min-w-[80vw] snap-center overflow-hidden rounded-sm border border-gold/10 bg-background"
          >
            <ReviewCard review={review} compact labels={labels} />
          </motion.div>
        ))}
      </div>
      {/* Scroll indicator dots */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const cardWidth = el.scrollWidth / items.length;
              el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-gold"
                : "w-1.5 bg-foreground/20"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({
  review,
  compact = false,
  labels,
}: {
  review: { name: string; rating: number; text: string; image: string };
  compact?: boolean;
  labels?: { more: string; less: string };
}) {
  const [expanded, setExpanded] = useState(false);
  const TEXT_LIMIT = 120;
  const isLong = compact && review.text.length > TEXT_LIMIT;
  const displayText = isLong && !expanded
    ? review.text.slice(0, TEXT_LIMIT).trimEnd() + "..."
    : review.text;

  return (
    <>
      {/* Result photo */}
      <div className={`relative overflow-hidden ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={review.image}
          alt={`${review.name}'s haircut`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Stars */}
        <div className="absolute bottom-3 left-4 flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, s) => (
            <span key={s} className="text-sm text-gold drop-shadow-md">
              &#9733;
            </span>
          ))}
          {Array.from({ length: 5 - review.rating }).map((_, s) => (
            <span key={s} className="text-sm text-foreground/20 drop-shadow-md">
              &#9733;
            </span>
          ))}
        </div>
      </div>

      {/* Text */}
      <div className={`relative ${compact ? "p-4" : "p-6"}`}>
        <span className={`absolute right-4 font-display leading-none text-gold/10 ${compact ? "-top-2 text-4xl" : "-top-3 text-5xl"}`}>
          &ldquo;
        </span>
        <p className={`relative mb-3 leading-relaxed text-foreground/60 ${compact ? "text-xs" : "text-sm"}`}>
          {displayText}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-gold/60 transition-colors hover:text-gold"
            >
              {expanded ? (labels?.less ?? "less") : (labels?.more ?? "more")}
            </button>
          )}
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold/80">
          {review.name}
        </p>
      </div>
    </>
  );
}
