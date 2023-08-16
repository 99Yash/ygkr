type Projects = {
  name: string;
  description: string;
  github: string;
  technologies: string[];
  website: string;
};

export const projects = [
  {
    name: "Devfolio",
    description:
      "A  Seamless, No-Cost Solution to Elevate Your Digital Presence & Simplify Recruiter Recognition.The Ultimate Platform for Backend Developers and Junior Coders to Showcase Their Projects, Professional Journey, and Technical Expertise. Built using Next.js, MongoDB-Mongoose, ChakraUI along with Clerk for authentication. Fully Responsive on all devices.",
    github: "https://github.com/99Yash/devfolio-client",
    technologies: ["NextJS", "Typescript", "ChakraUI", "Clerk Auth"],
    website: "https://devfolio-client.vercel.app",
  },
  {
    name: "Shreddiit",
    description:
      "Reddit like application for building a personalized community.A Dynamic Online Hub Engineered to Foster a Culture of Anonymous Sharing Among Peers, Enabling the Dissemination of Insights, Resources, and Opinions in an Atmosphere of Respect and Empathy. Built this so that my college mates can anonymously share valuable resources & their opinions in a respectful way without being judged or shamed for it. Built using the latest developments in the React ecosystem, using Shadcn/ui, UploadThing api for storing images, React Server Components, Authentication using Clerk, Prisma & Zod. The aim was to revolutionize the social discourse.",
    github: "https://github.com/99Yash/shreddiit",
    website: "https://shreddiit.vercel.app",
    technologies: [
      "NextJS 13",
      "Typescript",
      "Shadcn/UI",
      "Clerk Auth",
      "Prisma",
      "PlanetScale",
      "Server Components",
    ],
  },
  {
    name: "Trinsta",
    description:
      "An Innovative Instagram Iteration Developed with the t3-Stack. Harnessing the Power of tRPC, Shadcn/UI, React Server Components, t the Pioneering uploadThing API for Seamless File Integration, Prisma, Zod, and React Hook Forms.",
    github: "https://github.com/99Yash/trpc-insta",
    website: "https://trpc-insta.vercel.app/",
    technologies: [
      "NextJS 13",
      "Typescript",
      "Shadcn/UI",
      "Next Auth",
      "Prisma",
      "TRPC",
      "PlanetScale",
      "Server Components",
    ],
  },
] satisfies Projects[];
