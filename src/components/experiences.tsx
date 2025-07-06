"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { experiences } from "@/data/experience.mdx";
import { cn, formatDate } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { BlurUnknownImage } from "./utils/blur-unkown-image";

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

export default function Experiences() {
  const contRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contRef, { once: false, margin: "-100px" });

  const router = useRouter();

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={contRef}
      transition={{
        duration: 0.5,
      }}
      id="engineering"
      className="my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        className="my-12 bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-center font-title text-3xl font-bold text-transparent sm:text-4xl"
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
        Professional Work
      </motion.h2>
      <motion.div
        className="mt-12 flex flex-wrap items-center gap-4"
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
        {experiences.map((work, i) => (
          <motion.div
            key={i}
            className={cn(
              "group relative flex flex-col rounded-xl border border-neutral-800/20 bg-white/5 px-4 py-6 shadow-feature-card backdrop-blur transition-transform dark:bg-neutral-800/20 dark:shadow-feature-card-dark",
            )}
          >
            <BlurUnknownImage
              src={`/assets/${work.company.toLowerCase()}.png`}
              lazy
              width={1280}
              height={832}
              alt={work.company}
              imageClassName="group-hover:scale-105 duration-300 brightness-75 cursor-pointer"
              className="rounded-lg"
              onClick={() => {
                router.push(work.site);
              }}
            />
            <div className="flex flex-1 flex-col justify-between gap-3 px-2 py-4">
              <div className="flex flex-col justify-between space-y-2">
                {
                  <div className="flex items-end gap-3 text-xs text-gray-400">
                    {!work.endDate || work.currentlyWorking ? (
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <div className="absolute h-2 w-2 animate-pulse rounded-full bg-lime-900" />
                        <div className="absolute h-6 w-6 animate-pulse rounded-full bg-lime-600 opacity-10" />
                      </div>
                    ) : (
                      <Calendar className="h-4 w-4" />
                    )}
                    {work.currentlyWorking && "Since"}{" "}
                    {formatDate(work.startDate)}
                    {!work.currentlyWorking && (
                      <>
                        {" - "}
                        {formatDate(work.endDate!)}
                      </>
                    )}
                  </div>
                }
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <h2 className="items-center bg-gradient-to-br from-slate-300 to-slate-700 bg-clip-text text-2xl font-semibold text-transparent">
                      {work.position}, {work.company}
                    </h2>
                  </div>
                  <div className="ml-2 flex items-center gap-2">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            target="_blank"
                            className="p-2"
                            href={work.site}
                          >
                            <ExternalLink className="mr-2 h-4 w-4 text-slate-200" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-slate-300">
                          <p>Go to {work.company}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert">
                  <work.Component />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {work.tech
                  .sort((a: string, b: string) => a.localeCompare(b))
                  .map((t: string) => (
                    <span
                      key={t}
                      className="animate-shine inline-flex items-center justify-center rounded-full border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 text-xs font-medium text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
