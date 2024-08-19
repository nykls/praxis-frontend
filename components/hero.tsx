import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import ContactForm from "./contact";
import { Button, buttonVariants } from "./ui/button";
import { TextEffect } from "./animate/text-effect";
import { WavyBackground } from "./ui/wavy-background";
import Typography from "./typography";

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

export const Hero = () => {
  return (
    <WavyBackground waveOpacity={1} speed="slow" waveWidth={10} blur={5}>
      <div className="relative z-10 flex h-screen overflow-hidden w-full items-center justify-center">
        <motion.div
          className="flex fixed w-full max-w-4xl flex-col items-center justify-center space-y-12 px-3 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-3">
            <motion.h1
              variants={itemVariants}
              className="text-lg font-semibold sm:text-4xl md:text-5xl"
            >
              Praxis für Osteopathie, Yoga & Qigong Maitri Katrin Eulitz
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="
              bg-gradient-to-r from-orange-500 via-yellow-500 to-green-600 
              bg-clip-text text-4xl md:text-6xl font-bold tracking-tight 
              text-transparent relative
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
              [text-shadow:_0_1px_0_rgb(0_0_0_/_25%)]
              [filter:_drop-shadow(0_0_0.75rem_rgba(255,255,255,0.5))]
            "
            >
              Herzlich Willkommen!
            </motion.h2>
            <Balancer>
              <TextEffect
                as="p"
                preset="blur"
                per="word"
                className="mx-auto max-w-2xl text-base font-medium sm:text-lg md:text-xl"
              >
                Willkommen in unserer Praxis. Wir bieten osteopathische
                Behandlungen für alle Altersgruppen sowie Yoga- und Qigong-Kurse
                an. Kostenübernahme durch Krankenkassen möglich.
              </TextEffect>
            </Balancer>
          </div>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            variants={itemVariants}
          >
            <ContactForm>
              <Button aria-haspopup="dialog" aria-controls="contactFormDialog">
                Kontakt
              </Button>
            </ContactForm>
            <Link
              href="#service"
              className={buttonVariants({ variant: "outline" })}
            >
              Mehr <span aria-hidden="true">&rarr;</span>
              <span className="sr-only">Mehr Informationen</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </WavyBackground>
  );
};

export default Hero;
