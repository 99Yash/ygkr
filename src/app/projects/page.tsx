import { Particles } from "@/components/ui/particles";
import { projects } from "@/data/projects.data";
import { Metadata } from "next";
import Link from "next/link";
import Project from "../../components/project";

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
      <header className="flex justify-between">
        <div className="flex flex-col gap-4 ">
          <h1 className="flex items-center text-4xl font-bold tracking-tight text-gray-200/90">
            <Link className="duration-300 hover:text-zinc-400" href={"/"}>
              Featured Projects
            </Link>
          </h1>
          <h4 className="text-gray-400">
            Projects arranged in chronological order of production (earliest
            first). Click on each project to go to its dedicated page.
          </h4>
        </div>
        <div className="flex h-fit gap-4 text-right">
          <Link
            href={"/certificates"}
            className="text-gray-400 duration-500 hover:font-bold hover:text-zinc-300"
          >
            Certificates
          </Link>
          <Link
            href={"/contact"}
            className="text-gray-400 duration-500 hover:font-bold hover:text-zinc-300"
          >
            Contact
          </Link>
        </div>
      </header>
      <hr className="mt-2 h-px w-full border-0 bg-gray-600 md:mt-4" />
      <div className="flex flex-col gap-20">
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}
