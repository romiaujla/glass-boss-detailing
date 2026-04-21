"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,var(--color-accent),#6cffbd)] shadow-[0_0_20px_rgba(0,194,255,0.8)]"
      style={{ scaleX }}
    />
  );
}
