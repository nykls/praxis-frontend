"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import ContactForm from "./contact";
import { Button, buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <>
      <div className="h-screen -mt-16 w-full flex dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none flex [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex w-full flex-col justify-center items-center text-center space-y-24 lg:space-y-60">
          <div className="space-y-3 select-none">
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.1,
                ease: "easeOut",
              }}
              className="scroll-m-20 font-semibold text-xl lg:text-3xl"
            >
              <Balancer>
                Praxis für Osteopathie, Yoga & Qigong Maitri Katrin Eulitz
              </Balancer>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.1,
                ease: "easeOut",
              }}
              className="bg-gradient-to-tr border-none from-primary dark:to-foreground to-foreground/75 bg-clip-text tracking-tight text-transparent scroll-m-20 pb-2 text-3xl lg:text-5xl font-extrabold first:mt-0"
            >
              <Balancer>Herzlich Willkommen!</Balancer>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.1,
                ease: "easeOut",
              }}
              className="text-center text-sm lg:text-xl tracking-tight font-bold px-5"
            >
              <Balancer>
                Willkommen in unserer Praxis für Osteopathie, Yoga und Qigong.
                Wir bieten osteopathische Behandlungen für alle Altersgruppen,
                von Babys bis Erwachsene, sowie Yoga- und Qigong-Kurse an. Die
                Kostenübernahme durch Krankenkassen ist möglich.
              </Balancer>
            </motion.p>
          </div>
          <div className="flex flex-col mx-auto w-60 lg:w-auto gap-4 sm:flex-row">
            <ContactForm>
              <Button aria-haspopup="dialog" aria-controls="contactFormDialog">
                Kontakt
              </Button>
            </ContactForm>
            <span className="sr-only">Mehr Informationen</span>
            <Link
              href="#service"
              className={buttonVariants({ variant: "outline" })}
            >
              Mehr &rarr;
              <span className="sr-only">Mehr Informationen</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
