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
    <Card className="relative transition">
      <CardHeader className="space-y-1">
        <CardTitle>
          <Skeleton className="h-6 w-full" /> {/* Simulierter Titel */}
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-full" /> {/* Simuliertes Datum */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-3">
          <Skeleton className="size-10 rounded-full" />
          <Separator className="h-8" orientation="vertical" />
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
          {Array.from({ length: 6 }).map(() => (
            <LoadingCard key={crypto.randomUUID()} />
          ))}
        </div>
      </FullWidthWrapper>
    </section>
  );
}
function MapsSkeleton() {
  return (
    <Card className="h-[400px] w-full overflow-hidden">
      <Skeleton className="h-[400px] w-full" />
    </Card>
  );
}

function PostSkeleton() {
  return (
    <section className="xl:pt-25">
      <FullWidthWrapper>
        <div className="space-y-5">
          <article className="flex flex-col">
            <div className="grid">
              <div className="flex flex-col gap-5 xl:gap-20">
                <div>
                  <Skeleton className="mx-auto mt-5 h-10 w-11/12 lg:h-12" />
                </div>

                <div className="space-y-5 md:px-20 lg:px-36">
                  <div className="flex items-center gap-3">
                    <Skeleton className="size-10 rounded-full" />
                    <div className="flex flex-col gap-2">
                      <Skeleton className="h-5 w-48" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                  </div>
                  <Separator />
                  {/* Textkörper-Skeleton, der die Struktur von PortableText nachahmt */}
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <br />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-11/12" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </FullWidthWrapper>
    </section>
  );
}

function SliderSkeleton() {
  return (
    <Carousel className="h-full w-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map(() => (
          <CarouselItem
            className="overflow-hidden md:basis-1/2"
            key={crypto.randomUUID()}
          >
            <Card className="overflow-hidden">
              <CardContent className="m-0 flex aspect-4/3 items-center justify-center overflow-hidden p-0">
                <AspectRatio ratio={4 / 3}>
                  <Skeleton className="h-full w-full" />
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
