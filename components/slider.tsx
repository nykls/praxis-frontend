'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { SliderImage } from '@/lib/interfaces';
import { urlFor } from '@/lib/utils';
import { AspectRatio } from './ui/aspect-ratio';
import { Card, CardContent } from './ui/card';

export default function SliderGallery({ sliders }: { sliders: SliderImage[] }) {
  return (
    <Carousel
      className="h-full w-auto"
      plugins={[
        Autoplay({
          delay: 3750,
        }),
      ]}
    >
      <CarouselContent>
        {sliders.map((slide: SliderImage) => (
          <CarouselItem
            className="overflow-hidden md:basis-1/2"
            key={slide._id}
          >
            <Card className="overflow-hidden">
              <CardContent className="m-0 flex aspect-4/3 items-center justify-center overflow-hidden p-0">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    alt={`Slide ${slide._id}`}
                    blurDataURL={slide.placeholder}
                    className="object-cover"
                    fill
                    placeholder="blur"
                    src={urlFor(slide).url()}
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}
