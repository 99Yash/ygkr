import { Particles } from "@/components/ui/particles";
import { projects } from "@/data/projects.data";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
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

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <section className="flex flex-col gap-6 pt-8 md:pt-12">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        color="#a8aba2"
        quantity={60}
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
        <div className="flex h-fit w-fit gap-4 text-right">
          <Link
            href={"/certificates"}
            className="text-gray-400 duration-500 hover:text-zinc-300"
          >
            Certificates
          </Link>
          <Link
            href={"/contact"}
            className="text-gray-400 duration-500 hover:text-zinc-300"
          >
            Contact
          </Link>
        </div>
      </header>
      <hr className="mt-2 h-px w-full border-0 bg-gray-600 md:mt-4" />
      <div className="flex flex-col gap-20">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 lg:flex-row"
          >
            <Image
              width={580}
              height={480}
              src={`/${project.name}.png`}
              alt={project.name}
              className="rounded-xl"
            />
            <article
              className="flex w-full flex-col gap-4 rounded-xl border border-gray-800 p-4 lg:rounded-l-none lg:border-l-0
          "
            >
              <h2 className="text-2xl font-bold tracking-tight text-gray-200/90">
                <Link
                  className="duration-500 hover:text-zinc-400"
                  href={`/projects/${project.name}`}
                >
                  {project.name[0].toUpperCase() + project.name.slice(1)}
                </Link>
              </h2>
              <p className={`${dm_sans.className} text-gray-400`}>
                {project.description}
              </p>
              <ul className="flex w-fit flex-wrap gap-2 bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
                {project.tech.map((tech, idx) => (
                  <li key={idx} className="font-mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
