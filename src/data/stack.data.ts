import * as ReactIcons from "@icons-pack/react-simple-icons";

export const stackl = [
  "CSS",
  "Docker",
  "Express",
  "HTML",
  "JavaScript",
  "MongoDB",
  "MySQL",
  "NextJS",
  "NodeJS",
  "PostgreSQL",
  "Prisma",
  "React",
  "Drizzle",
  "TailwindCSS",
  "TRPC",
  "TypeScript",
] as const;

export const stacks = stackl.map((label) => ({
  label,
  icon: ReactIcons[
    `Si${
      label === "CSS"
        ? "Css"
        : label === "HTML"
          ? "Html5"
          : label === "JavaScript"
            ? "Javascript"
            : label === "NodeJS"
              ? "Nodedotjs"
              : label === "PostgreSQL"
                ? "Postgresql"
                : label === "TypeScript"
                  ? "Typescript"
                  : label === "NextJS"
                    ? "Nextdotjs"
                    : label === "TailwindCSS"
                      ? "Tailwindcss"
                      : label === "TRPC"
                        ? "Trpc"
                        : label === "MongoDB"
                          ? "Mongodb"
                          : label === "MySQL"
                            ? "Mysql"
                            : label === "Drizzle"
                              ? "Drizzle"
                              : label
    }`
  ],
}));
