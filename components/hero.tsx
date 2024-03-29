"use client";

import Link from "next/link";
import ContactForm from "./contact";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export const Hero = () => {
  return (
    <>
      {/* <div className="flex flex-col justify-around">
        <LampContainer className="pt-11 space-y-3 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          <motion.h3
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="tracking-tight text-accent text-sm md:text-2xl"
          >
            <Balancer>
              Praxis für Osteopathie, Yoga & Qigong Maitri Katrin Eulitz
            </Balancer>
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="bg-gradient-to-br from-primary to-secondary bg-clip-text tracking-tight text-transparent md:text-7xl"
          >
            <Balancer>Herzlich Willkommen!</Balancer>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-primary-foreground text-center text-sm lg:text-xl tracking-tight w-full lg:w-2/3 font-bold"
          >
            <Balancer>
              Willkommen in unserer Praxis für Osteopathie, Yoga und Qigong!
              Hier bieten wir osteopathische Behandlungen für Babys bis
              Erwachsene und Yoga sowie Qigong für jede Altersstufe an. Die
              Kosten können über Ihre Krankenkassen abgerechnet werden.
            </Balancer>
          </motion.p>
          <div className="mt-20 flex flex-col mx-auto gap-4 sm:flex-row">
            <ContactForm>
              <Button>Kontakt</Button>
            </ContactForm>
            <Link
              href="#perk"
              className={buttonVariants({ variant: "outline" })}
            >
              Mehr &rarr;
            </Link>
          </div>{" "}
        </LampContainer>
      </div> */}

      <div className="h-screen w-full -mt-20 flex dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none flex [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex w-full flex-col justify-center items-center text-center space-y-28 lg:space-y-60">
          <div className="space-y-3 select-none">
            <motion.h1
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.1,
                ease: "easeOut",
              }}
              className="tracking-tight text-sm lg:text-2xl"
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
              className="bg-gradient-to-tr from-primary dark:to-foreground to-foreground/75 bg-clip-text tracking-tight text-transparent lg:text-7xl"
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
                Willkommen in unserer Praxis für Osteopathie, Yoga und Qigong!
                Hier bieten wir osteopathische Behandlungen für Babys bis
                Erwachsene und Yoga sowie Qigong für jede Altersstufe an. Die
                Kosten können über Ihre Krankenkassen abgerechnet werden.
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
