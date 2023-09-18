"use client";

import { tick } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";
import { CommonText } from "..";

export const FeaturesItem: FC<{ feature: string }> = ({ feature }) => (
  <div className="flex justify-start items-start gap-2">
    <Image src={tick} className="mt-1" alt="package" />
    <CommonText text="sm">{feature}</CommonText>
  </div>
);
