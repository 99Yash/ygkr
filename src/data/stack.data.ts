import * as ReactIcons from "@icons-pack/react-simple-icons";

export const stackl = [
  "CSS",
  "Docker",
  "Express",
  "ESLint",
  "HTML",
  "JavaScript",
  "MongoDB",
  "MySQL",
  "NextJS",
  "NodeJS",
  "PostgreSQL",
  "Prisma",
  "React",
  "Redis",
  "SQLite",
  "TailwindCSS",
  "TRPC",
  "TypeScript",
  "Vite",
] as const;

export const stacks = stackl.map((label) => ({
  label,
  icon: ReactIcons[
    `Si${
      label === "CSS"
        ? "Css3"
        : label === "HTML"
          ? "Html5"
          : label === "JavaScript"
            ? "Javascript"
            : label === "NodeJS"
              ? "Nodedotjs"
              : label === "PostgreSQL"
                ? "Postgresql"
                : label === "SQLite"
                  ? "Sqlite"
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
                              : label === "ESLint"
                                ? "Eslint"
                                : label
    }`
  ],
}));
