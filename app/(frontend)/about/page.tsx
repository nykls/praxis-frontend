// app/about/page.tsx
import FullWidthWrapper from "@/components/full-width-wrapper";
import { SliderSkeleton } from "@/components/skeletons";
import SliderGallery from "@/components/slider";
import Typography from "@/components/typography";
import { Skeleton } from "@/components/ui/skeleton";
import VitaAccordion from "@/components/vita-accordion";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Über",
  description: "Lebenslauf",
  keywords: "Lebenslauf, Über uns, Vita",
};

export default function ResumePage() {
  return (
    <section className="space-y-7">
      <section>
        <FullWidthWrapper>
          <Suspense fallback={<SliderSkeleton />}>
            <SliderGallery />
          </Suspense>
        </FullWidthWrapper>
      </section>
      <section className="grid gap-3">
        <Typography variant="h1" className="border-b pb-2 m-5 mx-auto">
          Vita
        </Typography>
        <FullWidthWrapper>
          <Suspense fallback={<Skeleton className="w-full h-20" />}>
            <VitaAccordion />
          </Suspense>
        </FullWidthWrapper>{" "}
      </section>
    </section>
  );
}
