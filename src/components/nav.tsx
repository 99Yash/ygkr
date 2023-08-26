import React from "react";
import Logo from "./ui/logo";
import { ModeToggle } from "./theme-toggle";

const Nav = () => {
  return (
    <nav className="absolute left-0 top-0 flex w-full list-none justify-between gap-4 px-4 py-2 ">
      <li>
        <Logo />
      </li>
      <li>
        <ModeToggle />
      </li>
    </nav>
  );
};

export default Nav;
