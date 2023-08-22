import GetInTouch from "@/components/get-in-touch";
import { ModeToggle } from "@/components/theme-toggle";
import Logo from "@/components/ui/logo";
import { Particles } from "@/components/ui/particles";
import { self } from "@/data/self.data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-4">
      <nav className="absolute left-0 top-0 flex w-full list-none justify-between gap-4 px-4 py-2 ">
        <li>
          <Logo />
        </li>
        <li>
          <ModeToggle />
        </li>
      </nav>
      {/* //?in light mode */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        color="#232121"
        quantity={70}
        ease={30}
      />
      {/* //?in dark mode */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        color="#848282"
        quantity={60}
        ease={30}
      />
      <div className=" flex w-4/5 flex-col items-center justify-center gap-6 ">
        <h1 className=" cursor-default bg-gradient-to-r from-blue-700 via-orange-800 to-pink-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-blue-500/80 dark:via-orange-500/80 dark:to-pink-400/80 md:text-5xl lg:text-6xl lg:tracking-[-0.24rem] ">
          {self.name}
        </h1>
        <h5 className="md:text-md text-center text-sm text-black dark:text-gray-400/80 ">
          Hi, I&apos;m a software developer specializing in developing
          full-stack web applications that deliver beautiful user experiences.
        </h5>
        <GetInTouch />
      </div>
      <div className="absolute bottom-0 mx-auto flex max-w-7xl flex-col gap-1 px-6 py-12 text-center text-xs text-gray-800 dark:text-zinc-500 lg:px-8">
        <p>
          Designed and built by{" "}
          <Link
            href={self.twitter}
            className="font-semibold duration-300 hover:text-zinc-400"
          >
            Yash
          </Link>
        </p>
      </div>
    </main>
  );
}
