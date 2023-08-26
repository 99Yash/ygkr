"use client";

import { useTheme } from "next-themes";
import logoWhite from "../../../public/yash-white.png";
import logoBlack from "../../../public/yash2.png";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  return theme === "light" ? (
    <Image src={logoBlack} width={50} height={16} alt="Yash" />
  ) : (
    <Image src={logoWhite} width={50} height={16} alt="Yash" />
  );
};

export default Logo;
