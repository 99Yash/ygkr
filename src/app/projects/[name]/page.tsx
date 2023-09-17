import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Unkey",
};

const page = ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  return <div>{params.name}</div>;
};

export default page;
