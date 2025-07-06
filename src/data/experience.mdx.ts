import Dialy, { meta as dialyMeta } from "@/content/experiences/dialy.mdx";
import Labquote, {
  meta as labquoteMeta,
} from "@/content/experiences/labquote.mdx";
import Shapeshifter, {
  meta as shapeshifterMeta,
} from "@/content/experiences/shapeshifter.mdx";

export type ExperienceMDX = typeof shapeshifterMeta & {
  Component: (props: any) => JSX.Element;
};

export const experiences: ExperienceMDX[] = [
  { ...shapeshifterMeta, Component: Shapeshifter },
  { ...labquoteMeta, Component: Labquote },
  { ...dialyMeta, Component: Dialy },
];
