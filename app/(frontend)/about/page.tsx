// app/about/page.tsx

import type { Metadata } from 'next';
import { Suspense } from 'react';
import FullWidthWrapper from '@/components/full-width-wrapper';
import { SliderSkeleton } from '@/components/skeletons';
import SliderGallery from '@/components/slider';
import Typography from '@/components/typography';
import { Skeleton } from '@/components/ui/skeleton';
import VitaAccordion from '@/components/vita-accordion';
import { client } from '@/sanity/lib/client';

export const metadata: Metadata = {
  title: 'Über mich – Maitri Katrin Eulitz',
  description:
    'Erfahren Sie mehr über Maitri Katrin Eulitz, Ihren Werdegang, Ihre Ausbildungen und die Philosophie hinter der Praxis für Osteopathie, Dentosophie, Yoga & Qigong.',
  keywords:
    'Maitri Katrin Eulitz, Vita, Lebenslauf, Osteopathie, Dentosophie, Yoga, Qigong, Werdegang, Ausbildung',
};

export default async function ResumePage() {
  const query = `
  {
    "gallery": *[_type == "gallery"][0] {
      "images": images[].asset->{
        _id,
        "placeholder": metadata.lqip
      }
    },
    "vitas": *[_type == 'resume'] {
      name,
      motto,
      avatar,
      "lqip": avatar.asset->metadata.lqip,
      education,
      training,
      _id
    }
  }
  `;

  const data = await client.fetch(query, {}, { next: { revalidate: 1800 } });

  const sliders = data.gallery.images;
  const vitas = data.vitas;

  return (
    <section className="space-y-7 xl:pt-25">
      <FullWidthWrapper>
        <Typography className="m-5 mx-auto" variant="h1">
          Über mich
        </Typography>
      </FullWidthWrapper>
      <section>
        <FullWidthWrapper>
          <Suspense fallback={<SliderSkeleton />}>
            <SliderGallery sliders={sliders} />
          </Suspense>
        </FullWidthWrapper>
      </section>
      <section className="grid gap-3">
        <Typography className="m-5 mx-auto border-b pb-2" variant="h2">
          Vita
        </Typography>
        <FullWidthWrapper>
          <Suspense fallback={<Skeleton className="h-20 w-full" />}>
            <VitaAccordion vitas={vitas} />
          </Suspense>
        </FullWidthWrapper>{' '}
      </section>
    </section>
  );
}
