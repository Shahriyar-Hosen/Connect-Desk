"use client";

import { IListItem } from "@/Interface";
import { FC } from "react";
import { CommonText } from ".";

export const ListItem: FC<IListItem> = ({ dot = "md", label, active }) => (
  <div className="flex justify-start items-start gap-2">
    {/* Dot */}
    <div
      className={`${
        (dot === "sm" && "min-w-[4px] min-h-[4px]") ||
        (dot === "md" && "w-1.5 h-1.5")
      } bg-black rounded-full mt-2`}
    />

    <CommonText
      text={dot === "sm" ? "sm" : "md"}
      className={`${active && "text-primary font-medium"}`}
    >
      {label}
    </CommonText>
  </div>
);
