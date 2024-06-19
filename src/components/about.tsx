"use client";

import { stackl } from "@/data/stack.data";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import StacksCard from "./utils/stacks";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  bio: string;
  twitter: string;
  linkedin: string;
  github: string;
  techStack: Array<(typeof stackl)[number]>;
};

const AboutMe = ({ bio, twitter, linkedin, github, techStack }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={containerRef}
      transition={{
        duration: 0.5,
      }}
      className="relative my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        id="about"
        className="bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-center font-title text-3xl font-bold text-transparent sm:text-4xl"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        About
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <StacksCard stacks={techStack} />{" "}
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
