import { Particles } from '@/components/particles';

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center">
      <Particles
        className="absolute inset-0 -z-10 "
        color="#1e6acd"
        quantity={30}
      />
      <div className="w-4/5 flex flex-col gap-3 items-center justify-center">
        <h1 className="  text-5xl text-transparent tracking-tight bg-clip-text bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-300 dark:to-slate-200/60  font-semibold ">
          Yash Gourav Kar
        </h1>
        <h5 className="text-sm text-gray-500">
          Hi, I&apos;m a software developer specializing in developing
          full-stack web applications that deliver exceptional user experiences.
        </h5>
        <div className="flex gap-3 text-gray-300/80">
          <p>NextJS</p>
          <p>Typescript</p>
          <p>Tailwindcss</p>
        </div>
      </div>
    </main>
  );
}
