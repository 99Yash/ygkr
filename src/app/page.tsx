import GetInTouch from "@/components/get-in-touch";
import { Particles } from "@/components/particles";
import { ModeToggle } from "@/components/theme-toggle";
import * as Icons from "@/lib/icons";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-4">
      <nav className="absolute left-0 top-0 flex w-full list-none justify-between gap-4 px-4 py-2 ">
        <li>
          <Icons.Component className="mr-2 h-8 w-8 text-gray-600" />
        </li>
      </nav>
      <Particles
        className="absolute inset-0 -z-10  "
        color="#518dda"
        quantity={40}
      />
      <div className="flex w-4/5 flex-col items-center justify-center gap-6 ">
        <h1 className="bg-gradient-to-r from-blue-700 via-orange-600 to-pink-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-blue-500/80 dark:via-orange-400/80 dark:to-pink-400/80 lg:text-5xl ">
          Yash Gourav Kar
        </h1>
        <h5 className="md:text-md text-center text-sm text-gray-500">
          Hi, I&apos;m a software developer specializing in developing
          full-stack web applications that deliver beautiful user experiences.
        </h5>
        <GetInTouch />
      </div>
      <ModeToggle />
    </main>
  );
}
