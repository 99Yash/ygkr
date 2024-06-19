"use client";

import { stackl, stacks as stacksArr } from "@/data/stack.data";
import { Layers } from "lucide-react";
import { Marquee } from "../ui/marquee";

type Props = {
  stacks: Array<(typeof stackl)[number]>;
};

const StacksCard = ({ stacks }: Props) => {
  const firstHalf = stacksArr
    .filter((stack, i) => stacks.includes(stack.label))
    .slice(0, Math.ceil(stacks.length / 2));
  const secondHalf = stacksArr
    .filter((stack, i) => stacks.includes(stack.label))
    .slice(Math.ceil(stacks.length / 2), stacks.length);

  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card-dark lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-[18px] w-[18px]" />
          <h2 className="font-title text-sm">Stacks</h2>
        </div>
        <p className="text-xs text-slate-400">Hover for tooltip</p>
      </div>
      <Marquee
        fade
        gap="20px"
        pauseOnHover
        className="mt-4 cursor-pointer py-4"
      >
        {[...firstHalf, ...secondHalf].map((stack, i) => {
          const Icon = stack.icon;
          return <Icon key={stack.label} className="h-10 w-10 opacity-70" />;
        })}
      </Marquee>
      <Marquee
        gap="20px"
        className="cursor-pointer py-4"
        reverse
        fade
        pauseOnHover
      >
        {[...secondHalf, ...firstHalf].map((stack, i) => {
          const Icon = stack.icon;
          return <Icon key={stack.label} className="h-10 w-10 opacity-70" />;
        })}
      </Marquee>
    </div>
  );
};

export default StacksCard;
