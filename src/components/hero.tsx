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
          <h1 className="bg-gradient-to-b from-slate-300/90 via-slate-300 to-slate-400 bg-clip-text font-title text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem]">
            Hi, I{`'`}m Yash.
          </h1>
          <p
            className={cn("text-sm text-muted-foreground", GeistSans.className)}
          >
            Full-time software engineer from India, building beautiful products
            for the web.
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
