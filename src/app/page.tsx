"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CarFront,
  CheckCircle2,
  CircleDashed,
  Gem,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { GalleryShowcase } from "@/components/sections/gallery-showcase";
import { StickyMobileCta } from "@/components/sections/sticky-mobile-cta";
import { TestimonialsRotator } from "@/components/sections/testimonials-rotator";
import { Reveal } from "@/components/shared/reveal";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Exterior Detail",
    description:
      "Decontamination wash, wheel reset, trim treatment, and gloss enhancement for a deep reflective finish.",
    icon: Sparkles,
  },
  {
    title: "Interior Deep Clean",
    description:
      "Steam-level attention on high-touch surfaces, fabric extraction, and odor neutralization throughout the cabin.",
    icon: SprayCan,
  },
  {
    title: "Paint Correction",
    description:
      "Machine polishing that cuts swirls and restores depth, clarity, and mirror-like color across your paint.",
    icon: WandSparkles,
  },
  {
    title: "Ceramic Coating",
    description:
      "Long-term protection with hydrophobic behavior, UV resistance, and easier maintenance between washes.",
    icon: Gem,
  },
  {
    title: "Mobile Detailing",
    description:
      "We bring premium equipment and professional products straight to your driveway in the Detroit Metro area.",
    icon: CarFront,
  },
];

const reasons = [
  {
    title: "Mobile Convenience",
    text: "No waiting rooms or drop-offs. We detail at your home, office, or garage on your schedule.",
    icon: MapPin,
  },
  {
    title: "Professional-Grade Products",
    text: "Only trusted compounds, coatings, and interior-safe chemicals used by pro-level detailers.",
    icon: ShieldCheck,
  },
  {
    title: "Attention To Detail",
    text: "Tight edges, panel consistency, and the final walkaround most shops skip. We do not rush results.",
    icon: Star,
  },
  {
    title: "Detroit Metro Coverage",
    text: "Based in Downriver and serving the wider Detroit Metro with reliable arrival windows.",
    icon: CircleDashed,
  },
];

const cities = [
  "Wyandotte",
  "Southgate",
  "Taylor",
  "Allen Park",
  "Trenton",
  "Riverview",
  "Woodhaven",
  "Lincoln Park",
  "Dearborn",
  "Detroit",
  "Livonia",
  "Canton",
];

const galleryItems = [
  {
    src: "/showcase/gallery-01.webp",
    alt: "Exterior detailing finish with deep gloss",
    label: "Exterior",
  },
  {
    src: "/showcase/gallery-02.webp",
    alt: "Interior deep clean transformation",
    label: "Interior",
  },
  {
    src: "/showcase/gallery-03.webp",
    alt: "Paint correction results and clarity",
    label: "Correction",
  },
  {
    src: "/showcase/gallery-04.webp",
    alt: "Ceramic coating water behavior",
    label: "Ceramic",
  },
  {
    src: "/showcase/gallery-05.webp",
    alt: "Mobile detailing setup on site",
    label: "Mobile",
  },
  {
    src: "/showcase/gallery-06.webp",
    alt: "Final showroom shine result",
    label: "Finish",
  },
];

const testimonials = [
  {
    name: "Marcus R.",
    location: "Wyandotte, MI",
    quote:
      "My SUV looked better than delivery day. The paint correction alone was worth it and they came right to my driveway.",
  },
  {
    name: "Ashley T.",
    location: "Southgate, MI",
    quote:
      "Fast communication, on-time arrival, and the interior detail was unreal. Every surface looked and smelled brand new.",
  },
  {
    name: "Devon K.",
    location: "Detroit, MI",
    quote:
      "Ceramic coating has made maintenance ridiculously easy. Water beads instantly and the finish still pops weeks later.",
  },
];

const instagramPreviews = [
  "Paint correction in progress",
  "Foam wash + decon sequence",
  "Ceramic coating close-up",
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.08]);

  return (
    <div className="relative overflow-x-clip bg-[var(--color-bg)] pb-24 text-white md:pb-0">
      <ScrollProgress />

      <div className="noise-overlay pointer-events-none fixed inset-0 z-0" />

      <motion.main
        className="relative z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
            <a href="#top" className="font-display text-xl tracking-[0.15em] text-white">
              GLASS BOSS <span className="text-[var(--color-accent)]">DETAILING</span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a href="#services" className="transition-colors hover:text-white">
                Services
              </a>
              <a href="#showcase" className="transition-colors hover:text-white">
                Results
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "hidden text-xs tracking-wide md:inline-flex"
              )}
            >
              Get a Quote
            </a>
          </div>
        </header>

        <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
          <motion.div
            className="absolute inset-0 -z-10"
            style={{ y: heroY, scale: heroScale }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.27),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(108,255,189,0.16),transparent_40%),linear-gradient(160deg,#040506_0%,#0a0f14_45%,#07090b_100%)]" />
            <div className="aurora absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-300/18 blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-[-140px] top-1/3 h-72 w-72 rounded-full bg-emerald-300/8 blur-3xl" />
          </motion.div>

          <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 md:px-8 md:pt-36">
            <Reveal className="max-w-4xl space-y-8">
              <Badge className="border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 text-cyan-100">
                Downriver, Michigan · Serving Detroit Metro
              </Badge>

              <div className="space-y-5">
                <h1 className="font-display text-5xl leading-[0.95] tracking-[0.03em] text-white md:text-7xl">
                  Detroit&apos;s Premium Mobile Detailing Service
                </h1>
                <p className="max-w-2xl text-lg text-zinc-300 md:text-xl">
                  We bring showroom shine to your driveway with precision detailing,
                  professional-grade products, and results that turn heads.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
                  Book a Detail
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "gap-2")}
                >
                  Get a Quote
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Average Rating</p>
                  <p className="mt-2 text-2xl font-semibold text-white">5.0 Stars</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Mobile Visits</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Detroit Metro</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Service Focus</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Luxury Finish</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section-shell">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Services</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Precision Packages Built For Real Results
              </h2>
              <p className="text-zinc-300">
                Every service is designed to restore depth, remove buildup, and leave your
                vehicle with a clean, protected, premium finish.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.title} delay={index * 0.06}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.03 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Card className="group h-full border-white/10 p-1 transition-shadow hover:shadow-[0_16px_55px_-30px_rgba(0,194,255,0.8)]">
                        <CardHeader>
                          <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/14 text-[var(--color-accent)]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription className="leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="showcase" className="section-shell border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Before &amp; After</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Transformation You Can Feel At First Glance
              </h2>
              <p className="text-zinc-300">
                Slide to compare real detailing outcomes, then open the gallery for a full
                close-up view of our finish quality.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <Reveal>
                <BeforeAfterSlider
                  beforeSrc="/showcase/before-01.webp"
                  afterSrc="/showcase/after-01.webp"
                  beforeAlt="Vehicle before professional detailing"
                  afterAlt="Vehicle after premium mobile detailing"
                />
              </Reveal>

              <Reveal delay={0.1} className="space-y-5">
                <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                    What You Gain
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      "Deeper gloss and color clarity",
                      "Reduced swirls and surface haze",
                      "Cleaner cabin air and touchpoints",
                      "Hydrophobic protection for easier upkeep",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-accent)]" />
                        <p className="text-zinc-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2")}>
                  Reserve Your Spot
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="mt-10">
              <GalleryShowcase items={galleryItems} />
            </Reveal>
          </div>
        </section>

        <section id="why" className="section-shell">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Why Glass Boss</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Built Around Trust, Precision, And Convenience
              </h2>
              <p className="text-zinc-300">
                We are obsessive about consistency, clean process, and delivering high-end
                quality without wasting your time.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <Reveal key={reason.title} delay={index * 0.08}>
                    <Card className="h-full border-white/10 bg-white/[0.03] p-6">
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-[var(--color-accent)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                      <p className="mt-2 text-zinc-300">{reason.text}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="service-area" className="section-shell border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Service Area</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Serving Downriver &amp; Detroit Metro Area
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/35">
                  <iframe
                    title="Glass Boss Detailing service area map"
                    src="https://www.google.com/maps?q=Downriver%20Michigan&output=embed"
                    className="h-[320px] w-full grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                  <p className="text-zinc-300">
                    Need mobile detailing near Downriver? We provide premium on-site service
                    across the Detroit Metro area with flexible scheduling.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-zinc-200"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-shell">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Testimonials</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Trusted By Drivers Who Expect Better
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <TestimonialsRotator items={testimonials} />
            </Reveal>
          </div>
        </section>

        <section id="instagram" className="section-shell border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Instagram</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Daily Detail Drops, Washes, And Finishes
              </h2>
              <p className="text-zinc-300">
                Follow the latest transformations and behind-the-scenes process updates.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {instagramPreviews.map((preview, index) => (
                <Reveal key={preview} delay={index * 0.08}>
                  <a
                    href="https://www.instagram.com/glassbossdetailing/"
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(0,194,255,0.16),rgba(255,255,255,0.02))] p-6 transition-transform hover:scale-[1.02]"
                  >
                    <Camera className="h-5 w-5 text-[var(--color-accent)]" />
                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-400">Recent Post</p>
                    <p className="mt-2 text-lg text-white">{preview}</p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-6">
              <a
                href="https://www.instagram.com/glassbossdetailing/"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "gap-2")}
              >
                <Camera className="h-4 w-4" />
                Follow On Instagram
              </a>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Contact / Booking</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Book Your Mobile Detail
              </h2>
              <p className="text-zinc-300">
                Get a fast quote with your vehicle details and preferred service. We respond
                quickly and confirm availability across Detroit Metro.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal className="space-y-4">
                <a href="tel:+13135550199" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2") }>
                  <PhoneCall className="h-4 w-4" />
                  Call (313) 555-0199
                </a>
                <a
                  href="sms:+13135550199"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full gap-2")}
                >
                  <MessageCircle className="h-4 w-4" />
                  Send A Text
                </a>
                <a
                  href="mailto:glassbossdetailing@gmail.com"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full gap-2")}
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">Response Promise</p>
                  <p className="mt-2 text-zinc-200">
                    Most quote requests get a same-day response with transparent pricing and
                    recommended package options.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
                  <form
                    name="booking"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    action="/thank-you"
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="booking" />
                    <p className="hidden">
                      <label>
                        Do not fill this out if you are human:
                        <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input name="name" required placeholder="Name" autoComplete="name" />
                      <Input name="phone" required type="tel" placeholder="Phone" autoComplete="tel" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        name="email"
                        required
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                      />
                      <Input name="vehicleType" required placeholder="Vehicle Type" />
                    </div>

                    <Textarea
                      name="message"
                      required
                      placeholder="Tell us what your vehicle needs and your preferred time window."
                    />

                    <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2")}>
                      Request My Quote
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
          <p>
            Glass Boss Detailing · Downriver, Michigan · Serving Detroit Metro Area
          </p>
        </footer>
      </motion.main>

      <StickyMobileCta />
    </div>
  );
}
