"use client";

import FullWidthWrapper from "@/components/full-width-wrapper";
import { cn } from "@/lib/utils";
import { BrainCog, PersonStanding, Zap } from "lucide-react";

const perks = [
  {
    name: "Osteopathie",
    Icon: PersonStanding,
    color: "red",
    description:
      "Eine ganzheitliche Therapieform, die darauf abzielt, die Gesundheit durch die Behandlung des Muskel-Skelett-Systems zu verbessern. Osteopathie kann helfen, Schmerzen zu lindern, die Beweglichkeit zu verbessern und das allgemeine Wohlbefinden zu fördern.",
  },
  {
    name: "Yoga",
    Icon: BrainCog,
    color: "orange",
    description:
      "Eine alte Praxis, die Körper, Geist und Seele durch Asanas (Körperhaltungen), Pranayama (Atemübungen) und Meditation verbindet. Yoga kann helfen, Stress abzubauen, die Flexibilität zu erhöhen und ein Gefühl der inneren Ruhe zu fördern.",
  },
  {
    name: "Qigong",
    Icon: Zap,
    color: "green",
    description:
      "Eine chinesische Heilkunst, die Bewegung, Atmung und Meditation kombiniert, um den Fluss der Lebensenergie (Qi) im Körper zu regulieren. Qigong kann dazu beitragen, die körperliche und geistige Gesundheit zu verbessern und das allgemeine Wohlbefinden zu steigern.",
  },
];

export default function Perks() {
  return (
    <section id="perk" className="border-t py-20">
      <FullWidthWrapper>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div
                  className={cn(
                    "h-20 w-20 flex items-center justify-center rounded-full text-accent lg:hover:scale-105 lg:duration-700 lg:hover:shadow-lg lg:delay-150",
                    {
                      "bg-primary": perk.color === "red",
                      "bg-orange-500": perk.color === "orange",
                      "bg-green-600": perk.color === "green",
                    }
                  )}
                >
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium primary">{perk.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FullWidthWrapper>
    </section>
  );
}
