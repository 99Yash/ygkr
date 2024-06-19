"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Experience } from "@/data/experience.data";
import { formatDate } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { BlurUnknownImage } from "./utils/blur-unkown-image";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  experiences: Experience[];
};

export default function Experiences({ experiences }: Props) {
  const contRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contRef, { once: false, margin: "-100px" });

  const bullets = (exp: Experience) => {
    const bulletPoints = exp.description
      .split(".")
      .filter((point) => point.trim() !== "");
    return bulletPoints;
  };

  const router = useRouter();

  // const [ogImageUrls, setOgImageUrls] = useState<Array<string | null>>([]);

  // useEffect(() => {
  //   experiences.forEach(async (exp) => {
  //     try {
  //       const fetchOgImages = async () => {
  //         const usedPlaceholders = new Set<string>();
  //         let placeholderUrl: string | null = null;
  //         do {
  //           placeholderUrl =
  //             placeholderImgs[
  //               Math.floor(Math.random() * placeholderImgs.length)
  //             ];
  //         } while (usedPlaceholders.has(placeholderUrl));
  //         let ogImageUrl = (await getOgImageUrl(exp.site)) || placeholderUrl;
  //         setOgImageUrls((prev) => [...prev, ogImageUrl]);
  //       };
  //       fetchOgImages();
  //     } catch (error) {
  //       console.error(`Error fetching og image for ${exp.site}:`, error);
  //       setOgImageUrls((prev) => [...prev, null]);
  //     }
  //   });
  // }, [experiences]);

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={contRef}
      transition={{
        duration: 0.5,
      }}
      id="experiences"
      className="my-24 will-change-[transform,opacity]"
    >
      <motion.h2
        className="my-12 bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-center font-title text-3xl font-bold text-transparent sm:text-4xl"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        Professional Work
      </motion.h2>
      <motion.div
        className="mt-12 flex flex-wrap items-center gap-4"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {experiences.map((work, i) => (
          <div
            key={i}
            className="group relative flex flex-col rounded-xl px-2 py-4 shadow-feature-card-dark"
          >
            <BlurUnknownImage
              src={`/assets/${work.company.toLowerCase()}.png`}
              lazy
              width={1280}
              height={832}
              alt={work.company}
              imageClassName="group-hover:scale-105 brightness-75 cursor-pointer"
              className="rounded-lg"
              onClick={() => {
                router.push(work.site);
              }}
            />
            <div className="flex flex-1 flex-col justify-between gap-3 px-2 py-4">
              <div className="flex flex-col justify-between space-y-2">
                {
                  <div className="flex items-end gap-3 text-xs text-gray-400">
                    {!work.endDate || work.currentlyWorking ? (
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <div className="absolute h-2 w-2 animate-pulse rounded-full bg-lime-900" />
                        <div className="absolute h-6 w-6 animate-pulse rounded-full bg-lime-600 opacity-10" />
                      </div>
                    ) : (
                      <Calendar className="h-4 w-4" />
                    )}
                    {work.currentlyWorking && "Since"}{" "}
                    {formatDate(work.startDate)}
                    {work.endDate && (
                      <>
                        {" - "}
                        {formatDate(work.endDate)}
                      </>
                    )}
                  </div>
                }
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <h2 className="items-center bg-gradient-to-br from-slate-300 to-slate-700 bg-clip-text text-2xl font-semibold text-transparent">
                      {work.position}, {work.company}
                    </h2>
                  </div>
                  <div className="ml-2 flex items-center gap-2">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            target="_blank"
                            className="p-2"
                            href={work.site}
                          >
                            <ExternalLink className="mr-2 h-4 w-4 text-slate-200" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-800 text-slate-300">
                          <p>Go to {work.company}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <ul className="whitespace-pre-line break-words text-sm font-medium text-muted-foreground">
                  {bullets(work).map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
