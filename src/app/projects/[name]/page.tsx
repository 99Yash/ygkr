import { Metadata } from "next";
import Image from "next/image";
import { projects } from "../../../data/projects.data";
import { Header } from "./header";

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
      <Header
        project={
          projects.filter(
            (project) => params.name === project.name.toLowerCase(),
          )[0]
        }
      />
      <Image
        className="self-center"
        width={600}
        height={280}
        src={`/assets/${
          projects.filter(
            (project) => params.name === project.name.toLowerCase(),
          )[0].name
        }.png`}
        alt={
          projects.filter(
            (project) => params.name === project.name.toLowerCase(),
          )[0].name
        }
      />
    </section>
  );
};

export default page;
