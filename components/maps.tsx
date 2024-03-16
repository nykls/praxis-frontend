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
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <Card className="w-full h-[400px] overflow-hidden">
          <Map
            zoom={14}
            center={center}
            disableDefaultUI={true}
            gestureHandling="greedy"
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
        </Card>
      </APIProvider>
    </Suspense>
  );
}

// ---

// import { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
//   useMapsLibrary,
// } from "@vis.gl/react-google-maps";

// export default function Maps() {
//   const position = { lat: 53.54, lng: 10 };
//   const [open, setOpen] = useState(false);
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       center: { lat: -33.8688, lng: 151.2195 },
//       zoom: 13,
//     }
//   );

//   const input = document.getElementById("pac-input") as HTMLInputElement;

//   // Specify just the place data fields that you need.
//   const autocomplete = new google.maps.places.Autocomplete(input, {
//     fields: ["place_id", "geometry", "formatted_address", "name"],
//   });

//   return (
//     <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
//       <div className="w-full h-full rounded-xl overflow-hidden">
//         <Map
//           zoom={9}
//           center={position}
//           disableDefaultUI={true}
//           mapId={process.env.NEXT_PUBLIC_MAP_ID}
//         >
// <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//   <Pin
//     background={"grey"}
//     borderColor={"green"}
//     glyphColor={"purple"}
//   />
// </AdvancedMarker>

// {open && (
//   <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
//     <p>I'm in Hamburg</p>
//   </InfoWindow>
// )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }
