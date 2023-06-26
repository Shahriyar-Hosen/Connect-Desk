"use client";

import { IComponentHeader } from "@Interface";

export const ComponentHeader = ({
  title,
  position = "center",
  subTitle,
  text = "md",
  subText,
}: IComponentHeader) => (
  <div>
    <div
      className={`${
        (text === "sm" && "lg:text-[24px] text-[20px] ") ||
        (text === "md" &&
          position === "start" &&
          "xl:text-[28px] lg:text-[24px] text-[20px]") ||
        (text === "md" && `lg:text-[28px] text-[24px]`) ||
        (text === "lg" && "text-[28px] lg:text-[32px]")
      } font-semibold ${
        (position === "center" && "text-center") ||
        (position === "start" && "text-start") ||
        (position === "end" && "text-end")
      }`}
    >
      <h3 className="mb-1">{title}</h3>
      <h3>{subTitle}</h3>
    </div>

    <p className="text-center text-lg opacity-80 max-w-[589px] mx-auto">
      {subText}
    </p>

    <div
      className={`w-full flex pt-2.5 ${
        (position === "center" && "justify-center") ||
        (position === "start" && "justify-start") ||
        (position === "end" && "justify-end")
      }`}
    >
      <div className="w-[159px] h-[5px] opacity-60 bg-primary rounded-full" />
    </div>
  </div>
);
