"use client";

import Link from "next/link";
import ContactForm from "./contact";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <LampContainer>
      <motion.h3
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="tracking-tight md:text-2xl"
      >
        Praxis für Osteopathie, Yoga, Qigong Maitri Katrin Eulitz
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
        Herzlich Willkommen!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-primary-foreground md:text-xl text-center w-1/3 font-bold"
      >
        Willkommen in unserer Praxis für Osteopathie, Yoga und Qigong! Hier
        bieten wir osteopathische Behandlungen für Babys bis Erwachsene und Yoga
        sowie Qigong für jede Altersstufe an. Die Kosten können über Ihre
        Krankenkassen abgerechnet werden.
      </motion.p>
      <div className="mt-20 flex flex-col mx-auto gap-4 sm:flex-row">
        <ContactForm>
          <Button>Kontakt</Button>
        </ContactForm>
        <Link href="#perk" className={buttonVariants({ variant: "outline" })}>
          Mehr &rarr;
        </Link>
      </div>{" "}
    </LampContainer>
  );
};
