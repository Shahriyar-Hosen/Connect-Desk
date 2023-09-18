"use client";

import { IComponentHeader } from "@/Interface";
import { FC } from "react";

export const ComponentHeader: FC<IComponentHeader> = ({
  title,
  position = "center",
  subTitle,
  text = "md",
  subText,
  about,
}) => (
  <div>
    <div
      className={`${
        (text === "sm" && "lg:text-[24px] text-[20px] ") ||
        (text === "md" &&
          position === "start" &&
          "xl:text-[28px] lg:text-[24px] text-[20px]") ||
        (text === "md" && `lg:text-[28px] text-[24px]`) ||
        (text === "lg" &&
          `${
            about ? "text-[24px] lg:text-[30px]" : "text-[28px] lg:text-[32px]"
          }`)
      } font-semibold ${
        (position === "center" && "text-center") ||
        (position === "start" && "text-start") ||
        (position === "end" && "text-end")
      }`}
    >
      <h3>{title}</h3>
      {subTitle ? <h3 className="mt-1">{subTitle}</h3> : null}
    </div>

    {subText ? (
      <p className="text-center text-lg opacity-80 max-w-[589px] mx-auto">
        {subText}
      </p>
    ) : null}

    <div
      className={`w-full flex pt-1 ${
        (position === "center" && "justify-center") ||
        (position === "start" && "justify-start") ||
        (position === "end" && "justify-end")
      }`}
    >
      <div className="w-[159px] h-[5px] opacity-60 bg-primary rounded-full" />
    </div>
  </div>
);
