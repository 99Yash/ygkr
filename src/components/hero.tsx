import { self } from "@/data/self.data";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import ButtonBackgroundShine from "./ui/button-bg-shine";
import { Particles } from "./ui/particles";

const Hero = () => {
  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-6 ">
      <Particles
        className="animate-fade-in absolute inset-0 "
        color="#8daab5"
        quantity={60}
        ease={30}
      />
      <ul
        className="text- flex animate-fade-down gap-4 text-xs text-gray-400 md:text-sm"
        style={{
          animationDelay: "0.25s",
          animationFillMode: "forwards",
        }}
      >
        <Link
          className="z-10 duration-500 hover:font-semibold"
          href={"/projects"}
        >
          Projects
        </Link>
        <Link
          className=" z-10 duration-500 hover:font-semibold"
          href={"/contact"}
        >
          Links
        </Link>
      </ul>
      <h1
        className="animate-fade-down cursor-default bg-gradient-to-r from-slate-600 via-slate-200 to-slate-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl lg:text-6xl lg:tracking-[-0.24rem] "
        style={{
          animationDelay: "0.20s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>{self.name}</Balancer>
      </h1>
      <h5
        className="md:text-md animate-fade-down text-center text-sm text-gray-400 "
        style={{
          animationDelay: "0.3s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>
          Hi, I&apos;m a software developer building full-stack applications
          during the day and looking at open-source projects at night.
        </Balancer>
      </h5>
      <Link
        href={`mailto:yashgouravkar@gmail.com`}
        target="_blank"
        rel="noreferrer"
        className="z-10"
      >
        <ButtonBackgroundShine text="Get in touch!" />
      </Link>
    </div>
  );
};

export default Hero;
