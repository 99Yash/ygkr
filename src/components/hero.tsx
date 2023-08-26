import React from "react";
import GetInTouch from "./get-in-touch";
import { self } from "@/data/self.data";

const Hero = () => {
  return (
    <div className=" flex w-4/5 flex-col items-center justify-center gap-6 ">
      <h1 className=" cursor-default bg-gradient-to-r from-blue-700 via-orange-800 to-pink-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-blue-500/80 dark:via-orange-500/80 dark:to-pink-400/80 md:text-5xl lg:text-6xl lg:tracking-[-0.24rem] ">
        {self.name}
      </h1>
      <h5 className="md:text-md text-center text-sm text-black dark:text-gray-400/80 ">
        Hi, I&apos;m a software developer specializing in building full-stack
        web applications that deliver beautiful user experiences.
      </h5>
      <GetInTouch />
    </div>
  );
};

export default Hero;
