import { self } from "@/data/self.data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 mx-auto flex max-w-7xl flex-col gap-1 px-6 py-8 text-center text-xs text-gray-800 dark:text-zinc-500 lg:px-8">
      <p>
        Designed and built by{" "}
        <Link
          href={self.twitter}
          className="font-semibold duration-300 hover:text-zinc-300"
        >
          Yash
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
