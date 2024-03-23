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
          {[...Array(4)].map((_, index) => (
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
        <section className="space-y-5">
          <div className="flex w-full text-center space-y-5">
            <div className="flex grow space-x-3">
              <Skeleton className="w-10 h-10 rounded-full" /> {/* Avatar */}
              <div className="flex space-x-3">
                <div className="flex-col items-center text-muted-foreground space-y-2 text-sm">
                  <Skeleton className="w-20 h-4" /> {/* Author name */}
                  <Skeleton className="w-20 h-4" /> {/* Date */}
                </div>
                <Separator orientation="vertical" />
                <div>
                  <Skeleton className="w-96 h-10" /> {/* Post title */}
                </div>
              </div>
            </div>
          </div>
          <Separator className="w-full mt-3" />
          <div className="space-y-10 px-20 mx-auto">
            <Skeleton className="w-full h-6" /> {/* Text line */}
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6" />
          </div>
        </section>
      </section>
    </FullWidthWrapper>
  );
}

function SliderSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex aspect-[4/3] overflow-hidden p-0 m-0 items-center justify-center">
        <AspectRatio ratio={4 / 3}>
          <Skeleton className="h-full w-full" />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}

export { CardSkeleton, PostSkeleton, MapsSkeleton, SliderSkeleton };
