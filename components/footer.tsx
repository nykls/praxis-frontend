"use client";

import { Cookie, Github, ShieldQuestion } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import FullWidthWrapper from "./full-width-wrapper";
import Maps from "./maps";
import { MapsSkeleton } from "./skeletons";
import { Button } from "./ui/button";

const PostMaps = dynamic(() => import("./maps"), {
  loading: () => <MapsSkeleton />,
});

const Footer = () => {
  return (
    <div className="bg-secondary border-t py-7 mt-7 ">
      <FullWidthWrapper>
        <div className="pb-5">
          <Maps />
        </div>
        <div className=" mx-auto flex flex-wrap items-center justify-between">
          {/* Copyright Text */}
          <div className="w-full lg:w-auto mb-4 lg:mb-0 flex justify-center lg:justify-start">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Image */}
          <div className="w-full justify-center lg:w-auto mb-4 lg:mb-0 flex">
            <div className="flex justify-center items-center space-x-4">
              <div className="relative h-20 w-20">
                <Image
                  src="/bvo_kinderosteopathie.png"
                  alt="Logo"
                  fill
                  sizes="100%"
                  placeholder="blur"
                  blurDataURL="/bvo_kinderosteopathie.png"
                />
              </div>
              <div className="relative bg-white rounded-full h-20 w-20">
                <Image src="/logo.svg" alt="Logo" fill sizes="100%" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-screen lg:w-auto flex justify-center lg:justify-end items-center">
            <Link
              href="/imprint"
              className="mx-2"
              aria-label="Öffent das Impressum"
            >
              <Button className="text-xs p-0" variant="link">
                <ShieldQuestion />
                <span className="hidden md:block ml-2">Impressum</span>
                <span className="sr-only">Impressum</span>
              </Button>
            </Link>
            <Link
              href="/privacy"
              className="mx-2"
              aria-label="Öffnet die Datenschutzbestimmungen"
            >
              <Button className="text-xs p-0" variant="link">
                <Cookie />
                <span className="hidden md:block ml-2">
                  Datenschutzbestimmungen
                </span>
                <span className="sr-only">Datenschutzbestimmungen</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/nykls/praxis-frontend"
              className="text-sm mx-2"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Öffnet den Quellcode in einem neuen Tab"
            >
              <Button className="text-xs p-0" variant="link">
                <Github />
                <span className="hidden md:block ml-2">Quellcode</span>
                <span className="sr-only">Quellcode</span>
              </Button>
            </Link>
          </div>
        </div>
      </FullWidthWrapper>
    </div>
  );
};

export default Footer;
