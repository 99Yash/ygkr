"use client";
import { Project } from "@/data/projects.data";
import { self } from "@/data/self.data";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Header = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.github) {
    links.push({
      label: "GitHub",
      href: project.github,
    });
  }
  if (project.site) {
    links.push({
      label: "Website",
      href: project.site,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className="relative isolate overflow-hidden">
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 lg:bg-transparent lg:backdrop-blur-none ${
          isIntersecting
            ? "border-transparent bg-zinc-900/0"
            : "border-zinc-200  bg-white/10 lg:border-transparent"
        }`}
      >
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8">
            <Link target="_blank" href={self.twitter}>
              <Twitter
                className={`h-6 w-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href={project.github}>
              <Github
                className={`h-6 w-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="h-6 w-6 " />
          </Link>
        </div>
      </div>
      <div className="relative isolate mx-auto overflow-hidden py-24  md:container sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {project.name[0].toUpperCase() +
                project.name.slice(1).toLowerCase()}
            </h1>
            <p className="mt-6 text-lg text-zinc-300">
              {project.summary ? project.summary : project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link target="_blank" key={link.label} href={link.href}>
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
