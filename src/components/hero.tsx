import GetInTouch from "./get-in-touch";
import { self } from "@/data/self.data";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <div className=" flex w-4/5 flex-col items-center justify-center gap-6 ">
      <h1
        className="animate-fade-down cursor-default bg-gradient-to-r from-blue-700 via-orange-800 to-pink-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-gray-500/80 dark:via-gray-200/80 dark:to-gray-400/80 md:text-5xl lg:text-6xl lg:tracking-[-0.24rem] "
        style={{
          animationDelay: "0.20s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>{self.name}</Balancer>
      </h1>
      <h5
        className="md:text-md animate-fade-down text-center text-sm text-black dark:text-gray-400/80 "
        style={{
          animationDelay: "0.3s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>
          Hi, I&apos;m a software developer building full-stack web applications
          delivering beautiful experiences.
        </Balancer>
      </h5>
      <GetInTouch />
    </div>
  );
};

export default Hero;
