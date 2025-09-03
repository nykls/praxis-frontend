'use client';

import { GoogleMapsEmbed } from './third-parties/google';
import { Card } from './ui/card';

export default function Maps() {
  return (
    <Card className="h-[400px] w-full overflow-hidden">
      <GoogleMapsEmbed
        allowfullscreen={false}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
        height="400"
        mode="place"
        q="Praxis+für+Osteopathie;+Yoga;+Qi+Gong+Maitri+Katrin+Eulitz+(D.O.)+Radebeul+3MXG+4V"
        style="border-radius: 0.5rem"
        title="Praxis für Osteopathie, Yoga, Qigong Maitri Katrin Eulitz"
        width="100%"
      />
    </Card>
  );
}
