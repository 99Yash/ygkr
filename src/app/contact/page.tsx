"use client";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/ui/card";
import { self } from "@/data/self.data";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/YashGouravKar1",
    label: "Twitter",
    handle: "YashGouravKar1",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:yashgouravkar@gmail.com",
    label: "Email",
    handle: self.email,
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
      {/* <nav className="flex justify-between gap-4 pl-4 pt-4">
        <Link
          href={"/"}
          className=" tracking-tight text-gray-400 duration-300 hover:text-gray-300"
        >
          <ArrowLeft className="h-4 w-4 " />
        </Link>
        <div className="flex h-fit justify-end gap-4">
          <Link
            href={"/certificates"}
            className="font-bold text-gray-500 duration-500 hover:font-bold hover:text-zinc-300"
          >
            Certificates
          </Link>
          <Link
            href={"/contact"}
            className="font-bold text-gray-500 duration-500 hover:font-bold hover:text-zinc-300"
          >
            Contact
          </Link>
        </div>
      </nav> */}
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
