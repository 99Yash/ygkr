export type Project = {
  name: string;
  description: string;
  summary: string;
  github: string;
  tech: string[];
  site: string;
};

export const projects = [
  {
    name: "forklifter",
    description:
      "🎉 Generates a beautiful portfolio instantly, with pageview analytics, dynamic opengraph images & more... using server components & server actions, next-auth, prisma & shadcn/ui, available for free",
    summary:
      "Forklifter is aimed at developers who either specialize in backend technologies or are just learning to code. Simply add your projects and get a fully responsive portfolio website generated for you that you can then show to potential recruiters. This supports adding your open source projects, personal projects, and even past work experience. Now with pageview analytics + dynamic opengraph images",
    github: `https://git.new/forklifter`,
    site: `https://dub.sh/forklifter`,
    tech: [
      "NextJS",
      "Server Actions",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "Next-Auth",
      "MongoDB",
    ],
  },
  {
    name: "trpc-insta",
    description:
      "An Innovative Instagram Iteration Developed with the t3-Stack.",
    summary: "",
    github: `https://git.new/trinsta`,
    site: `https://dub.sh/trinsta`,
    tech: [
      "NextJS 13",
      "Server Components",
      "TypeScript",
      "shadcn/ui",
      "Next-Auth",
      "Prisma",
      "TRPC",
      "TiDB",
    ],
  },
  {
    name: "shreddiit",
    description:
      "A Reddit-like application for building a personalized community aimed at revolutionizing social discourse at my alma-mater (NIT Rourkela)",
    summary: "",
    github: `https://git.new/reddiit`,
    site: `https://dub.sh/reddiit`,
    tech: [
      "NextJS 13",
      "TypeScript",
      "shadcn/ui",
      "Clerk-Auth",
      "Prisma",
      "PlanetScale",
      "Server Components",
    ],
  },
] satisfies Project[];
