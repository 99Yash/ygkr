import { Navigation } from "@/components/nav";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Relevant links to get in touch.",
  openGraph: {
    url: "https://ygkr.vercel.app/contact",
    title: "Contact - ygkr",
    description: "Relevant links to get in touch.",
    locale: "en-US",
    type: "website",
  },
};

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/YashGouravKar1",
    label: "Twitter",
    handle: "YashGouravKar1",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/ygkr/",
    label: "LinkedIn",
    handle: "Yash",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/99Yash",
    label: "Github",
    handle: "99yash",
  },
];

export default function Example() {
  return (
    <div className=" to-gray-960 bg-gradient-to-tl from-gray-950 via-gray-900">
      <Navigation />
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48"
              >
                <span
                  className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="font-display font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-xl xl:text-3xl">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
