"use client";

import { Project } from "@/data/projects.data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { BlurImage } from "./utils/blur-image";

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

export type ProjectsProps = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: ProjectsProps) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, {
    once: false,
    margin: "-100px",
  });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5,
      }}
      className="relative my-24 will-change-[transform,opacity]"
    >
      <motion.h2
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
        Featured {projects.length > 1 ? "Projects" : "Project"}
      </motion.h2>
      <motion.div
        className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2"
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
        {projects.map((project, i) => (
          <div
            key={i}
            className="group rounded-xl px-2 py-4 shadow-feature-card dark:shadow-feature-card-dark"
          >
            <BlurImage
              src={`/assets/${project.name}.png`}
              width={1280}
              height={832}
              imageClassName="group-hover:scale-110 brightness-75"
              alt={project.name}
              className="rounded-lg"
            />
            <div className="flex-1 px-2 py-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="bg-gradient-to-br from-slate-300 to-slate-700 bg-clip-text text-2xl font-bold text-transparent">
                    {project.name}
                  </h2>
                  <div className="flex items-center">
                    {[project.github, project.site].map((url) => (
                      <TooltipProvider key={url} delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link target="_blank" className="p-2" href={url}>
                              {url === project.github ? (
                                <Github className="h-5 w-5 text-slate-400" />
                              ) : (
                                <ExternalLink className="h-5 w-5 text-slate-400" />
                              )}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-800 text-slate-300">
                            <p>
                              {url === project.github
                                ? "Source code"
                                : "View project"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
                <div
                  className={cn(
                    "text-sm text-muted-foreground",
                    GeistSans.className,
                  )}
                >
                  {project.description}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tech
                    .sort((a, b) => a.localeCompare(b))
                    .map((t) => {
                      return (
                        <div
                          key={t}
                          className="animate-shine inline-flex items-center justify-center rounded-full border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 text-xs font-medium text-neutral-400 transition-colors"
                        >
                          {t}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
