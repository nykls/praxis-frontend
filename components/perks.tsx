import React from "react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/animate/morphing-dialog";
import { PlusIcon, PersonStanding, BrainCog, Zap, Smile } from "lucide-react";
import { motion } from "framer-motion";
import Typography from "@/components/typography";

type Perk = {
  name: string;
  Icon: React.FC<any>;
  color: string;
  gradient: string;
  subtitle: string;
  description: string;
  fullDescription: string;
};

const perks = [
  {
    name: "Osteopathie",
    Icon: PersonStanding,
    color: "bg-red-100",
    gradient: "bg-gradient-to-r from-red-600 to-red-700", // Rot aus dem Logo
    subtitle: "Ganzheitliche Gesundheit",
    description: "Erkennt und löst Blockaden für ganzheitliche Gesundheit.",
    fullDescription:
      "Osteopathie ist eine ganzheitliche manuelle Behandlungsmethode, die darauf abzielt, Funktionsstörungen im Körper zu erkennen und zu beheben. Durch sanfte Manipulationen werden Blockaden gelöst und die Selbstheilungskräfte des Körpers aktiviert.",
  },
  {
    name: "Dentosophie",
    Icon: Smile,
    color: "bg-cyan-100",
    gradient: "bg-gradient-to-r from-cyan-600 to-cyan-700", // Türkis/Cyan als harmonische Farbe
    subtitle: "Die Weisheit der Zähne",
    description: "Harmonische Verbindung von Zähnen, Kiefer und Körper.",
    fullDescription:
      "Die Dentosophie ist eine ganzheitliche Methode, die Zahnstellung, Atemgewohnheiten und Körperhaltung harmonisiert. Durch das Tragen einer weichen Übungsschiene und kurze tägliche Übungen werden funktionelle und emotionale Blockaden gelöst. Begleitend unterstützt die Osteopathie diesen Prozess, indem sie den Körper ganzheitlich ausgleicht und die Ergebnisse der Dentosophie ergänzt – für ein harmonisches Zusammenspiel von Zähnen, Körper und Geist.",
  },
  {
    name: "Yoga",
    Icon: BrainCog,
    color: "bg-amber-100",
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500", // Gelb/Orange aus dem Logo
    subtitle: "Körper und Geist",
    description: "Verbindet Körper, Geist und Seele für innere Balance.",
    fullDescription:
      "Yoga ist eine alte indische Praxis, die Körperhaltungen, Atemübungen und Meditation kombiniert. Es fördert nicht nur die körperliche Flexibilität, sondern auch mentale Klarheit und emotionales Gleichgewicht.",
  },
  {
    name: "Qigong",
    Icon: Zap,
    color: "bg-green-100",
    gradient: "bg-gradient-to-r from-green-600 to-green-700", // Grün aus dem Logo
    subtitle: "Energiefluss",
    description: "Harmonisiert Lebensenergie für Gesundheit und Vitalität.",
    fullDescription:
      "Qigong ist eine chinesische Heilmethode, die sanfte Bewegungen, Meditation und Atemtechniken kombiniert. Es zielt darauf ab, die Lebensenergie (Qi) im Körper zu harmonisieren und zu stärken, was zu verbesserter Gesundheit und Vitalität führt.",
  },
];

function PerkCard({ perk }: { perk: Perk }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger className="group relative rounded-xl flex w-full overflow-hidden border shadow-md bg-card transition-shadow duration-300 hover:shadow-lg">
        {/* Mobile-optimized card layout */}
        <div
          className={`${perk.gradient} w-24 sm:w-32 flex items-center justify-center relative group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500 delay-150`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)] group-hover:opacity-80 transition-opacity duration-500 delay-200" />
          <perk.Icon className="size-7/12 drop-shadow-2xl text-accent sm:w-12 sm:h-12 relative z-10 group-hover:scale-110 group-hover:drop-shadow-lg transition-transform duration-500 delay-200" />
        </div>
        <div className="flex flex-grow flex-row items-center justify-between px-4 sm:px-8 py-4 sm:py-6 bg-card">
          <div>
            <MorphingDialogTitle className="text-lg sm:text-xl font-semibold mb-1">
              {perk.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-sm sm:text-base">
              {perk.subtitle}
            </MorphingDialogSubtitle>
          </div>
          <div className="relative ml-2 sm:ml-4 h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full hover:bg-muted border">
            <PlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="overscroll-none pointer-events-auto rounded-xl relative flex w-full max-w-[90vw] sm:w-[800px] mx-auto h-auto max-h-[75vh] flex-col overflow-y-auto border bg-card">
          <MorphingDialogClose className="top-3 right-3 text-accent sm:top-6 sm:right-6 transition-colors mix-blend-overlay z-50" />

          {/* Farbiger Hintergrund mit Icon */}
          <div
            className={`${perk.gradient} min-h-48 sm:h-64 w-full flex items-center justify-center relative`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
            <div className="size-4/12 -mt-8 sm:w-32 sm:h-32 flex items-center justify-center">
              <perk.Icon className="w-full h-full text-accent drop-shadow-2xl" />
            </div>
          </div>

          {/* Description mit abgerundetem oberen Rand */}
          <div className="relative bg-card rounded-t-xl -mt-8 p-6 sm:p-8 flex-1">
            <MorphingDialogTitle className="text-2xl sm:text-3xl font-bold mb-2">
              {perk.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-base sm:text-lg mb-4 sm:mb-6">
              {perk.subtitle}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.95, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.95, y: 20 },
              }}
            >
              <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4 leading-relaxed">
                {perk.description}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                {perk.fullDescription}
              </p>
            </MorphingDialogDescription>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export default function Perks() {
  return (
    <section
      id="service"
      className="border-y w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative py-8 sm:py-16 overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-14 space-y-2">
          <Typography variant="h3" className="text-lg sm:text-xl">
            Ganzheitliche Begleitung
          </Typography>
          <Typography variant="h1" className="text-2xl sm:text-3xl">
            Ihr Weg zu mehr Wohlbefinden
          </Typography>
          <Typography
            variant="p"
            className="text-sm sm:text-base text-muted-foreground"
          >
            Individuelle Ansätze für Körper und Geist
          </Typography>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-8">
          {perks.map((perk) => (
            <PerkCard key={perk.name} perk={perk} />
          ))}
        </div>
      </div>
    </section>
  );
}
