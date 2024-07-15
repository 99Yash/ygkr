import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 pb-96">
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/assets/gradient-background-top.png"
        alt="Gradient background"
        role="presentation"
        priority
      />
      <h1 className="text-center font-title text-4xl font-bold text-gray-300">
        Sorry, this page isn&apos;t available
      </h1>
      <p className="text-center text-sm text-muted-foreground">
        The link you followed doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "font-title")}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
