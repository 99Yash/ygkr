import { Particles } from '@/components/particles';
import * as Icons from '@/lib/icons';

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center">
      <Particles
        className="absolute inset-0 -z-10 "
        color="#518dda"
        quantity={40}
      />
      <div className="w-4/5 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-5xl text-transparent tracking-tight bg-clip-text bg-gradient-to-r dark:from-blue-500/70 dark:via-orange-400/80 dark:to-pink-400/80 font-semibold ">
          Yash Gourav Kar
        </h1>
        <h5 className="text-md text-gray-500">
          Hi, I&apos;m a software developer specializing in developing
          full-stack web applications that deliver exceptional user experiences.
        </h5>
        <div className="flex gap-5 dark:text-gray-300/90 text-gray-800">
          <a href="https://github.com/t3-oss">
            <Icons.t3 className="h-12 w-12 bg-gray-300/90" />
          </a>
          <a href="https://www.nextjs.org">
            <Icons.Nextjs className="h-12 w-12 dark:text-gray-300 text-gray-900" />
          </a>
          <a href="https://prisma.io">
            <Icons.Prisma className="h-12 w-12 dark:text-gray-300 text-gray-900" />
          </a>
          <a href="https://react.dev">
            <Icons.React className="h-12 w-12 dark:text-blue-300 animate-spin" />
          </a>
          <a href="https://tailwindcss.com">
            <Icons.TailwindLight className="h-12 w-12 fill-current " />
          </a>
        </div>
      </div>
    </main>
  );
}
