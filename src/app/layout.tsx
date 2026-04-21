import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glassbossdetailing.com"),
  title: {
    default: "Glass Boss Detailing | Detroit Premium Mobile Detailing",
    template: "%s | Glass Boss Detailing",
  },
  description:
    "Glass Boss Detailing delivers premium mobile auto detailing in Downriver and across Detroit Metro. Exterior, interior, paint correction, and ceramic coating services.",
  keywords: [
    "mobile detailing Detroit",
    "car detailing Downriver MI",
    "mobile auto detailing Detroit Metro",
    "paint correction Downriver",
    "ceramic coating Detroit",
  ],
  openGraph: {
    title: "Detroit's Premium Mobile Detailing Service",
    description: "We bring showroom shine to your driveway across Downriver and Detroit Metro.",
    url: "https://glassbossdetailing.com",
    siteName: "Glass Boss Detailing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/showcase/after-01.webp",
        width: 1200,
        height: 900,
        alt: "Glass Boss Detailing transformation result",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass Boss Detailing",
    description: "Premium mobile detailing in Downriver and Detroit Metro.",
    images: ["/showcase/after-01.webp"],
  },
  alternates: {
    canonical: "https://glassbossdetailing.com",
  },
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
