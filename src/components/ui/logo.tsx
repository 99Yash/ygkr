import logoWhite from "../../../public/yash-white.png";
import Image from "next/image";

const Logo = () => {
  return <Image src={logoWhite} width={50} height={16} alt="Yash" />;
};

export default Logo;
