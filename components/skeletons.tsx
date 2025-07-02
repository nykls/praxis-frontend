import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';
import FullWidthWrapper from '@/components/full-width-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from './ui/aspect-ratio';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';

function LoadingCard() {
  return (
    <Card className="shadow-md transition">
      <CardHeader>
        <CardTitle>
          <Skeleton className="mb-2 h-6 w-full" /> {/* Simulierter Titel */}
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-full" /> {/* Simuliertes Datum */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-4 w-full" />{' '}
        {/* Simulierter Exzerpt Zeile 1 */}
        <Skeleton className="mb-2 h-4 w-full" />{' '}
        {/* Simulierter Exzerpt Zeile 2 */}
        <Skeleton className="h-4 w-full" /> {/* Simulierter Exzerpt Zeile 3 */}
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-3">
          <Skeleton className="size-10 rounded-full" />{' '}
          {/* Simulierter Avatar */}
          <Skeleton className="h-4 w-24" /> {/* Simulierter Autorenname */}
        </div>
      </CardFooter>
    </Card>
  );
}

function CardSkeleton() {
  return (
    <section>
      <FullWidthWrapper>
        <div className="grid gap-3 lg:grid-cols-2">
          {/* Generiere mehrere LoadingCards für den Ladezustand */}
          {[...Array(6)].map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      </FullWidthWrapper>
    </section>
  );
}
function MapsSkeleton() {
  return (
    <Card className="h-[400px] w-full">
      <Skeleton className="h-[400px] w-full" />
    </Card>
  );
}

function PostSkeleton() {
  return (
    <section className="xl:pt-25">
      <FullWidthWrapper>
        <section className="space-y-5">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Skeleton className="h-4 w-12" />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Skeleton className="h-4 w-24" />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Skeleton className="h-4 w-36" />
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <article className="space-y-5">
            <div className="mx-auto grid">
              <div className="flex flex-col space-y-5 md:px-20 lg:px-36">
                {/* Skeleton für den Titel */}
                <Skeleton className="h-12 w-3/4" />

                <div className="flex items-center gap-3">
                  {/* Skeleton für das Avatar-Bild */}
                  <Skeleton className="h-10 w-10 rounded-full" />

                  {/* Skeletons für den Namen und das Veröffentlichungsdatum */}
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>

                {/* Skeleton für den Separator */}
                <Separator className="mt-3 w-full" />

                {/* Skeletons für den Artikeltext */}
                <div className="space-y-5">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                </div>
              </div>
            </div>
          </article>
        </section>
      </FullWidthWrapper>
    </section>
  );
}

function SliderSkeleton() {
  return (
    <Carousel className="h-full w-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="overflow-hidden md:basis-1/2" key={index}>
            <Card className="overflow-hidden">
              <CardContent className="m-0 flex aspect-4/3 items-center justify-center overflow-hidden p-0">
                <AspectRatio ratio={4 / 3}>
                  <Skeleton className="aspect-4/3" />
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

export { CardSkeleton, PostSkeleton, MapsSkeleton, SliderSkeleton };
