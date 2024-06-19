"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { stackl } from "@/data/stack.data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
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
        General info
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
      <div className="my-8 flex items-center justify-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={"outline"} className={cn("rounded-xl")}>
              Know more about me
            </Button>
          </DrawerTrigger>
          <DrawerContent className="flex min-h-[420px] flex-col items-center">
            <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center text-center">
              <DrawerHeader>
                <DrawerTitle className="font-title">Bio</DrawerTitle>
              </DrawerHeader>
            </div>
            <Separator className="w-1/4" />
            <p className="mt-4 flex h-full max-w-md flex-col items-center px-4 font-title text-sm text-gray-400 md:px-0">
              {bio}
            </p>
            <h5 className="mt-8 font-title text-lg">Let{`'`}s Chat</h5>
            <Separator className="mt-3 w-1/12" />
            <div className="my-8 grid h-full grid-cols-3 gap-4 px-2">
              {[twitter, linkedin, github].map((link, i) => {
                return (
                  <Link
                    key={i}
                    target="_blank"
                    href={link}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 text-sm transition-colors"
                  >
                    <div className="flex flex-col gap-2 opacity-90">
                      {i === 0 && (
                        <Twitter className="h-10 w-10 md:h-6 md:w-6" />
                      )}
                      {i === 1 && (
                        <Linkedin className="h-10 w-10 md:h-6 md:w-6" />
                      )}
                      {i === 2 && (
                        <Github className="h-10 w-10 md:h-6 md:w-6" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.div>
  );
};

export default AboutMe;
