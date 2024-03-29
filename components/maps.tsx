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
import { GoogleMapsEmbed } from "@next/third-parties/google";

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
        style="rounded-lg"
      />
    </Card>
  );
}
