"use client";

import { IChildrenWithClass, ITextAndFont } from "@Interface";

interface ICommonText extends IChildrenWithClass, ITextAndFont {}

export const CommonText = ({
  className,
  children,
  text = "md",
}: ICommonText) => (
  <p
    className={`${
      (text === "sm" && "text-xs lg:text-[13px]") ||
      (text === "md" && "text-sm") ||
      (text === "lg" && "text-base") ||
      (text === "xl" && "text-lg") ||
      (text === "2xl" && "text-xl") ||
      (text === "3xl" && "text-2xl")
    } ${className}`}
  >
    {children}
  </p>
);
