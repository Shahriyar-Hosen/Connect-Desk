"use client";

import { IPageHeader } from "@/Interface";
import { FC } from "react";

export const PageHeader: FC<IPageHeader> = ({
  mainTitle,
  pageName,
  subTitle,
}) => (
  <div className="bg-base-100 py-10 rounded-b-[25px] lg:rounded-b-[45px]">
    <div className="flex flex-col items-center ">
      <h1 className="text-base font-medium">{pageName}</h1>
      <div className="w-[94px] h-[2px] bg-primary mb-2"></div>
      <h1 className="text-[22px] md:text-[32px] font-semibold">{mainTitle}</h1>
      <h1 className="text-[22px] md:text-[32px] font-semibold">{subTitle}</h1>
    </div>
  </div>
);
