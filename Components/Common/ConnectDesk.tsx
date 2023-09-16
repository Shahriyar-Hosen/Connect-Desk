"use client";

import { ITextAndFont } from "@/Interface";
import { FC } from "react";

export interface IConnectDesk extends ITextAndFont {
  logo?: boolean;
}

export const ConnectDesk: FC<IConnectDesk> = ({
  text = "md",
  font = "Poppins",
  logo,
}) => (
  <span
    className={`${
      (text === "md" && "text-xl") ||
      (text === "lg" &&
        `text-[24px] lg:text-[28px] ${logo && "text-[25px]"}`) ||
      (text === "xl" && "text-[26px] md:text-[28px] lg:text-[32px]")
    } 
      ${
        (font === "Poppins" && "font-Poppins") ||
        (font === "Exo" && "font-Exo") ||
        (font === "sans" && "font-sans")
      }
      ${logo && "italic"}
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
