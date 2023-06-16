"use client";

import { IComponentHeader } from "@Interface";

export const ComponentHeader = ({
  title,
  position = "center",
  subTitle,
}: IComponentHeader) => (
  <div
    className={`text-xl font-semibold ${
      (position === "center" && "text-center") ||
      (position === "start" && "text-start") ||
      (position === "end" && "text-end")
    }`}
  >
    <h3>{title}</h3>
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
