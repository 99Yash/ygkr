import { Github, Link2Icon, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

type Props = {
  twitter: string;
  linkedin: string;
  github: string;
};

const Connect = ({ twitter, linkedin, github }: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl p-4 shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Link2Icon className="h-[18px] w-[18px]" />
        <h2 className="font-title text-sm">I{`'`}ll be in touch...</h2>
      </div>
      <div className="grid h-full grid-cols-1 gap-4 px-2 md:grid-cols-3">
        {[twitter, linkedin, github].map((link, i) => {
          return (
            <Link
              key={i}
              href={link}
              className="inline-flex min-h-[160px] w-full animate-background-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 text-sm transition-colors"
            >
              <div className="flex flex-col gap-2 opacity-90">
                {i === 0 && (
                  <Twitter className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                )}
                {i === 1 && (
                  <Linkedin className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                )}
                {i === 2 && (
                  <Github className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
