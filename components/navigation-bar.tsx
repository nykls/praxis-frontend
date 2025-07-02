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
      return <SunMoon className="h-6 w-6" />;
    }
    if (currentTheme === 'dark') {
      return <MoonIcon className="h-6 w-6" />;
    }
    return <SunIcon className="h-6 w-6" />;
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
    <header className="-translate-x-1/2 fixed bottom-4 left-1/2 z-50 w-fit rounded-full border border-border/50 bg-background/60 p-3 shadow-md backdrop-blur-sm supports-backdrop-filter:bg-background/40 xl:top-3 xl:bottom-auto">
      <div className="flex items-center gap-3">
        <NavbarBrand />
        <DesktopNav pathname={pathname} />
        <div className="flex items-center gap-2">
          <ContactForm>
            <Button
              aria-label="Kontaktformular öffnen"
              className="transition-colors duration-300 hover:text-primary"
              size="icon"
              variant="ghost"
            >
              <MessageCircleMore className="size-6" />
            </Button>
          </ContactForm>
          <Button
            asChild
            className="transition-colors duration-300 hover:text-primary"
            size="icon"
            variant="ghost"
          >
            <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
              <PhoneOutgoing className="size-6" />
            </Link>
          </Button>

          <div className="hidden md:flex">
            <Button
              aria-label="Toggle theme"
              className="transition-colors duration-300 hover:text-primary"
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
      <Image
        alt="Praxis Logo"
        height={40}
        priority
        src="/logo.svg"
        unoptimized
        width={40}
      />
      <div className="hidden text-sm xl:block">
        <p className="text-primary text-xs">
          Praxis für Osteopathie, Dentosophie, Yoga & Qigong
        </p>
        <p className="text-muted-foreground text-xs">Maitri Katrin Eulitz</p>
      </div>
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden items-center md:flex">
      <AnimatedBackground
        className="rounded-lg bg-accent"
        defaultValue={NAV_ITEMS[0].title}
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
                ? 'text-primary'
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
