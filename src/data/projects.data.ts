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
    site: "https://forklifter.vercel.app",
    tech: [
      "NextJS",
      "React Server Components",
      "Server Actions",
      "TypeScript",
      "Prisma",
      "Shadcn/ui",
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
      "Shadcn/UI",
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
      "Social Hub for Real-time Engaging Discussions : Shreddiit is a Reddit-like application for building a personalized community aimed at revolutionizing social discourse. A Dynamic Online Hub Engineered to foster a culture of 'anonymous' resource sharing among Peers. Built this so that my college mates can anonymously share valuable resources & their opinions Respectfully without being judged or shamed for it. Using the latest developments in the React ecosystem :",
    github: "https://github.com/99Yash/shreddiit",
    summary: "",
    site: "https://shreddiit.vercel.app",
    tech: [
      "NextJS 13",
      "TypeScript",
      "Shadcn/UI",
      "Clerk-Auth",
      "Prisma",
      "PlanetScale",
      "Server Components",
    ],
  },
] satisfies Project[];
