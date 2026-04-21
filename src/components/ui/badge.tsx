import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
