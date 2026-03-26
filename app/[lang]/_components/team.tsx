"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

type TeamDict = {
  badge: string;
  title: string;
  members: {
    name: string;
    role: string;
    description: string;
    image: string;
  }[];
};

export default function Team({ dict }: { dict: TeamDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      ref={ref}
      className="relative overflow-hidden bg-charcoal-light py-24 sm:py-32"
    >
      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
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

        {/* Members */}
        <div className="grid gap-8 sm:grid-cols-2">
          {dict.members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden rounded-sm border border-gold/10 bg-background transition-colors hover:border-gold/25"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-gold">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-foreground/60">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
