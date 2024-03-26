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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Compass, PhoneOutgoing, Route } from "lucide-react";

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
            defaultZoom={14}
            defaultCenter={center}
            disableDefaultUI={true}
            gestureHandling={"auto"}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
          >
            <MapControl position={ControlPosition.TOP_LEFT}>
              <div className="w-96 p-3 text-sm lg:text-base">
                <Card className="hidden lg:block">
                  <CardHeader>
                    <p className="text-center font-bold">
                      Praxis für Osteopathie, Yoga, Qigong
                    </p>
                    <CardDescription>
                      <p className="text-center text-muted-foreground">
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
                    </div>
                    <div className="flex justify-between">
                      <Link
                        href="https://maps.app.goo.gl/EAL5eWyKgyw6NwxDA"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button variant={"outline"} className="font-bold">
                          <Route />
                          <span className="ml-2">Routenplaner</span>
                        </Button>
                      </Link>
                      <Link href={`${process.env.NEXT_PHONE}`}>
                        <Button>
                          {" "}
                          <PhoneOutgoing />{" "}
                          <span className="ml-2">Anrufen</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <div className="w-auto block lg:hidden">
                  <Popover>
                    <PopoverTrigger>
                      <Button>
                        <Compass />
                        <span className="ml-2">Anfahrt</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="mx-6 space-y-3 w-full"
                      side="bottom"
                    >
                      <div className="text-center">
                        <p className="font-bold">
                          Praxis für Osteopathie, Yoga, Qigong
                        </p>
                        <p className="text-muted-foreground">
                          Maitri Katrin Eulitz
                        </p>
                      </div>

                      <Separator />

                      <div className="text-sm">
                        <p>Gartenstraße 13</p>
                        <p>01445 Radebeul</p>
                        <p>Freistaat Sachsen</p>
                        <br />
                      </div>
                      <div className="flex justify-between">
                        <Link
                          href="https://maps.app.goo.gl/EAL5eWyKgyw6NwxDA"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Button variant={"outline"} className="font-bold">
                            <Route />
                            <span className="ml-2">Routenplaner</span>
                          </Button>
                        </Link>
                        <Link href={`${process.env.NEXT_PHONE}`}>
                          <Button>
                            {" "}
                            <PhoneOutgoing />{" "}
                            <span className="ml-2">Anrufen</span>
                          </Button>
                        </Link>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </MapControl>
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      </Card>
    </Suspense>
  );
}
