"use client";

import { Hero } from "@/components/hero";
import Perks from "@/components/perks";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/animate/morphing-dialog";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div className="relative">
        <Perks />
      </div>
    </div>
  );
}
