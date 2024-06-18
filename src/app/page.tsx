import Hero from "@/components/hero";
import Nav from "@/components/landing-nav";
import IconCloud from "@/components/ui/icon-cloud";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#0f0f19] to-[#0c0c14] md:from-[#000] md:via-[#181828] md:to-[#000] xl:flex-row">
      <Nav />
      <Particles
        className="animate-fade-in absolute inset-0 brightness-50"
        color="#8daab5"
        quantity={60}
        ease={30}
        vx={0.1}
        vy={-0.3}
      />
      <Hero />
      <StackCloud />
    </main>
  );
}

const slugs = [
  "docker",
  "express",
  "mongodb",
  "mysql",
  "nextdotjs",
  "nodedotjs",
  "postgresql",
  "prisma",
  "react",
  "redis",
  "tailwindcss",
  "trpc",
  "typescript",
  "vercel",
];

export function StackCloud() {
  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 brightness-75 xl:max-w-[50rem]">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
