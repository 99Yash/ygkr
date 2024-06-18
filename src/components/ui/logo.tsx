import Image from "next/image";
import logoWhite from "../../../public/assets/yash-white.png";

const Logo = () => {
  return <Image src={logoWhite} width={50} height={16} alt="Yash" />;
};

export default Logo;
