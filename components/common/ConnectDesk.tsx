"use client";

import { FC } from "react";

import { IClassName, ITextAndFont } from "@/Interface";

export const ConnectDesk: FC<ITextAndFont & IClassName> = ({
  className,
  font,
  text,
}) => (
  <span
    className={`${
      (text === "md" && "text-xl") ||
      (text === "lg" && `text-[24px] lg:text-[28px]`) ||
      (text === "xl" && "text-[26px] md:text-[28px] lg:text-[32px]")
    } 
      ${
        (font === "poppins" && "font-poppins") ||
        (font === "exo" && "font-exo") ||
        (font === "sans" && "font-sans")
      }
      
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
