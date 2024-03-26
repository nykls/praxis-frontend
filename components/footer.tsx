"use client";

import FullWidthWrapper from "./full-width-wrapper";
import Link from "next/link";
import Maps from "./maps";
import Image from "next/image";
import { Suspense } from "react";
import { MapsSkeleton } from "./skeletons";
import { Cookie, Github, ShieldQuestion } from "lucide-react";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const PostMaps = dynamic(() => import("./maps"), {
  loading: () => <MapsSkeleton />,
});

const Footer = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  return (
    <div className="bg-secondary border-t py-7 mt-7 ">
      <FullWidthWrapper>
        <div className="pb-5">
          {isPageLoaded ? <PostMaps /> : <MapsSkeleton />}
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
                <Image src="/bvo_kinderosteopathie.png" alt="Logo" fill />
              </div>
              <div className="relative bg-white rounded-full h-20 w-20">
                <Image src="/logo.svg" alt="Logo" fill />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-screen lg:w-auto flex justify-center lg:justify-end items-center">
            <Link href="/imprint" className="mx-2">
              <Button className="text-xs p-0" variant="link">
                <ShieldQuestion />
                <span className="hidden md:block ml-2">Impressum</span>
              </Button>
              <span className="sr-only">Impressum</span>
            </Link>
            <Link href="/privacy" className="mx-2">
              <Button className="text-xs p-0" variant="link">
                <Cookie />
                <span className="hidden md:block ml-2">
                  Datenschutzbestimmungen
                </span>
              </Button>
              <span className="sr-only">Datenschutzbestimmungen</span>
            </Link>
            <Link
              href="https://github.com/nykls/praxis-frontend"
              className="text-sm mx-2"
            >
              <Button className="text-xs p-0" variant="link">
                <Github />
                <span className="hidden md:block ml-2">Quellcode</span>
              </Button>
              <span className="sr-only">Quellcode</span>
            </Link>
          </div>
        </div>
      </FullWidthWrapper>
    </div>
  );
};

export default Footer;
