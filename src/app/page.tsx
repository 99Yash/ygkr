import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/landing-nav";
import IconCloud from "@/components/ui/icon-cloud";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0f0f19] to-[#0c0c14] md:from-[#000] md:via-[#181828] md:to-[#000]">
      <Nav />
      <Hero />
      <IconCloudDemo />
      <Footer />
    </main>
  );
}

const slugs = [
  "typescript",
  "react",
  "nodedotjs",
  "express",
  "mongodb",
  "tailwindcss",
  "nextdotjs",
  "mysql",
  "postgres",
  "redis",
  "trpc",
  "docker",
  "vercel",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[43rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 brightness-75">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
