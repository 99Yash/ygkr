import GetInTouch from '@/components/get-in-touch';
import { Particles } from '@/components/particles';

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
        <h5 className="text-md text-center text-gray-500">
          Hi, I&apos;m a software developer specializing in developing
          full-stack web applications that deliver exceptional user experiences.
        </h5>
        <GetInTouch />
      </div>
    </main>
  );
}
