"use client";

import { IFooterTitle } from "@/Interface";
import { FC } from "react";

export const FooterTitle: FC<IFooterTitle> = ({
  text = "xl",
  children,
  className,
}) => (
  <h5
    className={`font-semibold ${
      text === "xl" ? "text-xl" : "text-sm"
    } ${className}`}
  >
    {children}
  </h5>
);
