"use client";

import { ITextAndFont } from "@Interface";

export interface IConnectDesk extends ITextAndFont {
  logo?: boolean;
}

export const ConnectDesk = ({
  text = "md",
  font = "Poppins",
  logo,
}: IConnectDesk) => (
  <span
    className={`${
      (text === "md" && "text-xl") ||
      (text === "lg" && `text-[28px] ${logo && "text-[25px]"}`) ||
      (text === "xl" && "text-[28px] lg:text-[32px]")
    } 
      ${
        (font === "Poppins" && "font-[Poppins]") ||
        (font === "Exo" && "font-[Exo]") ||
        (font === "sans" && "font-sans")
      }
      ${logo && "italic"}
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
