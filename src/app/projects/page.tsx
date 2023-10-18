import { Navigation } from "@/components/nav";
import { Particles } from "@/components/ui/particles";
import { projects } from "@/data/projects.data";
import { Metadata } from "next";
import Project from "../../components/project";
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
    <section className="mb-4 flex flex-col gap-6  pt-8 md:pt-12">
      <Particles
        className=" absolute inset-0 -z-10"
        color="#a8aba2"
        quantity={66}
        vy={0.2}
        ease={30}
      />
      <header className="flex flex-col gap-4 ">
        <Navigation />
        <div className="flex flex-col gap-4 ">
          <h1 className="mt-6 flex items-center text-4xl font-bold tracking-tight text-gray-200/90">
            Featured Projects
          </h1>
          <h5 className="text-sm text-gray-400">
            Projects arranged in chronological order of production (earliest
            first). My first OSS contribution is getting merged as we speak.
          </h5>
        </div>
      </header>
      <hr className="h-px w-full border-0 bg-gray-600 md:mt-2" />
      <div className="flex flex-col gap-20">
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}
