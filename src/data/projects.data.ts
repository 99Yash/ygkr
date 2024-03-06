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
    name: "trinsta",
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
  {
    name: "devfolio",
    description:
      "A  Seamless, No-Cost Solution to Simplify Recruiter Recognition. Devfolio is The Ultimate Platform for Backend Developers and Junior Coders to Showcase Their Projects, Professional Journey, and Technical Expertise in the form of a good-looking Personal Website. Fully Responsive on all types of devices.",
    summary:
      "Devfolio  is aimed at developers who either specialize in backend technologies or are just learning to code. Simply enter some credentials and get a fully responsive portfolio website generated for you that you can then show to potential recruiters or just enjoy certain corner of the internet for yourself. Entire process is free of charge.",
    github: "https://github.com/99Yash/devfolio",
    site: "https://devfolio-client.vercel.app",
    tech: [
      "NextJS",
      "TypeScript",
      "ChakraUI",
      "Clerk-Auth",
      "MongoDB",
      "Mongoose",
    ],
  },
] satisfies Project[];
