import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/70 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,var(--color-accent),#39dbff)] text-black shadow-[0_10px_30px_-10px_rgba(0,194,255,0.75)] hover:brightness-110",
        secondary:
          "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? ("span" as const) : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
