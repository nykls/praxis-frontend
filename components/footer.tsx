"use client";

import FullWidthWrapper from "./full-width-wrapper";
import Link from "next/link";
import Maps from "./maps";
import Image from "next/image";
import { Suspense } from "react";
import { MapsSkeleton } from "./skeletons";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const PostMaps = dynamic(() => import("./maps"), {
  ssr: false,
  loading: () => <MapsSkeleton />,
});

const Footer = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // useEffect, um den Ladestatus der Seite zu aktualisieren, nachdem sie geladen wurde
  useEffect(() => {
    // Setzt isPageLoaded auf true, nachdem die Seite geladen ist
    setIsPageLoaded(true);
  }, []); // Leeres Array bedeutet, dieser Effekt läuft nur einmal nach dem ersten Rendern

  return (
    <div className="bg-secondary border-t py-7 mt-7 ">
      <FullWidthWrapper>
        <div className="pb-5">
          <Suspense fallback={<MapsSkeleton />}>
            {isPageLoaded ? <PostMaps /> : <MapsSkeleton />}{" "}
          </Suspense>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
          {/* Copyright Text */}
          <div className="w-full lg:w-auto mb-4 lg:mb-0 flex justify-center lg:justify-start">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-auto mb-4 lg:mb-0 flex">
            <div className="flex justify-center items-center space-x-4">
              <div className="relative h-20 w-20">
                <Image src="/bvo_kinderosteopathie.png" alt="Logo" fill />
              </div>
              <div className="relative bg-white rounded-full h-20 w-20">
                <Image src="/logo.svg" alt="Logo" fill />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
            <Link href="#" className="text-sm mx-2">
              <Button className="p-0" variant="link">
                Impressum
              </Button>
            </Link>
            <Link href="#" className="text-sm mx-2">
              <Button className="p-0" variant="link">
                Datenschutzbestimmungen
              </Button>
            </Link>
            <Link
              href="https://github.com/nykls/praxis-frontend"
              className="text-sm mx-2"
            >
              <Button
                className="p-0 hover:text-primary size-10"
                variant="ghost"
              >
                {" "}
                <Github />
                <span className="sr-only">Github</span>
              </Button>
            </Link>
          </div>
        </div>
      </FullWidthWrapper>
    </div>
  );
};

export default Footer;
