"use client";

import { IFeatures } from "@/Interface";
import { CommonText } from "@/components";
import Image from "next/image";
import { FC } from "react";

export const FeatureCard: FC<IFeatures> = ({ des, icon, title }) => (
  <div className="w-full max-w-[324px]  h-auto rounded-[5px] shadow-md p-[30px] pt-[10px] flex flex-col justify-start items-center">
    <Image src={icon} alt={title} />

    <CommonText text="lg" className="font-semibold mt-1">
      {title}
    </CommonText>
    <CommonText className="mt-[15px]">{des}</CommonText>
  </div>
);
