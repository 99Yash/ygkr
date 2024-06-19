import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projects";
import { projects } from "@/data/projects.data";

export default function Home() {
  return (
    <>
      <Header />
      <section className="mx-auto mb-16 max-w-5xl space-y-36 px-5 py-24 sm:px-8">
        <Hero />
        <FeaturedProjects projects={projects} />
      </section>
    </>
  );
}
