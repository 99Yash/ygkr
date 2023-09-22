"use client";
import { Project } from "@/data/projects.data";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Project({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/projects/${project.name}`);
      }}
      className="group relative flex cursor-pointer flex-col items-center gap-4 lg:flex-row"
    >
      <Image
        width={580}
        height={480}
        src={`/${project.name}.png`}
        alt={project.name}
        className="group-hover:opacity-85 duration-200"
      />
      <div className="absolute left-0 top-0 hidden h-full w-[85%] bg-gradient-to-r from-transparent via-black/90 to-transparent opacity-100 lg:block" />
      <span className="z-10 flex w-full flex-col gap-4 rounded-xl border border-gray-800 p-4 lg:-ml-20 lg:rounded-l-none lg:border-l-0">
        <p className="text-2xl font-bold tracking-tight text-gray-300">
          <Link className="duration-500 " href={`/projects/${project.name}`}>
            {project.name[0].toUpperCase() + project.name.slice(1)}
          </Link>
        </p>
        <p
          className={`${dm_sans.className} text-gray-400 duration-500 group-hover:text-gray-300/90`}
        >
          {project.description}
        </p>
        <ul className="flex w-fit flex-wrap gap-2 bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
          {project.tech.map((tech, idx) => (
            <li key={idx} className="font-mono">
              {tech}
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
}
