'use client';

import {
  MessageCircleMore,
  MoonIcon,
  PhoneOutgoing,
  SunIcon,
  SunMoon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { TextLoop } from '@/components/animate/text-loop';
import { NAV_ITEMS } from '@/lib/nav-config';
import { cn } from '@/lib/utils';
import ContactForm from './contact';
import MobileNav from './mobile-nav';
import AnimatedBackground from './ui/animated-background';
import { Button } from './ui/button';

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const renderThemeIcon = () => {
    if (theme === 'system') {
      return <SunMoon className="size-5" />;
    }
    if (currentTheme === 'dark') {
      return <MoonIcon className="size-5" />;
    }
    return <SunIcon className="size-5" />;
  };

  if (!mounted) {
    return null;
  }

  function cycleTheme() {
    if (theme === 'system') {
      setTheme(systemTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme('system');
    }
  }

  return (
    <header className="-translate-x-1/2 fixed bottom-4 left-1/2 z-50 w-fit rounded-full border border-border bg-background/50 p-4 shadow-xs backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-background/30 md:top-3 md:bottom-auto md:p-3">
      <div className="flex items-center gap-5">
        <NavbarBrand />
        <DesktopNav pathname={pathname} />
        <div className="flex items-center gap-4 md:gap-3">
          <ContactForm>
            <Button
              aria-label="Kontaktformular öffnen"
              className="size-[40px] transition-colors duration-300 hover:text-primary"
              size="icon"
              variant="ghost"
            >
              <MessageCircleMore className="size-7 md:size-6" />
            </Button>
          </ContactForm>
          <Button
            asChild
            className="size-[40px] transition-colors duration-300 hover:text-primary"
            size="icon"
            variant="ghost"
          >
            <Link
              className="cursor-default"
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            >
              <PhoneOutgoing className="size-7 md:size-6" />
            </Link>
          </Button>

          <div className="hidden md:flex">
            <Button
              aria-label="Toggle theme"
              className="size-[40px] transition-colors duration-300 hover:text-primary"
              onClick={cycleTheme}
              size="icon"
              variant="ghost"
            >
              {renderThemeIcon()}
            </Button>
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavbarBrand() {
  return (
    <Link className="flex flex-1 items-center gap-2" href="/">
      <div className="relative size-[40px]">
        <Image
          alt="Logo"
          className="shrink-0 rounded-full"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/logo.svg"
        />
      </div>
      <div className="hidden min-w-0 md:block">
        <div className="inline-flex w-[190px] items-center font-bold text-primary text-sm">
          Praxis für{' '}
          <span className="relative ml-1 w-[100px] font-bold">
            <TextLoop
              transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: 'blur(4px)',
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: 'blur(4px)',
                },
              }}
            >
              <span className="bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Osteopathie
              </span>
              <span className="bg-linear-to-r from-cyan-600 to-cyan-700 bg-clip-text font-bold text-transparent">
                Dentosophie
              </span>
              <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Yoga
              </span>
              <span className="bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Qigong
              </span>
            </TextLoop>
          </span>
        </div>
        <p className="text-muted-foreground text-xs">Maitri Katrin Eulitz</p>
      </div>
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  const activeItem = NAV_ITEMS.find((item) => item.href === pathname);
  return (
    <nav className="hidden items-center md:flex">
      <AnimatedBackground
        className="rounded-lg bg-accent"
        defaultValue={activeItem?.title}
        enableHover
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            className={cn(
              'px-3 py-2 font-medium text-sm transition-colors duration-300',
              pathname === item.href
                ? 'text-destructive'
                : 'text-foreground hover:text-primary'
            )}
            data-id={item.title}
            href={item.href}
            key={item.key}
          >
            {item.title}
          </Link>
        ))}
      </AnimatedBackground>
    </nav>
  );
}

export default Navbar;
