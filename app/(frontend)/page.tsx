"use client";

import { Hero } from "@/components/hero";
import Perks from "@/components/perks";

export default function Home() {
  return (
    <div className="">
      <div className="overflow-hidden">
        <Hero />
      </div>
      <div className="relative z-20">
        <Perks />
      </div>
    </div>
  );
}
