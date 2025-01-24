import CookieConsent from "@/components/cookie-consent";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: {
    default:
      "Praxis für Osteopathie, Dentosophie, Yoga & Qigong – Maitri Katrin Eulitz",
    template: "%s | Praxis für Osteopathie, Dentosophie, Yoga & Qigong",
  },
  description:
    "Ganzheitliche Gesundheitsförderung in Radebeul: Osteopathie, Dentosophie, Yoga & Qigong bei Maitri Katrin Eulitz. Aktivieren Sie Ihre Selbstheilungskräfte.",
  keywords: [
    "Osteopathie",
    "Dentosophie",
    "Yoga",
    "Qigong",
    "Radebeul",
    "Maitri Katrin Eulitz",
    "Osteopathie Praxis",
    "Yoga Kurse",
    "Qigong Unterricht",
    "Dentosophie Methoden",
    "Ganzheitliche Zahn- und Kiefergesundheit",
    "Osteopathische Behandlung für Babys",
    "Osteopathie für Erwachsene",
    "Krankenkassen Kostenübernahme Osteopathie",
    "Gesundheitsfördernde Yoga-Praxis",
    "Qigong für Anfänger und Fortgeschrittene",
    "Präventive Gesundheitspflege Osteopathie",
    "Heilende Qigong-Praktiken",
    "Yoga zur Stressreduktion",
    "Individuelle Osteopathie-Sitzungen",
    "Yoga- und Qigong-Workshops",
    "Osteopathie für alle Altersgruppen",
  ],
  // Open Graph: Für die Vorschau in z.B. LinkedIn, Slack, WhatsApp
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    title:
      "Praxis für Osteopathie, Dentosophie, Yoga & Qigong – Maitri Katrin Eulitz",
    description:
      "Ganzheitliche Gesundheitsförderung in Radebeul: Osteopathie, Dentosophie, Yoga & Qigong bei Maitri Katrin Eulitz.",
    siteName: "Praxis Maitri Katrin Eulitz – Osteopathie & Dentosophie",
    images: [
      {
        url: `https://www.${process.env.NEXT_PUBLIC_URL}/logo.svg`,
        width: 630,
        height: 630,
        alt: "Praxis für Osteopathie, Dentosophie, Yoga & Qigong",
      },
    ],
    locale: "de_DE",
  },
  // Anweisungen an Suchmaschinen (Robots-Tag)
  robots: {
    index: true, // Die Seite darf indexiert werden
    follow: true, // Links dürfen verfolgt werden
  },
  // Optional: Favicon- bzw. Icon-Angaben
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="h-full relative flex flex-col min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative flex flex-col">
            <div className="flex-grow flex-1 min-h-screen z-auto pt-[var(--navbar-height)]">
              {children}
            </div>
            <CookieConsent />
            <Toaster />
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
