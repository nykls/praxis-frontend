import CookieConsent from "@/components/cookie-consent";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="de" suppressHydrationWarning>
      <body
        className={cn("h-full relative font-sans antialiased", inter.className)}
      >
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
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
