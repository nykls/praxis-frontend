"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  MessageCircleMore,
  MoonIcon,
  PhoneOutgoing,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactForm from "./contact";
import MobileNav from "./mobile-nav";
import { Button, buttonVariants } from "./ui/button";

function Navbar() {
  const { setTheme } = useTheme();
  const navLinks = [
    {
      title: "Aktuelles",
      href: "/blog",
      key: "news",
      aria: "Öffnet die Aktuelles Seite",
    },
    {
      title: "Über",
      href: "/about",
      key: "about",
      aria: "Öffnet die Über-uns-Seite",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="container h-14 max-w-screen-2xl items-center px-2">
      <div className="flex h-full items-center justify-between lg:px-10">
        <div className="hidden md:flex gap-11">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              key="home"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "relative"
              )}
            >
              <Image
                src="/logo.svg"
                alt="Picture of the author"
                fill
                className="object-cover"
                sizes="100%"
              />
            </Link>
            <Link
              href="/"
              key="home"
              className={buttonVariants({ variant: "ghost" })}
            >
              <div className="text-xs hover:text-primary">
                <span
                  className={cn(
                    "font-bold",
                    usePathname() === "/" ? "text-primary" : "text-foreground"
                  )}
                >
                  Praxis für Osteopathie, Yoga & Qigong
                </span>
                <br />
                <span>Maitri Katrin Eulitz</span>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="">
            <div className="grow">
              <ul className="flex gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <li key={link.key} className="w-28">
                      <Link href={link.href} aria-label={link.aria}>
                        <Button
                          variant="ghost"
                          className={cn(
                            isActive
                              ? "hover:text-primary text-primary"
                              : "font-normal",
                            "inline-block"
                          )}
                        >
                          {link.title}
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        <MobileNav />

        <div className="flex gap-3">
          <ContactForm>
            <Button
              variant="ghost"
              size="icon"
              aria-haspopup="dialog"
              aria-controls="contactFormDialog"
            >
              <MessageCircleMore className="size-6" />
              <span className="sr-only">Kontaktformular öffnen</span>
            </Button>
          </ContactForm>
          <Link
            href={"tel:" + process.env.NEXT_PUBLIC_PHONE}
            aria-label="Anrufen"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <PhoneOutgoing className="size-6" />
            <span className="sr-only">Anrufen</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <SunIcon className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Theme ändern</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Hell
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dunkel
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
