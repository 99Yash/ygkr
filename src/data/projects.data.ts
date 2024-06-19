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
    github: "https://github.com/99Yash/forklifter",
    site: "https://forklifter.vercel.app/",
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
    github: "https://github.com/99Yash/trpc-insta",
    site: "https://trpc-insta.vercel.app/",
    tech: [
      "NextJS 13",
      "TypeScript",
      "shadcn/ui",
      "Next-Auth",
      "Prisma",
      "TRPC",
      "PlanetScale",
      "Server Components",
    ],
  },
  {
    name: "shreddiit",
    description:
      "Reddit-like application for building a personalized community aimed at revolutionizing social discourse at my college.",
    github: "https://github.com/99Yash/shreddiit",
    summary: "",
    site: "https://shreddiit.vercel.app/",
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
