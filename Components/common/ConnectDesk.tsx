"use client";

import { ITextAndFont } from "@/Interface";
import { FC } from "react";

export const ConnectDesk: FC<ITextAndFont> = ({
  size = "md",
  font = "poppins",
}) => (
  <span
    className={`${
      (size === "md" && "text-[20px]") ||
      (size === "lg" && `text-[24px] lg:text-[28px]`) ||
      (size === "xl" && "text-[26px] md:text-[28px] lg:text-[32px]")
    } 
      ${
        (font === "poppins" && "font-poppins") ||
        (font === "exo" && "font-exo") ||
        (font === "sans" && "font-sans")
      }
      
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary">Desk</span>
  </span>
);
