"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "-mt-20 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-hero dark:bg-secondary z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.3, width: "15%" }}
          whileInView={{ opacity: 1, width: "40%" }}
          animate="visible"
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-1/3 bg-gradient-conic from-red-300 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-hero dark:bg-secondary h-40 bottom-0 z-10 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-hero dark:bg-secondary  bottom-0 z-10 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3, width: "15%" }}
          animate="visible"
          whileInView={{ opacity: 1, width: "40%" }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-1/3 bg-gradient-conic from-transparent via-transparent to-red-300 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-1/3 h-[100%] right-0 bg-hero dark:bg-secondary  bottom-0 z-auto [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-hero dark:bg-secondary h-40 bottom-0 z-auto [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-hero dark:bg-secondary blur-2xl"></div>
        <div className="absolute top-1/2 z-40 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-40 h-10 md:h-40 w-[28rem] -translate-y-1/2 rounded-full bg-red-300 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "1rem" }}
          animate="visible"
          whileInView={{ width: "1rem" }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-10 md:h-40 w-64 -translate-y-[5rem] rounded-full bg-red-200 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.3, width: "15%" }}
          animate="visible"
          whileInView={{ opacity: 1, width: "40%" }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-40 h-0.5 w-1/3 -translate-y-[7rem] bg-red-200 "
        ></motion.div>

        <div className="absolute h-44 w-full -translate-y-[12.5rem] bg-hero dark:bg-secondary "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
