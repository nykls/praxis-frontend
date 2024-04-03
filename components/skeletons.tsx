import * as React from "react";
import FullWidthWrapper from "@/components/full-width-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function LoadingCard() {
  return (
    <Card className="transition shadow-md">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-full h-6 mb-2" /> {/* Simulierter Titel */}
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-full h-4" /> {/* Simuliertes Datum */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-4 mb-2" />{" "}
        {/* Simulierter Exzerpt Zeile 1 */}
        <Skeleton className="w-full h-4 mb-2" />{" "}
        {/* Simulierter Exzerpt Zeile 2 */}
        <Skeleton className="w-full h-4" /> {/* Simulierter Exzerpt Zeile 3 */}
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-5">
          <Skeleton className="w-10 h-10 rounded-full" />{" "}
          {/* Simulierter Avatar */}
          <Skeleton className="w-24 h-4" /> {/* Simulierter Autorenname */}
        </div>
      </CardFooter>
    </Card>
  );
}

function CardSkeleton() {
  return (
    <section>
      <FullWidthWrapper>
        <div className="grid lg:grid-cols-2 gap-2">
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
    <Card className="w-full h-[400px]">
      <Skeleton className="w-full h-[400px]" />
    </Card>
  );
}

function PostSkeleton() {
  return (
    <FullWidthWrapper>
      <section className="space-y-5">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Skeleton className="w-12 h-4" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="w-24 h-4" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="w-36 h-4" />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <article className="space-y-5">
          <div className="grid mx-auto">
            <div className="flex flex-col space-y-5 md:px-20 lg:px-36">
              {/* Skeleton für den Titel */}
              <Skeleton className="h-12 w-3/4" />

              <div className="flex items-center gap-3">
                {/* Skeleton für das Avatar-Bild */}
                <Skeleton className="w-10 h-10 rounded-full" />

                {/* Skeletons für den Namen und das Veröffentlichungsdatum */}
                <div className="flex gap-1 flex-col">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>

              {/* Skeleton für den Separator */}
              <Separator className="w-full mt-3" />

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
  );
}

function SliderSkeleton() {
  return (
    <Carousel className="w-auto h-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 overflow-hidden">
            <Card className="overflow-hidden">
              <CardContent className="flex aspect-[4/3] overflow-hidden p-0 m-0 items-center justify-center">
                <AspectRatio ratio={4 / 3}>
                  <Skeleton className="aspect-[4/3]" />
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
