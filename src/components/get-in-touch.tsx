"use client";
import Link from "next/link";
import ButtonBackgroundShine from "./ui/button-bg-shine";

const GetInTouch = () => {
  return (
    <Link
      href={`mailto:yashgouravkar@gmail.com`}
      target="_blank"
      rel="noreferrer"
    >
      <ButtonBackgroundShine text="Get in touch!" />
    </Link>
  );
};

export default GetInTouch;
