import CookieConsent from "@/components/cookie-consent";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: {
    default: "Praxis für Osteopathie, Yoga & Qigong Maitri Katrin Eulitz",
    template: "%s | Praxis für Osteopathie, Yoga & Qigong Maitri Katrin Eulitz",
  },
  description:
    "Fördern Sie Ihr Wohlbefinden bei Maitri Katrin Eulitz: Osteopathie, Yoga & Qigong zur Aktivierung der Selbstheilungskräfte. Zentral gelegen.",
  keywords:
    "Osteopathie, Yoga, Qigong, Radebeul, Maitri Katrin Eulitz, Osteopathie Praxis, Yoga Kurse, Qigong Unterricht, Osteopathische Behandlung für Babys, Osteopathie für Erwachsene, Krankenkassen Kostenübernahme Osteopathie, Gesundheitsfördernde Yoga-Praxis, Qigong für Anfänger und Fortgeschrittene, Ganzheitliche Osteopathie, Präventive Gesundheitspflege Osteopathie, Heilende Qigong-Praktiken, Yoga zur Stressreduktion, Individuelle Osteopathie-Sitzungen, Yoga- und Qigong-Workshops, Osteopathie für alle Altersgruppen.",
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
      <body className="h-full relative flex flex-col min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Navbar />
          </header>
          <main className="relative flex flex-col">
            <div className="flex-grow flex-1 mt-20 min-h-screen">
              {children}
            </div>
            <CookieConsent />
            <Toaster />
          </main>
          <footer>
            <Footer />
          </footer>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
