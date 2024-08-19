import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/dialog-a";
import { PlusIcon, PersonStanding, BrainCog, Zap } from "lucide-react";

type Perk = {
  name: string;
  Icon: React.FC<any>;
  color: string;
  subtitle: string;
  description: string;
  fullDescription: string;
};

const perks = [
  {
    name: "Osteopathie",
    Icon: PersonStanding,
    color: "bg-red-400",
    subtitle: "Ganzheitliche Gesundheit",
    description: "Erkennt und löst Blockaden für ganzheitliche Gesundheit.",
    fullDescription:
      "Osteopathie ist eine ganzheitliche manuelle Behandlungsmethode, die darauf abzielt, Funktionsstörungen im Körper zu erkennen und zu beheben. Durch sanfte Manipulationen werden Blockaden gelöst und die Selbstheilungskräfte des Körpers aktiviert.",
  },
  {
    name: "Yoga",
    Icon: BrainCog,
    color: "bg-orange-400",
    subtitle: "Körper und Geist",
    description: "Verbindet Körper, Geist und Seele für innere Balance.",
    fullDescription:
      "Yoga ist eine alte indische Praxis, die Körperhaltungen, Atemübungen und Meditation kombiniert. Es fördert nicht nur die körperliche Flexibilität, sondern auch mentale Klarheit und emotionales Gleichgewicht.",
  },
  {
    name: "Qigong",
    Icon: Zap,
    color: "bg-green-400",
    subtitle: "Energiefluss",
    description: "Harmonisiert Lebensenergie für Gesundheit und Vitalität.",
    fullDescription:
      "Qigong ist eine chinesische Heilmethode, die sanfte Bewegungen, Meditation und Atemtechniken kombiniert. Es zielt darauf ab, die Lebensenergie (Qi) im Körper zu harmonisieren und zu stärken, was zu verbesserter Gesundheit und Vitalität führt.",
  },
];

function PerkCard({ perk }: { perk: Perk }) {
  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex w-full flex-col overflow-hidden border border-border bg-card"
      >
        <div
          className={`${perk.color} h-48 w-full flex items-center justify-center`}
        >
          <perk.Icon className="w-24 h-24 text-primary-foreground" />
        </div>
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-card-foreground">
              {perk.name}
            </DialogTitle>
            <DialogSubtitle className="text-muted-foreground">
              {perk.subtitle}
            </DialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:ring-2 active:scale-[0.98]"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-border bg-card sm:w-[500px]"
        >
          <div
            className={`${perk.color} h-48 w-full flex items-center justify-center`}
          >
            <perk.Icon className="w-24 h-24 text-primary-foreground" />
          </div>
          <div className="p-6">
            <DialogTitle className="text-2xl text-card-foreground">
              {perk.name}
            </DialogTitle>
            <DialogSubtitle className="text-muted-foreground">
              {perk.subtitle}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-accent-foreground">{perk.description}</p>
              <p className="mt-2 text-muted-foreground">
                {perk.fullDescription}
              </p>
            </DialogDescription>
          </div>
          <DialogClose className="text-primary-foreground" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}

export default function Perks() {
  return (
    <section
      id="service"
      className="py-20 px-4 sm:px-6 border-y lg:px-8 bg-background min-h-[55vh]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Entdecken Sie Ihren Weg zur Gesundheit
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Unsere ganzheitlichen Ansätze für Ihr Wohlbefinden
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <PerkCard key={perk.name} perk={perk} />
          ))}
        </div>
      </div>
    </section>
  );
}
