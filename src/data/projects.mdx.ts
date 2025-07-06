"use client";

import Forklifter, {
  meta as forklifterMeta,
} from "@/content/projects/forklifter.mdx";
import Repligram, {
  meta as repligramMeta,
} from "@/content/projects/repligram.mdx";

export type Project = typeof repligramMeta & {
  Component: (props: any) => JSX.Element;
};

export const projects: Project[] = [
  { ...(repligramMeta as Project), Component: Repligram },
  { ...(forklifterMeta as Project), Component: Forklifter },
];

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-console
  console.table(
    projects.map(({ name, tech }) => ({ name, techCount: tech.length })),
  );
}
