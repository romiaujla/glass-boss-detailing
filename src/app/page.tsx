"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CarFront,
  CheckCircle2,
  Clock3,
  CircleDashed,
  Droplets,
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

type PackageTier = {
  name: string;
  price: string;
  summary: string;
  featured?: boolean;
};

const packageTiers: PackageTier[] = [
  {
    name: "Basic Service",
    price: "$75",
    summary: "A straightforward refresh covering essential exterior and interior touch points.",
  },
  {
    name: "Core Service",
    price: "$125",
    summary: "Our most popular package for balanced shine, interior reset, and lasting finish.",
    featured: true,
  },
  {
    name: "Premium Service",
    price: "$250",
    summary: "Deep restoration with paint enhancement and advanced interior detailing care.",
  },
  {
    name: "Complete Service Package",
    price: "$500",
    summary: "Our full signature treatment including correction-level polish and premium protection.",
  },
];

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

const processSteps = [
  {
    title: "Inspect & Quote",
    detail: "We evaluate paint, trim, glass, and interior condition before service starts.",
    icon: ShieldCheck,
  },
  {
    title: "Detail & Correct",
    detail: "Precision cleaning and correction methods restore depth, clarity, and cabin freshness.",
    icon: WandSparkles,
  },
  {
    title: "Protect & Finish",
    detail: "Final dressings and optional coating lock in gloss and make upkeep easier.",
    icon: Droplets,
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
  const heroY = useTransform(scrollY, [0, 520], [0, 140]);
  const heroScale = useTransform(scrollY, [0, 520], [1, 1.12]);

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
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
            <a href="#top" className="font-display text-xl tracking-[0.15em] text-white">
              GLASS BOSS <span className="text-[var(--color-accent)]">DETAILING</span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a href="#packages" className="transition-colors hover:text-white">
                Packages
              </a>
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

        <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10">
          <motion.div
            className="absolute inset-0 -z-10"
            style={{ y: heroY, scale: heroScale }}
            aria-hidden="true"
          >
            <Image
              src="/showcase/after-01.webp"
              alt="Premium mobile detailing finish"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.86)_20%,rgba(0,0,0,0.52)_65%,rgba(0,0,0,0.9)_100%)]" />
            <div className="aurora absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-300/18 blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-[-140px] top-1/3 h-72 w-72 rounded-full bg-emerald-300/14 blur-3xl" />
          </motion.div>

          <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 md:px-8 md:pt-36">
            <Reveal className="max-w-4xl space-y-8">
              <Badge className="border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 text-cyan-100">
                Downriver, Michigan · Serving Detroit Metro
              </Badge>

              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.23em] text-zinc-300">Mobile Auto Detailing</p>
                <h1 className="font-display text-5xl leading-[0.92] tracking-[0.02em] text-white md:text-7xl">
                  High-Gloss Detailing That Makes Your Car Look Better Than Showroom-New
                </h1>
                <p className="max-w-2xl text-lg text-zinc-300 md:text-xl">
                  From daily commuters to garage-kept builds, we deliver certified mobile
                  detailing with premium products and meticulous execution at your location.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#packages"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "gap-2")}
                >
                  View Packages
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Average Rating</p>
                  <p className="mt-2 text-2xl font-semibold text-white">5.0 Stars</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">On-Site Service</p>
                  <p className="mt-2 text-2xl font-semibold text-white">7 Days / Week</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Avg Turnaround</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Same-Day Quotes</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="packages" className="section-shell border-b border-white/5 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>Packages</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                Detailing Packages Built For Every Ride And Budget
              </h2>
              <p className="text-zinc-300">
                Pick the detail level you need today. We can always build a custom package
                when your paint, interior, or protection goals require more.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {packageTiers.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "rounded-3xl border p-6",
                      tier.featured
                        ? "border-[var(--color-accent)]/35 bg-[linear-gradient(160deg,rgba(0,194,255,0.16),rgba(255,255,255,0.04))]"
                        : "border-white/10 bg-white/[0.03]"
                    )}
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-zinc-300">{tier.name}</p>
                    <p className="mt-4 font-display text-5xl leading-none text-white">{tier.price}</p>
                    <p className="mt-4 min-h-16 text-sm leading-relaxed text-zinc-300">{tier.summary}</p>
                    <a
                      href="#contact"
                      className={cn(
                        buttonVariants({ variant: tier.featured ? "default" : "secondary" }),
                        "mt-5 w-full"
                      )}
                    >
                      Select Package
                    </a>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell border-b border-white/5">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="space-y-5">
              <Badge>About Us</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                We&apos;re A Team Of Certified Detailing Specialists Obsessed With Perfection
              </h2>
              <p className="text-zinc-300">
                From daily commuters to collector exotics, Glass Boss combines cutting-edge
                products with meticulous technique to deliver finishes that turn heads and
                preserve value.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Based In</p>
                  <p className="mt-2 text-lg font-semibold text-white">Downriver, Michigan</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Coverage</p>
                  <p className="mt-2 text-lg font-semibold text-white">Detroit Metro Area</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,255,0.16),transparent_60%)]" />
                <div className="relative space-y-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Customer Promise</p>
                  <p className="text-xl leading-relaxed text-white">
                    &ldquo;No rushed handoff. No shortcuts. Every vehicle gets a final quality pass
                    before we leave your driveway.&rdquo;
                  </p>
                  <div className="space-y-3">
                    {["Insured mobile operation", "Professional-grade product systems", "Transparent quote process"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />
                        <p className="text-zinc-200">{item}</p>
                      </div>
                    ))}
                  </div>
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
                Signature Detailing Services
              </h2>
              <p className="text-zinc-300">
                Each service is structured for measurable transformation, not quick wipe-downs.
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

        <section id="process" className="section-shell border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <Badge>How It Works</Badge>
              <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                A Clean Process From Arrival To Final Walkaround
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.08}>
                    <Card className="h-full border-white/10 bg-white/[0.03] p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-[var(--color-accent)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="font-display text-3xl text-zinc-500">0{index + 1}</p>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-zinc-300">{step.detail}</p>
                    </Card>
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
                Transformation You Can See Instantly
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

                  <div className="mt-4 flex items-center gap-2 text-zinc-300">
                    <Clock3 className="h-4 w-4 text-[var(--color-accent)]" />
                    <p>Booking windows available 7 days per week.</p>
                  </div>

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
                What Our Customers Are Saying
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
                Follow Us On Social
              </h2>
              <p className="text-zinc-300">
                See daily wash sequences, correction work, ceramic applications, and final reveals.
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
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <Reveal className="space-y-6">
                <Badge>Join Our Mailing List</Badge>
                <h2 className="font-display text-4xl tracking-[0.04em] md:text-5xl">
                  Seasonal Deals, Promos, And Pro Detailing Tips
                </h2>
                <p className="text-zinc-300">
                  Subscribe for exclusive offers and product care guidance straight to your inbox.
                </p>
                <form className="flex flex-col gap-3 sm:flex-row">
                  <Input type="email" required placeholder="Your Email" className="sm:flex-1" />
                  <button type="submit" className={cn(buttonVariants({ size: "lg" }), "sm:px-7")}>
                    Sign Up
                  </button>
                </form>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Contact</p>
                    <p className="mt-2 text-zinc-200">glassbossdetailing@gmail.com</p>
                    <p className="text-zinc-200">(313) 555-0199</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Address</p>
                    <p className="mt-2 text-zinc-200">Downriver, Michigan</p>
                    <p className="text-zinc-200">Detroit Metro Coverage</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
                  <div className="mb-5">
                    <Badge>Contact / Booking</Badge>
                    <h3 className="mt-3 font-display text-3xl text-white">Book Your Mobile Detail</h3>
                    <p className="mt-2 text-zinc-300">
                      Tell us what you drive and what result you want. We will respond quickly.
                    </p>
                  </div>

                  <div className="mb-5 grid gap-3 sm:grid-cols-3">
                    <a href="tel:+13135550199" className={cn(buttonVariants({ size: "default" }), "w-full gap-2") }>
                      <PhoneCall className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href="sms:+13135550199"
                      className={cn(buttonVariants({ variant: "secondary", size: "default" }), "w-full gap-2")}
                    >
                      <MessageCircle className="h-4 w-4" />
                      SMS
                    </a>
                    <a
                      href="mailto:glassbossdetailing@gmail.com"
                      className={cn(buttonVariants({ variant: "secondary", size: "default" }), "w-full gap-2")}
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>

                  <form
                    method="POST"
                    action="https://formsubmit.co/glassbossdetailing@gmail.com"
                    className="space-y-4"
                  >
                    <input type="hidden" name="_subject" value="New booking request - Glass Boss Detailing" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://romiaujla.github.io/glass-boss-detailing/thank-you/"
                    />
                    <input type="hidden" name="_captcha" value="false" />

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
