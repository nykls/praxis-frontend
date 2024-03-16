import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navigation-bar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Praxis für Osteopathie, Yoga und Qigong Maitri Katrin Eulitz",
    template:
      "%s | Praxis für Osteopathie, Yoga und Qigong Maitri Katrin Eulitz",
  },
  description:
    "Die Praxis Maitri in Radebeul bietet Osteopathie, Yoga und Qigong an. Katrin Eulitz ist Osteopathin, Yogalehrerin und Qigong-Kursleiterin.",
  keywords: "Osteopathie, Yoga, Qigong, Radebeul, Katrin Eulitz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={cn("h-full relative font-sans antialiased", inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <CookieConsent />
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
