'use client';

import { Menu, MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import Image from 'next/image';
import Link, { type LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { NAV_ITEMS } from '@/lib/nav-config';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  function cycleTheme() {
    if (theme === 'system') {
      setTheme(systemTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme('system');
    }
  }

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button className="md:hidden" size="icon" variant="ghost">
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="fixed right-0 bottom-0 left-0 mx-auto max-h-[96%] w-full max-w-full space-y-3"
        onOpenAutoFocus={(event) => {
          event.preventDefault();
        }}
      >
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>
              <MobileLink
                className="flex items-center justify-center gap-2 text-left"
                href="/"
                onOpenChange={setOpen}
              >
                <div className="relative size-12">
                  <Image alt="Logo" fill src="/logo.svg" />
                </div>
                <div className="flex-col">
                  <span className="font-bold text-sm">
                    Praxis für Osteopathie, Dentosophie, Yoga & Qigong
                  </span>
                  <br />
                  <span className="font-normal text-xs">
                    Maitri Katrin Eulitz
                  </span>
                </div>
              </MobileLink>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            {NAV_ITEMS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === link.href
                  : pathname.startsWith(link.href);
              return (
                <MobileLink
                  className={cn(
                    isActive
                      ? buttonVariants({ variant: 'secondary' })
                      : buttonVariants({ variant: 'outline' })
                  )}
                  href={link.href}
                  key={link.key}
                  onOpenChange={setOpen}
                >
                  <div className="flex w-1/3 items-center justify-stretch gap-3">
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
            <div className="pt-4">
              <Button
                aria-label="Toggle theme"
                className="w-full"
                onClick={cycleTheme}
                variant="outline"
              >
                {renderThemeIcon(theme, currentTheme)}
                <span>Theme wechseln</span>
              </Button>
            </div>
            <DrawerClose asChild>
              <Button className="w-full" variant="destructive">
                Abbrechen
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function renderThemeIcon(theme: string | undefined, currentTheme?: string) {
  if (theme === 'system') {
    return <SunMoon className="mr-2 h-4 w-4" />;
  }
  if (currentTheme === 'dark') {
    return <MoonIcon className="mr-2 h-4 w-4" />;
  }
  return <SunIcon className="mr-2 h-4 w-4" />;
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
      className={cn('w-full', className)}
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MobileNav;
