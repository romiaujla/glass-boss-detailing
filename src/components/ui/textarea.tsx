import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-30 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-base text-white placeholder:text-zinc-500 shadow-inner shadow-black/40 transition-colors focus-visible:border-[var(--color-accent)]/80 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
