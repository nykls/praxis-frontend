'use client';

import { GoogleMapsEmbed } from './third-parties/google';
import { Card } from './ui/card';

export default function Maps() {
  const position = { lat: 51.097_900_607_863_075, lng: 13.677_138_946_517_001 };
  const center = { lat: 51.097_900_607_863_075, lng: 13.665_841_482_178_923 };
  return (
    <Card className="h-[400px] w-full overflow-hidden">
      <GoogleMapsEmbed
        allowfullscreen={false}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
        height="400"
        mode="place"
        q="Praxis+für+Osteopathie;+Yoga;+Qi+Gong+Maitri+Katrin+Eulitz+(D.O.)"
        style="border-radius: 0.5rem"
        title="Praxis für Osteopathie, Yoga, Qigong Maitri Katrin Eulitz"
        width="100%"
      />
    </Card>
  );
}
