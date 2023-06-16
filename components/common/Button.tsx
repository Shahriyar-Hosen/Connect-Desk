"use client";

import { IButton } from "@Interface";

export const Button = ({
  children,
  variant,
  text = "14",
  width = "auto",
  size = "md",
  rounded,
}: IButton) => {
  const primary = "bg-primary text-white";
  const secondary = "bg-white text-primary";

  return (
    <button
      className={`${
        (variant === "secondary" && secondary) ||
        (variant === "primary" && primary)
      } 
        ${(text === "14" && "text-sm") || (text === "16" && "text-base")} 
        ${rounded ? "rounded-full" : "rounded-[4px]"} 
        ${
          (size === "sm" && "px-[15px] py-[6px]") ||
          (size === "md" && "px-[49px] py-[9px]")
        } 
        ${width === "full" && "w-full"} border font-medium border-primary`}
    >
      {children}
    </button>
  );
};