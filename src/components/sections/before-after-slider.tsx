"use client";

import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(56);

  return (
    <div className={cn("space-y-5", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 bg-black/40">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />

        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="relative h-full w-[2px] bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.7)]">
            <span className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-black/70 shadow-2xl" />
          </div>
        </div>

        <div className="absolute left-4 top-4">
          <Badge className="bg-black/60 text-white">Before</Badge>
        </div>
        <div className="absolute right-4 top-4">
          <Badge className="bg-[var(--color-accent)]/25 text-cyan-100">After</Badge>
        </div>
      </div>

      <input
        type="range"
        min={6}
        max={94}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-white/10 accent-[var(--color-accent)]"
        aria-label="Slide to compare before and after"
      />
    </div>
  );
}
