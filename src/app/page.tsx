import AboutMe from "@/components/about";
import Connect from "@/components/connect";
import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projects";
import { experiences } from "@/data/experience.data";
import { projects } from "@/data/projects.data";
import { self } from "@/data/self.data";
import { stacks } from "@/data/stack.data";

export default function Home() {
  return (
    <>
      <Header />
      <section className="mx-auto mb-16 max-w-5xl space-y-36 px-5 py-24 scrollbar-hide sm:px-8">
        <Hero />
        <AboutMe
          bio={
            "I'm a 2024 grad from India; having already 1 year of working experience in a number of very small US startups in their 0-1 phase that evidently made me a Founding Engineer in this short span of time. TL;DR: Experienced in everything React - Typescript and experienced in building apps from scratch (no designs) and implementing all aspects of a software: from an internal UI library to a secure API & unconventional db design."
          }
          github={self.github}
          twitter={self.twitter}
          linkedin={self.linkedin}
          techStack={stacks.map((stack) => stack.label)}
        />
        <FeaturedProjects projects={projects} />
        <Experiences experiences={experiences} />
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
