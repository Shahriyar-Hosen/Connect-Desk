"use client";

import { ITextAndFont } from "@Interface";

export const ConnectDesk = ({
  text = "md",
  font = "Poppins",
}: ITextAndFont) => (
  <span
    className={`${
      (text === "md" && "text-xl") ||
      (text === "lg" && "text-[28px]") ||
      (text === "xl" && "text-[28px] lg:text-[32px]")
    } 
      ${
        (font === "Poppins" && "font-[Poppins]") ||
        (font === "Exo" && "font-[Exo]") ||
        (font === "sans" && "font-sans")
      }
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
