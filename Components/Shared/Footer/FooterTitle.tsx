"use client";

import { IChildrenWithClass } from "@Interface";

export interface IFooterTitle extends IChildrenWithClass {
  text?: "sm" | "xl";
}

export const FooterTitle = ({
  text = "xl",
  children,
  className,
}: IFooterTitle) => (
  <h5
    className={`font-semibold ${
      text === "xl" ? "text-xl" : "text-sm"
    } ${className}`}
  >
    {children}
  </h5>
);
