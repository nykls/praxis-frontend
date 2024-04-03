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
          className="size-10 px-0 text-foreground text-base md:hidden"
        >
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader className="">
            <DrawerTitle>
              <MobileLink
                href="/"
                className="flex items-center gap-3"
                onOpenChange={setOpen}
              >
                <div className="relative size-12">
                  <Image src="/logo.svg" alt="Logo" fill />
                </div>
                <div className="flex-col text-left">
                  <span className="font-bold">
                    Praxis für Osteopathie, Yoga & Qigong
                  </span>
                  <br />
                  <DrawerDescription>
                    <span className="text-sm font-normal">
                      Maitri Katrin Eulitz
                    </span>
                  </DrawerDescription>
                </div>
              </MobileLink>
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
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
                >
                  <link.icon className="size-6 mr-3" />
                  <span className="sr-only">{link.title}</span>
                  {link.title}
                </MobileLink>
              );
            })}
            <ContactForm>
              <Button variant="outline">
                <MessageCircleMore className="size-6 mr-3" />
                <span className="sr-only">Kontaktformular öffnen</span> Kontakt
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
