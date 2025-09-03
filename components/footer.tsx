'use client';

import { Cookie, Github, ShieldQuestion } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FullWidthWrapper from './full-width-wrapper';
import Maps from './maps';
import Typography from './typography';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="z-40 bg-accent pt-7 pb-25 xl:pb-3">
      <FullWidthWrapper>
        <div className="pb-5">
          <Maps />
        </div>
        <div className=" mx-auto flex flex-wrap items-center justify-between">
          {/* Copyright Text */}
          <div className="mb-4 flex w-full justify-center lg:mb-0 lg:w-auto lg:justify-start">
            <Typography className="text-sm" variant="p">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </Typography>
          </div>

          {/* Image */}
          <div className="mb-4 flex w-full justify-center lg:mb-0 lg:w-auto">
            <div className="flex items-center justify-center space-x-4">
              <div className="relative h-20 w-20">
                <Image
                  alt="Logo"
                  blurDataURL="/bvo_kinderosteopathie.png"
                  fill
                  placeholder="blur"
                  sizes="100%"
                  src="/bvo_kinderosteopathie.png"
                />
              </div>
              <div className="relative h-20 w-20 rounded-full bg-background">
                <Image alt="Logo" fill sizes="100%" src="/logo.svg" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex w-screen items-center justify-center lg:w-auto lg:justify-end">
            <Link
              aria-label="Öffent das Impressum"
              className="mx-2"
              href="/imprint"
            >
              <Button className="p-0 text-xs" variant="link">
                <ShieldQuestion />
                <span className="ml-2 hidden md:block">Impressum</span>
                <span className="sr-only">Impressum</span>
              </Button>
            </Link>
            <Link
              aria-label="Öffnet die Datenschutzbestimmungen"
              className="mx-2"
              href="/privacy"
            >
              <Button className="p-0 text-xs" variant="link">
                <Cookie />
                <span className="ml-2 hidden md:block">Datenschutz</span>
                <span className="sr-only">Datenschutz</span>
              </Button>
            </Link>
            <Link
              aria-label="Öffnet den Quellcode in einem neuen Tab"
              className="mx-2 text-sm"
              href="https://github.com/nykls/praxis-frontend"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="p-0 text-xs" variant="link">
                <Github />
                <span className="ml-2 hidden md:block">Quellcode</span>
                <span className="sr-only">Quellcode</span>
              </Button>
            </Link>
          </div>
        </div>
      </FullWidthWrapper>
    </footer>
  );
};

export default Footer;
