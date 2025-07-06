import Dialy, { meta as dialyMeta } from "@/content/experiences/dialy.mdx";
import Labquote, {
  meta as labquoteMeta,
} from "@/content/experiences/labquote.mdx";
import Shapeshifter, {
  meta as shapeshifterMeta,
} from "@/content/experiences/shapeshifter.mdx";

export interface ExperienceMeta {
  position: string;
  company: string;
  site: string;
  startDate: string; // ISO 8601 format preferred
  endDate?: string;
  currentlyWorking: boolean;
  tech: string[];
}

export type ExperienceMDX = ExperienceMeta & {
  Component: (props: any) => JSX.Element;
};

export const experiences: ExperienceMDX[] = [
  { ...(shapeshifterMeta as ExperienceMeta), Component: Shapeshifter },
  { ...(labquoteMeta as ExperienceMeta), Component: Labquote },
  { ...(dialyMeta as ExperienceMeta), Component: Dialy },
];

// Quick runtime sanity-check (dev only) — validates that each entry contains the
// expected keys and ISO-formatted dates.
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-console
  console.table(
    experiences.map(({ company, startDate, endDate, currentlyWorking }) => ({
      company,
      startDate,
      endDate,
      currentlyWorking,
    })),
  );
}
