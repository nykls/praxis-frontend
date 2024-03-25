"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/lib/interfaces";
import urlFor from "@/lib/url-for";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent } from "./ui/card";
import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

// export default async function SliderGallery({
//   slides,
// }: {
//   slides: SliderImage[];
// }) {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 3750,
//         }),
//       ]}
//       className="w-auto h-full"
//     >
//       <CarouselContent>
//         {slides.map((slide: any, index: number) => (
//           <CarouselItem key={index} className="md:basis-1/2 overflow-hidden">
//             <Card className="overflow-hidden">
//               <CardContent className="flex aspect-[4/3] overflow-hidden p-0 m-0 items-center justify-center">
//                 <AspectRatio ratio={4 / 3}>
//                   <Image
//                     src={urlFor(slide.asset).url()}
//                     alt={`Slide ${index}`}
//                     fill
//                     className="object-cover"
//                     placeholder="blur"
//                     blurDataURL={urlFor(slide.asset).size(10, 10).url()}
//                   />
//                 </AspectRatio>
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="hidden md:inline-flex" />
//       <CarouselNext className="hidden md:inline-flex" />
//     </Carousel>
//   );
// }

export default async function SliderGallery() {
  try {
    const query = `
  *[_type == 'gallery']{
        images
        }
    
    `;
    const slides = await client.fetch(query);
    const sliders: Slider[] = slides[0].images;

    noStore();
    return (
      <Carousel
        plugins={[
          Autoplay({
            delay: 3750,
          }),
        ]}
        className="w-auto h-full"
      >
        <CarouselContent>
          {sliders.map((slide: any, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 overflow-hidden">
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-[4/3] overflow-hidden p-0 m-0 items-center justify-center">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={urlFor(slide.asset).url()}
                      alt={`Slide ${index}`}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={urlFor(slide.asset).size(10, 10).url()}
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
  } catch (err) {
    console.error(err);
  }
}
