"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project } from "@/data/projects.data";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
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
            className="group relative flex flex-col rounded-xl px-2 py-4 shadow-feature-card-dark"
          >
            <BlurImage
              src={`/assets/${project.name}.png`}
              lazy
              width={1280}
              height={832}
              alt={project.name}
              imageClassName="group-hover:scale-105 opacity-80"
              className="rounded-lg"
            />
            <div className="absolute bottom-6 flex flex-col justify-between gap-3 px-2 py-4">
              <div className="flex grow items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <div className="flex items-center">
                      {[project.github, project.site].map((url) => (
                        <TooltipProvider key={url} delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link target="_blank" className="p-2" href={url}>
                                {url === project.github ? (
                                  <Github className="h-5 w-5 text-muted" />
                                ) : (
                                  <ExternalLink className="h-5 w-5 text-muted" />
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
                  <p className="grow whitespace-pre-line break-words text-sm font-medium text-muted/70">
                    {project.description}
                  </p>
                </div>
              </div>
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
        ))}
      </motion.div>
    </motion.div>
  );
}
