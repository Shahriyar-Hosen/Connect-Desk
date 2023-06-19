"use client";

import { IButton } from "@Interface";

export const Button = ({
  children,
  variant,
  text = "14",
  width = "auto",
  size = "md",
  rounded,
  className,
}: IButton) => {
  const primary = "bg-primary text-white";
  const secondary = "bg-white text-primary";

  return (
    <button
      className={`${
        (variant === "secondary" && secondary) ||
        (variant === "primary" && primary)
      } 
        ${
          (text === "14" && "text-sm") ||
          (text === "16" && "text-base") ||
          (text === "18" && "text-[18px]")
        } 
        ${rounded ? "rounded-full" : "rounded-[4px]"} 
        ${
          (size === "sm" && "px-[7px] md:px-[15px] py-[6px]") ||
          (size === "md" && "px-[20px] md:px-[49px] py-[9px]") ||
          (size === "lg" && "px-8 sm:px-9 md:px-11 py-0.5 sm:py-1.5 md:py-2.5")
        } 
        ${width === "full" && "w-full"} border font-medium border-primary
        
        ${className}`}
    >
      {children}
    </button>
  );
};
