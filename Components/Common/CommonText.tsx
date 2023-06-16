"use client";

import { IChildrenWithClass } from "@Interface";

interface ICommonText extends IChildrenWithClass {
  size?: "sm" | "md" | "lg";
}

export const CommonText = ({
  className,
  children,
  size = "md",
}: ICommonText) => (
  <p
    className={`font-normal ${
      (size === "sm" && "text-xs") ||
      (size === "md" && "text-sm") ||
      (size === "lg" && "text-base")
    } ${className}`}
  >
    {children}
  </p>
);
