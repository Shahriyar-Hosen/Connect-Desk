"use client";

import { IPolicy } from "@/Interface";
import { FC } from "react";
import { CommonText } from "..";

export const PolicyContainer: FC<IPolicy> = ({
  details,
  title,
  textPosition = "center",
}) => (
  <div className="mb-6">
    <h3
      className={`${
        (textPosition === "center" && "text-center") ||
        (textPosition === "left" && "text-left") ||
        (textPosition === "right" && "text-right")
      } text-lg md:text-[24px] font-bold mb-4`}
    >
      {title}
    </h3>
    {details.map((text) => (
      <div key={text} className="mb-3">
        <CommonText>{text}</CommonText>
      </div>
    ))}
  </div>
);
