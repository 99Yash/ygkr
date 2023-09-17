import { Card } from "@/components/ui/card";
import { Particles } from "@/components/ui/particles";
import { projects } from "@/data/projects.data";
import * as Icons from "@/lib/icons";
import { Eye } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects Archive",
  description: "An array of projects reflecting my work",
  openGraph: {
    url: "https://ygkr.vercel.app/projects",
    title: "Projects - ygkr",
    description: "An array of projects reflecting my work",
    locale: "en-US",
    type: "website",
  },
};

export default function Page() {
  return (
    <section className="flex flex-col gap-6 pt-8 md:pt-12">
      <header className="flex flex-col gap-4 ">
        <h1 className="flex items-center text-4xl font-bold tracking-tight text-gray-200/90">
          <Link className="mr-2" href={"/"}>
            <Icons.ChevronLeft className="inline-flex h-6 w-6 rounded-xl duration-500 hover:text-zinc-400" />
          </Link>
          Projects
        </h1>
        <h4 className="text-gray-400">
          Click on each project to go to its dedicated page.
        </h4>
      </header>
      <hr className="mt-2 h-px w-full border-0 bg-gray-600 md:mt-4" />
      <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 ">
        {projects.map((p) => (
          <Card
            key={p.name}
            className="group relative border border-gray-700 bg-gray-950/10 shadow-xl shadow-slate-900 "
          >
            <Particles
              color="#c2c6cc"
              staticity={20}
              vy={-0.2}
              className="absolute inset-0 -z-10 opacity-0 duration-500 group-hover:opacity-75 "
              quantity={80}
            />
            {/* Radial gradient */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
              aria-hidden="true"
            >
              <div className="translate-z-0 absolute inset-0 rounded-full bg-zinc-800 blur-[80px]" />
            </div>
            <Link href={`/projects/${p.name}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="h-4 w-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      0,
                    )}
                  </span>
                </div>
                <h2
                  id="featured-post"
                  className="font-display mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl"
                >
                  {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                </h2>
                <p className="mt-4 text-zinc-400 duration-150 group-hover:text-zinc-300">
                  {p.description}
                </p>
                <div className="mt-2">
                  <p className="hidden text-gray-900 duration-500 hover:font-semibold dark:text-zinc-200 dark:hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
