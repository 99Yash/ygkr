import AboutMe from "@/components/about";
import Connect from "@/components/connect";
import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projects";
import { projects } from "@/data/projects.data";
import { self } from "@/data/self.data";
import { stacks } from "@/data/stack.data";

export default function Home() {
  return (
    <>
      <Header />
      <section className="mx-auto mb-16 max-w-5xl space-y-36 px-5 py-24 scrollbar-hide sm:px-8">
        <Hero />
        <AboutMe techStack={stacks.map((stack) => stack.label)} />
        <Experiences />
        <FeaturedProjects projects={projects} />
        <Connect
          github={self.github}
          twitter={self.twitter}
          linkedin={self.linkedin}
        />
      </section>
      <footer>
        <p className="text-center text-xs font-medium text-emerald-500 text-muted-foreground">
          Designed and built by Yash
        </p>
      </footer>
    </>
  );
}
