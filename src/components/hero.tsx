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
        className="text- flex animate-fade-down gap-4 text-xs dark:text-gray-400 md:text-sm"
        style={{
          animationDelay: "0.25s",
          animationFillMode: "forwards",
        }}
      >
        <Link
          className="z-10 duration-500 hover:font-semibold hover:dark:text-zinc-300"
          href={"/projects"}
        >
          Projects
        </Link>
        <Link
          className=" z-10 duration-500 hover:font-semibold hover:dark:text-zinc-300"
          href={"/certificates"}
        >
          Certificates
        </Link>
        <Link
          className=" z-10 duration-500 hover:font-semibold hover:dark:text-zinc-300"
          href={"/contact"}
        >
          Contact
        </Link>
      </ul>
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
        className="md:text-md animate-fade-down text-center text-sm text-black dark:text-gray-400/90 "
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
