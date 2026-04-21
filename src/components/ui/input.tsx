import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-2xl border border-white/15 bg-black/30 px-4 text-base text-white placeholder:text-zinc-500 shadow-inner shadow-black/40 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white focus-visible:border-[var(--color-accent)]/80 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
