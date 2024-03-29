"use client";

import { GoogleMapsEmbed } from "./third-parties/google";
import { Card } from "./ui/card";

export default function Maps() {
  const position = { lat: 51.097900607863075, lng: 13.677138946517001 };
  const center = { lat: 51.097900607863075, lng: 13.665841482178923 };
  return (
    <Card className="w-full h-[400px] overflow-hidden">
      {" "}
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
        height="400"
        width="100%"
        mode="place"
        q="Praxis für Osteopathie, Yoga, Qigong Maitri Katrin Eulitz"
        allowfullscreen={false}
        style="border-radius: 0.5rem"
        title="Praxis für Osteopathie, Yoga, Qigong Maitri Katrin Eulitz"
      />
    </Card>
  );
}
