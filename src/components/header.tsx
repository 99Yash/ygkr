"use client";

import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Building, Folders, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const hashname = pathname.split("#")[1] ?? "";

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl bg-transparent/30 px-8 shadow-2xl saturate-100 backdrop-blur-[30px] transition-all duration-300",
        isScrolled &&
          "top-px h-[68px] bg-slate-950/80 px-4 shadow-xl backdrop-blur-[7px] transition-all duration-300",
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Link href={"#"} className="flex items-center justify-center gap-1">
        <span className="sr-only">Homepage</span>
        <h1 className="bg-gradient-to-b from-zinc-200 to-zinc-950 bg-clip-text font-serif text-2xl font-semibold text-transparent">
          YK
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <nav>
          <ul className="hidden space-x-2 md:flex">
            {HEADER_LINKS.map((link) => {
              const isActive = link.hash.substring(1) === hashname;

              return (
                <li
                  key={link.text}
                  className="relative flex h-[60px] items-center justify-center"
                >
                  <Link
                    className={cn(
                      "rounded px-3 py-2 text-sm font-medium transition-colors duration-100",
                      {
                        ["text-muted-foreground hover:text-foreground"]:
                          !isActive,
                      },
                      {
                        ["text-foreground"]: isActive,
                      },
                    )}
                    href={link.hash}
                  >
                    {link.text}
                  </Link>
                  {isActive && (
                    <>
                      <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-nav-link-indicator dark:bg-nav-link-indicator-dark" />
                      <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur-[8px] dark:bg-[rgb(223_29_72)]" />
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

const HEADER_LINKS = [
  {
    icon: <Building className="h-4 w-4" />,
    hash: "#experiences",
    text: "Experience",
  },
  {
    icon: <Folders className="h-4 w-4" />,
    hash: "#projects",
    text: "Projects",
  },
  // {
  //   icon: <GitMerge className="h-4 w-4" />,
  //   hash: "#contributions",
  //   text: "Open Source",
  // },
  // {
  //   icon: <Quote className="h-4 w-4" />,
  //   hash: "#testimonials",
  //   text: "Testimonials",
  // },
  {
    icon: <Info className="h-4 w-4" />,
    hash: "#contact",
    text: "Contact",
  },
];
