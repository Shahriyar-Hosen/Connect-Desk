"use client";

import { IIntlTranslator, IPolicy } from "@/Interface";
import { FC } from "react";
import { CommonText } from "..";

export const PolicyContainer: FC<IPolicy & IIntlTranslator> = ({
  details,
  title,
  textPosition = "center",
  t,
}) => (
  <div className="mb-6">
    <h3
      className={`${
        (textPosition === "center" && "text-center") ||
        (textPosition === "left" && "text-left") ||
        (textPosition === "right" && "text-right")
      } text-lg md:text-[24px] font-bold mb-4`}
    >
      {t(title, { ns: "privacy-policy" })}
    </h3>
    {details.map((text) => (
      <div key={text} className="mb-3">
        <CommonText>{t(text, { ns: "privacy-policy" })}</CommonText>
      </div>
    ))}
  </div>
);
