import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 text-center">
      <div className="max-w-xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Glass Boss Detailing</p>
        <h1 className="font-display text-4xl text-white">Thanks For Reaching Out</h1>
        <p className="text-zinc-300">
          Your request has been received. We will follow up shortly with a quote and
          scheduling options.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "inline-flex") }>
          Back To Home
        </Link>
      </div>
    </main>
  );
}
