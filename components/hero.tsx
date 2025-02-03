import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import ContactForm from "./contact";
import { Button, buttonVariants } from "./ui/button";
import { TextEffect } from "./animate/text-effect";
import { BackgroundLines } from "./ui/background-lines";
import { Magnetic } from "./animate/magnetic";

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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden -mt-16"
      svgOptions={{ duration: 5 }}
    >
      {" "}
      <motion.div
        className="flex w-full max-w-4xl flex-col items-center justify-center space-y-12 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="space-y-3 md:space-y-6 z-20">
          <motion.h1
            variants={itemVariants}
            className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 
                   sm:text-4xl md:text-5xl"
          >
            Praxis für Osteopathie, Dentosophie, Yoga & Qigong Maitri Katrin
            Eulitz
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-700 
                   bg-clip-text text-2xl font-bold tracking-tight text-transparent 
                   dark:from-neutral-300 dark:to-white md:text-6xl"
          >
            Herzlich Willkommen!
          </motion.h2>
          <Balancer>
            <TextEffect
              as="p"
              preset="blur"
              per="word"
              className="mx-auto max-w-2xl z-20 text-base font-medium text-neutral-700 
                     dark:text-neutral-300 sm:text-lg md:text-xl"
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
          className="flex flex-col gap-4 z-20 sm:flex-row sm:gap-6"
          variants={itemVariants}
        >
          <Magnetic
            intensity={0.1}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <ContactForm>
              <Button aria-haspopup="dialog" aria-controls="contactFormDialog">
                Kontakt
              </Button>
            </ContactForm>
          </Magnetic>
          <Magnetic
            intensity={0.1}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Link
              href="#service"
              className={buttonVariants({
                variant: "outline",
              })}
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
