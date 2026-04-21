"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
