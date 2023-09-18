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
    {details.map((p) => (
      <div key={p} className="mb-3">
        <CommonText>{p}</CommonText>
      </div>
    ))}
  </div>
);
