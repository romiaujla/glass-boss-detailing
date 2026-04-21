"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

type TestimonialsRotatorProps = {
  items: Testimonial[];
};

export function TestimonialsRotator({ items }: TestimonialsRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4800);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="space-y-4">
      <div className="relative min-h-48 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={items[activeIndex].name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32 }}
            className="space-y-5"
          >
            <div className="flex gap-1 text-[var(--color-accent)]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-zinc-200">
              &ldquo;{items[activeIndex].quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                {items[activeIndex].name}
              </p>
              <p className="text-sm text-zinc-400">{items[activeIndex].location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2">
        {items.map((item, idx) => (
          <button
            key={item.name}
            className="h-2.5 flex-1 rounded-full bg-white/10"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View testimonial from ${item.name}`}
          >
            <motion.span
              className="block h-full rounded-full bg-[var(--color-accent)]"
              animate={{ width: activeIndex === idx ? "100%" : "0%" }}
              transition={{ duration: 0.35 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
