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
  keywords: "Osteopathie, Yoga, Qigong, Radebeul, Katrin Eulitz",
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
      <body className={cn("h-full relative font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <Navbar />
          </header>
          <main className="relative flex flex-col min-h-screen max-w-full">
            <div className="flex-grow flex-1 pt-20">{children}</div>
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
