"use client";

import { Separator } from "@/components/ui/separator";
import {
  APIProvider,
  AdvancedMarker,
  ControlPosition,
  Map,
  MapControl,
} from "@vis.gl/react-google-maps";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Suspense } from "react";
import { MapsSkeleton } from "./skeletons";

export default function Maps() {
  const position = { lat: 51.097900607863075, lng: 13.677138946517001 };
  const center = { lat: 51.097900607863075, lng: 13.665841482178923 };
  return (
    <Suspense fallback={<MapsSkeleton />}>
      <Card className="w-full h-[400px] z-auto overflow-hidden">
        <APIProvider
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
        >
          <Map
            zoom={14}
            center={center}
            disableDefaultUI={true}
            gestureHandling={"greedy"}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
          >
            <MapControl position={ControlPosition.TOP_LEFT}>
              <div className="w-auto p-3 text-sm lg:text-base">
                <Card>
                  <CardHeader>
                    <p className="font-bold">
                      Praxis für Osteopathie, Yoga, Qigong
                    </p>
                    <CardDescription>
                      <p className="text-muted-foreground">
                        Maitri Katrin Eulitz
                      </p>
                    </CardDescription>
                    <Separator />
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <p>Gartenstraße 13</p>
                      <p>01445 Radebeul</p>
                      <p>Freistaat Sachsen</p>
                      <br />
                      <p className="font-bold">
                        Telefon:{" "}
                        <Link href="tel:01727979178">0172 79 79 178</Link>
                      </p>
                    </div>
                    <div>
                      <Link
                        href="https://maps.app.goo.gl/EAL5eWyKgyw6NwxDA"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button variant={"outline"} className="font-bold">
                          Routenplaner &rarr;
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </MapControl>
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      </Card>
    </Suspense>
  );
}
