"use client";

import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <div className="rounded-2xl border border-white/15 bg-black/70 p-2 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-2">
          <a href="tel:+13135550199" className="w-full">
            <Button className="w-full" size="lg">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <a href="#contact" className="w-full">
            <Button variant="secondary" className="w-full" size="lg">
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
