export type Projects = {
  name: string;
  description: string;
  summary?: string;
  github: string;
  tech: string[];
  site: string;
};

export const projects = [
  {
    name: "devfolio",
    description:
      "A  Seamless, No-Cost Solution to Elevate Your Digital Presence & Simplify Recruiter Recognition.The Ultimate Platform for Backend Developers and Junior Coders to Showcase Their Projects, Professional Journey, and Technical Expertise. Fully Responsive on all devices.",
    summary:
      "Devfolio  is aimed at developers who either specialize in backend technologies or are just learning to code. Simply enter some credentials and get a fully responsive portfolio website generated for them. That they can then show to potential recruiters or just enjoy certain corner of the internet for them. Entire process is free of charge.",
    github: "https://github.com/99Yash/devfolio-client",
    site: "https://devfolio-client.vercel.app",
    tech: [
      "NextJS",
      "Typescript",
      "ChakraUI",
      "Clerk-Auth",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    name: "shreddiit",
    description:
      "Reddit-like application for building a personalized community aimed at revolutionizing social discourse at my college. A Dynamic Online Hub Engineered to foster a culture of Anonymous Sharing Among Peers. Built this so that my college mates can anonymously share valuable resources & their opinions Respectfully without being judged or shamed for it. Built using the latest developments in the React ecosystem.",
    github: "https://github.com/99Yash/shreddiit",
    site: "https://shreddiit.vercel.app",
    tech: [
      "NextJS 13",
      "Typescript",
      "Shadcn/UI",
      "Clerk-Auth",
      "Prisma",
      "PlanetScale",
      "Server Components",
    ],
  },
  {
    name: "trinsta",
    description:
      "An Innovative Instagram Iteration Developed with the t3-Stack.",
    github: "https://github.com/99Yash/trpc-insta",
    site: "https://trpc-insta.vercel.app/",
    tech: [
      "NextJS 13",
      "Typescript",
      "Shadcn/UI",
      "Next-Auth",
      "Prisma",
      "TRPC",
      "PlanetScale",
      "Server Components",
    ],
  },
] satisfies Projects[];
