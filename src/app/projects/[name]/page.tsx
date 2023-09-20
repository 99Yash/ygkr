import { Metadata } from "next";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { projects } from "../../../data/projects.data";

export async function generateMetadata({
  params,
}: {
  params: {
    name: string;
  };
}): Promise<Metadata> {
  return {
    title: {
      absolute: `Projects - ${params.name[0].toUpperCase()}${params.name.slice(
        1,
      )}`,
    },
    openGraph: {
      title: `Projects - ${params.name[0].toUpperCase()}${params.name.slice(
        1,
      )}`,
      url: `https://ygkr.vercel.app/projects/${params.name}`,
      locale: "en-US",
      type: "website",
    },
  };
}

const page = ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  return (
    <section className="mt-2 flex h-full w-full flex-col gap-4 md:mt-4">
      <header className="flex flex-col items-center justify-around gap-8">
        <h1 className="self-center bg-gradient-to-r from-zinc-400 via-zinc-50 to-zinc-400 bg-clip-text text-4xl font-bold text-transparent">
          {params.name[0].toUpperCase() + params.name.slice(1)}
        </h1>
        <p className="w-3/5 text-center text-zinc-300">
          <Balancer>
            {
              projects.filter((project) => project.name === params.name)[0]
                .summary
            }
          </Balancer>
        </p>
        <div className="flex gap-8 font-semibold">
          <Link
            target="_blank"
            href={
              projects.filter((project) => project.name === params.name)[0]
                .github
            }
          >
            GitHub -&gt;
          </Link>
          <Link
            target="_blank"
            href={
              projects.filter((project) => project.name === params.name)[0].site
            }
          >
            Website -&gt;
          </Link>
        </div>
      </header>
    </section>
  );
};

export default page;
