import { motion } from 'framer-motion';
import { Caveat } from 'next/font/google';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { Magnetic } from './animate/magnetic';
import { TextEffect } from './animate/text-effect';
import ContactForm from './contact';
import { BackgroundLines } from './ui/background-lines';
import { Button, buttonVariants } from './ui/button';

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const springOptions = { bounce: 0.1 };

export const Hero = () => {
  return (
    <BackgroundLines
      className="relative flex max-h-dvh min-h-screen w-full items-start justify-center overflow-hidden pt-20 md:items-center md:pt-0"
      svgOptions={{ duration: 5 }}
    >
      <motion.div
        animate="visible"
        className="flex w-full max-w-4xl flex-col items-center justify-center space-y-12 px-4 text-center"
        initial="hidden"
        variants={containerVariants}
      >
        <div className="z-20 space-y-3 md:space-y-6">
          <motion.h1
            className="font-semibold text-2xl sm:text-5xl md:text-6xl dark:text-neutral-200"
            variants={itemVariants}
          >
            Praxis für{' '}
            <span className="bg-linear-to-b from-red-500 to-red-700 bg-clip-text text-transparent">
              Osteopathie
            </span>
            ,{' '}
            <span className="bg-linear-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Dentosophie
            </span>
            ,{' '}
            <span className="bg-linear-to-b from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Yoga
            </span>{' '}
            &{' '}
            <span className="bg-linear-to-b from-green-500 to-green-700 bg-clip-text text-transparent">
              Qigong
            </span>{' '}
            Maitri Katrin Eulitz
          </motion.h1>
          <motion.h2
            className={`relative bg-linear-to-b from-neutral-900 to-neutral-600 bg-clip-text font-bold text-transparent text-xl tracking-tight md:text-4xl dark:from-neutral-300 dark:to-white ${font.className}`}
            variants={itemVariants}
          >
            Herzlich Willkommen!
          </motion.h2>
          <Balancer>
            <TextEffect
              as="p"
              className="z-20 mx-auto max-w-2xl font-medium text-base text-neutral-700 sm:text-lg md:text-xl dark:text-neutral-300"
              per="word"
              preset="blur"
            >
              Wir begleiten Sie mit einem ganzheitlichen Ansatz: Wir bieten
              osteopathische Behandlungen für alle Altersgruppen, das ergänzende
              Dentosophie-Konzept sowie Yoga- und Qigong-Kurse an. Eine
              Kostenübernahme durch Krankenkassen ist für osteopathische
              Behandlungen sowie Yoga- und Qigong-Kurse möglich.
            </TextEffect>
          </Balancer>
        </div>
        <motion.div
          className="z-20 flex flex-col gap-4 sm:flex-row sm:gap-6"
          variants={itemVariants}
        >
          <Magnetic
            actionArea="global"
            intensity={0.1}
            range={200}
            springOptions={springOptions}
          >
            <ContactForm>
              <Button aria-controls="contactFormDialog" aria-haspopup="dialog">
                Kontakt
              </Button>
            </ContactForm>
          </Magnetic>
          <Magnetic
            actionArea="global"
            intensity={0.1}
            range={200}
            springOptions={springOptions}
          >
            <Link
              className={buttonVariants({
                variant: 'outline',
              })}
              href="#service"
            >
              Mehr<span aria-hidden="true">&nbsp;&rarr;</span>
              <span className="sr-only">Mehr Informationen</span>
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </BackgroundLines>
  );
};

export default Hero;
