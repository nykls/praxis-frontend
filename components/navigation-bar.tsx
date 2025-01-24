"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { MoonIcon, PhoneOutgoing, SunIcon, SunMoon } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/ui/animated-background";
import ContactForm from "./contact";
import MobileNav from "./mobile-nav";
import { Button, buttonVariants } from "./ui/button";

const navItems = [
  { title: "Home", href: "/", key: "home" },
  { title: "Aktuelles", href: "/blog", key: "news" },
  { title: "Über", href: "/about", key: "about" },
];

type ActionItem = {
  key: string;
  component: React.ReactNode;
  ariaLabel: string;
};

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function cycleTheme() {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme("system");
    }
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const pathname = usePathname();

  const actionItems = [
    {
      key: "contact",
      component: <ContactForm />,
      ariaLabel: "Kontaktformular öffnen",
    },
    {
      key: "call",
      component: (
        <Button
          size="icon"
          variant="ghost"
          className="hover:text-primary transition-colors duration-300"
          asChild
        >
          <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
            <PhoneOutgoing className="size-5" />
          </Link>
        </Button>
      ),
      ariaLabel: "Anrufen",
    },
    {
      key: "theme",
      component: (
        <Button
          variant="ghost"
          size="icon"
          onClick={cycleTheme}
          aria-label="Toggle theme"
          className="hover:text-primary transition-colors duration-300"
        >
          {theme === "system" ? (
            <SunMoon className="w-5 h-5" />
          ) : currentTheme === "dark" ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </Button>
      ),
      ariaLabel: "Theme ändern",
    },
  ];

  return (
    <header className="fixed top-0 p-2 z-40 w-full border-b border-border/50 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="flex items-center justify-between">
        <NavbarBrand />
        <div className="flex items-center space-x-2">
          <DesktopNav pathname={pathname} />
          <ActionItems items={actionItems} />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function NavbarBrand() {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src="/logo.svg"
        alt="Praxis Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <div className="hidden md:block text-sm">
        <p className="font-semibold text-primary">
          Praxis für Osteopathie, Dentosophie, Yoga & Qigong
        </p>
        <p className="text-muted-foreground">Maitri Katrin Eulitz</p>
      </div>
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden md:block">
      <AnimatedBackground
        defaultValue={navItems[0].title}
        className="rounded-lg bg-accent"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            data-id={item.title}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors duration-300",
              pathname === item.href
                ? "text-primary"
                : "text-foreground hover:text-primary"
            )}
          >
            {item.title}
          </Link>
        ))}
      </AnimatedBackground>
    </nav>
  );
}

function ActionItems({ items }: { items: ActionItem[] }) {
  return (
    <AnimatedBackground
      className="rounded-lg bg-accent"
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.3,
      }}
      enableHover
    >
      {items.map((item) => (
        <div
          key={item.key}
          data-id={item.key}
          className="rounded-full text-foreground hover:text-primary transition-colors duration-300"
        >
          {React.cloneElement(item.component as React.ReactElement, {
            "aria-label": item.ariaLabel,
          })}
        </div>
      ))}
    </AnimatedBackground>
  );
}

export default Navbar;
