import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Home, Menu, MessageCircleMore, Rss, Store } from "lucide-react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ContactForm from "./contact";
import { Button, buttonVariants } from "./ui/button";
import { GoogleMapsEmbed } from "./third-parties/google";
import { Card } from "./ui/card";

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const navLinks = [
    { title: "Startseite", href: "/", key: "home", icon: Home },
    { title: "Aktuelles", href: "/blog", key: "news", icon: Rss },
    { title: "Über", href: "/about", key: "about", icon: Store },
  ];
  const pathname = usePathname();

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size 9 md:hidden hover:text-primary transition-colors duration-300"
        >
          <svg
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <g transform="scale(-1, 1) translate(-24, 0)">
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="mx-auto w-full fixed space-y-3 bottom-0 left-0 right-0 max-h-[96%] max-w-full"
        onOpenAutoFocus={(event) => {
          event.preventDefault();
        }}
      >
        <div className="max-w-lg w-full mx-auto">
          <DrawerHeader className="">
            <DrawerTitle>
              <MobileLink
                href="/"
                className="flex items-center justify-center gap-2 text-left"
                onOpenChange={setOpen}
              >
                <div className="relative size-12">
                  <Image src="/logo.svg" alt="Logo" fill />
                </div>
                <div className="flex-col">
                  <span className="font-bold text-sm">
                    Praxis für Osteopathie, Dentosophie, Yoga & Qigong
                  </span>
                  <br />
                  <span className="text-xs font-normal">
                    Maitri Katrin Eulitz
                  </span>
                </div>
              </MobileLink>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);
              return (
                <MobileLink
                  className={cn(
                    isActive
                      ? buttonVariants({ variant: "secondary" })
                      : buttonVariants({ variant: "outline" })
                  )}
                  href={link.href}
                  onOpenChange={setOpen}
                  key={link.key}
                >
                  <div className="w-1/3 flex gap-3 justify-stretch items-center">
                    <div>
                      <link.icon className="size-auto" />
                    </div>
                    <div className="mx-auto">
                      <span className="sr-only">{link.title}</span>
                      {link.title}
                    </div>
                  </div>
                </MobileLink>
              );
            })}
            <ContactForm>
              <Button variant="outline">
                <div className="w-1/3 flex gap-3 justify-stretch items-center">
                  <div>
                    <MessageCircleMore className="size-auto" />
                  </div>
                  <div className="mx-auto">
                    <span className="sr-only">Kontaktformular öffnen</span>{" "}
                    Kontakt
                  </div>
                </div>
              </Button>
            </ContactForm>
            <DrawerClose asChild>
              <Button variant="destructive" className="w-full">
                Abbrechen
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MobileNav;
