"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Menu, MessageCircleMore, MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact";

function Navbar() {
  const { setTheme } = useTheme();
  return (
    <header className="">
      <nav className="mb-100">
        <NavigationMenu className="transition shadow-md w-fit flex items-center justify-center backdrop-blur-xl bg-accent/40 dark:backdrop-brightness-75 backdrop-opacity-100 mx-auto top-3 inset-x-0 z-50 my-3 fixed p-3 rounded-full">
          <NavigationMenuList className="">
            <NavigationMenuItem className="p-0">
              <NavigationMenuLink
                href="/"
                className={cn(navigationMenuTriggerStyle(), "")}
              >
                <div className="relative size-8">
                  <Image
                    fill
                    src="/logo.svg"
                    alt="Logo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="md:hidden">
              <NavigationMenuTrigger>
                <Menu />{" "}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-full gap-2 p-4 mx-auto grid-cols-1 text-center">
                  <li>
                    <NavigationMenuLink
                      href="/resume"
                      className={cn(navigationMenuTriggerStyle(), "w-full")}
                    >
                      Über
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/blog"
                      className={cn(navigationMenuTriggerStyle(), "w-full")}
                    >
                      Aktuelles
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Über
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink
                href="/blog"
                className={navigationMenuTriggerStyle()}
              >
                Aktuelles
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ContactForm>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <MessageCircleMore />{" "}
                </NavigationMenuLink>
              </ContactForm>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger>
                <SunIcon className="dark:hidden" />
                <MoonIcon className="hidden dark:block" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="size-full gap-2 p-4 mx-auto grid-cols-1 text-center">
                  <li>
                    <NavigationMenuLink
                      onClick={() => setTheme("light")}
                      className={cn(navigationMenuTriggerStyle(), "size-full")}
                    >
                      Hell
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      onClick={() => setTheme("dark")}
                      className={cn(navigationMenuTriggerStyle(), "w-full")}
                    >
                      Dunkel
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      onClick={() => setTheme("system")}
                      className={cn(navigationMenuTriggerStyle(), "w-full")}
                    >
                      {" "}
                      System
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

export default Navbar;
