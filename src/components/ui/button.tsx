import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon, SparkleIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        destructive:
          "bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline:
          "border border-gray-200 bg-transparent shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export const PrimaryButton: React.FC<Props> = ({
  className,
  IconLeft,
  label,
  IconRight,
  shiny = false,
}) => {
  return (
    <div className="group/button relative">
      <div
        aria-hidden
        className="absolute -inset-0.5 rounded-lg bg-white opacity-0 blur-2xl transition duration-300 group-hover/button:opacity-30"
      />
      <div
        className={cn(
          "relative flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-black duration-1000 group-hover:bg-white/90",
          {
            "bg-white": !shiny,
            "bg-gradient-to-r from-white/80 to-white": shiny,
          },
          className,
        )}
      >
        {IconLeft ? <IconLeft className="h-4 w-4" /> : null}
        {label}
        {IconRight ? <IconRight className="h-4 w-4" /> : null}

        {shiny && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)] bg-[length:200%_100%] opacity-0 group-hover/button:animate-button-shine group-hover/button:[animation-delay:.2s]"
          />
        )}
      </div>
    </div>
  );
};

type Props = {
  className?: string;
  IconLeft?: LucideIcon;
  label: string;
  IconRight?: LucideIcon;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  shiny?: boolean;
};

export const SecondaryButton: React.FC<Props> = ({
  className,
  IconLeft,
  label,
  IconRight,
}) => {
  return (
    <div
      className={cn(
        "flex h-10 items-center gap-2 px-4 text-white/70 duration-500 hover:text-white",
        className,
      )}
    >
      {IconLeft ? <IconLeft className="h-4 w-4" /> : null}
      {label}
      {IconRight ? <IconRight className="h-4 w-4" /> : null}
    </div>
  );
};

export const RainbowDarkButton: React.FC<Props> = ({
  className,
  label,
  IconRight,
}) => {
  return (
    <div
      className={cn(
        "hero-hiring-gradient relative z-50 mx-auto w-fit rounded-full p-[.75px]",
        className,
      )}
    >
      <div className="flex-block flex items-center gap-4 rounded-full px-3 py-1.5 text-sm text-white [background-image:radial-gradient(141.42%_141.42%_at_100%_0%,_rgba(255,255,255,0.00)_0%,rgba(255,255,255,.05)_100%),linear-gradient(black,black)]">
        <SparkleIcon className="text-white" />
        {label}
        {IconRight ? <IconRight className="h-4 w-4" /> : null}
      </div>
    </div>
  );
};

export { Button, buttonVariants };
