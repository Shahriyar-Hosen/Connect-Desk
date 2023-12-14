"use client";

import { IButton } from "@/Interface";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Button: FC<IButton> = ({
  text = "14",
  size = "md",
  type,
  width = "auto",
  variant,
  rounded,
  onClick,
  children,
  disabled,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={twMerge(
      `${
        (variant === "secondary" &&
          "bg-white text-primary hover:bg-secondary hover:text-white hover:border-secondary") ||
        (variant === "primary" &&
          "bg-primary text-white hover:bg-secondary hover:border-secondary")
      } 
  ${
    (text === "14" && "text-xs sm:text-sm") ||
    (text === "16" && "text-sm md:text-base") ||
    (text === "18" &&
      "text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px]")
  } 
  ${rounded ? "rounded-full" : "rounded-[4px]"} 
  ${
    (size === "sm" && "px-[7px] md:px-[15px] py-[6px]") ||
    (size === "md" && "px-[16px] md:px-[20px] lg:px-[49px] py-[9px]") ||
    (size === "lg" &&
      `${
        width === "full" ? "w-full px-2" : "px-9 md:px-10"
      } py-1.5 sm:py-2 md:py-2.5`)
  } 
  ${
    width === "full" && "w-full"
  } border font-medium border-primary transition-all delay-150`,
      className
    )}
  >
    {children}
  </button>
);
