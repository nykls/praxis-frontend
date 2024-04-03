import React from "react";
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
import { usePathname, useRouter } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, Home, Newspaper, Building2 } from "lucide-react";

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const navLinks = [
    { title: "Startseite", href: "/", key: "home", icon: Home },
    { title: "Aktuelles", href: "/blog", key: "news", icon: Newspaper },
    { title: "Über", href: "/about", key: "about", icon: Building2 },
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
        <div className="w-full">
          <DrawerHeader className="">
            <DrawerTitle>
              <MobileLink
                href="/"
                className="flex items-center"
                onOpenChange={setOpen}
              >
                <div className="relative size-12">
                  <Image src="/logo.svg" alt="Logo" fill />
                </div>
                <div className="flex-col text-left">
                  <span className="font-bold">Osteopathie, Yoga & Qigong</span>
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
            <div className="mx-auto w-full">
              <ul className="space-y-5">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === link.href
                      : pathname.startsWith(link.href);
                  return (
                    <li key={link.key}>
                      <MobileLink
                        className={cn(
                          isActive
                            ? buttonVariants({ variant: "secondary" })
                            : buttonVariants({ variant: "outline" })
                        )}
                        href={link.href}
                        onOpenChange={setOpen}
                      >
                        <link.icon className="size-6 mr-2" />
                        {link.title}
                      </MobileLink>
                    </li>
                  );
                })}
              </ul>
            </div>
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
