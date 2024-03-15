"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Suspense } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent } from "./ui/card";
import { SliderSkeleton } from "./skeletons";
import { Slider, SliderImage } from "@/lib/interfaces";
import urlFor from "@/lib/url-for";

export default async function SliderGallery({
  slides,
}: {
  slides: SliderImage[];
}) {
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
                      src={urlFor(slide.asset).url()}
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
