"use client";

import { CommonText } from "@/components";
import { checkPrimary } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";

export const Solution: FC<{ title: string }> = ({ title }) => (
  <div className="w-[136px] flex flex-col justify-center items-center text-center">
    <Image src={checkPrimary} alt="" />
    <CommonText>{title}</CommonText>
  </div>
);
