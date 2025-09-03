import {
  BrainCog,
  type LucideIcon,
  PersonStanding,
  PlusIcon,
  Smile,
  Zap,
} from 'lucide-react';
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from '@/components/animate/morphing-dialog';
import Typography from '@/components/typography';

type Perk = {
  name: string;
  Icon: LucideIcon;
  color: string;
  gradient: string;
  subtitle: string;
  description: string;
  fullDescription: string;
};

const perks = [
  {
    name: 'Osteopathie',
    Icon: PersonStanding,
    color: 'bg-red-100',
    gradient: 'bg-linear-to-r from-red-600 to-red-700', // Rot aus dem Logo
    subtitle: 'Ganzheitliche Gesundheit',
    description: 'Erkennt und löst Blockaden für ganzheitliche Gesundheit.',
    fullDescription:
      'Osteopathie ist eine ganzheitliche manuelle Behandlungsmethode, die darauf abzielt, Funktionsstörungen im Körper zu erkennen und zu beheben. Durch sanfte Manipulationen werden Blockaden gelöst und die Selbstheilungskräfte des Körpers aktiviert.',
  },
  {
    name: 'Dentosophie',
    Icon: Smile,
    color: 'bg-cyan-100',
    gradient: 'bg-linear-to-r from-cyan-600 to-cyan-700', // Türkis/Cyan als harmonische Farbe
    subtitle: 'Die Weisheit der Zähne',
    description: 'Harmonische Verbindung von Zähnen, Kiefer und Körper.',
    fullDescription:
      'Die Dentosophie ist eine ganzheitliche Methode, die Zahnstellung, Atemgewohnheiten und Körperhaltung harmonisiert. Durch das Tragen einer weichen Übungsschiene und kurze tägliche Übungen werden funktionelle und emotionale Blockaden gelöst. Begleitend unterstützt die Osteopathie diesen Prozess, indem sie den Körper ganzheitlich ausgleicht und die Ergebnisse der Dentosophie ergänzt – für ein harmonisches Zusammenspiel von Zähnen, Körper und Geist.',
  },
  {
    name: 'Yoga',
    Icon: BrainCog,
    color: 'bg-amber-100',
    gradient: 'bg-linear-to-r from-amber-500 to-orange-500', // Gelb/Orange aus dem Logo
    subtitle: 'Körper und Geist',
    description: 'Verbindet Körper, Geist und Seele für innere Balance.',
    fullDescription:
      'Yoga ist eine alte indische Praxis, die Körperhaltungen, Atemübungen und Meditation kombiniert. Es fördert nicht nur die körperliche Flexibilität, sondern auch mentale Klarheit und emotionales Gleichgewicht.',
  },
  {
    name: 'Qigong',
    Icon: Zap,
    color: 'bg-green-100',
    gradient: 'bg-linear-to-r from-green-600 to-green-700', // Grün aus dem Logo
    subtitle: 'Energiefluss',
    description: 'Harmonisiert Lebensenergie für Gesundheit und Vitalität.',
    fullDescription:
      'Qigong ist eine chinesische Heilmethode, die sanfte Bewegungen, Meditation und Atemtechniken kombiniert. Es zielt darauf ab, die Lebensenergie (Qi) im Körper zu harmonisieren und zu stärken, was zu verbesserter Gesundheit und Vitalität führt.',
  },
];

function PerkCard({ perk }: { perk: Perk }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger className="group relative flex w-full overflow-hidden rounded-xl border bg-card shadow-md transition-shadow duration-300 hover:shadow-lg">
        {/* Mobile-optimized card layout */}
        <div
          className={`${perk.gradient} relative flex w-24 items-center justify-center transition-transform delay-150 duration-500 group-hover:scale-105 group-hover:brightness-110 sm:w-32`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)] transition-opacity delay-200 duration-500 group-hover:opacity-80" />
          <perk.Icon className="relative z-10 size-7/12 text-accent drop-shadow-2xl transition-transform delay-200 duration-500 group-hover:scale-110 group-hover:drop-shadow-lg sm:h-12 sm:w-12" />
        </div>
        <div className="flex grow flex-row items-center justify-between bg-card px-4 py-4 sm:px-8 sm:py-6">
          <div>
            <MorphingDialogTitle className="mb-1 font-semibold text-lg sm:text-xl">
              {perk.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-sm sm:text-base">
              {perk.subtitle}
            </MorphingDialogSubtitle>
          </div>
          <div className="relative ml-2 h-9 w-9 shrink-0 rounded-full border hover:bg-muted sm:ml-4 sm:h-11 sm:w-11">
            <PlusIcon className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative mx-auto flex h-auto max-h-[75vh] w-full max-w-[90vw] flex-col overflow-y-auto overscroll-none rounded-xl border bg-card sm:w-[800px]">
          <MorphingDialogClose className="top-3 right-3 z-50 text-accent mix-blend-overlay transition-colors sm:top-6 sm:right-6" />

          {/* Farbiger Hintergrund mit Icon */}
          <div
            className={`${perk.gradient} relative flex min-h-48 w-full items-center justify-center sm:h-64`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
            <div className="-mt-8 flex size-4/12 items-center justify-center sm:h-32 sm:w-32">
              <perk.Icon className="h-full w-full text-accent drop-shadow-2xl" />
            </div>
          </div>

          {/* Description mit abgerundetem oberen Rand */}
          <div className="-mt-8 relative flex-1 rounded-t-xl bg-card p-6 sm:p-8">
            <MorphingDialogTitle className="mb-2 font-bold text-2xl sm:text-3xl">
              {perk.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="mb-4 text-base sm:mb-6 sm:text-lg">
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
              <p className="mb-3 font-medium text-base leading-relaxed sm:mb-4 sm:text-lg">
                {perk.description}
              </p>
              <p className="text-justify text-sm leading-relaxed sm:text-base">
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
      className="relative min-h-screen w-full overflow-hidden border-y py-8 sm:py-16"
      id="service"
    >
      <div className="-z-10 absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 space-y-2 text-center sm:mb-14">
          <Typography className="text-lg sm:text-xl" variant="h3">
            Ganzheitliche Begleitung
          </Typography>
          <Typography className="text-2xl sm:text-3xl" variant="h1">
            Ihr Weg zu mehr Wohlbefinden
          </Typography>
          <Typography
            className="text-muted-foreground text-sm sm:text-base"
            variant="p"
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
