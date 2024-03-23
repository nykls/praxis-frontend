import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu } from "lucide-react";

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const navLinks = [
    { title: "Aktuelles", href: "/blog" },
    { title: "Über", href: "/resume" },
  ];
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="link"
          className="size-10 px-0 text-foreground text-base md:hidden"
        >
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <div className="relative size-12">
            <Image src="/logo.svg" alt="Logo" fill />
          </div>
          <div className="flex-col">
            <span className="font-bold text-xs">
              Osteopathie, Yoga und Qigong
            </span>
            <br />
            <span className="text-xs">Maitri Katrin Eulitz</span>
          </div>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <MobileLink
                  className={
                    isActive ? "hover:text-primary text-primary" : "font-normal"
                  }
                  href={link.href}
                  onOpenChange={setOpen}
                >
                  {link.title}
                </MobileLink>
              );
            })}
            {/* <MobileLink href="/blog" onOpenChange={setOpen}>
              Aktuelles
            </MobileLink>
            <MobileLink href="/resume" onOpenChange={setOpen}>
              Über
            </MobileLink> */}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
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
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MobileNav;
