"use client";

import { PrimaryButton } from "@/components/ui/button";
import { self } from "@/data/self.data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { MailSearch } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      className="space-y-6 md:my-16"
      ref={containerRef}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
    >
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <motion.div
          className="flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="bg-gradient-to-b from-slate-300/80 via-slate-300/85 to-slate-500 bg-clip-text font-title text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[2.75rem]">
            Beautiful frontends. Secure backends. <br />
          </h1>
          <p
            className={cn(
              "bg-gradient-to-b from-slate-300/70 to-slate-300/60 bg-clip-text text-sm text-transparent",
              GeistSans.className,
            )}
          >
            <b>TL;DR</b>: Self-taught Software Developer with a strong focus on
            building high-performance, responsive front-end applications using
            NextJS and React. Experienced in API integration, performance
            optimization, and creating intuitive user interfaces that meet
            modern web standards. Proven track record in architecting scalable
            solutions and collaborating closely with design teams to deliver
            seamless user experiences
            <br />
            <br />
            <b>I&apos;m Yash</b> - having worked professionally since 2023 in a
            number of very small US startups in their 0-1 phase that made me a
            Founding Engineer in this span of time.
          </p>
          <Link
            target="_blank"
            className="mt-2 w-fit"
            href={`mailto:${self.email}`}
          >
            <PrimaryButton shiny label="Get in Touch" IconLeft={MailSearch} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
