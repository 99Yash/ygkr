import AboutMe from "@/components/about";
import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projects";
import Connect from "@/components/utils/connect";
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
            "I have been really lucky in my life as I have had the pleasure to work with really small teams, where I work directly with the founder. I'm self-taught and looking for a new challenge. Hit me up if this is something you are interested in."
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
