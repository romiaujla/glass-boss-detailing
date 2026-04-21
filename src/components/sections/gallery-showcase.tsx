"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

type GalleryShowcaseProps = {
  items: GalleryItem[];
};

export function GalleryShowcase({ items }: GalleryShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const isLoaded = loadedItems.includes(index);

          return (
            <motion.button
              key={item.src}
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-left"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25 }}
            >
              {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_8%,rgba(255,255,255,0.12)_18%,rgba(255,255,255,0.06)_33%)] bg-[length:200%_100%]" />
              )}

              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onLoad={() =>
                    setLoadedItems((current) =>
                      current.includes(index) ? current : [...current, index]
                    )
                  }
                />
              </div>

              <div className="absolute left-3 top-3">
                <Badge className="bg-black/50 text-zinc-100">{item.label}</Badge>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.button
              type="button"
              aria-label="Close lightbox"
              className="absolute right-6 top-6 rounded-full border border-white/25 bg-black/60 p-2 text-white"
              onClick={() => setActiveIndex(null)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={items[activeIndex].src}
                  alt={items[activeIndex].alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
