"use client";

import { IComponentHeader } from "@Interface";

export const ComponentHeader = ({
  title,
  position = "center",
  subTitle,
  text = "md",
}: IComponentHeader) => (
  <div
    className={`${
      (text === "sm" && "lg:text-[24px] md:text-[20px] ") ||
      (text === "md" && "lg:text-[28px] md:text-[24px]") ||
      (text === "lg" && "text-[28px] lg:text-[32px]")
    } font-semibold ${
      (position === "center" && "text-center") ||
      (position === "start" && "text-start") ||
      (position === "end" && "text-end")
    }`}
  >
    <h3 className="mb-1">{title}</h3>
    <h3>{subTitle}</h3>

    <div
      className={`w-full flex pt-2.5 ${
        (position === "center" && "justify-center") ||
        (position === "start" && "justify-start") ||
        (position === "end" && "justify-end")
      }`}
    >
      <div className="w-[159px] h-[4px] opacity-60 bg-primary " />
    </div>
  </div>
);
