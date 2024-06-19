"use client";

import { motion, useInView } from "framer-motion";
import { Github, Link2Icon, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  twitter: string;
  linkedin: string;
  github: string;
};

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

const Connect = ({ twitter, linkedin, github }: Props) => {
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
      id="contact"
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
        What{`'`}s Next
      </motion.h2>
      <motion.div className="my-12 flex flex-col gap-6 rounded-xl p-4 shadow-feature-card-dark lg:p-6">
        <div className="flex items-center gap-2">
          <Link2Icon className="h-[18px] w-[18px]" />
          <h2 className="font-title text-sm">I{`'`}ll be in touch...</h2>
        </div>
        <div className="grid h-full grid-cols-1 gap-4 px-2 md:grid-cols-3">
          {[twitter, linkedin, github].map((link, i) => {
            return (
              <Link
                key={i}
                href={link}
                className="inline-flex min-h-[160px] w-full animate-background-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 text-sm transition-colors"
              >
                <div className="flex flex-col gap-2 opacity-90">
                  {i === 0 && (
                    <Twitter className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                  )}
                  {i === 1 && (
                    <Linkedin className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                  )}
                  {i === 2 && (
                    <Github className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Connect;
