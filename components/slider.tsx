"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Fetches } from "@/lib/api-fetch";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Suspense } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent } from "./ui/card";
import { SliderSkeleton } from "./skeletons";

export default async function SliderGallery() {
  const slides = await Fetches("slider");
  // const slides = await new Promise((resolve) =>
  // //   setTimeout(() => resolve(Fetches("slider")), 3000)
  // );
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-auto h-full"
    >
      <CarouselContent>
        <Suspense fallback={<SliderSkeleton />}>
          {slides.map((slide: any, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 overflow-hidden">
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-[4/3] overflow-hidden p-0 m-0 items-center justify-center">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={slide.asset.url}
                      alt={`Slide ${index}`}
                      fill
                      className="object-fit"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </Suspense>
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}
