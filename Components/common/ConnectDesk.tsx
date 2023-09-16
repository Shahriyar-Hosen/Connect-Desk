"use client";

import { IConnectDesk } from "@/Interface";

export const ConnectDesk = ({
  text = "md",
  font = "Poppins",
  logo,
}: IConnectDesk) => (
  <span
    className={`${
      (text === "md" && "text-xl") ||
      (text === "lg" &&
        `text-[24px] lg:text-[28px] ${logo && "text-[25px]"}`) ||
      (text === "xl" && "text-[26px] md:text-[28px] lg:text-[32px]")
    } 
      ${
        (font === "Poppins" && "font-poppins") ||
        (font === "Exo" && "font-exo") ||
        (font === "sans" && "font-sans")
      }
      ${logo && "italic"}
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
